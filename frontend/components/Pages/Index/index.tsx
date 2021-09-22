import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Image,
  Center,
} from "@chakra-ui/react";
import Loader from "components/Loader";
import { AddIcon, CheckIcon, WarningTwoIcon } from "@chakra-ui/icons";

import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";
import { useHotGamesQuery, IHotGame } from "features/hot-games";
import {
  useInsertGameMutation,
  useFetchGamesSubscription,
} from "generated-graphql";

const IndexPageComponent = () => {
  const heightOfNavbar: string = "74px";
  const containerPadding: string = "1rem";
  const bg = useColorModeValue("white", "gray.800");

  const {
    data: hotGames,
    isSuccess: hotGamesSuccess,
    isLoading: hotGamesLoading,
    isError: hotGamesError,
  } = useHotGamesQuery();
  const [session] = useSession();
  const {
    data: { games: myGames } = {},
    loading: myGamesFetching,
    error: myGamesError,
  } = useFetchGamesSubscription();

  const [
    insertGame,
    {
      loading: insertGameFetching,
      error: insertGameError,
      data: insertGameData,
    },
  ] = useInsertGameMutation();

  const addToMyGames = (game: IHotGame) => {
    insertGame({
      variables: {
        user_id: session.id,
        name: game.name,
        bgg_id: game.id,
      },
    });
  };

  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signin">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Create an account
          </Button>
        </Link>
      </Box>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <Box>
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </Button>
        </Link>
      </Box>
    );
  };
  const hotGameCards = () => {
    const isSuccessGames = hotGamesSuccess && Boolean(myGames);
    const isLoadingGames = hotGamesLoading || myGamesFetching;
    const isErrorGames = hotGamesError || myGamesError;

    return isSuccessGames ? (
      hotGames.map((hotGame) => {
        const myGame = myGames?.find(({ bgg_id }) => bgg_id === hotGame.id);
        const isInMyGames =
          insertGameData?.insert_games_one?.bgg_id === hotGame.id || !!myGame;

        return cardNode({
          game: hotGame,
          onAddClick: addToMyGames,
          background: bg,
          status: isInMyGames
            ? "success"
            : insertGameFetching || myGamesFetching
            ? "loading"
            : insertGameError || myGamesError
            ? "error"
            : "idle",
        });
      })
    ) : isLoadingGames ? (
      <Loader />
    ) : isErrorGames ? (
      <>Something went wrong</>
    ) : null;
  };

  return (
    <Stack>
      <Flex
        minH={`calc(100vh - ${heightOfNavbar} - ${containerPadding}*2)`}
        justifyContent="center"
        alignItems="center"
      >
        <Stack spacing={4} maxW="xl" mx="auto">
          <Heading textAlign="center">See the hottest games</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            Add them with one click
          </Text>
          {hotGameCards()}

          <Box>
            <Stack isInline align="center" justifyContent="center">
              {signInButtonNode()}
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

interface IGameCard {
  game: IHotGame;
  onAddClick: (game: IHotGame) => void;
  status: "loading" | "success" | "error" | "idle";
  background: "white" | "gray.800";
}
const cardNode = ({ game, onAddClick, status, background }: IGameCard) => {
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      key={game.id}
    >
      <Box bg={background} maxW="lg" borderWidth="1px" rounded="lg">
        <Link
          href={`https://boardgamegeek.com/boardgame/${game.id}`}
          isExternal
          sx={{
            "&:hover": { textDecoration: "none" },
            "&:focus": { outline: "none" },
          }}
        >
          <Center>
            <Image
              src={game.thumbnail}
              alt={game.name}
              roundedTop="sm"
              boxSize="sm"
            />
          </Center>
        </Link>
        <Box p="6">
          <Box d="flex" alignItems="center" flexDirection="column">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {game.name}
            </Box>
            {game.yearpublished && (
              <Box
                mt="1"
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
              >
                {game.yearpublished}
              </Box>
            )}
            <Box
              mt="1"
              color="gray.300"
              fontWeight="semibold"
              fontSize="smaller"
              cursor="pointer"
            >
              {status === "success" ? (
                <Button disabled leftIcon={<CheckIcon />}>
                  Added to your list
                </Button>
              ) : status === "loading" ? (
                <>
                  <Loader />
                </>
              ) : status === "error" ? (
                <Button disabled leftIcon={<WarningTwoIcon />}>
                  Something went wrong
                </Button>
              ) : (
                <Button
                  onClick={(event) => {
                    event.preventDefault;
                    onAddClick(game);
                  }}
                  leftIcon={<AddIcon />}
                >
                  Add to your list
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default IndexPageComponent;
