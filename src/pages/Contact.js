import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Typography, Box, Grid, TextField, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2h1e8be',
      form.current, 'user_onwrkXffQf0GSTjiUf5sa')
      .then((result) => {
        console.log(result.text);
        alert("Your message was sent successfully!")
        setName('')
        setEmail('')
        setMessage('');
      },
        (error) => {
          console.log(error.text);
        });
  }


  return (
    <Box component='div' sx={{ backgroundColor: '#8d99ae' }}>
      <Grid container direction='row' justifyContent="center" alignItems="center" sx={{ height: '100vh', px: 2 }}>
        <form ref={form} onSubmit={sendEmail}>
          <Typography variant='h5' style={{ color: '#2b2d42', textAlign: 'center' }}>
            Use the form below or email me directly at:<br></br>
            <a href='mailto: rickmartinatx@gmail.com'>rickmartinatx@gmail.com</a>
          </Typography>
          <TextField
            label='Name'
            onChange={handleChangeName}
            value={name}
            name='name'
            placeholder='Enter your name'
            variant='outlined'
            fullWidth
            required
            margin='dense'
            sx={{
              '& label.Mui-focused': {
                color: '#d90429'
              }, '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#2b2d42',
                },
                '&:hover fieldset': {
                  borderColor: '#2b2d42',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d90429',
                },
              },
            }} />
          <TextField
            value={email}
            onChange={handleChangeEmail}
            type='email'
            label='Email'
            name='email'
            placeholder='Enter email'
            variant='outlined'
            fullWidth
            required
            margin='dense'
            sx={{
              '& label.Mui-focused': {
                color: '#d90429'
              }, '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#2b2d42',
                },
                '&:hover fieldset': {
                  borderColor: '#2b2d42',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d90429',
                },
              },
            }} />
          <TextField
            label='Message'
            value={message}
            onChange={handleChangeMessage}
            name='message'
            multiline rows={5}
            placeholder='Type your message here'
            variant='outlined'
            fullWidth
            required
            margin='dense'
            sx={{
              '& label.Mui-focused': {
                color: '#d90429'
              }, '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#2b2d42',
                },
                '&:hover fieldset': {
                  borderColor: '#2b2d42',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#d90429',
                },
              },
            }} />
          <Grid sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
            <Button
              type='submit'
              variant='contained'
              fullWidth
              endIcon={<SendIcon />}
              sx={{ width: '50%', color: '#edf2f4', bgcolor: '#2b2d42', '&.MuiButtonBase-root:hover': { bgcolor: '#2b2d42', borderColor: '#d90429' } }}>
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Box>
  )
}

export default Contact