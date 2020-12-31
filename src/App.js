//chakra ui
import {
  Container,
} from "@chakra-ui/react"

//recoil
import { RecoilRoot, useRecoilState, atom } from "recoil";

//내가 만든 파일
import Home from "./page/home"
import ButtomNavbar from "./components/ButtomNavbar"
import {viewModeData, myShoesData, myShopMallData} from "./recoil"


const wishListState = atom({
  key: "wishListState",
  default: []
  })

function App() {

  return (
    <>
      <RecoilRoot>
        <Container colorScheme="teal">
          <Container style={{ //overflowY: 'scroll',
            height: "700px"
          }} className="list-view" borderWidth="2px" borderRadius="lg">
            <Home />
          </Container>
          <ButtomNavbar />
        </Container>
      </RecoilRoot>
    </>
  );
}

export default App;
