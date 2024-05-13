import React from 'react';
import "./Box.css";
import flowerImage from '../../assets/flower.jpeg'
import Button2 from '../Button2/Button2'
import styled from "styled-components";


const Text = styled.p`
  font-size: 15px;
  color:grey;
  margin-top:-28px;
  margin-left:330px;
`;

const Box = (props) => {
    return (
        <div className="Box" style={{ backgroundColor: props.boxColor || "black" }}>
            <img src={flowerImage} style={{width: "100%", height: "60%", objectFit: "cover"}} />
            <div className="text-container">
                <p>This is a wider card with supporting text</p>
                <p>below as a natural lead-in to additional</p>
                <p>content. This content is a little bit longer.</p>
            </div>

            <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '15px' }}>
                    <Button2 label="View"/>
                </div>
                <div>
                    <Button2 label="Edit"/>
                </div>
            </div>
            <Text>9mins</Text>
        </div>
    );
};

export default Box;