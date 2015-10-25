import React from 'react';
import { Motion, spring } from 'react-motion';

import Translucent from 'Translucent';

const Fade = React.createClass({
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
      <div className="Fade" style={{...zoomStyle, ...style}}>
        <Motion defaultStyle={{opacity: 0}}
          style={{opacity: spring(show ? 1 : 0)}}>
          {value => (
            <Translucent opacity={value.opacity}>
              {children}
            </Translucent>
          )}
        </Motion>
      </div>
    );
  },
});

export default Fade;
