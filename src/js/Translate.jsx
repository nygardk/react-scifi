import React from 'react';

import { cssBrowserPrefix } from 'utils';

const Translate = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      Translate,
      style,
    } = this.props;

    const TranslateStyle = {
      ...cssBrowserPrefix('transform', `translate(${x})`),
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
