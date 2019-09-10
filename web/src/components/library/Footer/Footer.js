// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import Device from '../../core/DeviceQuery';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Styles
import { FooterStyle } from './styles.scss';

// Components
import { FooterAngleSlice } from 'components/library/BackgroundSlice/FooterAngleSlice';
import { FooterCurveSlice } from 'components/library/BackgroundSlice/FooterCurveSlice';
import { Icon } from 'components/library/Icons';
import { Brandmark } from 'components/core/Branding/Brandmark';

// Begin Component
//////////////////////////////////////////////////////////////////////

export const Footer = ({ navQuery }) => {
  // Column limit of Nav links before starting new column
  let navLimit = 5;

  return (
    // Query our Navigation data so we can adjust our Footer styles
    // based on Top Level Pages vs Sub Level Pages.
    <FooterStyle>
      <FooterCurveSlice bgColor={Theme.Color.Black} />
      <FooterAngleSlice />
      <div class="inner">
        <div class="content">
          <div class="col">
            <Link to="/">
              <Brandmark animate />
            </Link>
          </div>
          <div class="col">
            <ul>
              {navQuery.footerNav.linkList.map((link, idx) => {
                if (idx < navLimit) {
                  return (
                    <li key={idx}>
                      <Link to={link.route}>{link.label}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div class="col">
            <ul>
              {navQuery.footerNav.linkList.map((link, idx) => {
                if (idx > navLimit) {
                  return (
                    <li key={idx}>
                      <Link to={link.route}>{link.label}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div class="col">
            <ul class="social">
              <li>
                <a
                  href={'https://www.facebook.com/sharer.php?u=' + Location}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon Name="facebook" Color={Theme.Color.Primary} />
                </a>
              </li>
              <li>
                <a
                  href={
                    'https://twitter.com/intent/tweet?url=' +
                    '&text=Test&via=Test&hashtags=Test'
                  }
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon Name="twitter" Color={Theme.Color.Primary} />
                </a>
              </li>
              <li>
                <a
                  href={
                    'https://www.linkedin.com/shareArticle?mini=true&url=' +
                    Location +
                    '&title=Test&summary=Test&source=Test'
                  }
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon Name="linkedin" Color={Theme.Color.Primary} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

//////////////////////////////////////////////////////////////////////
// End Component