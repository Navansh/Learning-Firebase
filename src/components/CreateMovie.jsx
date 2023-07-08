 import React from 'react'
import { addDoc } from 'firebase/firestore'
import { auth } from '../config/firebase'
// import { firestoreDb } from './config/firebase'
import { firestoreDb } from '../config/firebase'

import { getDocs, collection } from 'firebase/firestore'



const CreateMovie = ({getMovieList}) => {
    const [movieData, setMovieData] = React.useState({
        title: '',
        releaseDate: '',
        recommended: false
    })

    const movieCollectionRef = collection(firestoreDb, 'movies')


    const changeHandler = (e) => {
        const { name, value, type, checked } = e.target
        if (type === 'checkbox') {
            setMovieData((prev) => ({
                ...prev,
                [name]: checked
            }))
        } else {
            setMovieData((prev) => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const submitMovieHandler = async () => {
        try {
            await addDoc(movieCollectionRef, {
                title : movieData.title,
                releaseDate: movieData.releaseDate,
                recommended: movieData.recommended,
                userId: auth?.currentUser?.uid
            }) 

            getMovieList();

        } catch (error) {
            console.error(error)

            
        }
        console.log(movieData)
    }


  return (
    <div>
        <input type="text" placeholder=' Movie Title' name='title' onChange={changeHandler} />
        <input type="number" placeholder=' Movie Release Date' name='releaseDate' onChange={changeHandler} />
        <label htmlFor="">
            <p>Recommended or NOT</p>
            <input type="checkbox" placeholder=' Recommended or Not' name='recommended' onChange={changeHandler } />
        </label>
        <button onClick={submitMovieHandler}>
            Submit Movie
        </button>
    </div>
  )
}

export default CreateMovie