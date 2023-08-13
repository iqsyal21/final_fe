import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardVideo from "../components/CardVideo";
import { Box, Button, Grid, CircularProgress, Center } from "@chakra-ui/react";

function HomePage({ token }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    try {
      const response = await fetch("https://be-peach.vercel.app/video");
      const dataResponse = await response.json();
      setVideos(dataResponse.data.videos);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <Box bg="primary" p={5} minH="100vh" position="relative">
        {loading ? (
          <Center h="70vh">
            <CircularProgress isIndeterminate size="100px" color="blue.500" />
          </Center>
        ) : (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {videos.map((item) => (
              <CardVideo key={item.id} item={item} />
            ))}
          </Grid>
        )}

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
