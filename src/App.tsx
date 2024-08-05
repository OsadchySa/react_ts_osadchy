import React, {useEffect} from 'react';
import './App.css';
import {postActions, useAppDispatch, useAppSelector, userActions} from "./redux/store";

const App=()=>{
  let {userSlice:{users, isLoaded}} = useAppSelector(state => state);
  let {postSlice:{posts}} = useAppSelector(state => state);

  let disPatch = useAppDispatch()

  useEffect(() => {
      disPatch(userActions.loadUsers())
  }, [])
  useEffect(() => {
    disPatch(postActions.loadPosts())
  }, [])


  return (
    <div>
      {isLoaded.toString()}
      {users.map(user => <div>{user.name}</div>)}
      {posts.map(post => <div>POST TITLE: {post.title} POST BODY:  {post.body}</div>)}
    </div>
  );
}

export default App;
