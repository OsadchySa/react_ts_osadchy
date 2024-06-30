import React, {FC} from 'react';
import {IUser} from "../../models/IUser";



interface IProps{
    user: IUser
    getPosts: (id:number)=> void
}
const UserComponent: FC<IProps> = ({user, getPosts}) => {
    console.log(user)
    return (
        <div>
            {user.id}: {user.firstName} {user.lastName}  <button onClick={()=>{
                getPosts(user.id);

        }}>Show posts of this user</button>
        </div>
    );
};

export default UserComponent;