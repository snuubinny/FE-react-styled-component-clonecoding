import React from 'react';
import Header from "../components/Header/Header";
import Benner from '../components/Benner/Benner'; // Benner 컴포넌트 import 추가

const Mypage = () => {
    return (
        <div className="mypage">
            <div className="header"> 
                <Header headerColor="#363A3F" />
            </div>
            <Benner bennerColor="white"/> {/* 버튼이 포함된 Benner 컴포넌트 */}
            <p>dfkjehfkds</p>
        </div>
    );
};

export default Mypage;
