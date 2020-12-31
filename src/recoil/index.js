import { atom } from "recoil";

// 1 : 홈
// 2 : 쇼핑몰
// 3 : 찜
// 4 : 내정보
const viewModeData = atom({
    key: "viewModeData",
    default: 1
});

//찜한 신발 리스트
const myShoesData = atom({
    key: "myShoesData",
    default: []
});

//찜한 쇼핑몰 리스트
const shopMallData = atom({
    key: "shopMallData",
    default: [
        {
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1UDTOxa0AQG0z7DAq-CITwU4T2ZWCCdMeZYmZrs3VPfy7oadbToXti1P7TlVDBfmyIjb9rtvUtRXpuv7C_MffjSKYCcO6n9lZvPZ6YFPjVCmuhwFabeIe&usqp=CAc",
            name: "구찌샵",
            like: false
        },
        {
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSYRn0eiIOcABKb7qASk5hkQGXnpvoUkpA48mowUb6JwQo9UHOINqm_DUWJ_fknozUTcSWPv58523FHGh7H75_crOCmmyCcm6Dj52rLjuFS8U8UtZQY4bIOBDw&usqp=CAc",
            name: "오피스룩",
            like: false
        },
        {
            img: "https://lh3.googleusercontent.com/proxy/zwY7ngzRgFYidmhCcKUTStTMp1E-x18gECs0qfIL1THfzSyWcUmK__BTDYTYkmB_MnfJY5WFxeDbMmcnSLBOLBvHoiHzYlgxv5fkeSotuiUvbCJYKPHegWwyegohzNSI4wcFUWAmKDXnU6ct5l_MwHgZUTpfmV7eUdU2CAjKDs_0dpZ8dWLNKBXMP5aDuIK1Z1pLMdCUX8j6aDgmNCN8opxqVZvXdrlMx9Ot8EiSw7PpU0nZn3OBkSYU0Xg4dh_WpEGUlMbt1i9C-r2gHHS4Y-So5GicpOpxj_k-Ct3STO46Z774ApmbVE0YTagXILYDtUUY7Q",
            name: "야핀팬츠 스토어",
            like: false
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuUP7GjdxGG0bDFUNg1KLjahzLHN5cI0x0Q&usqp=CAU",
            name: "갓스프래 스토어",
            like: false
        },
    ]
});


export { viewModeData, myShoesData, shopMallData }