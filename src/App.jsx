import { useState } from 'react'
import './App.css'
import  QuoteBox  from './components/QuoteBox';
import db from "./db/db.json";
import a from './components/images/a.jpg'
import b from './components/images/b.jpg'
import c from './components/images/c.jpg'
import d from './components/images/d.jpg'
import QuoteButton from './components/QuoteButton';

const colores =[a,b,c,d];

const envioRandom = (arrayElementos)=>
  {
  const cantidadValores = arrayElementos.length;
  const randomInicial = Math.floor(Math.random()* cantidadValores)
  return arrayElementos[randomInicial]
  
};

function App() {
  const [quote, setCantdad] = useState(envioRandom(db));
  const [color,setColor] =useState(envioRandom(colores))
  
  const nuevaCantidad = ()=>
  {
   setCantdad(envioRandom(db)) 
   setColor(envioRandom(colores))

  }

  return (
    <div className="App" style={{backgroundImage: `url(${color})`}}>
    <QuoteBox 
    cantidad ={quote} 
    nuevaCantidad = {nuevaCantidad}
    color = {color}
    />
     <div>
     <QuoteButton color={color} nuevaCantidad={nuevaCantidad} />
     </div>
     
    </div>
  )
}

export default App
