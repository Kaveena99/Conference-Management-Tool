import React, { Component } from "react";
import "../../assets/style.css";
import download from "../../assets/download.jpg";
import Footer from "../../components/footer-component/footer";

import { Card, CardGroup } from "react-bootstrap";
export default class Home extends Component {
  signup() {
    window.location = "/signup";
  }

  render() {
    return (
      <div>
        <div id="main">
          <div id="box1"></div>
          <div id="box2">
            <div id="text">
              Conference <br />
              Management
            </div>
          </div>
          <div id="box3">
            <div id="container">
              <div id="menu">
                <ul>
                  <li>HOME</li>
                  <li>SERVICE</li>
                  <li>ABOUT</li>
                  <li>CONTACT</li>
                  <li>
                    <button onClick={() => this.signup()}>Sign Up</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CardGroup style={{ paddingTop: "670px" }}>
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img variant="top" src={download} />
            <Card.Body>
              <Card.Title>
                <b> Chambray Shirt - Men 1002</b>
              </Card.Title>
              <Card.Text>
                Long Sleeve <br />
                Normal Collar
                <br />
                Material : Cotton
                <br />
                Material Composition : 100% Cotton
                <br />
                Model Height 6', wearing size UK M<br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img variant="top" src={download} />
            <Card.Body>
              <Card.Title>
                <b>Flare Sleeve Dress - 368</b>
              </Card.Title>
              <Card.Text>
                Evening Wear <br />
                Material : Woven
                <br />
                Material Composition : 100% Polyester
                <br />
                Lining Material : 97% Polyester, 3% Elastane
                <br />
                Model Height 5' 8", wearing size UK 10 (Size Guide)
                <br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img variant="top" src={download} />
            <Card.Body>
              <Card.Title>
                <b>Bermuda Shorts with Buckle - Linen 0226</b>
              </Card.Title>
              <Card.Text>
                Short
                <br />
                Casual Wear
                <br />
                Material : Linen
                <br />
                Material Composition : 100% Linen
                <br />
                Model Height 5' 8", wearing size UK 10 (Size Guide)
                <br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
        </CardGroup>

        <CardGroup style={{ paddingTop: "20px" }}>
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img variant="top" src={download} />
            <Card.Body>
              <Card.Title>
                <b> Chambray Shirt - Men 1002</b>
              </Card.Title>
              <Card.Text>
                Long Sleeve <br />
                Normal Collar
                <br />
                Material : Cotton
                <br />
                Material Composition : 100% Cotton
                <br />
                Model Height 6', wearing size UK M<br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img variant="top" src={download} />
            <Card.Body>
              <Card.Title>
                <b>Flare Sleeve Dress - 368</b>
              </Card.Title>
              <Card.Text>
                Evening Wear <br />
                Material : Woven
                <br />
                Material Composition : 100% Polyester
                <br />
                Lining Material : 97% Polyester, 3% Elastane
                <br />
                Model Height 5' 8", wearing size UK 10 (Size Guide)
                <br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
          <Card style={{ backgroundColor: "#F0F8FF" }}>
            <Card.Img
              variant="top"
              src={download}
              style={{ borderRadius: "50%" }}
            />
            <Card.Body>
              <Card.Title>
                <b>Bermuda Shorts with Buckle - Linen 0226</b>
              </Card.Title>
              <Card.Text>
                Short
                <br />
                Casual Wear
                <br />
                Material : Linen
                <br />
                Material Composition : 100% Linen
                <br />
                Model Height 5' 8", wearing size UK 10 (Size Guide)
                <br />
                <br />
                <button className="btn btn-primary btn-circle btn-sm">
                  RESERVE A TICKET
                </button>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          &nbsp; &nbsp; &nbsp;
        </CardGroup>
        <br />
        <br />
        <h1 style={{ color: "black" }}>
          <center>About Conference</center>
        </h1>
        <br />
        <h3 style={{ color: "white" }}>
          <center>Software Engineering as Profession</center>
        </h3>
        <br />
        <p style={{ color: "white" }}>
          <center>
            This will be conducted by major Software Engineering Companies in
            Sri Lanka. Professionals are important for a field like software
            engineering. Undergraduates coming from different universities are
            taught by different professionals on being a professional in real
            life. Working as a Software Engineer at MedMen has taken me for a
            different path. I will speak on my own experiences and be a
            motivator on being a professional as a Software Engineer.
          </center>
        </p>
        <p style={{ color: "white" }}>
          <center>
            Wednesday, August 25, 2021 5:28 AM at International Conference Hall
          </center>
        </p>
        <br />
        <br />
        <div
          className="shadow p-5"
          style={{
            backgroundColor: "#254e58",
            opacity: "0.90",
            width: "83rem",
            height: "20rem",
          }}
        >
          <h2>
            {" "}
            Kasun Rajapaksha It is the webinar series that you have been waiting
            for,
            <br />
            Defense Against Dark Arts- Azure Security Center, in collaboration
            with SLIIT FOSS Community. <br />
            Keep tune with SLIIT FOSS to get advanced information on our
            potential plans to you. ##sliit #sliitfoss #techtalk #azure
            #fosssrilanka #sliitlife #quarantinetecktalks
          </h2>
        </div>
        <br />
        <br />
        <Footer/>
      </div>
    );
  }
}
