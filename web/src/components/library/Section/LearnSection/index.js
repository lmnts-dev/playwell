// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react';

// Components
import SlideSection from 'components/library/Section/SlideSection';

// Elements
import Block from 'components/library/Block';

// Constants
import { Theme } from 'constants/Theme';

// Begin Component
//////////////////////////////////////////////////////////////////////

// This component is to transform the
// QuestionCategories.js  data into usable stuff for our
// Widget components and SlideSections.
class SlideSectionWithData extends React.Component {
  constructor(props) {
    // Make our props accessible through this.props
    super(props);
  }

  render() {
    // Get Root Directory Name
    const BaseUrl = this.props.BaseUrl;

    // Get our Category's themeing.
    const BgColor = this.props.Data.PageTheme.Color.Background;
    const TextColor = this.props.Data.PageTheme.Color.Secondary;

    // Isolate Our Tags
    const Tags = this.props.Data.Tags;

    // Get our Category's Slug
    const CategorySlug = this.props.Data.Slug;

    // Create empty Widgets array for us to loop through
    // later on.
    const Widgets = [];

    // Map our tags and create a new Widget object for
    // each tag for us to loop and display a Widget for in
    // the data structure that WidgetContainer likes.
    Tags.map((Tag, index) => {
      Widgets[index + 1] = {
        Flex: 1,
        WidgetContent: [
          {
            Destination: '/' + BaseUrl + '/' + CategorySlug + '/' + Tag.Slug,
            Style: 'Generic',
            Meta: {
              Generic: {
                BgColor: BgColor,
                BgImage: '',
                Subhead: '',
                Headline: Tag.Name,
                TextColor: TextColor,
                IconColor: TextColor,
                IconName: Tag.Icon, // FontAwesome Icon Name
                TintColor: '',
                TintOpacity: '',
                IconSize: '',
              },
            },
          },
        ],
      };
    });

    Widgets[0] = {
      Flex: 1,
      WidgetContent: [
        {
          Destination: BaseUrl + '/' + CategorySlug + '/',
          Style: 'Generic',
          Meta: {
            Generic: {
              BgColor: Theme.Color.Nightsky,
              BgImage: '',
              Subhead: '',
              Headline: 'All ' + this.props.Data.Name + ' Questions',
              TextColor: Theme.Color.White,
              IconColor: Theme.Color.White,
              IconName: this.props.Data.Icon, // FontAwesome Icon Name
              TintColor: '',
              TintOpacity: '',
              IconSize: '',
            },
          },
        },
      ],
    };

    return (
      <SlideSection
        Widgets={Widgets}
        SectionSize={3}
        Header={
          this.props.Prefix
            ? this.props.Prefix + this.props.Data.Name
            : this.props.Data.Name
        }
        Theme={{
          TextColor: Theme.Color.Black,
          BgColor: 'none',
        }}
        SliderSettings={{
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: false,
          arrows: true,
        }}
      />
    );
  }
}

// This component is to differentiate page content / SlideSections
// depending on what 'Filter' is supplied.
const LearnSection = ({ Categories, Filter, Prefix }) => {
  if (Filter == 'all') {
    return (
      <Block maxWidth="100%" Padding={[0, 0, 2, 0]}>
        {/* Loop through each of our categories and display a section. */}
        {Categories.map((Category, index) => {
          return (
            <SlideSectionWithData
              key={index}
              BaseUrl="learn"
              Data={Category.node}
            />
          );
        })}
      </Block>
    );
  } else {
    return (
      <Block maxWidth="100%" Padding={[0, 0, 2, 0]}>
        {/* Loop through each of our categories and display a the desired section. */}
        {Categories.map((Category, index) => {
          if (Category.node.Slug == Filter) {
            return (
              <SlideSectionWithData
                key={index}
                BaseUrl="learn"
                Data={Category.node}
                Prefix={Prefix ? Prefix : null}
              />
            );
          } else {
            return null;
          }
        })}
      </Block>
    );
  }
};

export default LearnSection;
