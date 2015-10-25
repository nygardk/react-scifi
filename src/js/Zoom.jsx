import React from 'react';
import { Motion, spring } from 'react-motion';

import Scale from 'Scale';

const Zoom = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    damping: React.PropTypes.number,
    show: React.PropTypes.bool.isRequired,
    stifness: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      stifness: 170,
      damping: 26,
    };
  },

  render() {
    const {
      children,
      damping,
      show,
      stifness,
      style,
    } = this.props;

    const zoomStyle = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };

    return (
      <div className="Zoom" style={{...zoomStyle, ...style}}>
        <Motion defaultStyle={{zoom: 0}}
          style={{zoom: spring(show ? 1 : 0, [stifness, damping])}}>
          {value => (
            <Scale scale={value.zoom}>
              {children}
            </Scale>
          )}
        </Motion>
      </div>
    );
  },
});

export default Zoom;
