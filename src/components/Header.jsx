import { Box, Divider, Flex, Heading, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";

function Header({ token, setToken }) {
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null)
  };

  return (
    <Box bg="primary" p={4}>
      <Flex justifyContent="space-between" p={4} mb="1">
        <Heading color="white" as="h1" size="md">
          {location.pathname != "/" ? (
            <Link to="/">
              <ArrowBackIcon />
            </Link>
          ) : (
            "Tokopedia Play Clone Web App"
          )}
        </Heading>
        {token == null || token == "undefined" ? (
          <Link to="/login">
            <Button colorScheme="green">Masuk</Button>
          </Link>
        ) : (
          <Link to="/">
            <Button colorScheme="red" onClick={handleLogout}>
              Logout
            </Button>
          </Link>
        )}
      </Flex>
      <Divider />
    </Box>
  );
}

export default Header;
