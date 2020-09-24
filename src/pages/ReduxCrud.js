import React, { useEffect, useState } from "react";
import BackTop from "../Components/Web-Elements/BackTop";
import { connect } from "react-redux";
import { getCrudActions } from "../redux/action/getCrud.action";
import { Spinner, Button, Modal, Form } from "react-bootstrap";
import { deleteCrudActions } from "../redux/action/deleteCrud.action";
import { postCrudActions } from "../redux/action/postCrud.action";
import { useDispatch, useSelector } from "react-redux";

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
  const [create, setCreate] = useState({
    name: "",
    price: "",
    img: "",
  });

  const createChange = (field, value) => {
    setCreate((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  //   react-b-modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button variant="success" onClick={handleShow}>
            Create Product
          </Button>
        </div>
      </div>
      <br />
      <div className="">
        <Modal className="text-dark" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Product</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => dispatchConst(postCrudActions(create, e))}>
            <Modal.Body>
              <input
                className="form-control"
                type="text"
                value={create.name}
                placeholder="Name"
                onChange={(e) => createChange("name", e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                value={create.price}
                placeholder="Price"
                onChange={(e) => createChange("price", e.target.value)}
              />
              <br />
              <input
                className="form-control"
                type="text"
                value={create.img}
                placeholder="Image URL"
                onChange={(e) => createChange("img", e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Create
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
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
                style={{ maxWidth: "18rem" }}
              >
                <img
                  className="card-img-top"
                  style={{ borderRadius: "0" }}
                  src={item.img}
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text text-dark">Name: {item.name}</p>
                  <p className="card-text text-dark">Price: ${item.price}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) =>
                      dispatchConst(deleteCrudActions(item.id, e))
                    }
                  >
                    X
                  </button>
                </div>
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
