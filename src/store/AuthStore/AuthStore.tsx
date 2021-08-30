import { makeAutoObservable } from "mobx";
import axios from "axios";
import { doLoginType, doRegisterType, userType } from "./AuthInterface";
import RootStore from "../RootStore/RootStore";
import API_URL from "../../config/ApiUrl";

export default class AuthStore {
	// Variables
	public user?: userType;
	public token?: string;
	public app_loading: boolean;
	private rootStore: RootStore;

	constructor() {
		this.app_loading = true;
		this.rootStore = new RootStore();
		makeAutoObservable(this);
	}

	// Initiate Application Functions
	public InitializeApp = (): void => {
		this.rootStore.SetAxiosBaseUrl();
		this.rootStore.SetAxiosInterceptor();
		this.rootStore.SetNotificationConfig();
		this.SetupHeaders();
	};

	public SetupHeaders = (access_token?: string): void => {
		this.setAppLoading(true);
		this.rootStore
			.SetAxiosHeaders(access_token)
			.then((token) => {
				this.setToken(token);
				this.fetchAuthUser();
			})
			.catch(() => {
				this.setToken();
				this.setUser();
				this.setAppLoading(false);
			});
	};

	// Setter Functions
	public setUser = (value?: userType): void => {
		this.user = value;
	};
	public setToken = (value?: string): void => {
		this.token = value;
	};
	public setAppLoading = (value: boolean): void => {
		this.app_loading = value;
	};

	// API Functions
	public doLogin = (payload: doLoginType): Promise<any> => {
		return axios
			.post(API_URL.LOGIN_WITH_EMAIL(), payload)
			.then(({ data }) => {
				this.SetupHeaders(data.access_token);
			})
			.catch(({ data }) => {
				this.setToken();
				this.setUser();
				return Promise.reject(data);
			});
	};

	public doRegister = (data: doRegisterType): void => {
		axios.post(API_URL.REGISTER_WITH_EMAIL(), data).then();
	};

	fetchAuthUser = (): Promise<any> => {
		return axios
			.get(API_URL.ME())
			.then(({ data }) => {
				this.setUser(data.user);
				return data;
			})
			.catch(({ data }) => {
				this.setToken();
				this.setUser();
				return Promise.reject(data);
			})
			.finally(() => this.setAppLoading(false));
	};
}
