import React, {useState, useEffect} from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import qs from 'qs';
import axios from "axios";

function SubmitBook(props) {
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
            const data = { 
                book_name : event.target[0].value,
                author : event.target[1].value,
                rate : event.target[2].value,
                date : event.target[3].value,
                recap : event.target[4].value,
                review : event.target.review.value
            };
        if(! props.edit) {
            try {
                await axios.post(`http://localhost:4000/submitBook`, qs.stringify(data), {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                });
                console.log(222);
                alert("Submit Successfully");
                } catch (err) {
                console.log(err);
                }
        } else {
            try {
                console.log(props.id);
                await axios.post(`http://localhost:4000/EditForm/${props.id}`, qs.stringify(data), {
                    headers: { 'content-type': 'application/x-www-form-urlencoded' },
                });
                console.log(222);
                alert("Edit Successfully");
                } catch (err) {
                console.log(err);
                }
        }
        }
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="book_name" defaultValue={props.name}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" name="author" defaultValue={props.author}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rate (n/10)</Form.Label>
            <Form.Control type="text" placeholder="Rate" name="rate" defaultValue={props.rate}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" name="date" defaultValue={props.date}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Recap</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your team's awards and brief history here" name="recap" defaultValue={props.recap}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Book Notes</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your team's awards and brief history here" name="review" defaultValue={props.review}/>
            </Form.Group>
            <Button size="lg" type="submit">Submit</Button>
        </Form>
        </Container>
    )
}
export default SubmitBook