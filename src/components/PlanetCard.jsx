import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="flex-none m-5 text-center" data-testid="planet-card">
        <div className="h-52 flex justify-center items-center">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
        <p className="text-white" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
