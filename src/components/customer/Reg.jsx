// import React from 'react'
// import TextField from '@mui/material/TextField'

// function Reg() {
//   return (
//     <div>
//         <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//     </div>
//   )
// }

// export default Reg


import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Reg() {
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
          gap: "20px",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Box component="h1" sx={{ textAlign: "center" }}>
          Register
        </Box>

        <Box>
          <TextField label="Name" variant="outlined" fullWidth />
        </Box>

        <Box>
          <TextField label="Email" variant="outlined" fullWidth />
        </Box>

        <Box>
          <TextField label="Phone Number" variant="outlined" fullWidth />
        </Box>

        <Box>
          <TextField label="Password" variant="outlined" fullWidth />
        </Box>

        <Box>
          <TextField label="Confirm Password" variant="outlined" fullWidth />
        </Box>

        <Button type='submit' variant="outlined">
          Register
        </Button>

        {/* 👇 Added This Part */}
        <Typography textAlign="center">
          Already registered?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>

      </Box>
    </Box>
  )
}

export default Reg