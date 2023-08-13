import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Center,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Box,
} from "@chakra-ui/react";

function InputVideo({ token, categories }) {
  const [videoLink, setVideoLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [category, setCategory] = useState(categories[0]);

  let history = useHistory();

  const handleTambahClick = async () => {
    if (videoLink == "") {
      return alert("link video harus diisi");
    } else if (imageLink == "") {
      return alert("link gambar harus diisi");
    } else {
      try {
        const response = await fetch("http://localhost:8000/video", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            video_url: videoLink,
            img_url: imageLink,
            category: category,
          }),
        });
        const dataResponse = await response.json();
        alert(dataResponse.message);
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <Center>
      <Box w="50%">
        <Heading as="h2" size="xl" textAlign="center" my="10">
          Masukan data video
        </Heading>
        <FormControl m="3">
          <FormLabel>Link Video (embed)</FormLabel>
          <Input
            type="text"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="https://www.youtube.com/embed/i7yPF7FnQ1E"
            mb="5"
          />
          <FormLabel>Link Gambar</FormLabel>
          <Input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            placeholder="https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg"
            mb="5"
          />
          <FormLabel>Kategori</FormLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            mb="5"
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category}
                style={{ backgroundColor: "#28282f" }}
              >
                {category}
              </option>
            ))}
          </Select>
          <Button
            colorScheme="blue"
            w="100%"
            mt="4"
            onClick={handleTambahClick}
          >
            Tambah
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
}

export default InputVideo;
