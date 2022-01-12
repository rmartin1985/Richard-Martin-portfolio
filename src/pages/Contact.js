import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  FormHelperText,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { validateEmail } from '../utils/helpers';

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#d90429',
    },
    '& label': {
      color: '#2b2d42'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#2b2d42',
      },
      '&:hover fieldset': {
        borderColor: '#2b2d42',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#d90429',
      }
    }

  },
})(TextField);


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <Box component='div' sx={{ pt: 0, mb: 5, height: '100%', backgroundColor: '#8d99ae' }} py={5}>
        <Grid container direction='row' justifyContent="center" alignItems="center" sx={{ height: '100vh', px: 2 }}>
          <Box component='form' onSubmit={handleSubmit}>
            <Typography variant='h5' style={{ color: '#2b2d42', textAlign: 'center', textTransform: 'uppercase' }}>
              Contact me
            </Typography>
            <InputField onBlur={handleChange}
              fullWidth
              defaultValue={name}
              required
              name='Name'
              label='Name'
              variant='outlined'
              inputProps={{ style: { color: 'blue' } }}
              margin='dense' size='small'
            />
            <InputField onBlur={handleChange}
              fullWidth
              defaultValue={email}
              required
              name='email'
              label='Email'
              variant='outlined'
              inputProps={{ style: { color: 'blue' } }}
              margin='dense'
              size='small' />
            <InputField onBlur={handleChange}
              fullWidth
              defaultValue={message}
              required
              name='Message'
              label='Message'
              multiline rows={5}
              variant='outlined'
              inputProps={{ style: { color: 'blue' } }}
              margin='dense' size='small' />
            <Button
              disableElevation
              disableRipple
              onSubmit={handleSubmit}
              sx={{ color: '#edf2f4', bgcolor: '#2b2d42', '&.MuiButtonBase-root:hover': { bgcolor: '#2b2d42', borderColor: '#d90429' } }}
              variant='outlined'
              fullWidth
              endIcon={<SendIcon />}>
              Contact me
            </Button>
            {errorMessage && (
              <FormHelperText>
                <Typography variant='p' style={{ color: '#2b2d42', textAlign: 'center', textTransform: 'uppercase' }}>
                  {errorMessage}
                </Typography>
              </FormHelperText>
            )}
          </Box>
        </Grid>
    </Box>
  );
}

export default ContactForm;