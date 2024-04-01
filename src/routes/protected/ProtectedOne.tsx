import { Navigate, Outlet, useLocation } from "react-router-dom"

const ProtectedOne = (): JSX.Element => {
    const location = useLocation();
    const token: string | null = window.localStorage.getItem("token");
    const TOKEN = JSON.parse(token ?? 'null');


    return (
        <>
            {
                TOKEN?.length > 0 ? <Outlet /> : <Navigate to='/login' state={{ form: location }} replace />
            }
        </>
    )
}

export default ProtectedOne;