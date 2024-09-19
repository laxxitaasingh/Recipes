import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Snackbar } from '@mui/material';

const Signup = () => {
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
        const response = await axios.post('http://localhost:3000/api/users/signup', {
          email: formValues.email,
          password: formValues.password,
        });

        if (response.data.success) {
          setSnackbarMessage('Registered successfully');
        }
      } catch (error) {
        setSnackbarMessage(
          error.response?.data?.message || 'Registration failed'
        );
      }
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="container">
      <h2>Welcome</h2>
      <p style={{ color: 'lightslategray', textAlign: 'center' }}>
        Please enter your Registration details
      </p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <TextField
            label="Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            label="Email"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className="form-group">
          <TextField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            error={!!formErrors.confirmPassword}
            helperText={formErrors.confirmPassword}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  );
};

export default Signup;
