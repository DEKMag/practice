import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ClickSection.scss';

export default function ClickSection() {
  const [show, setShow] = useState(false);
  return (
    <section>
      <h1 onClick={() => setShow(!show)}>
        Привет, я {show ? 'время' : 'настало'}!
      </h1>
      <CSSTransition in={show} classNames="my-node" timeout={300} unmountOnExit>
        <div id="time">12:12</div>
      </CSSTransition>
    </section>
  );
}
