import './ShowBooks.scss'
import React from 'react'
import piper from './pdfBooks/The-Pied-Piper-of-Hamelin.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function Piper() {
  return (
    <div className='pdf-viewer'>
      <SinglePage pdf={piper} />
    </div>
  )

}

export default Piper
