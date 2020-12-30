import './ShowBooks.scss'
import React from 'react'
import mouse from './pdfBooks/The-Adventures-of-Danny-Meadow-Mouse.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function Resume() {
  return (
    <div>
      <SinglePage pdf={mouse} />
    </div>
  )

}

export default Resume
