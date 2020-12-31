import {
    Button,
    Container,
    Grid,
    GridItem,
    Box,
    Stack,
    IconButton,
    Center, Table, Thead, Tbody, Tr, Th, Td, TableCaption,Image, Divider
} from "@chakra-ui/react"
import ButtomNavbar from "../../components/ButtomNavbar"
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import React, { useState } from 'react';
function Home() {

    const [heart, setHeart] = useState(false);

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
                        <Tr>
                            <Td>
                            <Image
                                style={{display:"inline"}}
                                borderRadius="full"
                                objectFit="cover"
                                boxSize="30px"
                                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1UDTOxa0AQG0z7DAq-CITwU4T2ZWCCdMeZYmZrs3VPfy7oadbToXti1P7TlVDBfmyIjb9rtvUtRXpuv7C_MffjSKYCcO6n9lZvPZ6YFPjVCmuhwFabeIe&usqp=CAc"
                                alt="Segun Adebayo"
                            />
                            구찌샵 ✅
                            </Td>
                            <Td onClick={()=>{setHeart(!heart)}} isNumeric>{heart? 
                            <i class="far fa-heart"></i> : <i color="red" class="fas fa-heart"/>}
                              </Td>
                        </Tr>
                        <Tr>
                            <Td>feet</Td>
 
                            <Td isNumeric>30.48</Td>
                        </Tr>

                    </Tbody>
                </Table>
                <Divider />
            </PerfectScrollbar>

            {/* <ButtomNavbar /> */}
        </>
    );
}

export default Home;
