import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useSelector } from "react-redux"
import type { RootState } from "@/store"

const Navbar = () => {
    const user = useSelector((state: RootState) => state.authState)
    console.log(user,'sdf');
    const navigate = useNavigate();


    return (

        <nav className="w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="/home" className="text-lg font-bold">
                    Ecommerce
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/home" className="text-sm font-medium hover:text-primary">
                        Home
                    </Link>
                    <Link to="/about" className="text-sm font-medium hover:text-primary">
                        About
                    </Link>
                </div>

                <div>
                    {
                        user.isAuthenticated ? 

                         <Button variant="default"  >
                            {user.user?.name}
                        </Button> :

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