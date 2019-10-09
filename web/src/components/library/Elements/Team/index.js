// Team Component:
// This is an element for rows of team members

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';

// Constants

// Styles
import TeamStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Team = ({
  members
}) => (
  <TeamStyle>
    <div className="team-container">
      {members.map((member, index) => {
        return (
          <div className="member">
            <ImgMatch src={member.image} />
            <p>{member.name}</p>
            <p>{member.title}</p>
            <div className="social">
              { (member.socialIcon1 && member.socialLink1) &&
                <a href={member.socialLink1} aria-label={member.socialIcon1}>
                  <svg>{member.socialIcon1}</svg>
                </a>
              }
              { (member.socialIcon2 && member.socialLink2) &&
                <a href={member.socialLink2} aria-label={member.socialIcon2}>
                  <svg>{member.socialIcon2}</svg>
                </a>
              }
              { (member.socialIcon2 && member.socialLink2) &&
                <a href={member.socialLink2} aria-label={member.socialIcon2}>
                  <svg>{member.socialIcon2}</svg>
                </a>
              }
            </div>
          </div>
        );
      })}
    </div>
  </TeamStyle>
);

export default Team;

//////////////////////////////////////////////////////////////////////
// End Component
