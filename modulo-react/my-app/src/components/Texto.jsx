import React from 'react'
import '../styles/Texto.scss'

function Texto() {
  return (
    <div className='texto'>
      Stay true to the web
      People expect web app pages to load fast. On the server, 
      React lets you start streaming HTML while you’re still fetching data, 
      progressively filling in the remaining content 
      before any JavaScript code loads. On the client,
       React can use standard web APIs to keep your UI responsive even in the middle of rendering.
    </div>
  )
}

export default Texto
