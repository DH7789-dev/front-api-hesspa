import React from 'react';
import {useForm} from "react-hook-form";

const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async data => { console.log(data); };

    return (
        <div className="view--auth">
            <div className="right-part-auth">
                <img className="right-img-auth" src="/assets/images/image-auth.svg" alt="register"/>
            </div>
            <div className="left-part-auth">
                <div className="title-auth-left">Register</div>
                <form action="" className="auth-from">
                    <div className="container-form">
                        <div className="title-form">Name</div>
                        <input {...register("name", { required: "Please enter your  name." })}  type="text" placeholder="password" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Mail</div>
                        <input {...register("mail", { required: "Please enter your  mail." })}  type="text" placeholder="password" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Job</div>
                        <input {...register("job", { required: "Please enter your  job." })}  type="text" placeholder="password" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Password</div>
                        <input {...register("password", { required: "Please enter your  password." })}  type="password" placeholder="password" className="form-input"/>
                    </div>
                </form>
                <div className="button-send">register</div>
            </div>

        </div>
    );
};

export default Register;