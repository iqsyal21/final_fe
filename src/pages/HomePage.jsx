import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardVideo from "../components/CardVideo";
import { Box, Button, Grid } from "@chakra-ui/react";

function HomePage({ token }) {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      const response = await fetch("http://localhost:8000/video");
      const dataResponse = await response.json();
      setVideos(dataResponse.data.videos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <Box bg="primary" p={5} minH="100vh" position="relative">
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {videos.map((item) => (
            <CardVideo key={item.id} item={item} />
          ))}
        </Grid>

        {token == null || token == "undefined" ? (
          ""
        ) : (
          <Link to="/add">
            <Button
              colorScheme="green"
              position="fixed"
              bottom="20px"
              right="20px"
              zIndex="10"
            >
              Tambah Item
            </Button>
          </Link>
        )}
      </Box>
    </>
  );
}

export default HomePage;
