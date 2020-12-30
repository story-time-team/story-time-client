import React, { useState, useEffect } from 'react'
import './WhatToRead.scss'
import axios from 'axios'
// import { getBook } from '../../api/book'

const WhatToRead = () => {
  const [book, setBook] = useState([])
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/http://openlibrary.org/api/volumes/brief/isbn/0064430170.json/',
      {
        headers: {
          authorization: 'Access-Control-Allow-Headers',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.data)
        return res
      })
      .then(res => {
        setBook(book.push(res.data.records))
        const key = Object.keys(res.data.records)[0]
        console.log(res.data.records[key].data.cover.large)
        console.log(res.data.records[key].data.ebooks[0].preview_url)
        // setBook(res.data.records[key].data)
        return res
      })
      .then(res => setBook({ state: res }))
  }, [])

  return (
    <div className='show-book'>
      <h1>Story time what to read page</h1>
    </div>
  )
}

export default WhatToRead
