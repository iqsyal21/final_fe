import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "../components/Header";
import InputVideo from "../components/InputVideo";
import InputProduct from "../components/InputProduct";

function AddPage({ token }) {
    // validasi input belum dibikin
  const listCategory = [
    "Buku",
    "Dapur",
    "Elektronik",
    "Fashion",
    "Film & Musik",
    "Game",
    "Olahraga",
    "Otomotif",
    "Properti",
    "Rumah Tangga",
  ];

  return (
    <>
      <Header token={token} />
      <Tabs
        isFitted
        variant="enclosed"
        minH="100vh"
        p={5}
        bg="primary"
        color="white"
      >
        <TabList mb="1em">
          <Tab color="white">Tambah Video</Tab>
          <Tab color="white">Tambah Produk</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <InputVideo token={token} categories={listCategory} />
          </TabPanel>
          <TabPanel>
            <InputProduct token={token} categories={listCategory} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default AddPage;
