import { createContext } from "react";

const { pathname } = window.location;
const RouterContext = createContext(pathname);

export default RouterContext;
