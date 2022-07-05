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

type PassedInfo = {
  setArrayOfFavoriteCards: ([]) => void;
  setFavoritedCardNames: ([]) => void;
  setSearchTerm: (value: string) => void;
  arrayOfFavoriteCards: FilteredData[];
  favoritedCardNames: string[];
};

export default function BasicList({
  arrayOfFavoriteCards,
  setArrayOfFavoriteCards,
  setFavoritedCardNames,
  favoritedCardNames,
  setSearchTerm,
}: PassedInfo) {
  const handleDelete = (item: FilteredData) => {
    window.localStorage.setItem(
      "favoritedItems",
      JSON.stringify([...arrayOfFavoriteCards].filter((el) => el !== item))
    );
    setArrayOfFavoriteCards([...arrayOfFavoriteCards].filter((el) => el !== item));
    setFavoritedCardNames([...favoritedCardNames].filter((el) => el !== item.name));
  };
  const handleFavoriteSelect = (item: FilteredData) => {
    setSearchTerm(item.name);
  };

  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <img></img>
              </ListItemIcon>
              <ListItemText primary={`Favorite Cards ${arrayOfFavoriteCards.length} / 5`} />
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="listed favorites">
          {arrayOfFavoriteCards.map((item) => (
            <List key={item.name}>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleFavoriteSelect(item)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
                <Delete onClick={() => handleDelete(item)}>
                  <TiDelete />
                </Delete>
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
  @media (max-width: 1070px) {
    position: relative;
    display: flex;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;
const Delete = styled.button`
  margin-right: 1rem;
`;
