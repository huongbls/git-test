import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Row,
  Col,
} from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

function CommentForm() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleSubmit = (values) => {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  };
  return (
    <LocalForm
      onSubmit={(values) => handleSubmit(values)}
      isOpen={modalIsOpen}
      toggle={() => {
        setModalIsOpen(!modalIsOpen);
        // toggle={() => {
        //   setModalIsOpen(false);
      }}
    >
      <Row className="form-group">
        <Col md={12}>
          <Label htmlFor="rating">Rating</Label>
          <Control.select
            model=".rating"
            id="rating"
            name="rating"
            className="form-control"
            validators={{
              required,
              isNumber,
            }}
          >
            <option value="" selected disabled hidden>
              Choose here
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Control.select>
          <Errors
            className="text-danger"
            model=".rating"
            show="touched"
            messages={{
              required: "Required",
              isNumber: "Must be number",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col md={12}>
          <Label htmlFor="author">Your Name</Label>
          <Control.text
            model=".author"
            id="author"
            name="author"
            className="form-control"
            validators={{
              required,
              minLength: minLength(3),
              maxLength: maxLength(15),
            }}
          />
          <Errors
            className="text-danger"
            model=".author"
            show="touched"
            messages={{
              required: "Required",
              minLength: "Must be greater than 2 characters",
              maxLength: "Must be 15 characters or less",
            }}
          />
        </Col>
      </Row>
      <Row className="form-group">
        <Col md={12}>
          <Label htmlFor="comment">Comment</Label>
          <Control.textarea
            model=".comment"
            id="comment"
            name="comment"
            className="form-control"
            rows="6"
          />
        </Col>
      </Row>
      <Button type="submit" value="submit" color="primary">
        Submit
      </Button>
    </LocalForm>
  );
}

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name}></CardImg>
        <CardBody className="text-left">
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComment({ comments }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const setModalIsOpenToTrue = () => {
  //   setModalIsOpen(true);
  // };

  // const setModalIsOpenToFalse = () => {
  //   setModalIsOpen(false);
  // };

  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  {"-- "}
                  {comment.author} , {dateFormat(comment.date, "mmm dd, yyyy")}
                </p>
              </li>
            );
          })}
        </ul>
        <Button
          type="submit"
          className="bg-light text-dark"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          <span className="fa fa-pencil fa-lg"></span>
          Submit Comment
        </Button>
        <Modal
          isOpen={modalIsOpen}
          toggle={() => {
            setModalIsOpen(!modalIsOpen);
          }}
          // toggle={modalIsOpen ? setModalIsOpenToFalse : setModalIsOpenToTrue}
        >
          <ModalHeader
            // toggle={modalIsOpen ? setModalIsOpenToFalse : setModalIsOpenToTrue}
            toggle={() => {
              setModalIsOpen(!modalIsOpen);
            }}
          >
            Submit
          </ModalHeader>
          <ModalBody>
            <CommentForm />
          </ModalBody>
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComment comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
