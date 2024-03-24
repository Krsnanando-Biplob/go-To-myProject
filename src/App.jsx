import { useState } from 'react'
import './App.css'
import Blogss from './componend/blogs/Blogss'
import Bookmarks from './componend/bookmarks/Bookmarks'
import Hadder from './componend/hadder/Hadder'

function App() {

  const [bookmar, setBookmar]= useState([])

  const handaleBookmarkes = blog =>{
    const newBookmar = [...bookmar, blog];
    setBookmar(newBookmar)
  }

  return (
    <>
      <Hadder></Hadder>
      <main className='md:flex max-w-6xl mx-auto'>
        <Blogss handaleBookmarkes={handaleBookmarkes} ></Blogss>
        <Bookmarks bookmar={bookmar} ></Bookmarks>
      </main>
    </>
  )
}

export default App
