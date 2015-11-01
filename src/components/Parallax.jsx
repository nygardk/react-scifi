import React from 'react';
import times from 'lodash.times';

import View from 'View';
import TiltPlane from 'TiltPlane';
import Translate from 'Translate';

const Parallax = React.createClass({
  propTypes: {
    children: React.PropTypes.func,
    count: React.PropTypes.number,
    distance: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      count: 10,
      distance: -15,
    };
  },

  render() {
    const {
      children,
      count,
      distance,
      style,
    } = this.props;

    return (
      <View className="Parallax" style={style}>
        <TiltPlane style={{position: 'relative'}}>
          {times(count, index => (
            <Translate z={index * distance}
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}>
              {children(index)}
            </Translate>
          ))}
        </TiltPlane>
      </View>
    );
  },
});

export default Parallax;
