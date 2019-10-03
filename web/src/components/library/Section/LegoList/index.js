// MasonrySection Component:
// This is a component for a MasonryGrid of Widgets.

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

export const LegoList = ({
    TitleOne,
    TitleTwo,
    TitleThree,
    TextOne,
    TextTwo,
    TextThree
}) => (
    <LegoListStyles>
        <div className="item">
            <Icon Name="basicLego" Color="orange" />
            <div className="h6">{TitleOne}</div>
            <p>
                {TextOne}
            </p>
        </div>
        <div className="item">
            <Icon Name="basicLego" Color="purple" />
            <div className="h6">{TitleTwo}</div>
            <p>
                {TextTwo}
            </p>
        </div>
        <div className="item">
            <Icon Name="basicLego" Color="blue" />
            <div className="h6">{TitleThree}</div>
            <p>
                {TextThree}
            </p>
        </div>
    </LegoListStyles>
);

export default LegoList;

//////////////////////////////////////////////////////////////////////
// End Component
