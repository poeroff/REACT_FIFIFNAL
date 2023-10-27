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

    // const handleMouseOver = () => {
    //     setdropdonw(true)
    // }
    // const handleMousedown = () => {
    //     setdropdonw(false)
    // }

    // const handleMouseOver1 = () => {
    //     setdropdonw1(true)
    // }

    // const handleMousedown1 = () => {
    //     setdropdonw1(false)
    // }

    // const handleMouseOver2 = () => {
    //     setdropdonw2(true)
    // }
    // const handleMousedown2 = () => {
    //     setdropdonw2(false)
    // }

    // const handleMouseOver3 = () => {
    //     setdropdonw3(true)
    // }
    // const handleMousedown3 = () => {
    //     setdropdonw3(false)
    // }

    // const handleMouseOver4 = () => {
    //     setdropdonw4(true)
    // }
    // const handleMousedown4 = () => {
    //     setdropdonw4(false)
    // }

    // const handleMouseOver5 = () => {
    //     setdropdonw5(true)
    // }
    // const handleMousedown5 = () => {
    //     setdropdonw5(false)
    // }

    // const handleMouseOver6 = () => {
    //     setdropdonw6(true)
    // }
    // const handleMousedown6 = () => {
    //     setdropdonw6(false)
    // }

    // const handleMouseOver7 = () => {
    //     setdropdonw7(true)
    // }
    // const handleMousedown7 = () => {
    //     setdropdonw7(false)
    // }

    const inputhandler = () => {
        setinput(true);
    }
    const outputhandler = () => {
        setinput(false);
    }
    useEffect(() =>{

        const maindata = async() =>{
            const response = await fetch("http://localhost:5000/");

            if(!response.ok){
                throw new Error("NOT DATA")
            }
            const data = await response.json();
            SETSHOPHEADER(data);
        }
        maindata()
    },[])
   
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
                                <Dropdown data={SHOPHEADER.Ranking}></Dropdown>

                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(1)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >업데이트</Link></li>
                            {displayBlock === 1 && <div className={classes.dropdown1}>
                                <Dropdown data={SHOPHEADER.Update}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(2)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >코디</Link></li>
                            {displayBlock === 2 && <div className={classes.dropdown2}>
                                <Dropdown data={SHOPHEADER.stylist}> </Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(3)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >세일</Link></li>
                            {displayBlock === 3 && <div className={classes.dropdown3}>
                                <Dropdown data={SHOPHEADER.Sale}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(4)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >스페셜</Link></li>
                            {displayBlock === 4 && <div className={classes.dropdown4}>
                                <Dropdown data={SHOPHEADER.Special}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(5)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary"> 매거진</Link></li>
                            {displayBlock === 5 && <div className={classes.dropdown5}>
                                <Dropdown data={SHOPHEADER.magazine}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={() => setDisplay(6)} onMouseOut={() => setDisplay('')}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >이벤트</Link></li>
                            {displayBlock === 6 && <div className={classes.dropdown6}>
                                <Dropdown data={SHOPHEADER.EVENT}></Dropdown>
                            </div>}
                        </div>
                    </ul>
                </div>
            </header>

        </React.Fragment>
    )
}
export default Header;


