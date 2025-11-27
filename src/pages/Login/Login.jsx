// src/pages/Login/Login.jsx
import React from "react";
import "./Login.css";

const Login = () => {
    return (
        <section className="login-page">
            <div className="login-card">
                <div className="login-left">
                    <h1>Welcome back!</h1>
                    <p className="login-subtitle">Meet the good taste today</p>

                    <form>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your e-mail"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="row between">
                            <label className="remember">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>

                            <button type="button" className="text-btn">
                                Forgot password?
                            </button>
                        </div>

                        <button type="submit" className="primary-btn">
                            Sign in
                        </button>

                        {/* <p className="signup-text">
                            Don’t have an account? <a href="./LoginUp.jsx" ><Link to={"/loginUp"}>Sign Up </Link></a>
                        </p> */}
                    </form>
                </div>

                <div className="login-right">
                    <img
                        src="https://i.pinimg.com/1200x/87/c0/4c/87c04c631e33626262bcadcdcada3d5e.jpg"
                        alt="Coffee"
                    />
                    <div className="login-overlay">
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;