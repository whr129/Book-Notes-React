import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import View from "./viewbook";
import { useNavigate } from "react-router-dom";

function Bookscontent(props) {
    let navigate = useNavigate(); 

    const [Books, setBooks] = useState([]);
    const [Order, setOrder] = useState("id");

    async function GetBook(Order) {
        try {
            console.log(`http://localhost:4000/books/${Order}`);
            const response = await axios.get(`http://localhost:4000/books/${Order}`);
            setBooks(response.data);
            console.log(Books);
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        setOrder(props.order);
        GetBook(props.order);
    }, [props.order])

    return (
        <div className="album py-5 bg-body-tertiary" id="Books">
        <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       {Books.map((book) => (
            <div className="col" key={Books.id}>
            <div className="card shadow-sm">
            <img src= {book.url} alt="Book Cover" width="175" height="250" />
            <div className="card-body">
              <p className="card-text">Book ID: {book.id} </p>
              <p className="card-text">Book Name: {book.book_name}</p>
              <p className="card-text">Book Name: {book.author}</p>
              <p className="card-text">Date Read: {book.date}</p>
              <p className="card-text">How strongly I recommend it: {book.rate}/10</p>
              <p className="card-text">Book recap: {book.recap}</p>
              <div className="d-flex justify-content-between align-items-center">
                 <div className="btn-group">
                <Button onClick={() => {
                    navigate(`/view/${book.id}`);
                    }}>View</Button>
                <Button onClick={async () => {
                    try{
                        await axios.get(`http://localhost:4000/deleteBook/${book.id}`);
                        alert("Delete Successfully, Please Refresh the page");
                        setOrder(Order);
                    } catch(error) {
                        console.log(error);
                    }
                    }}>Delete</Button>
                 <Button onClick={() => {
                    navigate(`/edit/${book.id}`);
                    }}>Edit</Button>
                {/* <Button onClick={DeleteBook}>Get</Button>
                <Button onClick={EditBook}>Get</Button> */}
                    {/* <form action= "/viewBook/" + books[i].id %> method="get">
                        <button type="submit" class="btn btn-sm btn-outline-secondary">View</button>
                    </form>
                    <form action=<%= "/deleteBook/" + books[i].id %> method="get">
                        <button type="submit" class="btn btn-sm btn-outline-secondary">Delete</button>
                    </form>
                    <form action= <%= "/editBook/" + books[i].id %>  method="get">
                        <button type="submit" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </form> */}
                </div> 
              </div>
            </div>
          </div>
        </div>
       ))}
        </div>
        </div>
        </div>
         //</div>
    )
 }
 export default Bookscontent