import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function Booksheader() {
    let navigate = useNavigate(); 
    function SortById() {
        navigate("/books/id");
    }
    function SortByRate() {
        navigate("/books/rate");
    }
    function SortByDate() {
        navigate("/books/date");
    }
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold text-body-emphasis">Books</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Take a look at my collection of Books! <br /> Add and Edit the reviews once finished a book!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button onClick={() => {
                        var element = document.getElementById("Books");
                        element.scrollIntoView({behavior: 'smooth', block: 'start'});}}
                        className="btn btn-primary btn-lg px-4 gap-3">Click to take a look at Books</button>
                </div>
      <br />
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Button size="lg" onClick={SortById}>Sort By ID</Button>
        <Button size="lg" onClick={SortByRate}>Sort By Rate</Button>
        <Button size="lg" onClick={SortByDate}>Sort By Date</Button>
        </div>
        </div>
        </div>
    )
}
export default Booksheader