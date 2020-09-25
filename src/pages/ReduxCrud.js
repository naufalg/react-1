import React, { useEffect, useState } from "react";
import BackTop from "../Components/Web-Elements/BackTop";
import { connect } from "react-redux";
import { getCrudActions } from "../redux/action/getCrud.action";
import { Spinner, Button, Modal, Form } from "react-bootstrap";
import { deleteCrudActions } from "../redux/action/deleteCrud.action";
import { postCrudActions } from "../redux/action/postCrud.action";
import { putCrudActions } from "../redux/action/putCrud.action";
import { useDispatch, useSelector } from "react-redux";
import editLogo from "../Components/Assets/Images/edit-logo.png";

function ReduxCrud(props) {
  // get
  useEffect(() => {
    console.log("props.getCrudActions", props.getCrudActions);
    props.getCrudActions();
  }, [props.getCrudActions]);
  console.log("props", props);
  props.crudData.data.map((item) => console.log("item.id", item.id));

  const dispatchConst = useDispatch();

  //   post
  const [createPost, setCreatePost] = useState({
    name: "",
    price: "",
    img: "",
  });

  const createChange = (field, value) => {
    setCreatePost((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  //   react-b-modal post
  const [showPost, setShowPost] = useState(false);

  const handleClosePost = () => setShowPost(false);
  const handleShowPost = () => setShowPost(true);

  // put
  const [createPut, setCreatePut] = useState({
    name: "",
    price: "",
    img: "",
  });

  const putChange = (field, value) => {
    setCreatePut((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  //   react-b-modal Put
  const [showPut, setShowPut] = useState(false);

  const handleClosePut = () => setShowPut(false);
  const handleShowPut = () => setShowPut(true);

  return (
    <div className="container text-center">
      <BackTop to="/Home3"></BackTop>
      <h3 className="display-4">Products</h3>
      <br />
      <h5 className="heading-4">
        <a href="https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product">
          https://5f6c576f8d5ef70016ca0b19.mockapi.io/Product
        </a>
      </h5>
      <br />
      <div className="row">
        <div className="col-12">
          <Button variant="success" onClick={handleShowPost}>
            Create Product
          </Button>
        </div>
      </div>
      <br />
      <div className="">
        {/* modal createPost product */}
        <Modal className="text-dark" show={showPost} onHide={handleClosePost}>
          <Modal.Header closeButton>
            <Modal.Title>Create Product</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => dispatchConst(postCrudActions(createPost, e))}>
            <Modal.Body>
              <input
                className="form-control"
                type="text"
                value={createPost.name}
                placeholder="Name"
                onChange={(e) => createChange("name", e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                value={createPost.price}
                placeholder="Price"
                onChange={(e) => createChange("price", e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                value={createPost.img}
                placeholder="Image URL"
                onChange={(e) => createChange("img", e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePost}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
        {/* modal createPost product */}
      </div>
      <div className="row justify-content-center text-center">
        {props.crudData.isLoading === true ? (
          <div className=" align-item-center col-12 justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          props.crudData.data.map((item, index) => (
            <div className="col-lg-3" key={index}>
              <div
                className="card shadow text-dark mx-lg-auto my-2"
                style={{ maxWidth: "18rem", maxheight: "350px" }}
              >
                <img
                  className="card-img-top"
                  style={{ borderRadius: "0", maxHeight: "150px" }}
                  src={item.img}
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text text-dark">Name: {item.name}</p>
                  <p className="card-text text-dark">Price: ${item.price}</p>
                  <button className="btn btn-info" onClick={handleShowPut}>
                    <img
                      style={{ height: "20px", filter: "invert(1)" }}
                      src={editLogo}
                      alt=""
                    />
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) =>
                      dispatchConst(deleteCrudActions(item.id, e))
                    }
                  >
                    <strong>X</strong>
                  </button>
                </div>
              {/* modal createPut product */}
              <Modal
                className="text-dark"
                show={showPut}
                onHide={handleClosePut}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <form
                  onSubmit={(e) => dispatchConst(putCrudActions(createPut, e))}
                >
                  <Modal.Body>
                    <input
                      className="form-control"
                      type="text"
                      value={item.name}
                      placeholder="Name"
                      onChange={(e) => putChange("name", e.target.value)}
                    />
                    <br />
                    <input
                      className="form-control"
                      type="text"
                      value={item.price}
                      placeholder="Price"
                      onChange={(e) => putChange("price", e.target.value)}
                    />
                    <br />
                    <input
                      className="form-control"
                      type="text"
                      value={item.img}
                      placeholder="Image URL"
                      onChange={(e) => putChange("img", e.target.value)}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePut}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Create
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal>
              {/* modal createPut product */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("props map state", props);
  return {
    crudData: props.getCrudReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  return {
    getCrudActions: () => dispatch(getCrudActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCrud);
