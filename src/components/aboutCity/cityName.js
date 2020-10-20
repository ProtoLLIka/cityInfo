import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CityName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cityName } = this.props;
    return (
      <div>
        <h1>{cityName}</h1>
      </div>
    );
  }
}

CityName.propTypes = {
  cityName: PropTypes.string,
};

CityName.defaultProps = {
  cityName: 'john',
};

export default CityName;
