import { useEffect , useState} from 'react';
import RouterContext from "./RouterContext";

export const Router = ({ children }) => {
  const { pathname } = window.location;
  const [location, setLocation] = useState(pathname);

  useEffect(() => {
    window.onpopstate = (e) => {
      if (e.state === null) return setLocation("/");
      setLocation(e.state);
    };
  }, []);
  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  )
};
