import { Grid, GridItem } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }}
      gap={4}
    >
      <GridItem area="nav" bg="coral" p={4}>
        Nav
      </GridItem>

      <GridItem
        area="aside"
        bg="gold"
        p={4}
        display={{ base: "none", lg: "block" }} // `Show` yerine `display`
      >
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue" p={4}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
