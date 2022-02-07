import React from 'react';
import './App.css';

import { Routes, Route} from "react-router-dom"

// Импортируем всё компонениты 
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';


const App = () => {
  return (



    <div className='app-wrapper'>
      
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        
        <Routes>
          <Route path='/profile' element = {<Profile/>}></Route>
          <Route path='/massages' element = {<Dialogs/>} ></Route>
        </Routes>

      </div>


      
      
      

    </div>


  );
}

export default App;
