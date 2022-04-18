import logo from './logo.svg';
import './App.css';
import {data} from './data.js'
import {useEffect} from 'react'
import { useState } from 'react';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import { CardComponet } from './components/CardComponet';
import { NavComponent } from './components/NavComponent';
import { YourCard } from './components/YourCard';
import { AllCards } from './components/AllCards';
import {CardProvider} from './ContextComponent';

function App() {
  const [card, setCard] = useState([])
  useEffect(() => {
    
  setCard(data);
  
  }, [card])
  
  return (

  <div>
    <CardProvider>
    <NavComponent/>

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<YourCard />}></Route>
      <Route path="/all" element={<AllCards />}></Route>
    </Routes>
</BrowserRouter>
</CardProvider>
</div>




  );
}

export default App;
