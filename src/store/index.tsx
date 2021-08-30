import { createContext, useContext } from "react";
import { Context } from "vm";
import AuthStore from "./AuthStore/AuthStore";
import RootStore from "./RootStore/RootStore";

const AppContext = createContext({
	ROOT: new RootStore(),
	AUTH: new AuthStore(),
});

const useStore = (): Context => useContext(AppContext);

export default useStore;
