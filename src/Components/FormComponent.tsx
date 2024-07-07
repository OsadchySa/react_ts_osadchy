import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/userValidator";

type IFormType = {
    username:string,
    password:string,
    age:number
}
const FormComponent = () => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IFormType>({
        mode:'all',
        resolver: joiResolver(userValidator)
    })

    let formSubmitHandler = (data:IFormType)=>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                data
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            {errors.age && <div>{errors.age.message}</div>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input type='text' {...register('username')}/>
                <input type='text' {...register('password')}/>
                <input type='number' {...register('age')}/>
                <button disabled={!isValid}>SEND</button>
            </form>
        </div>
    );
};

export default FormComponent;