import { FaHome, FaMoon } from "react-icons/fa"
import { SiGithub } from "react-icons/si"
import { HiSun } from "react-icons/hi"
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { BiLogOut } from "react-icons/bi";
import useDarkMode from "../hooks/useDarkMode";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const { darkMode, toggle } = useDarkMode();
    const { isLoggedIn, logout } = useAuth();
    return (
        <nav
            id="app-nav"
            className="shadow-2xl p-8 flex gap-3 bg-fuchsia-50 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-50"
        >
            <NavLink className="rounded-lg p-2" to="/">
                <FaHome aria-description="Home" />
            </NavLink>

            <NavLink className="rounded-lg p-2" to="/about">
                About
            </NavLink>

            {isLoggedIn && (
                <NavLink className="rounded-lg p-2" to="/products">
                    Products
                </NavLink>
            )}
            <div className="flex-1"></div>

            <div className="hidden sm:flex items-center">
                {!isLoggedIn && (
                    <>
                        <NavLink className="rounded-lg p-2" to="/login">
                            Login
                        </NavLink>
                        <NavLink className="rounded-lg p-2" to="/register">
                            Register
                        </NavLink>
                    </>
                )}

                <a href="https://github.com/TomerBu/D290323ER" className="px-2">
                    <SiGithub aria-description="Github" />
                </a>

                <button onClick={toggle} className="rounded-lg p-2">
                    {darkMode ? <HiSun /> : <FaMoon />}
                </button>

                {isLoggedIn && (
                    <button onClick={logout} className="rounded-lg p-2">
                        <BiLogOut aria-description="Logout" />
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;