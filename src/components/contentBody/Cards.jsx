import React from "react";
import classes from './ContentBody.module.css'
import { FaArrowRight } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { TiCloudStorageOutline } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
function Cards({ title, description, oldprice, price }) {
  return (
    <>
      <div className={classes.course_details}>
        <h2 className="course-title">{title}</h2>
        <div>
          <del> ${oldprice}/month</del>
        </div>
        <div className={ classes.price}>${price}/month</div>
        <button className={classes.enroll_button} >
          <span>Get Started</span> <FaArrowRight></FaArrowRight>
        </button>
        <hr></hr>
        <div className={classes.description}>
          <h3>what you will get:</h3>
          <div className={classes.feature}><FaUserAlt></FaUserAlt>{description.first} </div>
          <div className={classes.feature}><TiCloudStorageOutline></TiCloudStorageOutline>  {description.second}</div>
          <div className={classes.feature}>  <IoMailOutline></IoMailOutline> {description.third}</div>
        </div>
      </div>
    </>
  );
}

export default Cards;

