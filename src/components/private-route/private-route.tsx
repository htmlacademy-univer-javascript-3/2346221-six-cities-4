import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AvailableRoutes } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  requieredStatus: AuthorizationStatus;
  redirectTo: AvailableRoutes;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, requieredStatus, redirectTo, children} = props;

  return (
    authorizationStatus === requieredStatus
      ? children
      : <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
