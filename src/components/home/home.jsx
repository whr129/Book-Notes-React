import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  let navigate = useNavigate(); 

  function handleClick() {
    navigate("/books");
  }
  
    return (
        <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3" id="custom-jumbotron-123">
        <svg className="bi mt-4 mb-3"  width="100" height="100"><use xlinkHref="#bootstrap"></use></svg>
        <h1 className="text-white">My bookshelf</h1>
        <p className="col-lg-8 mx-auto fs-5 text-white">
            This are the books and their reviews!
        </p>
        <p className="col-lg-8 mx-auto fs-5 text-white">
          Let's talk about books and share our opinions!
        </p>
        <div className="d-inline-flex gap-2 mb-5">
        <Button variant="primary" size="lg" onClick={handleClick}>
        Get Start
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </Button>{' '}
      </div>
    </div>
  </div>
    )
}
export default Home