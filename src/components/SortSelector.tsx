import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"} size={"sm"} w={"fit-content"}>
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <MenuContent>
            <MenuItem value="1">Relevance</MenuItem>
            <MenuItem value="2">Date added</MenuItem>
            <MenuItem value="3">Name</MenuItem>
            <MenuItem value="4">Release date</MenuItem>
            <MenuItem value="5">Popularity</MenuItem>
            <MenuItem value="6">Average Rating</MenuItem>
          </MenuContent>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default SortSelector;
