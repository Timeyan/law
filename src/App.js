 //import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import SearchAppBar from "./Styles/AppBar";
 import PostItem from "./components/PostItem";

function App() {
    const [posts, setPosts] = useState();
  
  return (
    <div className="App">
      <SearchAppBar/>
        <PostItem post={{id: 2, title: 'Something', body: 'Description'}}/>
      <Counter/>
      <ClassCounter/>
      <Counter/>
      <ClassCounter/>
      <Counter/>
    </div>
  );
}

export default App;
