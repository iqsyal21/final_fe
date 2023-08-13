import { useState } from "react";
import {
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";

function InputComment({ id, token }) {
  const [comment, setComment] = useState("...");

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleSubmit = async () => {
    if (comment == "" || comment == "...") {
      return alert("komentar tidak sesuai");
    } else {
      try {
        const response = await fetch(`https://be-peach.vercel.app/comment/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ comment: comment }),
        });

        const data = await response.json();
        alert(data.message);
        window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const commentEmpty = comment == "";

  return (
    <Center bg="primary" m="2" borderRadius="xl">
      <FormControl isInvalid={commentEmpty} m="3">
        <FormLabel>Comment</FormLabel>
        <Input type="text" value={comment} onChange={handleCommentChange} />
        {!commentEmpty ? (
          ""
        ) : (
          <FormErrorMessage>Komentar harus diisi</FormErrorMessage>
        )}
        <Button colorScheme="blue" w="100%" mt="4" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Center>
  );
}

export default InputComment;
