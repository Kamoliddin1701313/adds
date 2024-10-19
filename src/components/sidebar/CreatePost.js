import styled from "styled-components";

const Wrapper=styled.div`
    width: 100%;
    padding-bottom: 45px;
`
const ButtonsPages=styled.div`
    width: 100%;
    flex-wrap: wrap;
    gap: 25px;
    display: flex;
    margin-bottom: 25px;
    justify-content: center;
`
const PageButton=styled.button`
    display: flex;
    width: 23%;
    align-items: center;
    padding: 15px 20px;
    border-radius: 8px;
    background-color: blue;
    border: none;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;  
`
const Card=styled.div`
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    justify-content: center;
    height: 330px;
`
const CardWrappers=styled.div`
    margin-top: 30px;
    text-align: center;
`
const ImgTop=styled.img`
    width:35px;
    margin: 10px;
`
const ButtonVideo=styled.button`
    display: flex;
    align-items: center;
    right: 0;
    padding: 15px 20px;
    border-radius: 8px;
    background-color: blue;
    border: none;
    margin-top: 15px;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;
`
const CardText=styled.p``
const ImgVideo=styled.img`
    width: 20px;
    margin-right: 10px;
`
const Form=styled.form`
position: relative;
    width: 100%;
    margin-bottom: 50px;
`
const ProductInputName=styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 15px 20px;
    background-color: white;
    margin: 20px 0;
    border-radius: 8px;
    color: gray;
`
const ProductInputBrand=styled.input`
    width: 100%;
    border-radius: 8px;
    padding: 15px 20px;
    border: none;
    outline: none;
    background-color: white;
    color: gray;
`
const ForumPrace=styled.div`
    width: 100%;
    display: flex;
    margin: 20px 0;
    justify-content: space-between;
`
const ProductPrace=styled.input`
    width: 50%;
    border-radius: 8px;
    padding: 15px 20px;
    border: none;
    outline: none;
    background-color: white;
    color: gray;
`
const ProductSale=styled.input`
    width: 25%;
    border-radius: 8px;
    padding: 15px 20px;
    border: none;
    outline: none;
    background-color: white;
    color: gray;
`
const ForumText=styled.textarea`
    width: 100%;
    border-radius: 8px;
    padding: 15px;
    resize: none;
    border: none;
    outline: none;
    background-color: white;
    color: gray;
    height: 250px;
`
const ForumSelect=styled.div`
    width: 100%;
    display: flex;
    margin: 15px 0;
    gap: 30px;
    justify-content: space-between;
`
const SelectCategory=styled.select`
    width: 50%;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 8px;
`
const NextButton=styled.button`
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    padding: 15px 40px 15px 20px;
    border-radius: 8px;
    background-color: blue;
    border: none;
    color: white;
    font-size: 18px;
    outline: none;
    cursor: pointer;
`
const ButtonImg=styled.img`
    margin-right: 15px;
`
export {Wrapper,ButtonsPages,PageButton,Card,CardWrappers,ImgTop,CardText,ButtonVideo,ImgVideo,Form,ProductInputName,ProductInputBrand,ForumPrace,ProductPrace,ProductSale,ForumText,ForumSelect,SelectCategory,NextButton,ButtonImg}