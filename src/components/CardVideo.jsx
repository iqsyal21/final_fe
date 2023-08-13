/* eslint-disable react/prop-types */
import { Button, Card, CardBody, GridItem, Image } from "@chakra-ui/react";
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
          <Link to={"/detail/" + item._id}>
            <Button colorScheme="blue" mt="3">
              Lihat Detail
            </Button>
          </Link>
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default CardVideo;
