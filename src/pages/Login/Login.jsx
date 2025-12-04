import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Если remember me выключен, можно убрать email после закрытия браузера (опционально)
        if (remember) {
            localStorage.setItem("rememberEmail", email);
        } else {
            localStorage.removeItem("rememberEmail");
        }

        navigate("/shop");
    };

    return (
        <section className="login-page">
            <div className="login-card">
                <div className="login-left">
                    <h1>Welcome back!</h1>
                    <p className="login-subtitle">Meet the good taste today</p>

                    <form onSubmit={handleLogin}>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="row between">
                            <label className="remember">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                />
                                <span>Remember me</span>
                            </label>

                            <button type="button" className="text-btn">
                                Forgot password?
                            </button>
                        </div>

                        <button type="submit" className="primary-btn">
                            Sign in
                        </button>

                        <p className="signup-text">
                            Don’t have an account? <Link to={"/loginUp"}>Sign Up </Link>
                        </p>
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
