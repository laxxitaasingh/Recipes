import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './signup.css'
import MyImage from '/home/laxita/Recipes/frontend/src/assets/whisk.jpeg'; // adjust the path as needed

// const navigate = useNavigate();
const Signup = () => {
const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const validate = () => {
    let errors = {};
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    } else if (formValues.password.length < 8) {
      errors.password = 'Password must contain at least 8 characters';
    } else if (formValues.password.length > 20) {
      errors.password = 'Password must be less than 20 characters';
    }
    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = 'Password and Confirm Password do not match';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
        });
  
        if (response.data.success) {
          setSnackbarMessage('Registered successfully');
          navigate('/login')
        }
      } catch (error) {
        // Handling error response with a fallback message
        setSnackbarMessage(
          error.response?.data?.message || 'Registration failed'
        );
      }
  
      setSnackbarOpen(true);
    }
  };
  

  // return (
  //   <div className="container">
  //     <p style={{ color: 'lightslategray', textAlign: 'center' }}>
  //       Please enter your Registration details
  //     </p>
  //     <form onSubmit={handleSubmit}>
  //     <div className="form-group">
  //         <TextField
  //           label="Name"
  //           type="text"
  //           name="name"
  //           value={formValues.name}
  //           onChange={handleChange}
  //           fullWidth
  //           margin="normal"
  //           variant="outlined"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <TextField
  //           label="Email"
  //           type="text"
  //           name="email"
  //           value={formValues.email}
  //           onChange={handleChange}
  //           error={!!formErrors.email}
  //           helperText={formErrors.email}
  //           fullWidth
  //           margin="normal"
  //           variant="outlined"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <TextField
  //           label="Password"
  //           type="password"
  //           name="password"
  //           value={formValues.password}
  //           onChange={handleChange}
  //           error={!!formErrors.password}
  //           helperText={formErrors.password}
  //           fullWidth
  //           margin="normal"
  //           variant="outlined"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <TextField
  //           label="Confirm Password"
  //           type="password"
  //           name="confirmPassword"
  //           value={formValues.confirmPassword}
  //           onChange={handleChange}
  //           error={!!formErrors.confirmPassword}
  //           helperText={formErrors.confirmPassword}
  //           fullWidth
  //           margin="normal"
  //           variant="outlined"
  //         />
  //       </div>
  //       <Button variant="contained" color="primary" type="submit">
  //         Register
  //       </Button>
  //     </form>
  //     <Snackbar
  //       open={snackbarOpen}
  //       autoHideDuration={5000}
  //       onClose={() => setSnackbarOpen(false)}
  //       message={snackbarMessage}
  //       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  //     />
  //   </div>
  // );
  return (
    <><div className='imge'>
      <img src={MyImage} alt="Description of the image" />
    </div>
    <div className='watermark'>
        <div className="container mx-auto p-6 max-w-md rounded-lg">
          <p className="text-center text-slate-500 mb-4">
            Please enter your Registration details
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''}`} />
              {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.password ? 'border-red-500' : ''}`} />
              {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.confirmPassword ? 'border-red-500' : ''}`} />
              {formErrors.confirmPassword && <p className="text-red-500 text-sm">{formErrors.confirmPassword}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>
          </form>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={5000}
            onClose={() => setSnackbarOpen(false)}
            message={snackbarMessage}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} />
        </div>
      </div></>
  );
  
};

export default Signup;
