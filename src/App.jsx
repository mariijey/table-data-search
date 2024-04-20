import { useState } from "react";
import { users as data } from "./constant/MokData.js";
import SearchCard from "./Components/SearchCard.jsx";
import TableInfo from "./Components/TableInfo.jsx";
import { Container } from "reactstrap";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <>
      <Container container-fluid className="bg-light border py-4">
        <SearchCard users={users} setUsers={setUsers} />
        <TableInfo users={users} setUsers={setUsers} />
      </Container>
      
    </>
  );
}

export default App;
