import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = (): JSX.Element => {
    const navigate: any = useNavigate();

    useEffect(() => {
        navigate("/home");
    }, [navigate]);

    return (
        <></>
    )
}

export default Index;