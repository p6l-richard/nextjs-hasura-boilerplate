import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import AccessDeniedIndicator from "components/AccessDeniedIndicator";
import { useInsertGameMutation } from "generated-graphql";
import { useSession } from "next-auth/client";
import React, { ChangeEvent, useState } from "react";

const AddNewGameForm = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [bggId, setBggId] = useState<number>();
  const [session] = useSession();
  const [insertGame, { loading: insertGameFetching, error: insertGameError }] =
    useInsertGameMutation();

  if (!session) {
    return (
      <AccessDeniedIndicator message="You need to be signed in to add a new game!" />
    );
  }

  const handleSubmit = async () => {
    await insertGame({
      variables: {
        user_id: session.id,
        name,
        bgg_id: bggId,
        description,
      },
    });

    setDescription("");
  };

  const errorNode = () => {
    if (!insertGameError) {
      return false;
    }

    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{insertGameError}</AlertTitle>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    );
  };

  return (
    <Stack spacing={4}>
      {errorNode()}
      <Box p={4} shadow="lg" rounded="lg">
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">What is the game called?</FormLabel>
            <Input
              id="name"
              size="sm"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.currentTarget.value)
              }
              isDisabled={insertGameFetching}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="description">What is the game about?</FormLabel>
            <Textarea
              id="description"
              value={description}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.currentTarget.value)
              }
              isDisabled={insertGameFetching}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="bgg_id">
              Please insert BoardGameGeek's Id
            </FormLabel>
            <NumberInput
              id="bgg_id"
              value={bggId}
              onChange={(_, valueAsNumber) => setBggId(valueAsNumber)}
              isDisabled={insertGameFetching}
            >
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl>
            <Button
              loadingText="Posting..."
              onClick={handleSubmit}
              isLoading={insertGameFetching}
              isDisabled={!name.trim()}
            >
              Save
            </Button>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddNewGameForm;
