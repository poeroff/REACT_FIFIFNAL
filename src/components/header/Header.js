import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown";
import React from "react";
import Slider from "../side/Slider";
import { useLoaderData } from "react-router-dom";
import Slideshow from "../img/Slideshow";
import Liveranking from "../body/Liveranking";


const Header = (props) => {
    console.log(props.data)
    
    const [dropdown, setdropdonw] = useState(false);
    const [dropdown1, setdropdonw1] = useState(false);
    const [dropdown2, setdropdonw2] = useState(false);
    const [dropdown3, setdropdonw3] = useState(false);
    const [dropdown4, setdropdonw4] = useState(false);
    const [dropdown5, setdropdonw5] = useState(false);
    const [dropdown6, setdropdonw6] = useState(false);
    const [dropdown7, setdropdonw7] = useState(false);
    const [input, setinput] = useState(false);
    const [sideinvalid, setsideinvalid] = useState(false);

    const buttonhandler = () => {
        setsideinvalid(!sideinvalid);
    }

    const handleMouseOver = () => {
        setdropdonw(true)
    }
    const handleMousedown = () => {
        setdropdonw(false)
    }


    const handleMouseOver1 = () => {
        setdropdonw1(true)
    }

    const handleMousedown1 = () => {
        setdropdonw1(false)
    }


    const handleMouseOver2 = () => {
        setdropdonw2(true)
    }
    const handleMousedown2 = () => {
        setdropdonw2(false)
    }


    const handleMouseOver3 = () => {
        setdropdonw3(true)
    }
    const handleMousedown3 = () => {
        setdropdonw3(false)
    }

    const handleMouseOver4 = () => {
        setdropdonw4(true)
    }
    const handleMousedown4 = () => {
        setdropdonw4(false)
    }

    const handleMouseOver5 = () => {
        setdropdonw5(true)
    }
    const handleMousedown5 = () => {
        setdropdonw5(false)
    }

    const handleMouseOver6 = () => {
        setdropdonw6(true)
    }
    const handleMousedown6 = () => {
        setdropdonw6(false)
    }

    const handleMouseOver7 = () => {
        setdropdonw7(true)
    }
    const handleMousedown7 = () => {
        setdropdonw7(false)
    }

    const inputhandler = () => {
        setinput(true);
    }
    const outputhandler = () => {
        setinput(false);
    }

    return (
        <React.Fragment>
            <header className={classes.header}>
                <div className={classes.container}>
                    <ul className={classes.nav} >
                        <div className={classes.h1}>
                            <h2 > TAE SINSA </h2>
                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver} onMouseOut={handleMousedown}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >랭킹</Link></li>
                            {dropdown && <div className={classes.dropdown}>
                                <Dropdown data={props.data.Ranking}></Dropdown>

                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver1} onMouseOut={handleMousedown1}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >업데이트</Link></li>
                            {dropdown1 && <div className={classes.dropdown1}>
                                <Dropdown data={props.data.Update}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver2} onMouseOut={handleMousedown2}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >코디</Link></li>
                            {dropdown2 && <div className={classes.dropdown2}>
                                <Dropdown data={props.data.stylist}> </Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver3} onMouseOut={handleMousedown3}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >세일</Link></li>
                            {dropdown3 && <div className={classes.dropdown3}>
                                <Dropdown data={props.data.Sale}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver4} onMouseOut={handleMousedown4}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >스페셜</Link></li>
                            {dropdown4 && <div className={classes.dropdown4}>
                                <Dropdown data={props.data.Special}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver5} onMouseOut={handleMousedown5}>
                            <li > <Link to="" className="nav-link px-2 link-secondary"> 매거진</Link></li>
                            {dropdown5 && <div className={classes.dropdown5}>
                                <Dropdown data={props.data.magazine}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver6} onMouseOut={handleMousedown6}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >이벤트</Link></li>
                            {dropdown6 && <div className={classes.dropdown6}>
                                <Dropdown data={props.data.Event}></Dropdown>
                            </div>}

                        </div>
                        <div className={classes.li} onMouseOver={handleMouseOver7} onMouseOut={handleMousedown7}>
                            <li > <Link to="" className="nav-link px-2 link-secondary" >브랜드</Link></li>
                            {dropdown7 && <div className={classes.dropdown7}>
                                <Dropdown data={props.data.Ranking}></Dropdown>
                            </div>}
                        </div>     
                    </ul>
                </div>
            </header>   
        </React.Fragment>
    )
}
export default Header;


