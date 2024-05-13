import "./Header.css";
import bar3 from '../../assets/bars-3.svg'
import camera from '../../assets/camera.svg'
import styled from "styled-components";

const Headertitle = styled.h1`
  font-size: 24px;
  margin-right: 1000px;
  margin-top:-35px;
  color:white;
`;

const Icon = styled.img`
   width:30px;
   height:30px;
   color:white;
   margin-right:1130px;
   margin-top:10px;
`;

const Icon2 = styled.img`
  width: 40px;
  height: 40px;
  margin-left:1100px;
  position: relative;
  top: -50px; /* 상대적인 위치 조정 */

`;

const Header = (props) => {
    return (
        <div
            className="Header"
            style={{
                backgroundColor: props.headerColor || "black",
            }}
        >
           <Icon src={camera} />
            <Headertitle>Album</Headertitle>
           <Icon2 src={bar3}></Icon2>
        </div>
    );
};

export default Header;