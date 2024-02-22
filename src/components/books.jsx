import React from "react";
import Booksheader from "./books-header";
import Bookscontent from "./book-content";

function Books(props) {
    return (
        <>
            <Booksheader />
            <Bookscontent order={props.order}/>
        </>
    )
}
export default Books