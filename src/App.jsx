import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from 'react-bootstrap/Card';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home/home';
import Footer from './components/footer';
import Books from './components/books';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import About from './components/about';
import View from './components/viewbook';
import SubmitBook from './components/addBookform';
import EditForm from './components/edit';

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/books" element={<Books order="id"/>} />
          <Route path="/books/id" element={<Books order="id"/>} />
          <Route path="/books/rate" element={<Books order="rate"/>} />
          <Route path="/books/date" element={<Books order="date"/>} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/AddBook" element={<SubmitBook 
              edit={false}
              name = ''
              author = ''
              rate = ''
              date = ''
              recap = ''
              review = ''  
          />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
