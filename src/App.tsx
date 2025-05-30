import { Grid, GridItem, HStack, ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { system } from "./theme";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <ChakraProvider value={system}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
          gap={4}
        >
          <GridItem area="nav" p={4}>
            <NavBar
              onSearch={(searchText) =>
                setGameQuery({ ...gameQuery, searchText })
              }
            />
          </GridItem>
          <GridItem
            area="aside"
            paddingX={5}
            p={4}
            display={{ base: "none", lg: "block" }}
          >
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
          <GridItem m={4} area="main">
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack mb={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              ></PlatformSelector>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </HStack>
            <GameGrid gameQuery={gameQuery}></GameGrid>
          </GridItem>
        </Grid>
      </ChakraProvider>
    </>
  );
}

export default App;
