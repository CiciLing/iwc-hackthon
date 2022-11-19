import './chat.css';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function Example() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        See answers
      </Button>
      <Overlay target={target.current} show={show} placement="down">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: '#f28482',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
              <p>
                  It is completely legal to travel outside your state to get an abortion — just make sure you understand
                  that
                  state’s policies and abortion limitations before scheduling an appointment. A good resource to look
                  for abortion
                  laws is https://reproductiverights.org/maps/abortion-laws-by-state/. You can also look on our “Look-up
                  State” page,
                  which you can find in our navigation bar!
              </p>

          </div>
        )}
      </Overlay>
    </>
  );
}

const Chat = () => {
  return (
    <div className="chatsinforum">
      <h1 class='title'>Forum and FAQ</h1>
        <p class='q1'>
            I’m from Texas where the abortion ban is unprotected, where do I go to find an abortion?
        </p>
        <Example />
    </div>
  );

};






export default Chat;
