import React from 'react';
import Button from 'react-bootstrap/Button';


  const HomePage = () => {
  return (
    <div>
      <h1>
        Hello! 
      </h1>
      <h2>
        Ready to get the most out of reproductive health? 
      </h2>
      <Button href="./chat" className="d-grid gap-2"> Chat With Others! </Button>
      <Button href="./StateInformationPage" className="d-grid gap-2"> Learn About Rights in Your State </Button>
      <Button href="./your-rights"className="d-grid gap-2"> Learn Aboutb Your Rights </Button>
      </div>
  );
};

export default HomePage;