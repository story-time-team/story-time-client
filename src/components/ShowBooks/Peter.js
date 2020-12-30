import './ShowBooks.scss'
import React from 'react'
import peter from './pdfBooks/The-Tale-of-Peter-Rabbit.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function Peter() {
  return (
    <div className='pdf-viewer'>
      <SinglePage pdf={peter} />
    </div>
  )

}

export default Peter
