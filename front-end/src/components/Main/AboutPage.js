import React from "react";
import {
  MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBRow,
} from "mdb-react-ui-kit";
import Table from "react-bootstrap/Table";

const AboutPage = () => {
  return (
    <MDBContainer>
      <MDBCard className="text-black m-5">
        <MDBCardBody>
          <MDBRow style={{ height: "20px" }}></MDBRow>
          <MDBRow>
            <MDBCol md="8">
              <MDBRow>
                <h3 className="mainh1">JECRC Foundation, T & P Department</h3>
                <hr />
              </MDBRow>
              <MDBRow style={{ height: "20px" }}></MDBRow>
              <MDBRow>
                <img 
                  src="https://jecrcfoundation.com/wp-content/uploads/2023/03/1490672980php4DOTye.jpeg"
                  className="mainimg"
                  alt="img"
                />
              </MDBRow>
              <MDBRow style={{ height: "30px" }}></MDBRow>
              <MDBRow>
                <h4>HOME PAGE</h4>
                <hr />
              </MDBRow>
              <MDBRow style={{ height: "20px" }}></MDBRow>
              <MDBRow>
                <p style={{ width: "900px", textAlign: "justify" }}>
                At JECRC, we recognize the pivotal role that effective placement activities play in shaping the future of our students and fostering strong partnerships with leading companies. In response to this, we are proud to introduce JECRC Talent Nexus – a comprehensive platform designed to revolutionize the way training and placement activities are conducted at our college.
                <br />
                <br />
JECRC Talent Nexus serves as the cornerstone of our commitment to empower both students and our esteemed training and placement officers. With its array of innovative features, this platform seamlessly bridges the gap between academic excellence and professional success.
<br/>
<br />
Key Features:
<br />
1. Student-Centric Profiles : Empowering students to showcase their skills, achievements, and aspirations through comprehensive profiles.<br />
2. Company Engagement : Providing a platform for companies to connect directly with our talented pool of students, facilitating seamless recruitment processes.<br />
3. Placement Resources : Offering a wealth of resources including resume templates, interview preparation guides, and career development workshops to equip students for success.<br />
4. Customized Notifications : Keeping both students and placement officers informed about upcoming events, job opportunities, and important deadlines.<br />

                </p>
              </MDBRow>
            </MDBCol>

            <MDBCol md="4">
              <MDBRow>
                <img
                  alt="ph"
                  src="./saeed.jpg"
                  className="user-img-head"
                  style={{ width: "400px", height: "400px" ,marginTop:"75px"}}
                />
              </MDBRow>
              <MDBRow>
                <Table striped>
                  <thead>
                    <tr>
                      <th style={{textAlign: "center", color: "white", backgroundColor: "red" }}>
                        TPO HEAD : Prof. Mukt Bihari
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <th>TPO (Inreach) : Mr. Abhishek Jain</th>
                    </tr>
                    <tr>
                      <th>TPO (Outreach) : Mr. Abhishek Dixit</th>
                    </tr>
                  </tbody>
                </Table>
              </MDBRow>

              <MDBRow>
                <Table striped>
                  <thead>
                    <tr>
                      <th style={{textAlign: "center", color: "white", backgroundColor: "red" }}>
                        TOP Companies that hire from JECRC : 
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Mircosoft (CTC : 50 lakh)</th>
                    </tr>
                    <tr>
                      <th>ZS Asscociates (CTC : 13 lakh)</th>
                    </tr>
                    <tr>
                      <th>Autodesk (CTC :  l41akh)</th>
                    </tr>
                    <tr>
                      <th>HPE (CTC : 17 lakh)</th>
                    </tr>
                    <tr>
                      <th>Service Now (CTC : 10 lakh)</th>
                    </tr>
                    
                  </tbody>
                </Table>
              </MDBRow>

              <MDBRow style={{ height: "20px" }}></MDBRow>
              <MDBRow></MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default AboutPage;
