import { Box, Stack } from "@chakra-ui/react";
import Loader from "components/Loader";
import AddNewGameForm from "components/Pages/Games/AddNewGameForm";
import Game from "components/Pages/Games/Game";
import { useFetchGamesSubscription } from "generated-graphql";
import React from "react";
import IGame from "types/game";

const GamesPageComponent = () => {
  const { data } = useFetchGamesSubscription();
  console.log("games:", data);

  if (!data) {
    return <Loader />;
  }

  return (
    <Stack spacing={8}>
      <Box>
        <AddNewGameForm />
      </Box>
      {data.games.map((game: IGame, index: number) => {
        return (
          <Box key={index}>
            <Game game={game} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default GamesPageComponent;
