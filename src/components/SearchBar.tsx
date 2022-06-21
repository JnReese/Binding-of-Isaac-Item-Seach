import Box from "@mui/material/Box";
import styled from "styled-components";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import ItemInfo from "../issac.json";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import { FilteredData } from "../components/Cards";

export default function InputWithIcon() {
  const [currentImage, setCurrentImage] = useState<string>(`/images/${ItemInfo[14].iconPath}`);
  const [searchTerm, setSearchTerm] = useState<string>(``);
  const [filteredData, setFilteredData] = useState(ItemInfo);

  useEffect(() => {
    if (ItemInfo.map((item) => item.iconPath)) {
      const intervalId = setInterval(() => {
        let picture = ItemInfo[Math.floor(Math.random() * ItemInfo.length)];
        setCurrentImage(`/images/${picture.iconPath}`);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);
    let result = [];
    result = ItemInfo.filter((data) => {
      return data.name.toLowerCase().search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <Container>
      <Box sx={{ "& > :not(style)": { m: 4 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <img src={currentImage}></img>
              </InputAdornment>
            }
            onChange={handleSearch}
          />
        </FormControl>
      </Box>
      <Cards searchTerm={searchTerm} filteredData={filteredData as FilteredData[]} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
`;
