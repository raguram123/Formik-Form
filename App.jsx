
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Form Validation</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder='Enter your E-mail'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /> 
          <br />
          {errors.email && touched.email && errors.email}
          <br />
          <input
            type="password"
            name="password"
            placeholder='Enter your Password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <br /><br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button><br />
          <br />
          <h1>Author Record </h1>
          <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='Enter Your Name '/><br />
          <label htmlFor="name">Birth Date</label>
          <input type="text" placeholder='Enter Your Birth Date '/><br />
          <label htmlFor="name">Biography</label>
          <input type="text" placeholder='Enter Your Biography '/>
          </div>

          <h1>Book Record</h1>
          <div className="book">
          <label htmlFor="name">Title</label>
          <input type="text" /><br />
          <label htmlFor="name">Author</label>
          <input type="text" /><br />
          <label htmlFor="number">ISBN Number</label>
          <input type="number" />br
          <label htmlFor="name">Publication Book</label>
          <input type="text" />

          </div>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;