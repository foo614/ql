import { Routes, Route } from 'react-router-dom';
import { HOME } from "./constant";
import Home from './views/HomePage';
const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path={HOME} element={<Home />} />
        </Routes>
    )
};

export default MainRoutes;