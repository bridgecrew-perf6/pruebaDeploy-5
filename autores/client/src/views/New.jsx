import React, { useState } from 'react'
import FormAuthor from '../components/FormAuthor'
import { createAuthor } from '../services/apiAuthor';

const New = () => {
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState('');
  
  const createAuthorSubmit = async (authorValue) => {
    setAuthor(authorValue);
    const res = await createAuthor(author);
    const errorArr = [];
    for (const key of Object.keys(res)) { 
      errorArr.push(res[key].message)
    }
    setErrors(errorArr);
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