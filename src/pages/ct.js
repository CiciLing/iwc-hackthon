import React from 'react';
import StateInformation from '../StateInformation.js'
import Card from 'react-bootstrap/Card';
  
const CTPage = () => {
  return (
    <div>
      <h1>
        Connecticut. 
      </h1>
      <StateInformation>
</StateInformation>
<Card  style = {{display: 'flex'}}>
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title>Abortion Status:</Card.Title>
        <Card.Text>
        Abortion Law Status: PROTECTED
        Abortion remains legal in Connecticut! 
        </Card.Text>
        <Card.Link href="#">Click Here to Learn More.</Card.Link>
      </Card.Body>
    </Card>
    <Card >
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
        <Card.Link href="https://reproductiverights.org/maps/abortion-laws-by-state/?state=CT">Click Here to Learn More.</Card.Link>
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title>Restrictions: </Card.Title>
        <Card.Text>
        <li>Abortion is restricted at twenty-four weeks and more with a gestational ban.
</li>
<li>Parental consent is required for patients who are 16 years and younger.
</li>
        </Card.Text>
        <Card.Link href="https://reproductiverights.org/maps/abortion-laws-by-state/?state=CT">Click Here to Learn More.</Card.Link>
      </Card.Body>
    </Card>
      </div>
  );
};
  
export default CTPage;

