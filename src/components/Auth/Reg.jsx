import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Reg() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/customers/register`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        }
      );

      alert("Registration successful");
      console.log(res.data);

    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center"
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
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

        <TextField
          label="Name"
          name="name"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Phone Number"
          name="phone"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          fullWidth
        />

        <Button type="submit" variant="outlined">
          Register
        </Button>

        <Typography textAlign="center">
          Already registered?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>

      </Box>
    </Box>
  );
}

export default Reg;