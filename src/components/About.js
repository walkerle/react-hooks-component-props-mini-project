import React from "react";

function About(props) {

    // console.log(props.blogData.image);
    function defaultImage(){
        if(props.blogData.image === "") {
            return "https://via.placeholder.com/215"
        } else {
            return props.blogData.image
        }
    }

    return (
        <aside>
            <img src={defaultImage()} alt="blog logo"></img>
            <p>{props.blogData.about}</p>
        </aside>
    );
}

export default About;