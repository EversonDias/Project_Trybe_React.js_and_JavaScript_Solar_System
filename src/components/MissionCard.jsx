import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { BsFlag } from 'react-icons/bs';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        className="w-[496px] h-[100px] text-center bg-stone-800/[.70]
        m-4 text-white"
        data-testid="mission-card"
      >
        <div className="border border-white rounded-t-md h-[30px]">
          <p
            className="borde-b-5 borde-gray-50"
            data-testid="mission-name"
          >
            {name}
          </p>
        </div>
        <div
          className="border border-white rounded-b-md
        flex justify-around h-[70px] items-center"
        >
          <p className="flex items-center" data-testid="mission-year">
            <FaRegCalendarAlt />
            <span className="m-2">{year}</span>
          </p>
          <p
            className="flex items-center max-w-[40%] justify-center"
            data-testid="mission-country"
          >
            <GoLocation />
            <span className="m-2">{country}</span>
          </p>
          <p className="flex max-w-[25%] items-center" data-testid="mission-destination">
            <BsFlag />
            <span className="m-2">{destination}</span>
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
