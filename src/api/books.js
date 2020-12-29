import axios from 'axios'

// export const getBook = (id) => {
//   return axios('http://openlibrary.org/api/volumes/brief/isbn/0596156715.json')
// }

export const getBook = () => {
  return axios.get('https://cors-anywhere.herokuapp.com/http://openlibrary.org/api/volumes/brief/lccn/99042367.json/',
    {
      headers: {
        authorization: 'Access-Control-Allow-Headers',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
    console.log(response.data.records)
  })
}
