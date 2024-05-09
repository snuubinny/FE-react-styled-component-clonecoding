import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        <div
            className="Header"  // className을 중괄호로 감싸야 합니다.
            style={{
                backgroundColor: props.bennerColor || "black",
            }}
        >
           
        </div>
    );
};

export default Header;