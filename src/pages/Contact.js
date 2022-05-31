import React from 'react';
import {useForm} from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data => { console.log(data); };

    return (
        <div className="view--contact">
            <div className="right-part-contact">
                <img className="right-img-contact" src="/assets/images/image-contact.svg" alt="login"/>
            </div>
            <div className="left-part-contact">
                <div className="title-contact-left">Contact</div>
                <form action="" className="contact-from">
                    <div className="container-form-title">
                        <div className="container-form">
                            <div className="title-form">Nom</div>
                            <input {...register("lastName", { required: "Please enter your last name." })} type="text" placeholder="nom" className="form-input"/>
                        </div>
                        <div className="container-form">
                            <div className="title-form">Prenom</div>
                            <input {...register("firstName", { required: "Please enter your first name." })} type="text" placeholder="prenom" className="form-input"/>
                        </div>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Email</div>
                        <input {...register("mail", { required: "Please enter your  name." })} type="text" placeholder="email" className="form-input"/>
                    </div>
                    <div className="container-form">
                        <div className="title-form">Message</div>
                        <textarea {...register("message", { required: "Please enter your  password." })}  placeholder="Message" className="form-input message"/>
                    </div>
                    <div className="button-send">Envoyer</div>
                </form>
            </div>
        </div>
    );
};

export default Contact;