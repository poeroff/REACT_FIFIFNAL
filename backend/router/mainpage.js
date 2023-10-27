const express = require("express");
const router = express.Router()



const data = {
    EVENT: {
        V1: "래플", V2:"랜덤 이벤트" , V3: "룩북 이벤트" ,V4:"체험단", V5:"회원 후기" ,V6:"신규 브랜드",V7:"뉴브랜드 데이",V8:"첫 구매 990원",V9:"휴면 이벤트",V10:"사은품"
    },
    Ranking:{
        R1 :"상품",
        R2 : "브랜드",
        R3 : "검색어"
    },
    Sale :{
        A1: "쿠폰",
        A2: "세일",
        A3: "타임세일",
        A4 : "기획전"
  
    },
    Special:{
        E1: "쇼케이스",
        E2: "스폐셜이슈",
        E3: "단독상품",
  
    },
    Update:{
        update_1 : "신상품",
        update_2 : "재입고",
        update_3 : "세일소식",
        update_4 : "이벤트",
    },
    magazine : {
        M1: "뉴스",M2: "매거진",M3: "쇼케이스",M4: "커뮤니티",M5: "브랜드 구인"
  
    },
    stylist:{
        S1: "코디숍",S2: "코디맵",S3: "브랜드 스냅",S4: "스트립 스냅"
    }
  }

router.get("/",(req,res,next)=>{
    res.send(data);
})

module.exports = router