import React from "react";
import classes from "./MypageInfo.module.css";
const MypageRoot = () => {
    return (
        <React.Fragment>
            <div >
                <nav className={classes.nav}>
                    <span className={classes.nav_span}>바로접속 ON</span>
                    <div className={classes.nav_div}>
                        <h3>나의 쇼핑 활동</h3>
                        <a>주문 내역 조회</a>
                        <a>구매후기</a>
                        <a>래플 응모내역</a>
                        <a>상품문의</a>
                        <a>1:1문의</a>
                        <a>최근 본 상품</a>
                        <a>좋아요</a>
                        <a>나의 맞춤 정보</a>
                        <a>무신사페이 관리</a>
                        <a>무신사 현대카드 보기</a>
                        <a>매장 결제 내역</a>
                        <a>회원 혜택</a>
                    </div>
                    <div className={classes.nav_div}>
                        <h3>커뮤니티</h3>
                        <a>게시물/스크랩/댓글</a>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )

}
export default MypageRoot;