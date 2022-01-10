import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  FormHelperText
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { validateEmail } from '../utils/helpers';

const useStyles = makeStyles(theme => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },

}))

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
  const classes = useStyles();
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
    <Box component='div'>
      <Grid container justifyContent='center'>
        <Box component='form' className={classes.form} onSubmit={handleSubmit}>
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
          <Button onSubmit={handleSubmit} sx={{ color: '#edf2f4', bgcolor: '#2b2d42' }} variant='outlined' fullWidth endIcon={<SendIcon />}>
            Contact me
          </Button>
          {errorMessage && (
            <FormHelperText>
              <Typography variant='h5' style={{ color: '#2b2d42', textAlign: 'center', textTransform: 'uppercase' }}>
                {errorMessage}
              </Typography>
            </FormHelperText>
          )}
        </Box>
      </Grid>

    </Box>
    // <section>
    //   <h1 data-testid="h1tag">Contact</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="name">Name:</label>
    //       <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email address:</label>
    //       <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor="message">Message:</label>
    //       <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //       <div>
    //         <p className="error-text">{errorMessage}</p>
    //       </div>
    //     )}
    //     <button data-testid="button" type="submit">Submit</button>
    //   </form>
    // </section>
  );
}

export default ContactForm;