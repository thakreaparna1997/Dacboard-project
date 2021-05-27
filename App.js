import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import { BrowserRouter as Router,Route,Link, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import './Board.css';


import Homepage1 from "./Homepage1";
import Login from "./Component/Login";
import LoginAsAdmin from "./LoginAsAdmin";

import Signup from "./Component/Signup";
import Admin from "./Admin";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import shu1 from "./Component/JAVA.jpeg";
import shu2 from "./Component/OS.jpeg";
import shu3 from "./Component/SE.jpeg";
import shu4 from "./Component/OOPS.jpeg";
import shu5 from "./Component/DS.jpeg";
import shu6 from "./Component/DB.jpeg";
import shu7 from "./Component/WEB.jpeg";
import shu8 from "./Component/WEBJAVA.jpeg";
import hu2 from "./pages/Aboutimg.jpg";
import pranit from "./pages/Pranit.jpg";
import apa from "./pages/Apa.jpg";
 import ajinkya from "./pages/Ajinkya.jpg";
 import nitin from "./pages/Nitin.jpg";
 import swapnil from "./pages/Swapnil.jpg";
 import shubham from "./pages/Shubham.jpg";
// import apa from "./pages/Apa.jpg";
import board from "./Board.jpg";

import Java from "./Java";
import OperatingSystem from "./OperatingSystem";
import SoftwareEnggineering from "./SoftwareEnggineering";
import OopsConceptJava from "./OopsConceptJava";
import AlgorithmAndDatastructure from "./AlgorithmAndDatastructure";
import DatabaseTechnology from "./DatabaseTechnology";
import WebProgrammingTechnology from "./WebProgrammingTechnology";
import WebBasedJavaProgramming from "./WebBasedJavaProgramming";



function App() {
  const location=useLocation();
  console.log(location);
  return (
    <>
    
     {!["/login","/signup","/","/loginAsAdmin"].includes(location.pathname) &&(
       <>
       
       </>
     )}
     
     {!["/home","/quiz","/feedback","/messages","/recording","/schedule","/profile","/contactus","/Homepage1","/Admin"].includes(location.pathname) &&(
       <>
      
       </>
     )}
     

     
     
     <Route exact path="/Login" component={Login}/>
      <Route path="/Signup" component={Signup}/>

      <Route path="/Homepage1" component={Homepage1}/>
      <Route path="/Admin" component={Admin}/>
      <Route exact path="/" component={Demo}/>
      <Route path="/loginAsAdmin" component={LoginAsAdmin}/>

      <Route exact path="/Java" component={Java} />
      <Route exact path="/OperatingSystem" component={OperatingSystem} />
      <Route exact path="/SoftwareEnggineering" component={SoftwareEnggineering} />
      <Route exact path="/OopsConceptJava" component={OopsConceptJava} />
      <Route exact path="/AlgorithmAndDatastructure" component={AlgorithmAndDatastructure} />
      <Route exact path="/DatabaseTechnology" component={DatabaseTechnology} />
      <Route exact path="/WebProgrammingTechnology" component={WebProgrammingTechnology} />
      <Route exact path="/WebBasedJavaProgramming" component={WebBasedJavaProgramming} />
     
  </>
  );
}

function Demo(){
  return(
    <div >
      <body class="text-center " style={{backgroundColor:"honeydew",height:"100%"}}>
      <div class="cover-container d-flex h-500  mx-auto flex-column">
     <div class="d-200">
<header class="d-flex flex-column flex-md-row align-items-center h-200 p-3 px-md-4 mb-3  border-bottom shadow-sm stickytop" style={{backgroundColor:"darkslategray"}} >
 <a href="/"><p class="h5  me-md-auto  text-light"><img src={board}/></p></a> 
  
  <div class=" container d-flex justify-content-end align-items-end">
  


    <a class="btn btn-outline-warning  mr-2" href="/Login">Login</a>
    <a class="btn btn-outline-warning  mr-2" href="/loginAsAdmin">Admin Login</a>
    
  
  
    
  <a class="btn btn-outline-warning me-md-2  " href="/signup">Register</a>
  </div>
 </header>
 </div> 


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <OurMoto/>
      
      <Course />
      <Trial />
      <br></br>
      <br></br>
     
      <br></br>
      <br></br>
      <OurTeamHeader/>
      <TeamInfo1/>
      <br></br>
      
      <br></br>
      <br></br>
      <About />

      <br></br>
      <br></br>
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p><b>All Rights Reserved By </b>  <a href="https://twitter.com/cdacmumbai"> <b>@DAC-BOARD Team-17 </b></a>.</p>
        </div>
      </footer>
      <br></br>
      <br></br>
      </div>
      </body>
    </div>
  );
}


function OurMoto(){
  return(
    <div>
      <div class="container" >
      <div class="jumbotron mt-3" style={{backgroundColor:"honeydew"}}>
        <h1 className="card-title d-flex justify-content-center " class="text-black" 
        style={{fontSize:"2rem",fontWeight:'bold',marginBottom:"20px",text:"black"}}> ✔ Our Aims ✔ </h1>
        <p className="card-text" class="text-black" style={{textAlign:"center",fontSize:"20px" ,text:"black"}}><b> Learn anytime, anywhere
              Our Application provides the learner to access their lectures through recorded videos,can apply on quiz and test their skills
              ,post their doubts, and view their improvemnt.Delivering customized learning based on the student's learning .No need to travel, learn at the comfort & safety of your home </b>
        </p>
        
      </div>
    </div>
         
    </div>
    
  );
}
function TeamInfo1(){
  return(
    <div class="d-flex justify-content-center">

    <Carousel>
        <Carousel.Item interval={1500}>
          
        <img className="rounded-circle" 
         
         src={apa}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img className="rounded-circle"
         
         src= {pranit}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img className="rounded-circle"
         
         src= {shubham}
            alt="Third slide"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="rounded-circle"
         
            src= {swapnil}
            alt="Fourth slide"
          />
         
        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <img className="rounded-circle"
         
         src={nitin}
            alt="Fifth slide"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={1500}>
        <img className="rounded-circle"
         
         src={ajinkya}
            alt="sixth  slide"
          />
          
        </Carousel.Item>

      </Carousel>
</div>
  );
}

function OurTeamHeader(){
  return(
    <h5 className="card-title d-flex justify-content-center " class="text-black" 
    style={{fontSize:"2rem",fontWeight:'bold',marginBottom:"20px",text:"white"}}>Our Team</h5>
  );
}

function About(){
  return(
    
    <div className="container align-item-center">
      <div class="row">
      <div class="col-xs-12 col-md-6"><img src={hu2} class="img-responsive" alt="website template image" /></div>
      <div class="col-xs-12 col-md-6">
        <div class="about-text">
          <h2 class="text-black" style={{ fontSize: "2rem", fontWeight: 'bold', marginBottom: "20px", text: "black" }}>About Us</h2>
          <p class="text-black" style={{ textAlign: "center", fontSize: "20px", text: "black" }}>We are focused on a proper utilised  system for Distance Learning using innovative technology as a significance tool to drive quality of education.
          And improvising learning process with effective interaction and management of the studies.Student may find it useful to maintain
          their aspect towards discipline in their learning and more interesting for making their future secure with the better experience.
      </p>

        </div>
      </div>
    </div>
    </div>
    

    
  );
}
function Course(){
  return(
    <h3    class="text-black" style={{fontSize:"2rem",fontWeight:'bold',marginBottom:"20px",text:"white"}}>Course Highlights</h3>

    
  );
}

function Trial() {
  return (
    <div className="container teal">
      <div class="album py-5 bg-black ml-6">
        <div class="container">

          <div class="row">
            <div class="col-md-4">
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu1} />
                  <Card.Body>
                    <Card.Title>JAVA</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/Java">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu2} />
                  <Card.Body>
                    <Card.Title>OPERATING SYSTEM</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/OperatingSystem">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu3} />
                  <Card.Body>
                    <Card.Title>SOFTWARE ENGGINEERING</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/SoftwareEnggineering">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4" >
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu4} />
                  <Card.Body>
                    <Card.Title>OOPS WITH JAVA</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/OopsConceptJava">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu5} />
                  <Card.Body>
                    <Card.Title>ALGORITHMS & DATA STRUCTURE</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/AlgorithmAndDataStructure">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-6 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu6} />
                  <Card.Body>
                    <Card.Title>DATABASE AND TECHNOLOGY</Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/DatabaseTechnology">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm" style={{ width: "80%" }}>

                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu7} />
                  <Card.Body>
                    <Card.Title>WEB PROGRAMMING </Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/WebProgrammingTechnology">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm" style={{ width: "80%" }}>
                <Card style={{ width: "100%" }}>
                  <Card.Img variant="top" src={shu8} />
                  <Card.Body>
                    <Card.Title>WEB BASED JAVA </Card.Title>

                    <Button variant=" btn btn-outline-danger" href="/WebBasedJavaProgramming">Get Started</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;