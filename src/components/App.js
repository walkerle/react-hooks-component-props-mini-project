import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";


function App() {

  // console.log(blogData);
  // console.log("blogData.post", blogData.posts);
  return (
    <div className="App">
      <Header blogData={blogData} />
      <About blogData={blogData} />
      <ArticleList />
    </div>
    
  );
}

export default App;