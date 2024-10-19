import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Wrappers=styled.div`
    width: 100%;
    margin: 0;
    gap: 20px;
    display: flex;
    height: 550px;
    justify-content: space-between;
    position: relative;
`
const ImgKorzinka=styled.div`
    position: relative;
    width: 50%;
`
const NextPage=styled.div`
 position: absolute;
 bottom: 0;
 right: 0;
`
const Text=styled.div`
 width: 50%;
`
const ImgKarzinkaSavatcha=styled.div`
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%,-50%);
`
const ImgKarzinkaP=styled.div`
   position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%,-50%);
`
const TextP=styled.p`
  color: "#2C2C2C";
  font-weight: 400;
  margin-top: 10px;
  line-height: 20px;
  font-family:"Source Sans Pro";
  letter-spacing: 1px;
  font-weight: 600;
`
const TextInput=styled.div`
    margin-top: 10px;
`
const SidebarLink=styled.div`
  width: 25%;
  flex-direction: column;
  border: 2px solid white;
  height: 320px;
  border-radius: 8px;
  padding: 20px;
  background-color: white;
  .active{
    color:blue;
  }
`
const Item=styled(NavLink)``

export {Wrappers,ImgKorzinka,NextPage,Text,ImgKarzinkaSavatcha,ImgKarzinkaP,TextP,TextInput,SidebarLink,Item}