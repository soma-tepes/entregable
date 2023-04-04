import React from 'react'

const QuoteButton = ({nuevaCantidad, color}) => {
  return (
    <button className='quoteBox__button' onClick={nuevaCantidad} style={{backgroundImage: `url(${color})`}}>
      <i className='bx bx-chevron-right'></i>
      
    </button>
  
  )
}

export default QuoteButton