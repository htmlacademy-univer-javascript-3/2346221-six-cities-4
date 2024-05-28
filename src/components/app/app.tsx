import {Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page404/page404';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus, AvailableRoutes } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthCheckedStatus, getAuthorizationStatus, getIsOffersLoading } from '../../store';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../store/slices/favorites';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const isOffersDataLoading = useAppSelector(getIsOffersLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAuthChecked) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuthChecked]);

  return (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading)
    ? <LoadingScreen /> : (
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AvailableRoutes.Main}>
            <Route index element={<MainPage />} />
            <Route
              path={AvailableRoutes.Login}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                  requieredStatus={AuthorizationStatus.NoAuth}
                  redirectTo={AvailableRoutes.Main}
                >
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route path={AvailableRoutes.Offer} element={<OfferPage />} />
            <Route
              path={AvailableRoutes.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                  requieredStatus={AuthorizationStatus.Auth}
                  redirectTo={AvailableRoutes.Login}
                >
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route path={AvailableRoutes.NotFound} element={<Page404 />} />
          </Route>
        </Routes>
      </HistoryRouter>
    );
}

export default App;
