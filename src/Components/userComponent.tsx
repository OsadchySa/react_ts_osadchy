import React, {Component} from 'react';
import {IUser} from "../models/IUser";
import {getPostsOfUserById} from "../services/api.service";


type PropType = {
    user:IUser
}

class UserComponent extends Component <PropType>{
    state = {
        posts:[]
    }
    componentDidMount() {
        getPostsOfUserById(this.props.user.id).then(response=>this.setState({posts:[...response.posts]}))
    }

    render() {
        return (
            <div>
                {this.props.user.id}: {this.props.user.firstName} {this.props.user.lastName}
                <button onClick={()=>{this.state.posts.map(value =>console.log(value))}}>GET POSTS</button>
            </div>

        );
    }
}

export default UserComponent;