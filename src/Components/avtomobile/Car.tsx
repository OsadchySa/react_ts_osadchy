import React, {FC} from 'react';
import './car.css'

interface IProps {
    nameOfClassImg: string;
    nameOfClassTitle: string;
    nameOfClassBut: string;
    model: string;
    image: string;
    children: React.ReactNode
}
const Car: FC<IProps> = ({nameOfClassImg, nameOfClassTitle, nameOfClassBut,
                             model, image, children}) => {

    return (
        <div>

            <button
                className={nameOfClassBut}>

                {children}
            </button>
            <h2 className={nameOfClassTitle}>{model}</h2>
            <img className={nameOfClassImg} src={image}/>

        </div>
    )
        ;
};

export default Car;