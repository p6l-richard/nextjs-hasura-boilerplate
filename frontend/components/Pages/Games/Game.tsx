import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
import timeFromNow from "lib/timeFromNow";
import React, { FC } from "react";
import IGame from "types/game";

interface IProps {
  game: IGame;
}

const Game: FC<IProps> = ({ game }) => {
  const userNode = () => {
    return (
      <Stack
        spacing={4}
        isInline
        alignItems="center"
        p={4}
        borderBottomWidth={1}
      >
        <Avatar name={game.user.name} src={game.user.image} />
        <Stack>
          <Text fontWeight="bold">{game.user.name}</Text>
          <Text>{timeFromNow(game.created_at)}</Text>
        </Stack>
      </Stack>
    );
  };

  const titleNode = () => {
    return (
      <Text fontWeight="bold" fontSize="md" p={4}>
        {game.name}
      </Text>
    );
  };

  const bodyNode = () => {
    return (
      <Text fontSize="md" p={4}>
        {game.description}
      </Text>
    );
  };

  return (
    <Box shadow="lg" rounded="lg">
      <Stack spacing={0}>
        {userNode()}
        {titleNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Game;
