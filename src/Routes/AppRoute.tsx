import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/features/auth/Pages/LoginPage';

const AppRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoute