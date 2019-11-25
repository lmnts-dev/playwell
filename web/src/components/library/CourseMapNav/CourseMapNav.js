// Course Map Nav Component:
// This is component to browse courses on the Programs page. It exports latitude and
// longitude coordinates.

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Constants
import { Base } from 'constants/styles/Base';
import { Theme, Root } from 'constants/Theme';

// Components
import { Icon } from 'components/library/Icons';

// Styles
import { CourseMapNavStyle, ToggleMapBtnStyle } from './styles.scss';
import { clientGeoJsonAdapter } from 'helpers/clientGeoJsonAdapter';

// Begin Component
//////////////////////////////////////////////////////////////////////

mapboxgl.accessToken =
  'pk.eyJ1IjoicGV0ZXJsYXhhbHQiLCJhIjoiY2p6cTExcmw5MHZpNTNubW1wc25veXJseiJ9.3nFjkPOZM2kbHYQCdkqU7g';

const ToggleMapBtn = () => {
  return (
    <ToggleMapBtnStyle>
      <Icon Name="expand" fas />
      <span>Expand Map</span>
    </ToggleMapBtnStyle>
  );
};

export class CourseMapNav extends PureComponent {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      lat: 40.7088,
      lng: -73.9888,
      zoom: 10.6,
    };
  }

  /**
   *
   * Initialize Our Map
   *
   */

  componentDidMount() {
    // Initial position
    const { lng, lat, zoom } = this.state;

    // Our map object
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom,
    });

    // Updating state depending on map position & zoom
    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    /**
     *
     * Generate our map markers
     *
     */

    // Our data

    const clientsData = this.props.courseData.allPlayWellClient.edges;

    clientsData.map((client, idx) => {
      const location = [client.node.location_lng, client.node.location_lat];

      // Create the popup
      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false,
      }).setText(client.node.client_location_name);

      // Create DOM element for the marker
      const el = document.createElement('div');
      el.id = 'marker';

      // el.addEventListener('mouseenter', () => el.togglePopup());
      // el.addEventListener('mouseleave', () => el.togglePopup());

      // Create the marker
      new mapboxgl.Marker(el)
        .setLngLat(location)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    });
  }

  /**
   *
   * Unmounted state
   *
   */

  componentWillUnmount() {
    this.state = {
      lat: 40.7088,
      lng: -73.9888,
      zoom: 10.6,
    };
  }

  render() {
    const mapWidth = this.props.mapWidth;
    const mapZedIndex = this.props.mapZedIndex;
    const { lng, lat, zoom } = this.state;

    /**
     *
     * For Debugging Only
     *
     */
    // console.log(
    //   'clientGeoJsonAdapter(this.props.courseData.allPlayWellClient.edges)',
    //   clientGeoJsonAdapter(this.props.courseData.allPlayWellClient.edges)
    // );
    // console.log('lat: ' + lat);
    // console.log('lng: ' + lng);
    // console.log('zoom: ' + zoom);

    return (
      <CourseMapNavStyle mapZedIndex={mapZedIndex} mapWidth={mapWidth}>
        <div className="inner">
          <div className="map-col">
            <div className="map-container">
              <ToggleMapBtn />
              <div className="map-container-inner">
                <div
                  ref={el => (this.mapContainer = el)}
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    top: '0',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </CourseMapNavStyle>
    );
  }
}

//////////////////////////////////////////////////////////////////////
// End Component
