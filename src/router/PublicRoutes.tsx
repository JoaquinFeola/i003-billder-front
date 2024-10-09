import { AuthStatus, useAuthStore } from "@/store/authStore";
import { FullScreenLoader } from "@/ui/components/spinner";
import { Navigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";

interface PublicRoutesProps {
    children: React.ReactNode;
}

export const PublicRoutes = ({ children }: PublicRoutesProps) => {
    const { authStatus, user } = useAuthStore(useShallow(state => ({ user: state.user, authStatus: state.authStatus })))
    return (authStatus === AuthStatus.Checking )
        ? <FullScreenLoader isVisible={true} />
        : (authStatus === AuthStatus.NotAuthenticated && user.token === null)
            ? children
            : <Navigate to="/" />
}
