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

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"} size={"sm"} w={"fit-content"}>
          Order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <MenuContent>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default SortSelector;
