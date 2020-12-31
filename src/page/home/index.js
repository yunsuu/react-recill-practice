import {
 Table, Thead, Tbody, Tr, Th, Td, TableCaption,Image, Divider
} from "@chakra-ui/react"
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import React, { useState } from 'react';

import { RecoilRoot, useRecoilState, atom } from "recoil";
import {viewModeData, ShoesData, shopMallData} from "../../recoil/index"
function Home() {

    const [heart, setHeart] = useState(false);

    const [shopMall, setshopMall] = useRecoilState(shopMallData)
    const _shopMall = shopMall.slice()
    //console.log(_shopMall)
    return (
        <>
            <PerfectScrollbar>
                <Table  variant="simple">
              
                    <Thead>
                        <Tr>
                            <Th>쇼핑몰 (인증됨 ✅)</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    
                    <Tbody>
                        {shopMall.map((item, idx) => <Tr key={idx}>
                            <Td>
                            <Image
                                style={{display:"inline"}}
                                borderRadius="full"
                                objectFit="cover"
                                boxSize="30px"
                                src={item.img}
                                alt="Segun Adebayo"
                            />
                            {item.name}
                            </Td>
                            <Td onClick={
                                ()=>{
                                    console.log(_shopMall)
                                    //객체복사가 안되서 에러가 나는것같다 immer을 써보자
                                    _shopMall[idx]["like"] = !_shopMall[idx].like
                                    setshopMall(_shopMall)
                                }
                            } isNumeric>{item.like? 
                             <i class="fas fa-heart"/> : <i class="far fa-heart"/> }
                              </Td>
                        </Tr>)
                        }

                    </Tbody>
                </Table>
                <Divider />
            </PerfectScrollbar>

            {/* <ButtomNavbar /> */}
        </>
    );
}

export default Home;
