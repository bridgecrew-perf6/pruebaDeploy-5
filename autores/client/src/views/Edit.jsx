import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import FormAuthor from '../components/FormAuthor'
import { editAuthorById, getAuthorById } from '../services/apiAuthor';


const Edit = () => {
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();

  const editAuthor = async (author) => {
    const res = await editAuthorById(id, author);
    const errorArr = [];
    for (const key of Object.keys(res)) { 
      errorArr.push(res[key].message)
    }
    setErrors(errorArr);
    navigate('/');
  }

  const getAuthorApi= async (id) =>{
    const res = await getAuthorById(id);
    setAuthor(res.data);
    
  }
  useEffect(() => {
    getAuthorApi(id);
    
  }, [])
  
  return (
    
    <div>
      <h2>Edit this author:</h2>
      
        {author && <FormAuthor onSubmitProps={editAuthor} name={author.name} btnText='Edit'/>}
        {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
    </div>
  )
}

export default Edit