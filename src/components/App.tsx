import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, FavoritesPage } from '../pages';
import { AppRoute } from '../const';

const App: FC = () => {
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