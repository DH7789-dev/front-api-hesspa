import React from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => { console.log(data); };

    return (
        <div className="view--auth">
            <div className="right-part-auth">
                <img className="right-img-auth" src="/assets/images/image-auth.svg" alt="login"/>
            </div>
            <br className="br"/>
            <div className="left-part-auth">
                <div className="title-auth-left">Login</div>
                <form action="" className="auth-from">
                    <div className="container-form">
                        <div className="title-form">Email</div>
                        <input {...register("mail", { required: "Please enter your  name." })} type="text" placeholder="email" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Password</div>
                        <input {...register("password", { required: "Please enter your  password." })}  type="password" placeholder="password" className="form-input"/>
                    </div>
                    <div className="title-subscrible">
                        vous n’etes toujours pas inscrit ?
                        <span>
                            <Link to="/register" style={{marginLeft:5, textDecoration:'none', color:'#FF7143'}}>
                                s'incrire
                            </Link>
                        </span>
                    </div>
                    <div className="button-send">Login</div>
                </form>
            </div>

        </div>
    );
};

export default Login;