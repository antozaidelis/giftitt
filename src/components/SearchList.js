import React, { useEffect, useState } from 'react';
import SearchFilter from 'react-filter-search';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  ListGroup,
} from 'react-bootstrap';

const SearchList = () => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {}, [searchInput]);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={4} className="mb-3 mx-auto">
          <InputGroup className="mb-3">
            <InputGroup.Text>🔍</InputGroup.Text>
            <FormControl
              placeholder="Search for your present"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchList;
