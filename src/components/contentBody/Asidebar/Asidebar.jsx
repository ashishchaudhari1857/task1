import React from "react";
import { useState } from "react";
import classes from "./Asidebar.module.css";
import { IoMdLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { FaStarOfDavid } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { TfiSupport } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Asidebar() {

    const [toggle, setToggle] = useState(false);

    const toggleMobileMenu = () => {
      setToggle(!toggle);
    };
  return (
    <>
      <div className={classes.Asidebar}>
        <div className={classes.profile}>
        <div >
          <img src="HeroImage.jpg" alt=""></img>
        </div>
        <h3>Ashish Chaudhari</h3>
        <p> achaudahri@gamail.com</p>
      </div>
      <div className={classes.menue}> 
        <div>
          {" "}
          <MdDashboard className={classes.icon}></MdDashboard>
          <span>Dashbaoard</span>
        </div>
        <div>
          {" "}
          <FaStarOfDavid className={classes.icon}></FaStarOfDavid>
          <span>Perks</span>
        </div>
        <div>
          {" "}
          <MdOutlineDownloadDone className={classes.icon}></MdOutlineDownloadDone>
          <span>Addons</span>
        </div>
        <div>
          {" "}
          <FaQuestionCircle className={classes.icon}> </FaQuestionCircle>
          <span >FAQ</span>
        </div>
        <div>
          {" "}
          <TfiSupport></TfiSupport>
          <span>Support</span>
        </div>
      </div>

      <div className={classes.logout}> <IoMdLogOut></IoMdLogOut><span>Logout</span></div>
      </div>

      <div className={classes.togglekey}>
        {toggle ? (
          <AiOutlineClose onClick={toggleMobileMenu}></AiOutlineClose>
        ) : (
          <GiHamburgerMenu onClick={toggleMobileMenu}></GiHamburgerMenu>
        )}
      </div>
      <div className={classes.mobileview}    style={{ left:toggle ? '0%' : '-100%'} }>
        <div className={classes.profile}>
        <div >
          <img src="HeroImage.jpg" alt=""></img>
        </div>
        <h3>Ashish Chaudhari</h3>
        <p> achaudahri@gamail.com</p>
      </div>
      <div className={classes.menue}> 
        <div>
          {" "}
          <MdDashboard className={classes.icon}></MdDashboard>
          <span>Dashbaoard</span>
        </div>
        <div>
          {" "}
          <FaStarOfDavid className={classes.icon}></FaStarOfDavid>
          <span>Perks</span>
        </div>
        <div>
          {" "}
          <MdOutlineDownloadDone className={classes.icon}></MdOutlineDownloadDone>
          <span>Addons</span>
        </div>
        <div>
          {" "}
          <FaQuestionCircle className={classes.icon}> </FaQuestionCircle>
          <span >FAQ</span>
        </div>
        <div>
          {" "}
          <TfiSupport></TfiSupport>
          <span>Support</span>
        </div>
      </div>

      <div className={classes.logout}> <IoMdLogOut></IoMdLogOut><span>Logout</span></div>
      </div>
    </>
  );
}

export default Asidebar;
