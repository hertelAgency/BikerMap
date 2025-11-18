import {configureStore} from '@reduxjs/toolkit';
import DashboardReducer from './dashboard/DashboardReducer';
import TrailmapReducer from './trailmap/TrailmapReducer';


const Store = configureStore({
    reducer: {
        dashboard: DashboardReducer,
        trailmap: TrailmapReducer,
    }
}
);

export default Store;

export type AppStore = typeof Store
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch