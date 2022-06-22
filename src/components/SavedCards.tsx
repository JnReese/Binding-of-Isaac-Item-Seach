import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import { FilteredData } from "../components/Cards";
import { TiDelete } from "react-icons/ti";
import { useState, useEffect } from "react";

type PassedInfo = {
  setNameDeleted: (string: string) => void;
  arrayOfFavoriteCards: FilteredData[];
};

export default function BasicList({ setNameDeleted, arrayOfFavoriteCards }: PassedInfo) {
  const [numberOfFavoriteCards, setNumberOfFavoriteCards] = useState<number>(0);

  const handleDelete = () => {};

  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <img></img>
              </ListItemIcon>
              <ListItemText primary={`Favorite Cards ${numberOfFavoriteCards} / 5`} />
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="listed favorites">
          {arrayOfFavoriteCards.map((item) => (
            <List key={item.name}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleDelete()}>
                  <ListItemText primary={item.name} />
                  <TiDelete />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </nav>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
`;
