import React from 'react'
import BooksList from "../BooksDir/BooksList"
import AddBooks from "../AddBooks/AddBooks"
function Home() {
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