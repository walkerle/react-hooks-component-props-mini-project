import React from "react"
// import ArticleList from "./ArticleList"

function Article (props) {

    function defaultDate(){
        if(props.date && props.date.length > 0) {
            return props.date
        } else {
            return "January 1, 1970"
        }
    }

    return(
    <article>
        <h3>{props.title}</h3>
        <small>{defaultDate()}</small>
        <p>{props.preview}</p>
    </article>
    )
}

export default Article