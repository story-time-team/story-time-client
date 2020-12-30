import React from 'react'
import './WhatToRead.scss'
import christmas from './covers/christmas-carol.jpg'
import danny from './covers/danny-meadow.jpg'
import dragon from './covers/dragon.jpg'
import peter from './covers/peter-rabbit.jpg'
import piper from './covers/pied-piper.jpg'
// import axios from 'axios'
// { useState, useEffect }
// import { getBook } from '../../api/book'

const WhatToRead = () => {
  // const [book, setBook] = useState([])
  // useEffect(() => {
  //   axios.get('https://cors-anywhere.herokuapp.com/http://openlibrary.org/api/volumes/brief/isbn/0064430170.json/',
  //     {
  //       headers: {
  //         authorization: 'Access-Control-Allow-Headers',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then(res => {
  //       // console.log(res.data)
  //       return res
  //     })
  //     .then(res => {
  //       setBook(book.push(res.data.records))
  //       // const key = Object.keys(res.data.records)[0]
  //       // console.log(res.data.records[key].data.cover.large)
  //       // console.log(res.data.records[key].data.ebooks[0].preview_url)
  //       // setBook(res.data.records[key].data)
  //       return res
  //     })
  //     .then(res => setBook({ state: res }))
  // }, [])

  return (
    <div className='wrapper'>
      <h1>Our books</h1>
      <div className='img-area'>
        <div className='christmas book-images'>
        <a href='/christmas'><img className='cover-image' src={christmas} alt='The Christmas Carol'/></a>
        </div>
        <div className='danny book-images'>
        <a href='/danny'><img className='cover-image' src={danny} alt='The Christmas Carol'/></a>
        </div>
        <div className='dragon book-images'>
        <a href='/dragon'><img className='cover-image' src={dragon} alt='The Christmas Carol'/></a>
        </div>
        <div className='piper book-images'>
        <a href='/piper'><img className='cover-image' src={piper} alt='The Christmas Carol'/></a>
        </div>
        <div className='peter book-images'>
        <a href='/peter'><img className='cover-image' src={peter} alt='The Christmas Carol'/></a>
        </div>
      </div>
    </div>
  )
}

export default WhatToRead
