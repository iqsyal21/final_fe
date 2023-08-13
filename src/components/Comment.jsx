import jwt_decode from "jwt-decode";
import {
  Button,
  Card,
  CardBody,
  Text,
  Divider,
  Flex,
  Box,
} from "@chakra-ui/react";

function Comment({ item, token }) {
  const convertDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return "beberapa detik yang lalu";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} menit yang lalu`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} jam yang lalu`;
    } else {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString("id-ID", options);
    }
  };

  const buttonDelete = (username) => {
    if (token == null || token == "undefined") {
      return "";
    } else {
      return (
        <>
          {jwt_decode(token).username == username ? (
            <Box textAlign="right">
              <Button
                fontSize="xs"
                bg="primary"
                color="white"
                border="1px"
                _hover={{ color: "red" }}
                mb="2"
                onClick={handleDelete}
              >
                Hapus
              </Button>
            </Box>
          ) : (
            ""
          )}
        </>
      );
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("yakin hapus komentar");
    if (confirmDelete == true) {
      try {
        const response = await fetch(
          `http://localhost:8000/comment/${item._id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const dataResponse = await response.json();
        alert(dataResponse.message);
        window.location.reload();
      } catch (error) {
        console.log("ini error", error);
      }
    }
  };

  return (
    <Card m="3" bg="primary" color="white">
      <CardBody>
        {buttonDelete(item.username)}
        <Flex justifyContent="space-between">
          <Text fontSize="md">{item.username}</Text>
          <Text fontSize="sm">{convertDate(item.time)}</Text>
        </Flex>
        <Divider my="2" />
        <Text fontSize="sm">{item.comment}</Text>
      </CardBody>
    </Card>
  );
}

export default Comment;
