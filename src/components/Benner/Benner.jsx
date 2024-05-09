import React from 'react';
import "./Benner.css";
import Button from '../Button/Button'; // Button 컴포넌트 import 추가

const Benner = (props) => {
    return (
        <div
           className="benner"
           style={{
            backgroundColor: props.bennerColor || "black",
            width: "100%",
            height: "380px", // 높이를 조정
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
           }}
        >
            <h1>Album Example</h1>
            <p>Something short and leading about the collection below—its contents,</p>
            <p>the creator, etc. Make it short and sweet, but not too short so folks don’t</p>
            <p>simply skip over it entirely.</p>
            {/* 버튼 추가 */}
            <Button label="Main call to action" color="#2563eb" onClick={() => console.log("Button Clicked")} />
        </div>
    );
};

export default Benner;
