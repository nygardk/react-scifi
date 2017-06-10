import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import times from 'lodash.times';

import View from 'View';
import TiltPlane from 'TiltPlane';
import Translate from 'Translate';

const Parallax = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.func,
      React.PropTypes.node,
    ]),
    count: React.PropTypes.number,
    distance: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  mixins: [PureRenderMixin],

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
      <View {...this.props} className="Parallax" style={style}>
        <TiltPlane style={{ position: 'relative' }}>
          {times(count, index => (
            <Translate
              z={index * distance}
              key={index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            >
              {typeof children === 'function'
                ? children(index)
                : children}
            </Translate>
          ))}
        </TiltPlane>
      </View>
    );
  },
});

export default Parallax;
