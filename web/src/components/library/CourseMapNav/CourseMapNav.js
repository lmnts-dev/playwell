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

    const clientsGeoJson = clientGeoJsonAdapter(
      this.props.courseData.allPlayWellClient.edges
    );

    // Map Id
    const mapId = 'clients';

    // Once  our map is loaded - add data layers.
    map.on('load', () => {
      map.addLayer({
        id: mapId,
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: clientsGeoJson,
          },
        },
        paint: {
          'circle-radius': 5,
          'circle-color': Theme.Color.Nova,
          'circle-stroke-color': Theme.Color.White,
          'circle-stroke-width': 1,
          'circle-opacity': 1,
        },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on('click', mapId, function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.title;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', mapId, function() {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', mapId, function() {
        map.getCanvas().style.cursor = '';
      });

      // // Remove popup after hover
      // map.on('mouseleave', mapId, () => {
      //   map.getCanvas().style.cursor = '';
      //   popup.remove();
      // });

      // Functions to run on click.
      map.on('click', mapId, function(e) {
        // Fly to point
        map.flyTo({ center: e.features[0].geometry.coordinates, zoom: 9 });

        // Update pushState with correct hash to show corresponding card.
        // history.pushState(
        //   {},
        //   null,
        //   `#${e.features[0].properties.locationHash}`
        // );

        if (typeof window !== 'undefined') {
          window.location.hash = `#${e.features[0].properties.locationHash}`;
        }
      });
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
