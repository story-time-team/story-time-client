import './ShowBooks.scss'
import React from 'react'
import dragon from './pdfBooks/The-Reluctant-Dragon.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function Dragon() {
  return (
    <div className='pdf-viewer'>
      <SinglePage pdf={dragon} />
    </div>
  )

}

export default Dragon
