import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HeroBannerLogo from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        color="#FF2625"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        fontWeight="600"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography fontWeight="700" fontSize="20px" mb="23px" mt="30px">
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="10px">
        Check out the most amazing exercies
      </Typography>
      <Stack>
        <a
          href="#exercies"
          style={{
            backgroundColor: "#FF2625",
            width: "200px",
            textDecoration: "none",
            color: "white",
            padding: "14px",
            textAlign: "center",
            marginTop: "45px",
            textTransform: "none",
            fontSize: "22px",
            borderRadius: "4px",
          }}
        >
          Explore Exerices
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1, display: { lg: "block", sm: "none" } }}
        fontSize="200px"
      >
        Exercises
      </Typography>
      <img src={HeroBannerLogo} alt="" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
