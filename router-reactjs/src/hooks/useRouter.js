import { useContext } from "react";
import RouterContext from "../components/RouterContext";

function useRouter() {
  const { location, setLocation } = useContext(RouterContext);

  const push = (path) => {
    if (location === path) return;
    history.pushState(path, "", path);
    setLocation(path);
  };
  return { push };
}
export default useRouter;
