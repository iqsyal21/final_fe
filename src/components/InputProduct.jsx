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

function InputProduct({ token, categories }) {
  const [productLink, setProductLink] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(categories[0]);

  let history = useHistory();

  const handleTambahClick = async () => {
    if (productLink == "") {
      return alert("link produk harus diisi");
    } else if (imageLink == "") {
      return alert("link gambar harus diisi");
    } else if (title == "") {
      return alert("nama produk harus diisi");
    } else if (price == "" || price <= 0) {
      return alert("harga tidak sesuai");
    } else {
      try {
        const response = await fetch("http://localhost:8000/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            link: productLink,
            img_url: imageLink,
            title: title,
            category: category,
            price: price,
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
          <FormLabel>Link Produk</FormLabel>
          <Input
            type="text"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            placeholder="https://tokopedia.link/QJF5g9TxFBb"
            mb="5"
          />
          <FormLabel>Link Gambar</FormLabel>
          <Input
            type="text"
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            placeholder="https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg"
            mb="5"
          />
          <FormLabel>Nama Produk</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="nama produk"
            mb="5"
          />
          <FormLabel>Harga</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0"
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

export default InputProduct;
