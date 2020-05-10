import React from "react";
import classes from "./SuggestionsBox.module.css";
import SuggestionItems from "./SuggestionItems/SuggestionItems";

const suggestionsBox = (props) => {

    return (
    <div className={classes.SuggestionsBox}>
        <SuggestionItems data={props.data} clicked={props.clicked}/>
    </div>
)};

export default suggestionsBox;