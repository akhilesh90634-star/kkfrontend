import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        height: "100vh",
        alignItems: "center"
      }}
    >
      <Box
        component="form"
        sx={{
          border: "1px solid black",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: '20px',
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Box component="h1" sx={{ textAlign: "center" }}>
          Login
        </Box>

        <Box>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Box>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
        </Box>

        <Button type='submit' variant="outlined">
          Login
        </Button>

        {/* 👇 Added This Part */}
        <Typography textAlign="center">
          Don't have an account?{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Typography>

      </Box>
    </Box>
  )
}

export default Login