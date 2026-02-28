import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/store"
import { CartIcon } from "./CartIcon"
import { logout } from "@/features/auth/AuthSlice"
import toast from "react-hot-toast"

const Navbar = () => {
    const userData = JSON.parse(localStorage.getItem('user') || '')

    const navigate = useNavigate();
    const cart = useSelector((state: RootState) => state.cartState);
    const dispatch = useDispatch()

    const logoutApp = () => {
        dispatch(logout())
        localStorage.clear()
        toast.success('logouted Success');
        navigate('/')

    }



    return (

        <nav className="w-full border-b bg-background sticky top-0 z-50">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/home" className="text-lg font-bold">
                    Ecommerce
                </Link>

                <div className="flex gap-5 justify-center items-center" >
                    <CartIcon count={cart.totalQuantity} />
                    {
                        userData.isAuthenticated ?
                            <div className="flex gap-3">
                                <Button variant="default"  >
                                    {userData?.user?.name}
                                </Button>

                                <Button className="bg-amber-400" variant="ghost" onClick={logoutApp}  >
                                    Logout
                                </Button>
                            </div>
                            :
                            <Button onClick={() => navigate('/')} variant="default">
                                Login
                            </Button>
                    }

                </div>

            </div>
        </nav>
    )
}

export default Navbar