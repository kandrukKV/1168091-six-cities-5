import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
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
          leaflet.marker(card.coordinates, {icon})
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

  componentDidMount() {
    const center = [52.38333, 4.9];
    const {cards} = this.props;
    const zoom = 12;

    this.map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(center, zoom);

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
    const center = [52.38333, 4.9];
    this.map.setView(center, 12);

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
  activeCard: state.activeCard
});


Map.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
  })),
  className: PropTypes.string.isRequired,
  activeCard: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.object.isRequired
  ])
};

export {Map};
export default connect(mapStateToProps)(Map);
