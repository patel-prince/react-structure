import { FormInstance, message } from "antd";
import axios from "axios";
import { makeAutoObservable } from "mobx";
import Message from "../../config/Message";
import { ErrorProps, FormatedErrorProps } from "./RootInterface";

export default class RootStore {
	constructor() {
		makeAutoObservable(this);
	}

	public SetAxiosBaseUrl = (): void => {
		axios.defaults.baseURL = process.env.React_APP_API_URL || "";
	};

	public SetAxiosInterceptor = (): void => {
		axios.interceptors.response.use(
			(response) => {
				if (response?.data?.notify) {
					message.success(response.data.notify);
				}
				return response;
			},
			(e) => {
				if (e.response) {
					if (e.response.data?.notify) {
						message.error(e.response.data.notify);
					}
					if (e.response.status === 401) {
						if (e.response.data?.logout === true) {
							this.ResetStore();
						}
					}

					return Promise.reject(e.response);
				} else {
					message.error(Message.global.networkIssue);
					return Promise.reject({
						data: [],
						message: Message.global.networkIssue,
					});
				}
			}
		);
	};

	public ResetStore = (): void => {
		localStorage.removeItem("token");
		this.SetAxiosHeaders();
	};

	public SetAxiosHeaders = (access_token?: string): Promise<any> => {
		if (access_token) localStorage.setItem("token", access_token);
		const auth_token = localStorage.getItem("token");
		if (auth_token && auth_token !== "undefined") {
			axios.defaults.headers = {
				Accept: "application/json",
				Authorization: "Bearer " + auth_token,
			};
			return Promise.resolve(auth_token);
		} else {
			axios.defaults.headers = {
				Accept: "application/json",
			};
			return Promise.reject();
		}
	};

	public SetNotificationConfig = (): void => {
		message.config({
			maxCount: 1,
			duration: 5,
		});
	};

	public AssignErrorToInput = (
		form: FormInstance,
		errors?: ErrorProps
	): void => {
		const formatedErrors: FormatedErrorProps[] = [];
		if (errors) {
			Object.keys(errors).forEach((key) => {
				formatedErrors.push({
					name: key,
					errors: errors[key],
				});
			});
		}
		form.setFields(formatedErrors);
	};
}
