import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Favourite from '../Components/Favourite/index.jsx';
import Footer from '../Components/Footer/index.jsx';
import Kontakt from '../Components/Kontakt/index.jsx';
import Login from '../Components/Login/index.jsx';
import Music from '../Components/Music/index.jsx';
import Navbar from '../Components/Navbar/index.jsx';
import Opener from '../Components/Opener';

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Navbar />} />
        <Route path='/movies' element={<Navbar />} />
        <Route path='/favourite' element={<Navbar />} />
        <Route path='/api' element={<Navbar />} />
        <Route path='/music' element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Opener />} />
        <Route path='/movies' element={<Kontakt />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/music' element={<Music />} />
        <Route path='/api' element={<h1>Api</h1>} />
      </Routes>
      <Routes>
        <Route path='home' element={<Footer />} />
      </Routes>
    </div>
  );
};

export default Root;
