import react, { useEffect, useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Container,Row,Col, Form} from 'react-bootstrap';
import { addCustomer } from "../Service/api";
import { useNavigate } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  address: "",
  image: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddCustomer = () => {
  const [file, setFile] = useState();
  const [customer, setCustomer] = useState(initialValue);
  const { name, username, email, phone, address, image } = customer;
  const classes = useStyles();
  const navigate = useNavigate();

  // function handleChange(e) {
	// 	console.log(e.target.files);
	// 	setFile(URL.createObjectURL(e.target.files[0]));
	// }

  const onValueChange = (e) => {
    console.log(e.target.value);
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const addCustomerDetails = async () => {
    let response = await addCustomer(customer);
    console.log(response);
    navigate("/");
  };

  const imageUpload = (e) => {
    setCustomer({ ...customer, image: e.target.value });
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  
    // var imagestr=this.state.profileImage;
    // imagestr = imagestr.replace("public/", "");
    // var profilePic="http://localhost:8080/"+imagestr;
  
  return (
    
    <Container>
      <Row>
      <Col>
       <img src={file} alt="profils pic" width="200" />
       {/* <Lightbox image={file} title="Image Title"></Lightbox> */}
       </Col>
       <Col>
       <Form className="form">
      <h1>Add Customer</h1>
      <Form.Group>
        <Form.Label htmlFor="my-input">Name</Form.Label>
        <Form.Control
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="my-input">Username</Form.Label>
        <Form.Control
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
          id="my-input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="my-input">Email</Form.Label>
        <Form.Control
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="my-input">Phone</Form.Label>
        <Form.Control
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="my-input">Address</Form.Label>
        <Form.Control
          onChange={(e) => onValueChange(e)}
          name="address"
          value={address}
          id="my-input"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          onChange={imageUpload}
          name="customerImage"
          value={image}
          id="my-input"
          type="file"
        />
      </Form.Group>
      
        <Button
          variant="contained"
          color="primary"
          onClick={() => addCustomerDetails()}
        >
          Add Customer
        </Button>
      </Form>
      </Col>
      
      </Row>
      
    </Container>
  );
};

export default AddCustomer;
