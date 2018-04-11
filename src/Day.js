import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { momentObj } from 'react-moment-proptypes';

const propTypes = {
  classes: PropTypes.string,
  dayClicked: PropTypes.func.isRequired,
  testHovered: PropTypes.func.isRequired,
  dayHovered: PropTypes.func.isRequired,
  day: momentObj
};

const defaultProps = {
  classes: '',
  day: null
};

class Day extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick() {
    const { dayClicked, day } = this.props;
    dayClicked(day);
  }

  onHover() {
    const { dayHovered, day } = this.props;
    dayHovered(day);
  }
  onTest() {
    const { testHovered, day } = this.props;
    testHovered(day);
  }
  render() {
    const { classes, day } = this.props;
    return (
      <td
        onClick={this.onClick}
        onMouseEnter={this.onTest}
        // onMouseLeave={this.onHover}
        className={classes}
        id={`t${day}`}
      >
        <span className="day-number">{day === null ? '' : day.date()}</span>
      </td>
    );
  }
}

Day.propTypes = propTypes;
Day.defaultProps = defaultProps;

export default Day;
