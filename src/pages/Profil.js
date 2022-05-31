import React, {useState} from 'react';
import { useForm } from "react-hook-form";

const Profil = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => { console.log(data); };

    return (
        <div className="view--profile">
            <div className="profil-header">
                <img src="/assets/images/image-profile.svg" alt="" className="image-profile"/>
                <div className="profile-title">Profile</div>
            </div>
            <form action="" className="form-body">
                <div className="container-body">
                    <div className="container-form">
                        <div className="title-form">Name</div>
                        <input {...register("name", { required: "Please enter your  name." })} type="text" defaultValue={"name"} placeholder="name" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Job</div>
                        <input {...register("job", { required: "Please enter your job." })} type="text" defaultValue={"job"} placeholder="job" className="form-input"/>
                    </div>
                </div>
                <div className="container-body">
                    <div className="container-form">
                        <div className="title-form">Mail</div>
                        <input {...register("mail", { required: "Please enter your mail." })} type="text" defaultValue={"mail"} placeholder="mail" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Password</div>
                        <input {...register("password", { required: "Please enter your password." })} type="password" defaultValue={"password"} placeholder="password" className="form-input"/>
                    </div>
                </div>
                <div className="button-send">Enregistrer</div>
            </form>
        </div>
    );
};

export default Profil;