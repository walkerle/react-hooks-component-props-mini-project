import React from "react";

function Header(props) {
    // console.log(props);
    // console.log(props.blogData.name);
    return (
        <header>
            <h1>{props.blogData.name}</h1>
        </header>
    )
}

export default Header;