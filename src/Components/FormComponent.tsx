import React, {useState} from 'react'
import {useForm} from "react-hook-form";

type IFormType = {
    username:string,
    password:string,
    age:number
}
const FormComponent = () => {

    let {formState: {errors, isValid}, register, handleSubmit} = useForm<IFormType>({mode:'all'})

    let formSubmitHandler = (data:IFormType)=>{
        console.log(data)
    }

    return (
        <div>
            {errors.age && <div>{errors.age.message}</div>}
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <input type='text' {...register('username')}/>
                <input type='text' {...register('password')}/>
                <input type='number' {...register('age', {
                    required:true,
                    valueAsNumber:true,
                    min:{value:1, message:'age too small'},
                    max:{value:99, message:'age too big'}
                })}/>
                <button disabled={!isValid}>SEND</button>
            </form>
        </div>
    );
};

export default FormComponent;