import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SyntheticBaseEvent, inputValues } from "../../config/DataTypes.config";
import { RegisterUser, clearError } from "../../services/slices/AuthSlice";

const Register = (): JSX.Element => {
    const [formValues, setFormValues] = useState<inputValues>({
        name: "",
        email: "",
        phone: "",
        password: "",
        conf_password: "",
        profile_photo: "",
    });
    const [err, setErr] = useState<boolean>(false);
    const dispatch: any = useDispatch();
    const navigate: any = useNavigate();
    const { error } = useSelector((state: any) => state.authSlice);

    const handleChange = (e: SyntheticBaseEvent) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formValues?.conf_password === formValues?.password) {
            const data = {
                name: formValues?.name,
                email: formValues?.email,
                phone: formValues?.phone,
                password: formValues?.password
            };
            dispatch(RegisterUser({ data, navigate }));
        } else {
            setErr(true);
        }
    };

    return (
        <>
            <section className="my-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    < div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <p className="text-danger mx-3">{error && error?.message}</p>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className="form-control"
                                                            name="name"
                                                            value={formValues?.name}
                                                            onChange={handleChange}
                                                            onFocus={() => dispatch(clearError())}
                                                            style={{
                                                                border: error?.type === "name" ? "1px solid red" : ""
                                                            }}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="name">Full Name</label>
                                                    </div>
                                                </div>

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
                                                            style={{
                                                                border: error?.type === "email" ? "1px solid red" : ""
                                                            }}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="email">Email Address</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="phone"
                                                            className="form-control"
                                                            name="phone"
                                                            value={formValues?.phone}
                                                            onChange={handleChange}
                                                            onFocus={() => dispatch(clearError())}
                                                            maxLength={10}
                                                            style={{
                                                                border: error?.type === "phone" ? "1px solid red" : ""
                                                            }}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="phone">Contact Number</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            className="form-control"
                                                            name="password"
                                                            value={formValues?.password}
                                                            onChange={handleChange}
                                                            onFocus={() => dispatch(clearError())}
                                                            style={{
                                                                border: error?.type === "password" ? "1px solid red" : ""
                                                            }}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="password">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="conf_password"
                                                            className="form-control"
                                                            name="conf_password"
                                                            value={formValues?.conf_password}
                                                            onChange={handleChange}
                                                            onFocus={() => setErr(false)}
                                                            style={{
                                                                border: err ? "1px solid red" : ""
                                                            }}
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="conf_password">Repeat Your Password</label>
                                                    </div>
                                                </div>

                                                {/* <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            Remember Me
                                                        </label>
                                                    </div> */}

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                Already Have Account Please<Link className="mx-2" to="/login"> Login </Link>
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

export default Register;