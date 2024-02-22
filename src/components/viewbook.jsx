import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function View() {
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
        <div className="container my-5">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className="card">
                    <div className="card-body">
                        <img src={Book.url} alt="Book Cover" width="175" height="250" />
                        <h2 className="card-title">{Book.book_name}</h2>
                        <p className="card-text">
                            <strong>Author: </strong>{Book.author}<br />
                            <strong>Date Read: </strong>{Book.date}<br />
                            <strong>How Strongly I Recommend It: </strong> {Book.rate}
                        </p>
                        <p className="card-text">
                            {Book.recap}
                        </p>
                        <h3>My Notes</h3>
                        <p className="card-text">{Book.review}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default View