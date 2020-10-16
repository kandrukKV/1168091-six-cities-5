import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import 'leaflet/dist/leaflet.css';

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const center = [52.38333, 4.9];
    const {cards} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(`map`, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(center, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
      .addTo(map);


    cards.forEach((card) => {
      leaflet
        .marker(card.coordinates, {icon})
        .addTo(map);
    });

  }

  render() {

    const {className} = this.props;

    return (
      <section id="map" className={`${className}__map map`}></section>
    );
  }
}


Map.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.array.isRequired,
  })),
  className: PropTypes.string.isRequired
};

export default Map;
