import { Link } from "react-router-dom";
import classes from "./Underhead.module.css";
import { useState } from "react";

const Underhead = () => {
    const [LOGIN, SetLogin] = useState(true)

    const Loginhandler = () => {
        SetLogin(!LOGIN)
    }
    return (

        <ul className={classes.ul}>
            <li> <button className={classes.underbutton} onClick={Loginhandler}> {LOGIN ? "로그인" : "로그아웃" } </button></li>
            <li  className={classes.li}> <Link to="mypage" style={{ textDecoration: "none", color : "black"}}> 마이 페이지 </Link></li>
            <li  className={classes.li}> <Link to="recent" style={{ textDecoration: "none", color : "black"}}> 최근 본 상품</Link></li>
            <li  className={classes.li}> <Link to="likes" style={{ textDecoration: "none", color : "black"}}> 좋아요</Link></li>
            <li  className={classes.li}> <Link to="cart" style={{ textDecoration: "none", color : "black"}}> 장바구니 </Link></li>
            <li  className={classes.li}> <Link to="orders" style={{ textDecoration: "none", color : "black"}}>  주문 배송 조회</Link></li>

        </ul>


    )


}
export default Underhead;