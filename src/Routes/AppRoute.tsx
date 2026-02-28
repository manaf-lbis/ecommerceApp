import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import {AppLoader} from '@/components/appComponents/AppLoader';

const LoginPage = lazy(() => import('@/features/auth/Pages/LoginPage'));
const HomePage = lazy(() => import('@/features/Home/HomePage'));
const AppLayout = lazy(() => import('@/layout/AppLayout'));
const CartPage = lazy(() => import('@/features/cart/CartPage'));


const AppRoute = () => {
    return (
        <Suspense fallback={<AppLoader />}>
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
        </Suspense>


    )
}

export default AppRoute