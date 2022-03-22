import { FC, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import { getJoke } from '../store/joke/actions';
import { MainPage, FavoritesPage } from '../pages';
import { AppRoute, timeout } from '../const';
import { Reducer } from '../store/store';

const App: FC = () => {
    const dispatch = useAppDispatch();
    const isAutoload = useAppSelector((state) => state[Reducer.Joke].autoload);

    useEffect(() => {
        dispatch(getJoke());
    }, [dispatch]);

    useEffect(() => {
        let interval: any = null;
        if (isAutoload) {
            interval = setInterval(() => {
                dispatch(getJoke());
            }, timeout)
        }

        return () => clearInterval(interval);
    }, [dispatch, isAutoload]);

    return (
        <Routes>
            <Route
                path={AppRoute.Main}
                element={<MainPage />}
            />
            <Route
                path={AppRoute.Favorites}
                element={<FavoritesPage />}
            />
            <Route
                path="*"
                element={<Navigate to={AppRoute.Main} />}
            />
        </Routes>
    );
};

export default App;