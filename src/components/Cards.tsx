import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface PassedSearch {
  searchTerm: string;
  filteredData: FilteredData[];
}

export interface FilteredData {
  name: string;
  icon: string;
  quote: string;
  description: string;
  iconPath: string;
}

export default function MediaControlCard({ searchTerm, filteredData }: PassedSearch) {
  return (
    <Container>
      {searchTerm
        ? filteredData.map((item, idx) => {
            if (idx < 6) {
              return (
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
                      {item.name}
                    </Typography>
                    <img src={`/images/${item.iconPath}`}></img>
                    <Typography variant="body2">{item.description}</Typography>
                  </CardContent>
                </Card>
              );
            }
          })
        : null}
      {searchTerm && filteredData.length === 0 ? <Error>No Results Found</Error> : null}
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  margin: 0 auto;
`;
const Error = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
}
`;
