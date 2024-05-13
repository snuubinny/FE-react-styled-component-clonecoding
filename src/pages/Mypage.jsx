import React from 'react';
import Header from "../components/Header/Header";
import Benner from '../components/Benner/Benner';
import Box from '../components/Box/Box';
import Footer from '../components/Footer/Footer';

const Mypage = () => {
    // 0부터 8까지의 숫자 배열 생성
    const boxIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="mypage">
            <div className="header"> 
                <Header headerColor="#363A3F" />
            </div>
            <div><Benner bennerColor="white"/></div>
            <div className="box-container">
                {boxIndex.map(Index => (
                    <Box key={Index} boxColor='white'/>
                ))}
            </div>
            <div className="footer">
                <Footer footerColor="white"/>
            </div>
        </div>
    );
};

export default Mypage;