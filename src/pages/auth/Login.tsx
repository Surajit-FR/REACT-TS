import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyntheticBaseEvent, inputValues } from "../../config/DataTypes.config";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, clearError } from "../../services/slices/AuthSlice";


const Login = (): JSX.Element => {
    const token: string | null = window.localStorage.getItem("token");
    const TOKEN = JSON.parse(token ?? 'null');

    const [formValues, setFormValues] = useState<inputValues>({
        email: "",
        password: "",
    });
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const { error } = useSelector((state: any) => state.authSlice);

    const handleChange = (e: SyntheticBaseEvent) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { ...formValues };
        dispatch(LoginUser({ data, navigate }));
    };

    useEffect(() => {
        if (TOKEN) {
            navigate('/home');
        }
    }, [navigate, TOKEN]);

    return (
        <>
            <section className="my-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <p className="text-danger mx-3">{error && error?.message}</p>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            className="form-control"
                                                            name="email"
                                                            value={formValues?.email}
                                                            onChange={handleChange}
                                                            onFocus={() => dispatch(clearError())}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="email">Email Address</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            name="password"
                                                            value={formValues?.password}
                                                            onChange={handleChange}
                                                            onFocus={() => dispatch(clearError())}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>
                                                </div>

                                                {/* <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            Remember Me
                                                        </label>
                                                    </div> */}
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <Link className="mx-2" to="#"> Forget Password? </Link>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                                </div>
                                            </form>


                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                Don't Have Account Please<Link className="mx-2" to="/register"> Sign Up </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Login;