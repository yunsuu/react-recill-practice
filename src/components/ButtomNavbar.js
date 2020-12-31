import {
  Button,
  Stack,
  Center
} from "@chakra-ui/react"

function ButtomNavbar() {
  return (
    <>
      {/* 하단 메뉴바 */}
      <Center borderWidth="2px" borderRadius="lg">
        <Stack direction="row" spacing={4}>
          <Button colorScheme="teal" variant="ghost"> <i class="fas fa-shoe-prints">{` 신발`}</i> </Button>
          <Button colorScheme="teal" variant="ghost"> <i class="fas fa-shopping-cart">{` 쇼핑몰`}</i> </Button>
          <Button colorScheme="teal" variant="ghost"> <i class="fas fa-heart">{` 찜`}</i> </Button>
          <Button colorScheme="teal" variant="ghost"> <i class="fas fa-user">{` 내정보`}</i> </Button>
        </Stack>
      </Center>


    </>
  );
}

export default ButtomNavbar;
