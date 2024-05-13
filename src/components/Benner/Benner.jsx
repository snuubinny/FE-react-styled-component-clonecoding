import React from 'react';
import styled from 'styled-components'; // styled-components 가져오기
import "./Benner.css";
import Button from '../Button/Button';

const Btext1 = styled.p`
  font-size: 20px;
  color: grey;
  margin-top:-10px;
`;
const Btext2 = styled.p`
  font-size: 20px;
  color: grey;
  margin-top:-20px;
`;
const Btext3 = styled.p`
  font-size: 20px;
  color: grey;
  margin-top:-20px;
`;


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
            <Btext1>Something short and leading about the collection below—its contents,</Btext1>
            <Btext2>the creator, etc. Make it short and sweet, but not too short so folks don’t</Btext2>
            <Btext3>simply skip over it entirely.</Btext3>

            <div style={{display:'flex',flexDirection:'row'}}>
             <div style={{marginRight:'5px'}}>
              <Button label="Main call to action" color="#4F7BF6" hoverColor="#4269D1"/>
             </div>
             <div>
              <Button label="Secondary action" color="#6F757C" hoverColor="#5E6369"/>
             </div>
            </div>

        </div>
    );
};

export default Benner;
