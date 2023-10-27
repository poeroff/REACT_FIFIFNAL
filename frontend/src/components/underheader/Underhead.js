import { Link } from "react-router-dom";
import classes from "./Underhead.module.css";
import { useState, useEffect } from "react";
import React from "react";

const Underhead = () => {
    const [LOGIN, SetLogin] = useState(true)
   
    //df1a372c4db88f5edd06ef93ae70d5cc

    const Loginhandler = () => {
        SetLogin(!LOGIN)
    }
    return (
        <React.Fragment>
            <ul className={classes.ul}>
                <li> <button className={classes.underbutton} onClick={Loginhandler}> {LOGIN ? "로그인" : "로그아웃"} </button></li>
                
                <li className={classes.lies}> <Link to="mypage" style={{ textDecoration: "none", color: "black" }}> 마이 페이지 </Link></li>
                <li className={classes.lies}> <Link to="recent" style={{ textDecoration: "none", color: "black" }}> 최근 본 상품</Link></li>
                <li className={classes.lies}> <Link to="likes" style={{ textDecoration: "none", color: "black" }}> 좋아요</Link></li>
                <li className={classes.lies}> <Link to="cart" style={{ textDecoration: "none", color: "black" }}> 장바구니 </Link></li>
                <li className={classes.lies}> <Link to="orders" style={{ textDecoration: "none", color: "black" }}>  주문 배송 조회</Link></li>
            


            </ul>


        </React.Fragment>


    )


}
export default Underhead;