import { useContext } from 'react'
import { ReactNode } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
    children: ReactNode
}

export const AuthRoute = ({ children }: Props) => {
    const { isLoggedIn } = useContext(AuthContext);
    if (isLoggedIn) {
        return children
    }

    return <Navigate to="/login" />
}

export const NotAuthRoute = ({ children }: Props) => {
    const { isLoggedIn } = useContext(AuthContext);
    if (isLoggedIn) {
        return <Navigate to="/" />
    }

    return children
}

