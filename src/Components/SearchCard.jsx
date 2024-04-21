import React, { useEffect, useState } from "react";
import {
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { users as data } from "../constant/MokData";

const SearchCard = ({ users, setUsers }) => {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  const searchBarHandler = () => {
    console.log(`city.length >3 && email.length `)
    if (!city && !email ) {
      console.log("!city && !email");
      setUsers(data);

    } else if (email && !city ) {
      const newData = data.filter((user) =>
        user.email.toLowerCase().includes(email)
      );
      setUsers(newData);
    } else if (city && !email && city.length >3 ) {
      const newData = data.filter((user) =>
        user.city.toLowerCase().includes(city)
      );
      setUsers(newData);
    } else if (city && email && city.length >3) {
      const newData = data.filter(
        (user) =>
          user.city.toLowerCase().includes(city) &&
          user.email.toLowerCase().includes(email)
      );
      setUsers(newData);
    }
  };
  useEffect(() => {
    
    searchBarHandler();
  }, [email, city]);

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
         
        </Row>
      </Container>
    </>
  );
};

export default SearchCard;
