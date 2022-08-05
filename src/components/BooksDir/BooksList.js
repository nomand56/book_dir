import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function BooksList() {
    const [books, setBooks] = useState()
    console.log(books)

    useEffect(() => {

        axios.get('/getBooks').then((res) => {
            setBooks(res.data)
        })

    }, [])


    const handleSubmit = async () => {
        await axios.delete("/BOOKDIR/:id").then((res) => {
            console.log("dell resp", res)
        })
    }

    if (!books) {
        return <h1>Loading</h1>
    }
    return <>
        <div>ALL BOOKS</div>
        <table className="table" border="1" >
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>update</th>
                    {/* <th>Update</th> */}
                </tr>
            </thead>
            <tbody>
                {books.map((item) => {
                    { console.log(item) }
                    return <tr>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td><Link to={`/BOOKDIR/${item._id}`} onClick={handleSubmit}>
                            <button >Update
                            </button>
                        </Link>
                        </td>

                    </tr>
                })
                }
            </tbody>
        </table>
        {/* {books.map((item) => {
            return <ul>

                <li>{item.title} </li>

            </ul>

        })} */}
    </>

}

export default BooksList