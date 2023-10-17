import React from "react";
import classes from "./Mypage.module.css";
const MypageInfo = () => {
    return (
        <React.Fragment>
                                <section class={classes.mypage_info}>
                        <h1>
                            <a>My Page</a>
                        </h1>
                        <div class={classes.mypage_info_2}>
                            <a>장바구니</a>
                            <a>고객센터</a>
                            <a>로그아웃</a>
                        </div>
                        <div class={classes.mypage_info_3}>
                            <div class={classes.mypage_info_profile}></div>
                            <div class={classes.mypage_info_4}>
                                <div class={classes.mypage_info_name}>
                                    <strong>뉴비_4a8f29533f4c</strong>
                                    <a>회원정보변경</a>
                                </div>
                                <div class={classes.mypage_info_level}>
                                    <strong>LV.1 뉴비</strong>
                                    <span>가입일 :2023.10.15</span>
                                </div>
                                <p class={classes.mypage_info_level_2}>김*아님 다음 등급인 루키까지 2,001점 남았습니다.
                                    <a>등급혜택 </a></p>
                            </div>
                            <div class={classes.mypage_info_menu}>
                                <a>
                                    <em>적립금 </em>
                                    <strong>0</strong>
                                </a>
                                <a href="https://www.musinsa.com/member/point">
                                    <em>포인트 </em>
                                    <strong>0</strong>
                                </a>
                                <a>
                                    <em>쿠폰 </em>
                                    <strong>170</strong>
                                </a>
                                <a>
                                    <em>후기작성</em>
                                    <strong>0</strong>
                                </a>
                            </div>
                        </div>
                    </section>
        </React.Fragment>
    )
}
export default MypageInfo;