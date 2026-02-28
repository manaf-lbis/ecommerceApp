import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginMutation } from "../../../services/authApi"
import { useState } from "react"
import toast from "react-hot-toast"
import { successfullLogin } from "../AuthSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Loader } from "lucide-react"
import { validatePassword } from "@/validators/passwordValidator"
import { validateUsername } from "@/validators/usernameValidator"

const LoginPage = () => {

    const dispatch = useDispatch()
    const [login,{isLoading}] = useLoginMutation()
    const [credential, setcredential] = useState({ username: '', password: '' })
    const navigate = useNavigate()

    async function submitLogin() {
        try {
            if(!validateUsername(credential.username)){
                toast.error('invalid usename')
                return
            } else if(!validatePassword(credential.password)){
                toast.error('invalid Password')
                return
            }

            const data = await login(credential).unwrap()
            console.log(data);
            localStorage.setItem('token', data.accessToken)
            localStorage.setItem('user', JSON.stringify({user:{name: data?.firstName +' '+ data?.lastName || '',id:data?.id,email:data.email},isAuthenticated:true}))

            dispatch(successfullLogin({ email: data?.email, id: data?.id, name: data?.firstName +' '+ data?.lastName }))
            navigate('/home')
        } catch (error: any) {
            toast.error(error?.data?.message || 'Server Error')
        }
    }



    return (
        <div className="flex h-screen justify-center items-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="user@example.com"
                                    required
                                    value={credential.username}
                                    onChange={(e) => setcredential({ ...credential, username: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                    placeholder="********* **"
                                    value={credential.password}
                                    onChange={(e) => setcredential({ ...credential, password: e.target.value })}
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full cursor-pointer" onClick={submitLogin}>
                        {isLoading ? <Loader className="animate-spin" /> : 'Login'}
                    </Button>

                </CardFooter>
            </Card>
        </div>
    )
}



export default LoginPage