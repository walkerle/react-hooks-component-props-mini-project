import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList (props) {
    console.log(blogData);

    const blogInfo = blogData.posts

    const blogs = blogInfo.map((blog) => {
        return (
        <Article key={blog.id} title={blog.title} date={blog.date} preview={blog.preview} />
        );
    })

    return (
        <main>
            {blogs}
        </main>
    );
}

export default ArticleList;