import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, Heading, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} mb={3} ml={4}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={"5px"} listStyle={"none"}>
            <Button
              textWrap={"stable"}
              textAlign={"left"}
              fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant={"plain"}
            >
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              {genre.name}
            </Button>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
