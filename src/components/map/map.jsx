import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getActiveCard} from "../../store/selectors";
import leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
  }

  _createMarkers(cards) {
    const {activeCard} = this.props;

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const defaultIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    let icon = defaultIcon;

    cards.forEach((card) => {

      if (activeCard) {
        icon = card.id === activeCard.id ? activeIcon : defaultIcon;
      }

      this.markers.push(
          leaflet.marker([card.location.latitude, card.location.longitude], {icon})
      );
    });
  }

  _renderMarkers() {
    this.markers.forEach((marker) => {
      marker.addTo(this.map);
    });
  }

  _removeMarkers() {
    this.markers.forEach((marker) => {
      marker.remove();
    });
    this.markers = [];
  }

  _setCityLocation(cards) {
    if (cards.length) {
      const {location} = cards[0].city;
      this.map.setView([location.latitude, location.longitude], location.zoom);
    }
  }

  componentDidMount() {
    const {cards} = this.props;

    this.map = leaflet.map(`map`, {
      zoomControl: false,
      marker: true
    });

    this._setCityLocation(cards);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
      .addTo(this.map);


    this._createMarkers(cards);
    this._renderMarkers();

  }

  componentDidUpdate() {
    const {cards} = this.props;

    this._setCityLocation(cards);

    this._removeMarkers();
    this._createMarkers(cards);
    this._renderMarkers();

  }

  render() {
    const {className} = this.props;
    return (
      <section id="map" className={`${className}__map map`}></section>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCard: getActiveCard(state)
});

Map.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
  })),
  className: PropTypes.string.isRequired,
  activeCard: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.object.isRequired
  ])
};

export {Map};
export default connect(mapStateToProps)(Map);
