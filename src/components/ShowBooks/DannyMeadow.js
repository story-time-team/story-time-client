import './ShowBooks.scss'
import React from 'react'
import mouse from './pdfBooks/The-Adventures-of-Danny-Meadow-Mouse.pdf'
// import AllPages from "./AllPages.js"
import SinglePage from './Single-Page.js'

function DannyMeadow() {
  return (
    <div className='pdf-viewer'>
      <SinglePage pdf={mouse} />
    </div>
  )

}

export default DannyMeadow
