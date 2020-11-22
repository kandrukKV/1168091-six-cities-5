import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  }).isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  previewImage: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  additions: PropTypes.array.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }),
  description: PropTypes.string.isRequired
}).isRequired;
