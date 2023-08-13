/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  GridItem,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CardVideo({ item }) {
  return (
    <GridItem>
      <Card h="100%" bg="secondary">
        <CardBody textAlign="center">
          <Image
            boxSize="80%"
            objectFit="cover"
            src={item.img_url}
            alt="image video"
            m="auto"
          />
          <Flex mt="3" justifyContent="space-around" alignItems="center">
            <Text fontSize="md" color="white">Kategori : {item.category}</Text>
            <Link to={"/detail/" + item._id}>
              <Button colorScheme="blue">Lihat Detail</Button>
            </Link>
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default CardVideo;
