import { Routes, Route } from "react-router-dom";
import ProtectedOne from "./protected/ProtectedOne";
import Home from "../pages/others/Home";
import AllUserList from "../pages/others/AllUserList";

const PageRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route element={<ProtectedOne />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/all/user/list" element={<AllUserList />} />
                </Route>
            </Routes>
        </>
    )
}

export default PageRoutes;