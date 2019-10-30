// LegoList Component:
// This is a section for three components of lego, headline and text
// with the option to add custom images to replace the logos

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants

// Styles
import LegoListStyles from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const LegoList = ({ blocks }) => (
  <LegoListStyles>
    {blocks.map((block, index) => {
      return (
        <div className="item" key={index}>
          {block.image && <ImgMatch src={block.image} />}
          {!block.image && (
            <Icon
              Name="basicLego"
              Color={block.legoColor ? block.legoColor : false}
            />
          )}
          <div className="h6">{block.title}</div>
          <p>{block.text}</p>
        </div>
      );
    })}
  </LegoListStyles>
);

export default LegoList;

//////////////////////////////////////////////////////////////////////
// End Component
