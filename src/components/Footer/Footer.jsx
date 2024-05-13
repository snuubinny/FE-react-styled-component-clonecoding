import "./Footer.css";
import styled from "styled-components";


const Ftext = styled.p`
  font-size: 15px;
  color:#4F7BF6;
  margin-left:1250px;
  margin-top:-38px;
`;

const Ftext2=styled.p`
  font-size: 15px;
  color:#6F757C;
  margin-right:800px;
  margin-top:70px;
`
const Ftext3=styled.p`
  font-size: 15px;
  color:#6F757C;
  margin-right:1240px;
  margin-top:-10px;
`
const Ftext4=styled.p`
  font-size: 15px;
  color:#4F7BF6;
  margin-right:970px;
  margin-top:-35px;
`
const Ftext5=styled.p`
  font-size: 15px;
  color:#6F757C;
  margin-right:750px;
  margin-top:-35px;
`
const Ftext6=styled.p`
  font-size: 15px;
  color:#4F7BF6;
  margin-right:510px;
  margin-top:-36px;
`




const Footer = (props) => {
    return (
        <div
            className="Footer"  // 클래스 이름을 .Footer로 변경
            style={{
                backgroundColor: props.footerColor || "black",
            }}
        >
            <div>
                <Ftext2>Album example is © Bootstrap, but please download and customize it for yourself!
                </Ftext2>
                <Ftext3>New to Bootstrap?</Ftext3>
                <Ftext4>Visit the homepage </Ftext4>
                <Ftext5>or read out</Ftext5>
                <Ftext6>getting started guide.</Ftext6>

            </div>

            <Ftext>Back to top</Ftext>
        </div>
    );
};

export default Footer;