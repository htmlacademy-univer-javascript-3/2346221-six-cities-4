import { createAction } from '@reduxjs/toolkit';
import { NameSpace, AvailableRoutes } from '../const';

export const REDIRECT_TO_ROUTE_TYPE = `${NameSpace.App}/redirectToRoute`;

export const redirectToRoute = createAction<AvailableRoutes>(REDIRECT_TO_ROUTE_TYPE);
