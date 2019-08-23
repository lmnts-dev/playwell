// SocialStrip Component:
// The SocialStrip component, typically used in Hero components.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import Icon from 'elements/Icons';

// Styles
import SocialStripStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

const SocialStrip = ({ TextColor, Location, Margin }) => (
  <SocialStripStyle Margin={Margin} TextColor={TextColor}>
    <a
      href={'https://www.facebook.com/sharer.php?u=' + Location}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <Icon Name="facebook" Color={TextColor} />
    </a>
    <a
      href={
        'https://twitter.com/intent/tweet?url=' +
        Location +
        '&text=Test&via=Test&hashtags=Test'
      }
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <Icon Name="twitter" Color={TextColor} />
    </a>
    <a
      href={
        'https://www.linkedin.com/shareArticle?mini=true&url=' +
        Location +
        '&title=Test&summary=Test&source=Test'
      }
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      <Icon Name="linkedin" Color={TextColor} />
    </a>
  </SocialStripStyle>
);

export default SocialStrip;

//////////////////////////////////////////////////////////////////////
// End Component
