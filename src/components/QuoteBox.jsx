import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({cantidad, nuevaCantidad, color}) => {
  return (
    <div className='quoteBox' style={{color: color}}>
      <p className='quoteBox__quote'>{cantidad.quote}</p>
      <h3 className='quoteBox__author'>{cantidad.author}</h3>
      <i className='quoteBox__icon bx bxs-quote-left' ></i>
      <QuoteButton color={color} nuevaCantidad={nuevaCantidad} />
    </div>
  )
}

export default QuoteBox