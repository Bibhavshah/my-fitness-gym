import React, { useState, useEffect } from "react";
import { Box, Stack, Button, Typography, TextField } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HoritonalScrollBar";

const SearchExercises = React.memo(
  ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyPartsData, setBodyPartsData] = useState([]);

    useEffect(() => {
      const fetchBodyPart = async () => {
        const fetchedbodyParts = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        setBodyPartsData(["all", ...fetchedbodyParts]);
      };

      fetchBodyPart();
    }, []);

    const handleSearch = async () => {
      if (search) {
        const exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
        //console.log(exerciseData);
        const searchedExercises = exerciseData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search)
        );
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
        setSearch("");
        setExercises(searchedExercises);
        //console.log(searchedExercises);
      }
    };
    return (
      <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="49px"
          textAlign="center"
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            type="text"
            placeholder="Search for Exercies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", sm: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: "#FF2625",
              color: "white",
              textTransform: "none",
              width: { lg: "173px", sm: "80px" },
              height: "56px",
              position: "absolute",
              right: "0",
              fontSize: { lg: "20px", xs: "40px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box position="relative" width="100%" p="20px">
          <HorizontalScrollBar
            data={bodyPartsData}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />
        </Box>
      </Stack>
    );
  }
);

export default SearchExercises;
