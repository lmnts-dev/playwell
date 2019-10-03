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
    children
}) => (
    <LegoListStyles>
        <div className="item">
            <Icon Name="basicLego" Color="orange" />
            <div className="h6">Creative Collaboration</div>
            <p>
            A greater sense of understanding and connection between your
            staff, as they will now know how others play, and in turn, how
            they best work.
            </p>
        </div>
        <div className="item">
            <Icon Name="basicLego" Color="purple" />
            <div className="h6">New Perspectives</div>
            <p>
            A willingness to tackle problems from a play perspective,
            embracing failure as part of the process of finding the solution.
            </p>
        </div>
        <div className="item">
            <Icon Name="basicLego" Color="blue" />
            <div className="h6">Staff Morale</div>
            <p>
            A rejuvenated staff who rediscovers what they find fun about
            their job and their organization.
            </p>
        </div>
        {children}
    </LegoListStyles>
);

export default LegoList;

//////////////////////////////////////////////////////////////////////
// End Component
