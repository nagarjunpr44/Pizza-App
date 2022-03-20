import React from 'react'
import "./Pizzas.css"
import pizzas from "./Pizzadata"
import Card from './Card'

const Pizzas = () => {
  return (
    <>
    <div className="items-container">
        <h1 className='items-title'>
            The tastiest pizzas are here
        </h1>
        <p className='items-desc'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reprehenderit nostrum tenetur temporibus minus minima labore culpa vel quis, quos ab ullam pariatur aspernatur placeat non repellat dolor ex ut dolorum ipsam! Veritatis ut tempore magni dicta sequi quam, quo consequatur quasi molestias rerum.
        </p>
        <div className="items-wrapper">
            {pizzas.map(pizza=>{
              return <Card pizza={pizza}/>
            })}
        </div>
    </div>
    </>
  )
}

export default Pizzas