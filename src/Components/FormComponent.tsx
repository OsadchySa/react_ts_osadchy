import React, {useState} from 'react'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/userValidator";

/*потрібно на jsonplaceholder відправити об'єкт post
відповідно, для цього вам потрібно його створити. Створення об'єкту повинно відбуватись
за допомоги форми з useForm та валідацією.
Якщо ви не пам'ятаєте як відправляти данні на jsonplaceholder подивіться його документації*/

type IFormType = {
    userid:number
    title:string,
    body:string,

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
            {errors.userid && <div>{errors.userid.message}</div>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input type='number' {...register('userid')}/>
                <input type='text' {...register('title')}/>
                <input type='text' {...register('body')}/>

                <button disabled={!isValid}>SEND</button>
            </form>
        </div>
    );
};

export default FormComponent;