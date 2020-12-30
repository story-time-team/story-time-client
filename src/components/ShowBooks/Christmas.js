import './ShowBooks.scss'
import React from 'react'
import christmas from './pdfBooks/The-Birds-Christmas-Carol.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function Christmas() {
  return (
    <div className='pdf-viewer'>
      <SinglePage pdf={christmas} />
    </div>
  )

}

export default Christmas
