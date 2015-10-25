import React from 'react';

import { cssBrowserPrefix } from 'utils';

const Scale = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    scale: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      scale,
      style,
    } = this.props;

    const scaleStyle = {
      width: '100%',
      height: '100%',
      ...cssBrowserPrefix('transform', `scale(${scale})`),
      ...cssBrowserPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <div className="Scale" style={{...scaleStyle, ...style}}>
        {children}
      </div>
    );
  },
});

export default Scale;
