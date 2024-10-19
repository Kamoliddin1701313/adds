import React, { useRef, useState } from "react";
import plus from "./imgs/plusBtn.png";
import savatcha from "./imgs/savatcha.png";
import facebook from "./imgs/facebook.svg";
import linkedin from "./imgs/linkedIn.svg";
import inistagram from "./imgs/inistagram.svg";
import teligram from "./imgs/telegram.svg";
import tvettir from "./imgs/tvitter.svg";
import telImg from "./imgs/telImg.svg";
import plusFail from "./imgs/plus.svg";
import fi_user from "./imgs/fi_user.svg";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const [inputShow, setInputShow] = useState(false);

  const navigate = useNavigate();

  const nameCompany = useRef();
  const telNumberCompany = useRef();
  const inistagramName = useRef();
  const telegtamName = useRef();
  const facebookName = useRef();
  const tvitterName = useRef();
  const linkedIn = useRef();

  return (
    <div className="containerWrapper">
      <div className="regstratsiyaForm">
        <div className="registr">
          <form>
            <div className="position">
              <img className="telImg" src={fi_user} alt="telImg" />
              <input
                ref={nameCompany}
                className="inputName"
                type="text"
                name="komponiya"
                placeholder="Write your compant or shop name"
              />
            </div>
            <div className="position">
              <img className="telImgPlus" src={telImg} alt="telImg" />
              <input
                className="inputNumber"
                ref={telNumberCompany}
                min="1"
                type="number"
                name="telNumber"
                placeholder="+998 (98) ___ __ __"
              />
              <button
                type="button"
                onClick={() => setInputShow(!inputShow)}
                className="addUser"
              >
                <img src={plus} alt="plus btn" />
              </button>
            </div>
          </form>

          <div className="position">
            {inputShow ? (
              <div>
                <img className="telImgPlus" src={telImg} alt="telImg" />
                <input
                  className="inputNumber"
                  min="1"
                  type="number"
                  name="telNumber"
                  placeholder="+998 (98) ___ __ __"
                />
                <button
                  type="button"
                  onClick={() => setInputShow(!inputShow)}
                  className="addUser"
                >
                  <img src={plus} alt="plus btn" />
                </button>
              </div>
            ) : null}
          </div>

          <div className="content ">
            <label htmlFor="showFail">
              <img src={plusFail} alt="plus" className="plusFail" />
            </label>
            <input
              style={{ borderRadius: "0 8px 8px 0" }}
              id="showFail"
              className="showFail"
              type="file"
              placeholder="Content"
            />
          </div>
        </div>

        <div className="formImg">
          <img src={savatcha} alt="savatcha" />
          <p className="pName">Company name</p>
        </div>
      </div>

      <div>
        <p className="text">Write your social links</p>
        <form action="#">
          <div className="classes classesLink">
            <img className="telImg" src={inistagram} alt="inistagram" />
            <input className="inputName" type="text" ref={inistagramName} />
          </div>
          <div className="classes classesLink1">
            <img className="telImg" src={teligram} alt="teligram" />
            <input className="inputName" type="text" ref={telegtamName} />
          </div>
          <div className="classes classesLink2">
            <img className="telImg" src={facebook} alt="facebook" />
            <input className="inputName" type="text" ref={facebookName} />
          </div>
          <div className="classes classesLink3">
            <img className="telImg" src={tvettir} alt="tvetter" />
            <input className="inputName" type="text" ref={tvitterName} />
          </div>
          <div className="classes classesLink4">
            <img className="telImg" src={linkedin} alt="linkedIn" />
            <input className="inputName" type="text" ref={linkedIn} />
          </div>
        </form>
      </div>

      <div className="foter">
        <div className="footerEmail">
          <fieldset>
            <legend>Your email</legend>
            <input type="email" />
          </fieldset>
        </div>
        <div className="footerPassword">
          <fieldset>
            <legend>Password</legend>
            <input type="password" />
          </fieldset>
          <input type="checkbox" className="checkbox" id="check" />
          <label htmlFor="check">View</label>
          <fieldset>
            <legend>Password again</legend>
            <input type="password" />

            <button onClick={() => navigate("/request")} className="nextPage">
              <p>next</p>
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Body;
