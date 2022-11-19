import React from 'react';
import Card from 'react-bootstrap/Card';
  
const YourRightsPage = () => {
    return (
      <div>
        <h1>
          Get To Know Your Reproductive Rights 
        </h1>
        <Card>
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title>What to know about Roe v. Wade and its overturn in 2022:</Card.Title>
        <Card.Text>
        On Friday, June 24, 2022, the US Supreme Court overturned Roe v. Wade, the landmark piece of legislation that made access to an abortion a federal right in the United States. The decision dismantled 50 years of legal protection and paved the way for individual states to curtail or outright ban abortion rights.  
        </Card.Text>
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        Already, because of trigger laws put in place before the ruling, abortion is now outlawed in many states automatically or through state action following the decision. In addition, Justice Clarence Thomas wrote that certain other landmark rulings should be reconsidered, including established rights to contraception access, same-sex relationships, and same-sex marriage.  
        </Card.Text>
      </Card.Body>
    </Card>
    <Card >
      <Card.Img variant="top" src="https://digitalfreedomfund.org/wp-content/uploads/2021/03/reproductive-rights-pink-bg-1536x864.jpg" />
      <Card.Body>
        <Card.Title>We are in grave danger.</Card.Title>
        <Card.Text>
        To look at your rights by state, browse through our Look-Up State feature and see what resources are available to you. We want to help you understand the most out of your reproductive rights.
        </Card.Text>
        <Card.Link href="https://secure.reproductiverights.org/a/join-the-fight ">What You Can Do Right Now</Card.Link>
      </Card.Body>
    </Card>
        </div>
    );
  };
    
  export default YourRightsPage;
