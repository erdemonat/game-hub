import { Grid, GridItem, Stack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "200px 1fr" }}
      gap={4}
    >
      <GridItem area="nav" p={4}>
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        p={4}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>

      <GridItem area="main" p={4}>
        <Stack paddingBottom={"12px"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></GameGrid>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default App;
