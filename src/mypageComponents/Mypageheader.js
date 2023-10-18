import React from "react";
import classes from "./MypageHeader.module.css";

const Mypageheader = (props) => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <h1>MUSINSA</h1>
                <div className={classes.rank}>
                    <form method="get" className={classes.search_1}>
                        <input className={classes.search_input} />
                        <button type="button" className={classes.search_btn} >
                            검색
                        </button>
                    </form>
                    <div className={classes.rank_2}>
                        <ol className={classes.rank_3}>
                            <li className={classes.rank_4}>1 등: 양말<span className={classes.rank_5}>▲ 4</span></li>
                            <li className={classes.rank_4}>2 등: 양말<span className={classes.rank_5}>▲ 4</span></li>
                        </ol>
                    </div>
                </div>
                <nav className={classes.nav}>
                    <ul className={classes.nav_1}>
                        <li>
                            <a className={classes.nav_3}>아우터</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>카디건 &니트</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>뷰티 페스타</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>업데이트</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>코디</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>세일</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>스페셜</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>TV</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>이벤트</a>
                        </li>
                        <li>
                            <a className={classes.nav_3}>브랜드</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </React.Fragment>
    )
}
export default Mypageheader;