import React from 'react'
import { Avatar, Box, Container, Typography, TextField, Checkbox, Button, Grid, Link } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Container component='main' maxWidth='xs' >
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor:'black',
        // color: 'white'
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant='h8'>
          Admin Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{width: 300}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>

        </Box>

      </Box>


    </Container>
  )
}