import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Hook/AuthProvider/AuthProvider";

const Login = () => {
    const emailRef = useRef(null);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        // signIn User
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Congratulations, you are successfully logged in!');

                // navigate
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                if (error.code === 'auth/invalid-login-credentials') {
                    toast.error('Invalid login');
                    return ('error.message');
                } else if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                    toast.error("Invalid email or password. Please try again.");
                }
                else {
                    toast.warn('An error occurred. Please try again later.');
                    return;
                }
            });
    }

    return (
        <>
            <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden mx-7">
                <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" ref={emailRef}
                                name="email" placeholder="Email Address" className="w-full input input-bordered" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Password"
                                className="w-full input input-bordered" />
                        </div>
                        <p className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</p>
                        <div>
                            <button className="btn btn-block hover:bg-[#303030] hover:text-white">Login</button>
                        </div>
                    </form>
                    <span>{`Haven't an account?`}
                        <Link to='/register' className="text-blue-600 ml-2 hover:text-blue-800 hover:underline">Register</Link></span>

                </div>
            </div>
            < ToastContainer />
        </>
    );
};

export default Login;