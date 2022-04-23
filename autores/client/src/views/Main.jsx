import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuthors } from '../services/apiAuthor';

const Main = () => {
    const [authors, setAuthors] = useState();
    const getAllAuthors = async () => {
        const res = await getAuthors();
        console.log(res);
        setAuthors(res);
    }
    const navigate = useNavigate();
    useEffect(() => {
      getAllAuthors();
    }, [])
    const editHandler = (id) => {
        navigate(`/edit/${id}`)
    }
  return (
    <div className='authors'>
        <div className='header'>
            <h1>Favorites authors</h1>
            <Link to='/new'>Add an author</Link>
        </div>
        <div className='authors-content'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions avaliable</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        authors && authors.map((author, id) => {
                            return (
                                <tr>
                                <td>{author.name}</td>
                                <td><button onClick={()=>editHandler(author._id)}> Edit </button> <button navigate='/edit'> Delete </button></td>
                                </tr>
                            )
                        })
                    }
                        
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Main