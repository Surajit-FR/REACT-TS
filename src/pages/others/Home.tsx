// import "../../style.css";
import { useDispatch } from "react-redux"
import { LogoutUser } from "../../services/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { DecryptData } from "../../utility/EncryptDecrypt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = (): JSX.Element => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const ENC_DATA: string | null = window.localStorage.getItem("user");
    const USER_DATA = DecryptData(ENC_DATA ?? 'null');

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setX(e.clientX);
            setY(e.clientY);
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const Logout = () => {
        dispatch(LogoutUser(navigate))
    };

    return (
        <>
            <div className="text-center mt-5">
                <h4>Name: {USER_DATA?.name}</h4>
                <h4>Email: {USER_DATA?.email}</h4>
                <h4>Phone: {USER_DATA?.phone}</h4>
                <button onClick={Logout} className="mx-5 btn btn-sm bg-danger text-white">Logout</button>
            </div>

            <div className="">
                <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                    <motion.div
                        className="box"
                        style={{
                            position: 'absolute',
                            top: y - 200,
                            left: x - 20,
                            width: 50,
                            height: 50,
                            background: 'blue',
                            // borderRadius: '50%',
                            pointerEvents: 'none', // so that the box doesn't interfere with other elements
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Home;