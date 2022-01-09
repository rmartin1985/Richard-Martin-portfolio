import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core';
import { 
  TextField,
  Typography,
  Button, 
  Grid,
  Box  } from '@mui/material';
  import SendIcon from '@mui/icons-material/Send';

import { validateEmail } from '../utils/helpers';

const useStyles = makeStyles(theme => ({
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },
  button: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato'
  }

}))

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
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
        <Box component='form' className={classes.form}>
          <Typography variant='h5' style={{ color: 'tomato', textAlign: 'center', textTransform: 'uppercase'}}>
            Contact me
          </Typography>
          <InputField fullWidth label='Name' variant='outlined' inputProps={{ style: { color: 'blue' } }} margin='dense' size='small'/>
          <InputField fullWidth label='Email' variant='outlined' inputProps={{ style: { color: 'blue' } }} margin='dense' size='small' />
          <Button className={classes.button} variant='outlined' fullWidth endIcon={<SendIcon/>}>
            Contact me

          </Button>
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