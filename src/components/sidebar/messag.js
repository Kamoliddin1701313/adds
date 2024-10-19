import styled from "styled-components";
const Wrapper =styled.div`
    width: 100%;
    background-color: white;
`
const Wrap =styled.div`
    width: 100%;
    gap: 60px;
    padding: 20px 20px 0 20px;
    display: flex;
`
const WrapTelLocation =styled.div`
    width: 40%;
`

const WrapLocation =styled.div`
    width: 60%;
    border-radius: 8px;
    background-color: yellow;
`
const WrapperTop =styled.div`
    width: 100%;
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Text=styled.div`
    width: 100%;
    display: flex;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const User=styled.div`
    width: 60%;
    display: flex;
    gap: 10px;
    font-size: 18px;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const ImgLogo =styled.img`
    width: 40%;
`
const UserLogo =styled.div`
    width: 60%;
    flex-direction: column;
    margin-left: 20px;
    font-size: 20px;
`
const Nastroyka =styled.img`
    margin-right: 35px;

`
const Email =styled.img``
const EmailFirma =styled.div`
    margin: 25px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
` 
const Line=styled.div`
    width: 100%;
    height: 1px;
    margin: 15px 0;
    background-color: gray;
`
const UsersFonNumber=styled.div`
    width: 100%;
`
const Tel=styled.img``
const UserTelLink=styled.a`
display:flex;
width: 45%;
color: gray;
font-weight: bold;
gap: 10px;
padding: 10px 0;
text-decoration: none;
`
const UsersIconca=styled.a`
display:flex;
color: gray;
font-weight: bold;
flex-wrap: wrap;
gap: 10px;
justify-content: space-between;
text-decoration: none;
`
const UserImg =styled.img``
const Foter=styled.div`
    width: 100%;
    padding:0 20px 20px 20px;
`

const FoterText=styled.h3`
    font-weight: bold;
    color: "000000";
`
const Img=styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`
const FoterTitle=styled.h4`
    font-weight: bold;
    color: gray;
    margin-top: 10px;
    line-height: 22px;
    text-align: justify;
`
export {Wrapper,Wrap,WrapLocation,WrapTelLocation,WrapperTop,ImgLogo,UserLogo,Text,User,Nastroyka,UserImg,EmailFirma,Email,Line,UsersFonNumber,UserTelLink,Tel,UsersIconca,Foter,FoterText,FoterTitle,Img}