import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Pagination from '../components/pagination';
import BreweryCard from '../components/breweriesComponents/breweryCard';

const Breweries = () => {
  return ( 
    <div>
      <Navbar/>
      <Pagination/>
      <Container>
        <Row>
          <Col>
            <BreweryCard/>
          </Col>
        </Row>
      </Container>

        <Pagination/>
     
      <Footer/>
    </div>
   );
}
 
export default Breweries;