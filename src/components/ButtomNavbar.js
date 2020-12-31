import {
  Button,
  Stack,
  Center
} from "@chakra-ui/react"

import {viewModeData} from "../recoil/index"
import { useRecoilState } from "recoil";

function ButtomNavbar() {
  const [viewMode, setViewMode] = useRecoilState(viewModeData);
  return (
    <>
      {/* 하단 메뉴바 */}
      <Center borderWidth="2px" borderRadius="lg">
        <Stack direction="row" spacing={4}>
          <Button onClick={()=>{setViewMode(1)}} colorScheme="teal" variant="ghost"> <i class="fas fa-shoe-prints">{` 홈`}</i> </Button>
          <Button onClick={()=>{setViewMode(2)}} colorScheme="teal" variant="ghost"> <i class="fas fa-shopping-cart">{` 쇼핑몰`}</i> </Button>
          <Button onClick={()=>{setViewMode(3)}} colorScheme="teal" variant="ghost"> <i class="fas fa-heart">{` 찜`}</i> </Button>
          <Button onClick={()=>{setViewMode(4)}} colorScheme="teal" variant="ghost"> <i class="fas fa-user">{` 내정보`}</i> </Button>
        </Stack>
      </Center>


    </>
  );
}

export default ButtomNavbar;
