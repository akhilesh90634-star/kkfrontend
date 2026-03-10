import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/login`,
        formData,
        { withCredentials: true }
      );

      const role = res.data.role;

      // Role based navigation
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "customer") {
        navigate("/customer-dashboard");
      }

    } catch (error) {
      alert("Invalid login credentials");
      console.log(error);
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
          Login
        </Box>

        <TextField
          label="Email"
          name="email"
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

        <Button type="submit" variant="outlined">
          Login
        </Button>

        <Typography textAlign="center">
          Don't have an account?{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Register
          </Link>
        </Typography>

      </Box>
    </Box>
  );
}

export default Login;