/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import {
  GridItem,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function CardProduct({ item }) {
  const convertPrice = (price) => {
    return "Rp. " + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <GridItem>
      <Card h="100%" bg="secondary" color="white">
        <CardBody>
          <Image
            boxSize="80%"
            objectFit="cover"
            m="auto"
            src={item.img_url}
            alt={item.title}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text fontSize="md">{convertPrice(item.price)}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <a href={item.link} target="_blank">
              <Button variant="solid" colorScheme="blue">
                Beli
              </Button>
            </a>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

export default CardProduct;
