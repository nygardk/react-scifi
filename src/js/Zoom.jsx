import React from 'react';
import { Motion, spring } from 'react-motion';

import Scale from 'Scale';

const Zoom = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    show: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      show,
      style,
    } = this.props;

    const zoomStyle = {
      position: 'relative',
      width: '100%',
      height: '100%',
    };

    return (
      <div className="Zoom" style={{...zoomStyle, ...style}}>
        <Motion defaultStyle={{zoom: 0}} style={{zoom: spring(show ? 1 : 0)}}>
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
