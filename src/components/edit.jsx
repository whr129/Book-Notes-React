import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import SubmitBook from "./addBookform";

function EditForm() {
    let { id } = useParams();
    const [Book, setBook] = useState({});

    async function GetBook() {
        try {
            console.log(`http://localhost:4000/viewBook/${id}`);
            const response = await axios.get(`http://localhost:4000/viewBook/${id}`);
            setBook(response.data);
            console.log(Book);
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        GetBook(id);
    }, [id])

    return (
        <SubmitBook 
            id = {id}
            name = {Book.book_name}
            author = {Book.author}
            rate = {Book.rate}
            date = {Book.date}
            recap = {Book.recap}
            review = {Book.review}
            edit = {true}
        />
    )
}
export default EditForm