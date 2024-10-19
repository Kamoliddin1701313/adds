import React from "react";
import { Item, SidebarLink } from "../stayls/style";
import vector1 from "./imgs/Vector1.png";
import vector2 from "./imgs/Vector2.png";
import vector3 from "./imgs/Vector3.png";
import vector4 from "./imgs/Vector4.png";
import vector5 from "./imgs/Vector5.png";
const Sidebar = () => {
  return (
    <SidebarLink>
      <div className="activPage">
        <Item className="pageLink" to={"/massag"}>
          <img alt="ioewtie" src={vector1} />
          <p>Massages</p>
        </Item>
      </div>
      <div className="activPage">
        <Item className="pageLink" to={"/request"}>
          <img alt="ioewtie" src={vector5} /> <p>Request</p>
        </Item>
      </div>
      <div className="activPage">
        <Item className="pageLink" to={"/createpost"}>
          <img alt="ioewtie" src={vector2} />
          <p>Createpost</p>
        </Item>
      </div>
      <div className="activPage">
        <Item className="pageLink" to={"/contacts"}>
          <img alt="ioewtie" src={vector3} />
          <p>Contacts</p>
        </Item>
      </div>
      <div className="activPage">
        <Item className="pageLink" to={"/settings"}>
          <img alt="ioewtie" src={vector4} />
          <p>Settings</p>
        </Item>
      </div>
    </SidebarLink>
  );
};

export default Sidebar;
