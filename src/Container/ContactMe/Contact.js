import React from "react";
import "./Contact.css";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="containers cntct">
      <div className="contactus">
        <div className="title">
          <h2>Get in Touch</h2>
        </div>
        <div className="box">
          {/* Form */}
          <div className="contact form">
            <h3> Send a Message</h3>
            <form>
              <div className="formbox">
                <div className="row50">
                  <div className="inputbox">
                    <span>First Name</span>
                    <input
                      type="text"
                      placeholder="Enter Your first Name"
                    ></input>
                  </div>
                  <div className="inputbox">
                    <span>Last Name</span>
                    <input
                      type="text"
                      placeholder="Enter Your last Name"
                    ></input>
                  </div>
                </div>

                <div className="row50">
                  <div className="inputbox">
                    <span>Email</span>
                    <input
                      type="text"
                      placeholder="Enter Your email id"
                    ></input>
                  </div>
                  <div className="inputbox">
                    <span>Mobile</span>
                    <input type="text" placeholder="+91"></input>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputbox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here"></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputbox">
                    <input type="submit" value="Send"></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="contact info">
            <h3> Contact Info</h3>
            <div className="infobox">
              <div>
                <span>
                  <MdLocationOn className="mapicon" />
                </span>
                <p>
                  Gorakhpur,UP <br></br>INDIA
                </p>
              </div>
              <div>
                <span>
                  <HiOutlineMail className="emailiocn" />
                </span>
                <a href="mailto:sujeetkumaryadavsky0@gmail.com">
                  sujeetkumaryadavsky0@gmail.com
                </a>
              </div>
              <div>
                <span>
                  <HiOutlinePhoneMissedCall className="telicon" />
                </span>
                <a href="tel:+917651902945">+917651902945</a>
              </div>
              <ul className="sci">
                <li>
                  <a href="https://www.linkedin.com/in/sujeetyadav1">
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/sujeetydv.00?igshid=YmMyMTA2M2Y=">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SujeetYadav1999?t=rk1LGMjWyPRz3ZXBFbLppQ&s=09">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* map */}
          <div className="contact map">
            <iframe title="maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7998.6163348215005!2d83.4324479776801!3d26.74505606964352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915c8528156b9b%3A0x934806124932d00d!2sGorakhpur%20Airport!5e0!3m2!1sen!2sin!4v1662577235108!5m2!1sen!2sin"
             
            //   style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
