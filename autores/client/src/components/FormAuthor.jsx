import React from 'react'
import { Form, Field, Formik } from 'formik';
import * as Yup from 'yup';
import CancelBtn from './CancelBtn';

const FormAuthor = (props) => {
    const { onSubmitProps, name, btnText } = props;
  return (
    <div className='form'>
        <h2>form</h2>
        <Formik
            initialValues={{name: name}}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('Campo requerido').min(4, 'Nombre debe tener 4 caracteres')
            })}
            onSubmit={(values, {setSubmitting})=>{
                onSubmitProps(values);
            }}
        >
            {({errors, touched, handleSubmit})=>{
                return (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor='name'>Nombre Autor:</label>
                            <Field id="name" type="text" placeholder="Nombre autor" name="name" className="form-control" />
                            {errors.name && touched.name && <p className='error'>{errors.name} </p>}
                            <CancelBtn/>
                            <button type="submit" /* disabled={Object.values(errors).length>0} */ >{btnText}</button>
                        </Form>


                    </div>
                )
            }}

        </Formik>
    </div>
  )
}

export default FormAuthor