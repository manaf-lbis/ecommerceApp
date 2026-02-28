import { Routes, Route } from 'react-router-dom';
import LoginPage from '@/features/auth/Pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '@/features/Home/HomePage';
import AppLayout from '@/layout/AppLayout';
import CartPage from '@/features/cart/CartPage';
import PublicRoute from './PublicRoute';

const AppRoute = () => {
    return (
        <Routes>

            <Route element={<PublicRoute />} >
                <Route path='/' element={<LoginPage />} />
            </Route>

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/cart' element={<CartPage />} />
                </Route>
            </Route>

        </Routes>


    )
}

export default AppRoute