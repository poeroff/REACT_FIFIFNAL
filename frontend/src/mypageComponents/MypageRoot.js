import React from "react";
import classes from "./MypageInfo.module.css";
const MypageRoot = () => {
    return (
        <React.Fragment>
            <div >
                <nav className={classes.nav}>
                    <span className={classes.nav_span}>바로접속 ON</span>
                    <div className={classes.nav_div}>
                        <p>나의 쇼핑 활동</p>
                        <button type="button">
                            <span> 주문내역조회</span>
                        </button>
                        <button type="button">
                            <span> 구매후기</span>
                        </button>
                        <button type="button">
                            <span> 래플 응모내역</span>
                        </button>
                        <button type="button">
                            <span> 상품문의</span>
                        </button>
                        <button type="button">
                            <span> 1:1문의</span>
                        </button>
                        <button type="button">
                            <span> 최근 본 상품</span>
                        </button>
                        <button type="button">
                            <span> 좋아요</span>
                        </button>
                        <button type="button">
                            <span> 나의 맞춤 정보</span>
                        </button>
                        <button type="button">
                            <span> 무신사페이 관리</span>
                        </button>
                        <button type="button">
                            <span> 무신사 현대카드 보기</span>
                        </button>
                        <button type="button">
                            <span> 매장 결제 내역</span>
                        </button>
                        <button type="button">
                            <span> 회원 혜택</span>
                        </button>
                    </div>
                    <div className={classes.nav_div}>
                        <p>커뮤니티</p>
                        {}
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )

}
export default MypageRoot;