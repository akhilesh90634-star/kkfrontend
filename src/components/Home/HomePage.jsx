import React, { useState, useRef, useEffect } from "react";
import Nabar from "../Nav/Nabar";
import Grid from "./Grid";
import { Box, Button } from "@mui/material";

function HomePage() {
  const [showGrid, setShowGrid] = useState(false);
  const gridRef = useRef(null);

  // REAL Nora-style trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGrid(true);
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Button scroll
  const handleClick = () => {
    gridRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>

      {/* HERO */}
      <div style={{width:"100vh", height: "100vh", position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src="/Vegetables.mp4" type="video/mp4" />
        </video>

        <div style={{
            position: "fixed",
            zIndex: "9999",
            width:"100%"
          }}>

        <Nabar />
        </div>

        {/* <div>asdfiaosufaosufd</div> */}


        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            position: "fixed",
            top: "90%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          View Products
        </Button>
      </div>

      {/* GRID */}
      <Box
        ref={gridRef}
        sx={{
          minHeight: "100vh",
          // background: "#fff",

          // 👇 THIS is the magic
          transform: showGrid
            ? "translateY(0px)"
            : "translateY(0px)",

          opacity: showGrid ? 1 : 0,

          transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Grid show={showGrid} />
      </Box>
    </div>
  );
}

export default HomePage;