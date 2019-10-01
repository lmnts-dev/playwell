// HeroContainer Component:
// Outer Hero containment/wrapper

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { useState, useRef } from 'react';

// Components
import { Box, Text } from 'components/library/Elements';

// Styles
import { AccordionContainer } from './styles.scss';

// Constants
import { Theme, Root } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Accordion = ({ children, location }) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion-icon');

  // Reference the accordion height
  const content = useRef(null);

  // Toggle classes
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === 'active' ? 'accordion-icon' : 'accordion-icon rotate'
    );
  }

  return (
    <AccordionContainer>
      <AccordionContainer.Inner>
        <AccordionContainer.Accordion
          className={`${setActive}`}
          onClick={toggleAccordion}
        >
          <Text as="span" fontWeight={500} fontSize="1.6rem">
            {location}
          </Text>
          <AccordionContainer.Icon Name="carat" className={`${setRotate}`} />
        </AccordionContainer.Accordion>
        <AccordionContainer.Content
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
        >
          <AccordionContainer.Content.Inner>{children}</AccordionContainer.Content.Inner>
        </AccordionContainer.Content>
      </AccordionContainer.Inner>
    </AccordionContainer>
  );
};

export default Accordion;

//////////////////////////////////////////////////////////////////////
// End Component
