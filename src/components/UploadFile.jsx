import React from 'react'
import { storage } from '../config/firebase'
import { useState } from 'react'
import { ref, uploadBytes } from 'firebase/storage'
const UploadFile = () => {

    //File Upload State
    const [file, setFile] = useState(null)

    //File Upload Handler
    const setFileUpload = (e) => {
        const file = e.target.files[0]
        setFile(file)
    }

    //Upload File Handler
    const UploadFile = async () => {
        try {
            if (!file) return;

            const filesFolderRef = ref(storage, `projectFiles/${file.name}`)
            const response = await uploadBytes(filesFolderRef, file)
            console.log(response);
            // const storageRef = storage.ref()
            // const fileRef = storageRef.child(file.name)
            // await fileRef.put(file)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <input type="file" onChange={setFileUpload} />
        <button onClick={UploadFile}>Upload File</button>
    </div>
  )
}

export default UploadFile