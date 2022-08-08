import React, { useEffect } from 'react'
import BooksList from "../BooksDir/BooksList"
import AddBooks from "../AddBooks/AddBooks"
import axios from 'axios'
function Home() {

    useEffect(() => {
        const sendRequest = axios.post("/signup", { name: "Noman Ahamd", email: "Nomandogart56@gmail.com", password: "Noman1234" })
        console.log("Hello", sendRequest)
    }, [])
    return (
        <div>
            <div className="flex justify-between m-20">
                <BooksList />
                <div>

                </div>
                <div className=' '>

                    <AddBooks />
                </div>
            </div>
        </div>
    )
}

export default Home