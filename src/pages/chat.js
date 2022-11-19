import './chat.css';
import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function Example1() {
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
              <p className={'answer'}>
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

function Example2() {
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
              <p className={'answer'}>
                  The best resource is your state’s Planned Parenthood website – they offer a multitude of free/price-reduced
                  services. Check the fine print of your health insurance benefits – if you can’t pay out-of-pocket for
                  contraceptives like birth control and emergency contraceptives, it may be possible to call your health
                  insurance and ask for your claims to be sent to you, not your parents. Always double check with your insurance
                  over call. Always! We know it’s scary, but we’re glad you’re taking the first steps in staying healthy and safe.
              </p>

          </div>
        )}
      </Overlay>
    </>
  );
}

function Example3() {
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
              <p className={'answer'}>
                  Call your insurance – all your questions can be answered with just a phone call, they’re there to help
                  you. You can also look at your insurance documents for more detailed information. Calling is the best direction,
                  though!
              </p>

          </div>
        )}
      </Overlay>
    </>
  );
}

function Example4() {
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
              <p className={'answer'}>
                  Visit https://www.adolescenthealth.org/Resources/Clinical-Care-Resources/Sexual-Reproductive-Health/Sexual
                  -Reproductive-Health-Resources-For-Adolesc.aspx#Institutes and see what might be best geared towards your daughter’s
                  age group and interests! It’s always good to talk about sexual health in a positive and inclusive lens – make sure to
                  stay clear of gendered terms and myths (ex: condoms are usually only taught to be used on penises, body hair is only
                  talked about in male anatomy, etc.)! Check out https://www.shorecentre.ca/wp-content/uploads/Adapting-Sex-Ed-Language-Guelph-Checklist.compressed.pdf.
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
      <h1 className='title'>Forum and FAQ</h1>
        <p>
            I’m from Texas where the abortion ban is unprotected, where do I go to find an abortion?
        </p>
        <Example1 />
        <p>
            Where can I find contraceptives if I’m a teenager under my parent’s health insurance?
        </p>
        <Example2 />
        <p>
            How do I know if abortion or birth control will be covered by my insurance? Where can I do research?
        </p>
        <Example3 />
        <p>
            I need resources to help my daughter learn about reproductive health. Why isn’t it taught in schools?? Please help me out!
        </p>
        <Example4 />

    </div>
  );

};






export default Chat;
