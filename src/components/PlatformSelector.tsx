import usePlatform from "@/hooks/usePlatform";
import { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
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
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"surface"} size={"sm"} maxW={"-webkit-fit-content"}>
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <MenuContent>
            {data?.results.map((platform) => (
              <MenuItem
                onClick={() => onSelectPlatform(platform)}
                value={platform.name}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuContent>
        </Menu.Positioner>
      </Portal>
    </MenuRoot>
  );
};

export default PlatformSelector;
