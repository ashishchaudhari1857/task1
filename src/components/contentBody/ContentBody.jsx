import React from "react";
import Cards from "./Cards";
import classes from "./ContentBody.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { TiCloudStorageOutline } from "react-icons/ti";
import { IoMailOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
function ContentBody() {
  const  [toggel  ,setToggel]=useState(false)
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Choose a plan just right for you!</h1>
        <div >
          <p style={{color:toggel? "purple":"black"}} onClick={(e)=>setToggel(!toggel)}  >Monthly</p>
          <p style={{color:toggel? "purple":"black"}} onClick={(e)=>setToggel(!toggel)} >Annually</p>
        </div>
      </div>
      <div className={classes.card_container}>
        <Cards
          title="Basic"
          oldprice="100"
          price="75"
          description={{
            first: "Upto  25  User",
            second: "Upto 25gb Storage",
            third: "Emaill Support",
          }}
        ></Cards>
        <Cards
          title="Standard"
          oldprice="150"
          price="120"
          description={{
            first: "Upto  50  User",
            second: "Upto 120gb Storage",
            third: "Emaill Support +chat Support",
          }}
        ></Cards>
        <Cards
          title="Premiun"
          oldprice="100"
          price="75"
          description={{
            first: "Upto 100 User",
            second: "Upto 230gb Storage",
            third: "Emaill Suppoall yours",
          }}
        ></Cards>
      </div>
      <div className={classes.plan}>
        <div className={classes.course_plan}>
          <div>
            {" "}
            <button className={classes.enroll_button} style={{fontSize:'0.6rem' ,backgroundColor:" rgb(191, 163, 121)" ,padding:"0.2"} }>
              <span>Free Forever</span>
            </button>
            <h2 className="course-title">Free Starter</h2>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam corrupti aperia.
              </p>
            </div>
            <button className={classes.enroll_button}style={{backgroundColor:"rgb(191, 163, 121)"}} >
              <span>Get Started</span> <FaArrowRight></FaArrowRight>
            </button>
          </div>

          <div className={classes.description}>
            <h3>what you will get:</h3>
            <div className={classes.feature}>
              <FaUserAlt></FaUserAlt> Upto 100 User
            </div>
            <div className={classes.feature}>
              <TiCloudStorageOutline></TiCloudStorageOutline>{" "}Upto 230gb Storage
            </div>
            <div className={classes.feature}>
              {" "}
              <IoMailOutline></IoMailOutline>"Emaill Suppoall yours
            </div>
            <div className={classes.feature}>
              {" "}
              <IoMailOutline></IoMailOutline>{" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam corrupti aperiam, est et quam nisi doloribus optio eos
                quas
            </div>
          </div>
        </div>

        <div className={classes.course_plan}>
          <div>
            {" "}
            <button className={classes.enroll_button} style={{fontSize:'0.6rem' ,backgroundColor:" rgb(121, 191, 121)" ,padding:"0.2"} }>
              <span>Free Forever</span>
            </button>
            <h2 className="course-title">Enterprise plan</h2>
            <div>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam corrupti aperia.
              </p>
            </div>
            <button className={classes.enroll_button} style={{ backgroundColor:" rgb(121, 191, 121)" } }>
              <span>Get Started</span> <FaArrowRight></FaArrowRight>
            </button>
          </div>

          <div className={classes.description}>
            <h3>what you will get:</h3>
            <div className={classes.feature}>
              <FaUserAlt></FaUserAlt> 10  user are free
            </div>
            <div className={classes.feature}>
              {" "}
              <IoMailOutline></IoMailOutline>{" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ipsam corrupti aperiam, est et quam nisi doloribus optio eos
                quas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentBody;
