import React from 'react';

import { cssBrowserPrefix } from 'utils';

const Translate = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    z: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      x: 0,
      y: 0,
      z: 0,
    };
  },

  render() {
    const {
      children,
      style,
      x,
      y,
      z,
    } = this.props;

    const TranslateStyle = {
      height: '100%',
      width: '100%',
      ...cssBrowserPrefix('transform', `translate3d(${x}px, ${y}px, ${z}px)`),
      ...cssBrowserPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <div className="Translate" style={{...TranslateStyle, ...style}}>
        {children}
      </div>
    );
  },
});

export default Translate;
