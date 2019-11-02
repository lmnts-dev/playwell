// Team Component:
// This is an element for rows of team members

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';
import ImgMatch from 'components/core/ImgMatch';
import { Icon } from 'components/library/Icons';
import { StaticQuery, graphql } from 'gatsby';

// Constants

// Styles
import TeamStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Team = ({ Justify }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          allDataJson {
            edges {
              node {
                leadership {
                  bio
                  id
                  img
                  mgr_level
                  name
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <TeamStyle Justify={Justify}>
          <div className="team-container">
            {data.allDataJson.edges[1].node &&
              data.allDataJson.edges[1].node.leadership.map((person, index) => {
                return (
                  <div className="member" key={index}>
                    <div className="image-container">
                      <img
                        src={person.img}
                        alt={'Picture of ' + person.name}
                      ></img>
                    </div>
                    <p>{person.name}</p>
                    <p>{/*{person.title}*/}</p>
                    <div className="social">
                      {/* (member.socialIcon1 && member.socialLink1) &&
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
                        */}
                    </div>
                  </div>
                );
              })}
          </div>
        </TeamStyle>
      )}
    />
  );
};

export default Team;

//////////////////////////////////////////////////////////////////////
// End Component
