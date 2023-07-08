import './App.css'
import Auth from './components/Auth'
import { firestoreDb } from './config/firebase'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import CreateMovie from './components/CreateMovie'
import UploadFile from './components/UploadFile'


function App() {

  const [movieList, setMovieList] = React.useState([])

  const movieCollectionRef = collection(firestoreDb, 'movies')
  
  const getMovieList = async () => {
    try {
      // const response = await firestoreDb.collection('movies').get()
      // const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      const data = await getDocs(movieCollectionRef)

      const requiredData = data.docs.map((doc) => ({
         ...doc.data(),
          id: doc.id
         }
      ))
      
      console.log(requiredData)
      setMovieList(requiredData);
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovieList()
  }, [])



  return (
    <div className=' flex flex-col items-center'>
      <Auth />
      <CreateMovie getMovieList={getMovieList} />
      <UploadFile></UploadFile>

      <div>
        <h1>Movie List</h1>
        <ul>
          {movieList.map((movie) => (
            <div key={movie.id}>
              <li>{movie.title}</li>
              <li>{movie.releaseDate}</li>
              <div>
                {
                  movie.recommended ? (
                    <p>Recommended Bhai, Bilkul Mast</p>
                  ) : (
                    <p>Not Recommended, dekhna hi mat</p>
                  )
                }
              </div>
            </div>
            
            
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
