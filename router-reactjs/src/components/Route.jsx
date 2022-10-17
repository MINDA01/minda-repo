import {useContext} from 'react';
import RouterContext from './RouterContext';

export const Route = ({ path, component }) => {
  const { location } = useContext(RouterContext);
  return <>{path === location && component}</>;
};
