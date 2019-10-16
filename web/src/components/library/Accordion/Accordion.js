// <Accordion /> component:
// Accordion with empty children for custom laouts
// todo: style props for border, text,

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

// Helpers
import hexToRGB from 'helpers/hexToRGB';

// Begin Component
//////////////////////////////////////////////////////////////////////

const Accordion = ({
  children,
  title,
  chevronColor,
  color,
  borderColor,
  colorActive,
}) => {
  // Accordion hooks
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion-icon');

  // Reference the accordion content height
  const content = useRef(null);

  // Toggle classes / height
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
          color={color}
          colorActive={colorActive}
        >
          <Text as="span" fontWeight={500} fontSize="1.6rem">
            {title}
          </Text>
          <AccordionContainer.Icon
            Name="carat"
            className={`${setRotate}`}
            chevronColor={chevronColor}
          />
        </AccordionContainer.Accordion>
        <AccordionContainer.Content
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          borderColor={borderColor}
        >
          <AccordionContainer.Content.Inner>
            {children}
          </AccordionContainer.Content.Inner>
        </AccordionContainer.Content>
      </AccordionContainer.Inner>
    </AccordionContainer>
  );
};

Accordion.defaultProps = {
  chevronColor: Theme.Color.Nova,
  color: hexToRGB(Theme.Color.Dino, 0.7),
  colorActive: Theme.Color.White,
  borderColor: hexToRGB(Theme.Color.Sunlight, 0.5),
};

export default Accordion;

//////////////////////////////////////////////////////////////////////
// End Component
