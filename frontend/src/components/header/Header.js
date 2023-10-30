import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Dropdown from "./Dropdown";
import React from "react";
import Slider from "../side/Slider";
import { useLoaderData } from "react-router-dom";
import Slideshow from "../imgslider/Slideshow";
import Liveranking from "../body/Liveranking";


const Header = (props) => {
  


    const product = JSON.parse(localStorage.getItem("product"))
 


    // const [dropdown, setdropdonw] = useState(false);
    // const [dropdown1, setdropdonw1] = useState(false);
    // const [dropdown2, setdropdonw2] = useState(false);
    // const [dropdown3, setdropdonw3] = useState(false);
    // const [dropdown4, setdropdonw4] = useState(false);
    // const [dropdown5, setdropdonw5] = useState(false);
    // const [dropdown6, setdropdonw6] = useState(false);
    // const [dropdown7, setdropdonw7] = useState(false);
    const [displayBlock, setDisplay] = useState(''); // 호준 코드 추가
    const [input, setinput] = useState(false);
    const [sideinvalid, setsideinvalid] = useState(false);
    const [SHOPHEADER, SETSHOPHEADER] = useState({})

    const buttonhandler = () => {
        setsideinvalid(!sideinvalid);
    }

    const inputhandler = () => {
        setinput(true);
    }
    const outputhandler = () => {
        setinput(false);
    }


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
   
    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.container}>
                    <ul className={classes.nav} >
                        <div className={classes.sinsa} >
                            <Link to = "/"> <h2 > 벛꽃 </h2> </Link>
                        </div>
                        <div className={classes.input}>
                            <input></input>
                        </div>
                    
                        <div className={classes.li} onMouseOver={() => setDisplay(0)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="Ranking" className="nav-link px-2 link-secondary" >랭킹</Link></li>
                            {displayBlock === 0 && <div className={classes.dropdown}>
                                <Dropdown data={data.Ranking}></Dropdown>
                            </div>}
                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(1)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >업데이트</Link></li>
                            {displayBlock === 1 && <div className={classes.dropdown1}>
                                <Dropdown data={data.Update}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(2)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >코디</Link></li>
                            {displayBlock === 2 && <div className={classes.dropdown2}>
                                <Dropdown data={data.stylist}> </Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(3)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >세일</Link></li>
                            {displayBlock === 3 && <div className={classes.dropdown3}>
                                <Dropdown data={data.Sale}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(4)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >스페셜</Link></li>
                            {displayBlock === 4 && <div className={classes.dropdown4}>
                                <Dropdown data={data.Special}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(5)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary"> 매거진</Link></li>
                            {displayBlock === 5 && <div className={classes.dropdown5}>
                                <Dropdown data={data.magazine}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(6)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >이벤트</Link></li>
                            {displayBlock === 6 && <div className={classes.dropdown6}>
                                <Dropdown data={data.EVENT}></Dropdown>
                            </div>}
                        </div>
                    </ul>
                </div>
            </header>

        </React.Fragment>
    )
}
export default Header;


