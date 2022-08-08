import logo from './logo.svg';
import './App.css';
import AddBooks from './components/AddBooks/AddBooks';
import Navbar from './components/Navbar/Navbar';
import BooksList from './components/BooksDir/BooksList';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Delete from './components/pages/delete';
function App() {
  return (
    < >

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ADDBOOKS" element={<AddBooks />} />
          <Route path="/BOOKDIR" element={<BooksList />} />
          <Route path="/BOOKDIR/:id" element={<Delete/>} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
