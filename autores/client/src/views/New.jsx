import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormAuthor from '../components/FormAuthor'
import { createAuthor } from '../services/apiAuthor';

const New = () => {
  const [author, setAuthor] = useState();
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  
  const createAuthorSubmit = (authorValue) => {
    setAuthor(authorValue);
    crearUsuario();
  }
  useEffect(() => {
    crearUsuario();
  }, [author])
  const crearUsuario = async () => {
    if(author){
      const res = await createAuthor(author);
      const errorArr = [];
      for (const key of Object.keys(res)) { 
        errorArr.push(res[key].message)
      }
      
      
      setErrors(errorArr);
      if(res.status ===200){
        navigate('/');
      }
    }
    
    
  }
  

  return (
    <div>
      <h2>Add a new author:</h2>
        
        <FormAuthor onSubmitProps={createAuthorSubmit} name='' btnText='Add'/>
        {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
    </div>
  )
}

export default New