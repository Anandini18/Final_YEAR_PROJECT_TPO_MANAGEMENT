import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol,
} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ReactLoading from "react-loading";
import {API_URL} from '../../../helper';

const JobList = () => {
  const auth = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProfiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfiles = async () => {
    setLoading(true);
    if (auth) {
      let result = await fetch(`${API_URL}/jobapi/get-job`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      result = await result.json();
      setProfiles(result.data);
      setLoading(false);
    } else {
      navigate("/");
    }
  };

  const items = profiles;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item._id}>
              <MDBCard style={{ borderRadius: "0px" }}>
                <MDBCardBody style={{ backgroundColor: "	#b2d8d8" }}>
                  <Link
                    to={`${item._id}/${item.companyName}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MDBRow style={{ padding: "20px" }}>
                      <MDBCol md={8}>
                        <h1 style={{ color: "#004c4c", fontWeight: "bold" }}>
                          {item.companyName}
                        </h1>
                        <h1 style={{ color: "#004c4c" }}>{item.position}</h1>
                      </MDBCol>
                      <MDBCol md={4} style={{ textAlign: "right" }}>
                        <h4 style={{ color: "#004c4c" }}>{item.jobType}</h4>
                        <h4>{item.stipend}/-</h4>
                        <h4 style={{ color: "grey" }}>
                          Closes {item.lastApplyDate}
                        </h4>
                      </MDBCol>
                    </MDBRow>
                  </Link>
                </MDBCardBody>
              </MDBCard>
              <MDBRow style={{ height: "10px" }} />
            </div>
          ))}
        <MDBRow style={{ height: "40px" }} />
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <MDBRow style={{ paddingLeft: "35%" }}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </MDBRow>
      </>
    );
  }
  return (
    <>
      {loading ? (
        <MDBContainer
          className="mt-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactLoading type="spin" color="#0000FF" height={100} width={50} />
        </MDBContainer>
      ) : (
        <>
          <MDBContainer>
            <MDBCard className="text-black m-5" style={{ borderRadius: "0px" }}>
              <MDBCardBody>
                <MDBRow>
                  <h2>Availiable Job Opportunities :</h2>
                </MDBRow>
                <hr />
                <MDBRow style={{ height: "40px" }} />

                <PaginatedItems itemsPerPage={3} />

                <MDBRow style={{ height: "40px" }} />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default JobList;
