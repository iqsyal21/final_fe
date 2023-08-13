import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Grid,
  Center,
  Heading,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import CardProduct from "../components/CardProduct";
import Comment from "../components/Comment";
import InputComment from "../components/InputComment";

function DetailPage({ token }) {
  const [video, setVideo] = useState("");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const getDetailVideo = async () => {
    try {
      const getVideo = await fetch(`https://be-peach.vercel.app/video/${id}`);
      const getComments = await fetch(
        `https://be-peach.vercel.app/comment/${id}`
      );

      const responseVideo = await getVideo.json();
      const responseComments = await getComments.json();

      setVideo(responseVideo.data.video[0]);
      setProducts(responseVideo.data.video[0].product_list);
      setComments(responseComments.data.comments);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailVideo();
  }, []);

  return (
    <>
      <Box bg="primary" p={5} minH="100vh">
        {loading ? (
          <Center h="70vh">
            <CircularProgress isIndeterminate size="100px" color="blue.500" />
          </Center>
        ) : (
          <Flex h="100%">
            <Box flexBasis="75%">
              <Flex flexDirection="column">
                <Center mb="4">
                  <iframe
                    style={{ width: "70%", height: "50vh" }}
                    src={video.video_url}
                  />
                </Center>
                <Box w="100%">
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    {products.map((item) => (
                      <CardProduct key={item.id} item={item} />
                    ))}
                  </Grid>
                </Box>
              </Flex>
            </Box>
            <Box
              flexBasis="25%"
              bg="black"
              color="white"
              ml="5"
              h="max-content"
              borderRadius="xl"
            >
              {comments.length > 0 ? (
                comments.map((item) => <Comment item={item} token={token} />)
              ) : (
                <Text textAlign="center" my="3">
                  tidak ada komentar
                </Text>
              )}
              <Heading as="h4" size="md" textAlign="center" mt="5">
                Tambah Komentar
              </Heading>
              {token == null || token == "undefined" ? (
                <Text fontSize="md" textAlign="center" m="4">
                  Masuk terlebih dahulu <br /> untuk menambahkan komentar
                </Text>
              ) : (
                <InputComment id={id} token={token} />
              )}
            </Box>
          </Flex>
        )}
      </Box>
    </>
  );
}

export default DetailPage;
