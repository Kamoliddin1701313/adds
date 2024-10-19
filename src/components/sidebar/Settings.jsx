import React from "react";
import {
  ImgKorzinka,
  NextPage,
  Wrappers,
  Text,
  ImgKarzinkaSavatcha,
  ImgKarzinkaP,
  TextP,
  TextInput,
} from "../../stayls/style";
import savatcha from "../imgs/savatcha.png";
const Settings = () => {
  return (
    <div className="containerWrapper">
      <Wrappers>
        <Text>
          <textarea
            placeholder="Write about your company or shop"
            style={{
              resize: "none",
              width: "100%",
              height: "150px",
              padding: "10px",
              fontSize: "16px",
            }}
          ></textarea>
          <textarea
            placeholder="put your  company or shop address"
            style={{
              resize: "none",
              padding: "10px",
              width: "100%",
              fontSize: "16px",
              height: "150px",
              marginTop: "20px",
            }}
          ></textarea>
          <TextP>
            I understand that the use of this platform is paid and I agree to
            the terms of this platform and I am using it voluntarily
          </TextP>
          <TextInput>
            <input
              type="checkbox"
              onChange={({ target: { checked } }) => checked}
            />
          </TextInput>
        </Text>
        <ImgKorzinka>
          <ImgKarzinkaSavatcha>
            <img src={savatcha} alt="savatcha" />
          </ImgKarzinkaSavatcha>
          <ImgKarzinkaP>
            <p className="pName">Company name</p>
          </ImgKarzinkaP>

          <NextPage>
            <button className="nextPage">
              <p>next</p>
            </button>
          </NextPage>
        </ImgKorzinka>
      </Wrappers>
    </div>
  );
};

export default Settings;
