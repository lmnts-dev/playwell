// PostCard.js: using slick
//
// />

// Core
import React from 'react';
import Slider from 'react-slick'; // For Slick Slider
import { Helmet } from 'react-helmet'; // For Slick Styles
import { Link } from 'gatsby';

// Components
import ImgMatch from 'components/core/ImgMatch';

// Constants
import { Base } from 'constants/styles/Base';

// Styles
import PostCardStyle from './styles.scss';

// Begin Component
//////////////////////////////////////////////////////////////////////


// The SubLevel Page Itself
const PostCard = ({ title, tags, description, image, link }) => (
  <PostCardStyle className="post-card">
    <Link className="image" to={link} aria-label="View More">
      <ImgMatch src="boy-4.jpg" />
    </Link>
    <Link to={link} aria-label="View More" className="text">
      {tags &&
        <ul>
          {tags.map(tags => (
            <li key={tags.id}>{tags.tag}</li>
          ))}
        </ul>
      }
      <div className="h6">{title}</div>
      <p>{description}</p>
    </Link>
  </PostCardStyle>
);

export default PostCard;
