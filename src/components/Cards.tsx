import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import SavedCards from "../components/SavedCards";
import { useState, useEffect } from "react";

interface PassedSearch {
  searchTerm: string;
  filteredData: FilteredData[];
  setSearchTerm: (value: string) => void;
}

export interface FilteredData {
  name: string;
  icon: string;
  quote: string;
  description: string;
  iconPath: string;
}

export default function MediaControlCard({ searchTerm, filteredData, setSearchTerm }: PassedSearch) {
  const [arrayOfFavoriteCards, setArrayOfFavoriteCards] = useState<FilteredData[]>([]);
  const [favoritedCardNames, setFavoritedCardNames] = useState<string[]>([]);

  const handleSave = (event: React.MouseEvent<HTMLElement>, item: FilteredData, idx: number) => {
    const noDupeTitle = !favoritedCardNames.includes(item.name);
    if (arrayOfFavoriteCards.length < 5 && noDupeTitle) {
      setArrayOfFavoriteCards([...arrayOfFavoriteCards, item]);
      setFavoritedCardNames([...favoritedCardNames, item.name]);
      window.localStorage.setItem("favoritedItems", JSON.stringify([...arrayOfFavoriteCards, item]));
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("favoritedItems")) {
      setArrayOfFavoriteCards(JSON.parse(window.localStorage.getItem("favoritedItems") ?? ""));
    }
  }, []);

  return (
    <OutsideContainer>
      <SavedCards
        arrayOfFavoriteCards={arrayOfFavoriteCards}
        setArrayOfFavoriteCards={setArrayOfFavoriteCards}
        setFavoritedCardNames={setFavoritedCardNames}
        favoritedCardNames={favoritedCardNames}
        setSearchTerm={setSearchTerm}
      />
      <ResultsContainer>
        {searchTerm
          ? filteredData.map((item, idx) => {
              if (idx < 6) {
                return (
                  <Card key={item.name} sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                        {item.name}
                      </Typography>
                      <img src={`/images/${item.iconPath}`}></img>
                      <Typography variant="body2">{item.description}</Typography>
                    </CardContent>
                    <ClickSave
                      onClick={(event) => handleSave(event, item, idx)}
                      aria-label={`Add ${item.name} to local storage`}
                    >
                      <HiOutlineClipboardCheck />
                    </ClickSave>
                  </Card>
                );
              }
            })
          : null}
      </ResultsContainer>
      {searchTerm && filteredData.length === 0 ? <Error>No Results Found</Error> : null}
    </OutsideContainer>
  );
}

const ResultsContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  margin: 0 auto;
`;
const OutsideContainer = styled.div``;
const Error = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
}
`;
const ClickSave = styled.button`
  height: 3rem;
  width: 5rem;
  border-style: none;
  border-radius: 3rem;
  margin-bottom: 1rem;

  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(1px);
  }
`;
