import React from "react";
import "./LoginUp.css";

const LoginUp = () => {
    return (
        <div className="loginUp">
            <div className="left">
                <h1>Create account</h1>
                <p>Join and meet the good taste today</p>

                <div>
                    <label htmlFor="fullName">Full name</label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter your e-mail" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                    />
                </div>

                <div className="checkbox">
                    <input id="terms" type="checkbox" />
                    <label htmlFor="terms">I accept the terms & conditions</label>
                </div>

                <button type="submit">Sign up</button>

                <p>
                    Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>

            <div className="right">
                <img
                    src="https://i.pinimg.com/1200x/de/96/de/de96ded32a3ee5a22edd1f1d2a1282e4.jpg"
                    alt="Coffee shop"
                />
            </div>
        </div>
    );
};

export default LoginUp;
