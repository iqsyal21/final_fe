import { useState } from "react";
import {
  Center,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";

function LoginPage({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();
      alert(data.message);
      setToken(data.token)
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Center bg="primary" minH="100vh" color="white">
      <Box w="30%">
        <Heading as="h2" size="2xl" textAlign="center" mb="5">
          Masuk Akun
        </Heading>
        <FormControl m="3">
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="enter username"
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="enter password"
          />
          <Button colorScheme="blue" w="100%" mt="4" onClick={handleSubmit}>
            Masuk
          </Button>
        </FormControl>
        <Box textAlign="center">
          <Text m="5">
            Belum punya akun ? <Link to="/register">daftar</Link>
          </Text>
          <Link to="/">Kembali ke halaman utama</Link>
        </Box>
      </Box>
    </Center>
  );
}

export default LoginPage;
