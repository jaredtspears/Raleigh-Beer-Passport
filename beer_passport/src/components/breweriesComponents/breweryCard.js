// this will be an auto generated name component from API from local breweries most likely
import React from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

const BreweryCard = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>%Brewery Name%</CardTitle>
          <CardSubtitle>%Brewery Location%</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://www.oakcitybrewingcompany.com/wp-content/uploads/2017/07/OakCity-Header-80.png" alt="Card cap" />
        <CardBody>
          <CardText>%short individualized blurb for the brewery - generated from their own site (scraped possibly)%.</CardText>
          <CardLink href="#">%Brewery Link%</CardLink>
          <CardLink href="#">Check In</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default BreweryCard;