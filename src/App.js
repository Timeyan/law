 //import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import SearchAppBar from "./Styles/AppBar";
 import PostItem from "./components/PostItem";
 import PostList from "./components/PostList";
 import Stack from '@mui/material/Stack';
 import Button from '@mui/material/Button';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Some doc 1', body: 'Description'},
        {id: 2, title: 'Some doc 2', body: 'Description'},
        {id: 3, title: 'Some doc 3', body: 'Description'}
    ]);

    const [title, setTitle] = useState('Some title')
    const [body, setBody] = useState('Some description')

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
      <SearchAppBar/>
      <PostList posts={posts} title="Список документов"/>
      <Button variant="contained" onClick={addNewPost}>Add</Button>
      <Counter/>
    </div>
  );
}

export default App;
