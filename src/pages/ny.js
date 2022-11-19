import React from 'react';
import StateInformation from './StateInformation.js'
import Card from 'react-bootstrap/Card';
  
const NYPage = () => {
  return (
    <div>
      <h1>
        New York. 
      </h1>
      <StateInformation>
</StateInformation>
<Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
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
    
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title>Abortion Protections:</Card.Title>
        <Card.Text>
          <ul> 1. State constitutional protection</ul>
          <ul> 2. Public funding</ul>
          <ul> 3. Clinic safety and access law</ul>
          <ul> 4. Health Care Practitioners</ul>
           <ul> 5. Interstate Shield</ul>
           <ul> 6. Statutory protections for abortion </ul>
        </Card.Text>
        <Card.Link href="https://reproductiverights.org/maps/abortion-laws-by-state/?state=NY">Click Here to Learn More.</Card.Link>
      </Card.Body>
    </Card>
      </div>
  );
};
  
export default NYPage;

