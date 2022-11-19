import React from 'react';
import StateInformation from '../StateInformation.js'
import Card from 'react-bootstrap/Card';
  
const CTPage = () => {
  return (
    <div>
      <h1>
        Look-Up By State. 
      </h1>
      <StateInformation>
</StateInformation>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Abortion Status:</Card.Title>
        <Card.Text>
          Abortion is no longer available in this state. 
          Patients have no access to abortion in this state due to 
          restrictions that have banned or eliminated abortion access. 
        </Card.Text>
        <Card.Link href="#">Click Here to Learn More.</Card.Link>
      </Card.Body>
    </Card>
      </div>
  );
};
  
export default CTPage;

