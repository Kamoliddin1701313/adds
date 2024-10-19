import React from "react";
import savatcha from "../imgs/savatcha.png";
import vector3 from "../imgs/Vector3.png";
import vector4 from "../imgs/Vector4.png";
import userBtn from "../imgs/userBtn.svg";

// import inistagram from "../imgs/inistagram.svg";
import inistagram from "../imgs/inistagram.svg";
import teligram from "../imgs/telegram.svg";
import facebook from "../imgs/facebook.svg";
import tvitter from "../imgs/tvitter.svg";
import linkedIn from "../imgs/linkedIn.svg";
import salon from "../imgs/salon.jpg";
import {
  Wrapper,
  Wrap,
  WrapLocation,
  WrapTelLocation,
  WrapperTop,
  ImgLogo,
  UserLogo,
  Text,
  User,
  Nastroyka,
  UserImg,
  EmailFirma,
  Email,
  Line,
  UsersFonNumber,
  UserTelLink,
  Tel,
  UsersIconca,
  FoterText,
  FoterTitle,
  Foter,
  Img,
} from "./messag";
const Messag = () => {
  return (
    <Wrapper>
      <Wrap>
        <WrapTelLocation>
          <WrapperTop>
            <ImgLogo src={savatcha} alt="savatcha" />
            <UserLogo>
              <Text>
                Korzinka.uz <Nastroyka src={vector3} alt="vector4" />
              </Text>
              <User>
                <UserImg src={userBtn} alt="userBtn" /> 37.5k
              </User>
            </UserLogo>
          </WrapperTop>
          <EmailFirma>
            <Email src={vector3} alt={vector3} />
            Info-korzinka@gmail.com
          </EmailFirma>
          <Line></Line>
          <UsersFonNumber>
            <UserTelLink href="tel:+998972441313">
              <Tel src={vector4} />
              +998 97 244 13 13
            </UserTelLink>
            <UserTelLink href="tel:+998972441313">
              <Tel src={vector4} />
              +998 97 244 13 13
            </UserTelLink>
          </UsersFonNumber>
          <Line></Line>
          <UsersIconca>
            <UserTelLink href="tel:+998972441313">
              <Tel src={inistagram} />
              Inistagram
            </UserTelLink>
            <UserTelLink href="tel:+998972441313">
              <Tel src={teligram} />
              Teligram
            </UserTelLink>
            <UserTelLink href="http://www.facebook.com">
              <Tel src={facebook} />
              Facebook
            </UserTelLink>
            <UserTelLink href="">
              <Tel src={tvitter} />
              Tvitter
            </UserTelLink>
            <UserTelLink href="tel:+998972441313">
              <Tel src={linkedIn} />
              LinkedIn
            </UserTelLink>
          </UsersIconca>
        </WrapTelLocation>
        <WrapLocation>
          <Img src={salon} />
        </WrapLocation>
      </Wrap>
      <Line></Line>
      <Foter>
        <FoterText>Bio</FoterText>
        <FoterTitle>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
          voluptates minus ut odio eos facilis, quas odit veniam, necessitatibus
          magnam, sequi molestiae! Veritatis nihil fugit ratione, excepturi sint
          deserunt doloremque fugiat necessitatibus asperiores ipsum consectetur
          voluptates consequatur? Atque, voluptate expedita voluptatibus
          quisquam et provident, consectetur sapiente fuga facilis quasi
          explicabo architecto repudiandae fugiat, nihil quod accusamus amet
          magni aliquam ipsum? Quaerat explicabo earum, sapiente rem labore
          aliquid esse, mollitia architecto enim officiis quam nisi nulla quasi,
          rerum vitae aut id minima molestias vero consequatur! Ratione qui
          neque itaque corporis inventore dolores quod saepe maiores quisquam
          officia quibusdam explicabo, vitae quasi?
        </FoterTitle>
      </Foter>
    </Wrapper>
  );
};

export default Messag;
