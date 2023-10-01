import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import InputField from "./components/InputField";
import Banner from "./assets/images/banner.png";
import { useState } from "react";

function App() {
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    function handleOnClick() {
        console.log(email, username, password);
    }

    return (
        <Container>
                <div className="flex flex-col gap-8 w-full max-w-md">
                    <h1 className="font-bold">Your Logo</h1>
                    <div className=" bg-white border border-gray-300 rounded-lg p-4 text-start flex flex-col gap-6 shadow-sm">
                        <p className="font-light">Welcome !</p>
                        <div>
                            <h1 className="text-2xl font-medium">Sign up to</h1>
                            <p>Lorem Ipsum is simply</p>
                        </div>

                        <InputField
                            value={email}
                            handleOnChange={(e) => setEmail(e.target.value)}
                            label="Email"
                            placeholder="Enter your email"
                        />
                        <InputField
                            value={username}
                            handleOnChange={(e) => setUsername(e.target.value)}
                            label="User name"
                            placeholder="Enter your user name"
                        />
                        <InputField
                            value={password}
                            handleOnChange={(e) => setPassword(e.target.value)}
                            label="Password"
                            placeholder="Enter your Password"
                            type="password"
                        />
                        <InputField
                            value={confirmPassword}
                            handleOnChange={(e) =>
                                setConfirmPassword(e.target.value)
                            }
                            label="Confirm Password"
                            placeholder="Confirm your Password"
                            type="password"
                        />

                        <Button
                            disabled={password !== confirmPassword}
                            handleOnClick={handleOnClick}
                            text="Register"
                        />
                        <p className="text-center text-gray-400">
                            Already have an Account ?{" "}
                            <a href="/login" className="font-bold text-black">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
                <div className="m-auto hidden lg:block">
                    <img src={Banner} alt="Banner" />
                </div>
        </Container>
    );
}

export default App;
