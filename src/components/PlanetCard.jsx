import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={`Planeta ${planetName}`} />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    )
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
}
