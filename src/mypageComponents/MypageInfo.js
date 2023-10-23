import React from "react";
import classes from "./Mypage.module.css";
const MypageInfo = () => {
    return (
        <React.Fragment>
            <section className={classes.mypage_info}>
                <h1 className={classes.mypage_title}>My Page</h1>
                <div className={classes.mypage_info_2}>
                    <button className={classes.button}>장바구니</button>
                    <button className={classes.button}>고객센터</button>
                    <button className={classes.button}>로그아웃</button>
                </div>
                <div className={classes.mypage_info_3}>
                    <div className={classes.mypage_info_profile}></div>
                    <div className={classes.mypage_info_4}>
                        <div className={classes.mypage_info_name}>
                            <strong>뉴비_4a8f29533f4c</strong>
                            <button className={classes.button}>회원정보변경</button>
                        </div>
                        <div className={classes.mypage_info_level}>
                            <strong>LV.1 뉴비</strong>
                            <span>가입일 :2023.10.15</span>
                        </div>
                        <p className={classes.mypage_info_level_2}>김*아님 다음 등급인 루키까지 2,001점 남았습니다.
                            <button className={classes.button}>등급혜택 </button>
                        </p>
                    </div>
                    <div className={classes.mypage_info_menu}>
                        <button className={classes.button}>
                            <em>적립금 </em>
                            <strong>0</strong>
                        </button>
                        <button className={classes.button}>
                            <em>포인트 </em>
                            <strong>0</strong>
                        </button>
                        <button className={classes.button}>
                            <em>쿠폰 </em>
                            <strong>170</strong>
                        </button>
                        <button className={classes.button}>
                            <em>후기작성</em>
                            <strong>0</strong>
                        </button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default MypageInfo;