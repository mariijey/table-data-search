import React, { useState } from "react";
import { FormGroup, Input, Label, Button, Row, Col,Container } from "reactstrap";
import { users as data } from "../constant/MokData";

const SearchCard = ({ users, setUsers }) => {
  const [email, setEmail] = useState();
  const [city, setCity] = useState();

  const searchBarHandler = () => {
    console.log("ok");
    if (!city && !email) {
      setUsers(data);
      console.log("!city && !email");
    } else if (email && !city) {
      console.log("email && !city");
      const newData = data.filter((user) =>
        user.email.toLowerCase().includes(email)
      );
      console.log(newData);
      setUsers(newData);
    } else if (city && !email) {
      console.log("city && !email");
      const newData = data.filter((user) =>
        user.city.toLowerCase().includes(city)
      );
      console.log(newData);
      setUsers(newData);
    } else if (city && email) {
      console.log("email && city");
      const newData = data.filter(
        (user) =>
          user.city.toLowerCase().includes(city) &&
          user.email.toLowerCase().includes(email)
      );
      //   console.log(newData);
      setUsers(newData);
    }
  };

  return (
    <>
      <Container className="bg-light  py-4">
        <Row>
          <Col className="bg-light ">
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
          </Col>
          <Col className="bg-light ">
            <Label for="examplePassword" hidden>
              city
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="city"
              type="city"
              value={city}
              onChange={(e) => setCity(e.target.value.toLowerCase())}
            />
          </Col>
          <Col className="bg-light ">
            <Button color="primary" onClick={() => searchBarHandler()}>
              search
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchCard;
