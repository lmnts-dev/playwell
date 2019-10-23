// Footer Component:
// This is the sitewide footer of the website.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Device from '../../core/DeviceQuery';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Styles
import {
  FooterStyle,
  CurveAndAngleWithPadding,
  OverflowHidden,
} from './styles.scss';

// Components
import {
  BasicSection,
  BasicInner,
} from 'components/library/Section/BasicSection';
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
    <OverflowHidden>
      <BasicSection
        noPaddingTop
        noPaddingBottom
        BgColor={Theme.Color.Background}
        //className={
        //  typeof window !== 'undefined' && location.pathname === '/contact'
        //    ? 'hide'
        //    : null
      //  }
      >
        <CurveAndAngleWithPadding
          Tall
          CurveColor={Theme.Color.Blush}
          AngleColor={Theme.Color.White}
          className="curve-and-angle"
        />

        <FooterStyle>
          <BasicInner wideWidth>
            <div className="brandmark-container">
              <Link to="/">
                <Brandmark animate />
              </Link>
            </div>
            <div className="content">
              <div className="col">
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
              <div className="col">
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
              <div className="col">
                <ul className="social">
                  <li>
                    <a
                      href={'https://www.facebook.com/sharer.php?u='}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon Name="facebook" Color={Theme.Color.Primary} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        'https://twitter.com/intent/tweet?url=&text=Test&via=Test&hashtags=Test'
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
                        'https://www.linkedin.com/shareArticle?mini=true&url=&title=Test&summary=Test&source=Test'
                      }
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      <Icon Name="instagram" Color={Theme.Color.Primary} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </BasicInner>
        </FooterStyle>
      </BasicSection>
    </OverflowHidden>
  );
};

export default Footer;

//////////////////////////////////////////////////////////////////////
// End Component
