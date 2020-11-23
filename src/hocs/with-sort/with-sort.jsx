import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";

const withSort = (Component) => {
  const WithSort = (props) => {
    const {changeSortType} = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleListNameClick = useCallback(() => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    });

    const handleListItemClick = useCallback((filterItem) => {
      changeSortType(filterItem);
      setIsOpen(() => false);
    });

    return (
      <Component
        {...props}
        isOpen={isOpen}
        onListItemClick={handleListItemClick}
        onListNameClick={handleListNameClick}
      />
    );

  };

  WithSort.propTypes = {
    changeSortType: PropTypes.func.isRequired
  };

  return WithSort;
};

export default withSort;
