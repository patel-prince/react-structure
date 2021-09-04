import { createContext, useContext } from "react";
import { Context } from "vm";
import AuthStore from "./AuthStore/AuthStore";
import RootStore from "./RootStore/RootStore";
import UserStore from "./UserStore/UserStore";

const AppContext = createContext({
	ROOT: new RootStore(),
	AUTH: new AuthStore(),
	USER: new UserStore(),
});

const useStore = (): Context => useContext(AppContext);

export default useStore;
