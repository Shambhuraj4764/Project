import Defender from './assets/Defender.webp'
import Ferrari from './assets/ferrari.jpg'
import Gwagon from './assets/Gwagon.jpg'
import Maclern from './assets/Maclern.jpg'
import Porche from './assets/porche.jpeg'
import Rubicon from './assets/Rubicon.webp'

import React from 'react'
import Card from './Components/Card'

const App = () => {

const cars = [
  {
    company: "Land Rover",
    model: "Defender,",
    info: "Luxury off-road SUV with powerful performance, premium interior, advanced technology, strong terrain capability, comfortable seating, modern safety features, and impressive driving experience for adventure, highways, and city travel.",
    image : Defender
  },

  {
    company: "Mercedes-Benz",
    model: "G-Wagon,",
    info: "Iconic luxury SUV known for rugged design, strong off-road capability, premium cabin, powerful engine options, advanced technology, high safety standards, and bold road presence with exceptional comfort and performance.",
    image : Gwagon
  },
  {
    company: "Jeep",
    model: "Rubicon,",
    info: "Adventure-focused SUV designed for extreme off-roading, durable build quality, powerful engine, rugged styling, advanced four-wheel-drive system, removable roof options, and comfortable interior suitable for outdoor exploration and travel.",
    image : Rubicon,
  },
  {
    company: "McLaren",
    model: "720S,",
    info: "High-performance supercar offering lightweight construction, twin-turbo engine, futuristic design, luxurious cockpit, exceptional speed, aerodynamic efficiency, advanced technology, and thrilling handling experience designed for racing-inspired performance.",
    image : Maclern,
  },
  {
    company: "Porsche",
    model: "911,",
    info: "Legendary sports car featuring iconic design, powerful engine performance, luxurious interior, precise handling, advanced driving technology, everyday usability, and exceptional driving dynamics with premium comfort and reliability.",
    image : Porche,
  },
  { 
    company: "Ferrari",
    model: "LaFerrari,",
    info: "Hybrid hypercar featuring extreme speed, aerodynamic design, luxurious interior, powerful V12 engine, advanced engineering, limited production, and outstanding performance delivering thrilling driving experience with iconic Ferrari styling.",
    image : Ferrari
  },

];

  return (
    <div className='Parent'>
        {cars.map(function(elem){
        
        return <Card model = {elem.model}  company = {elem.company} info = {elem.info} image = {elem.image}/>
        })}
    </div>
  )
}

export default App