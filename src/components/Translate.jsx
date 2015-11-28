import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { cssVendorPrefix } from 'utils';

const Translate = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    z: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  mixins: [PureRenderMixin],

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
      transformStyle: 'preserve-3d',
      ...cssVendorPrefix('transform', `translate3d(${x}px, ${y}px, ${z}px)`),
      ...cssVendorPrefix('transformOrigin', '50% 50%'),
    };

    return (
      <div className="Translate" style={{...TranslateStyle, ...style}}>
        {children}
      </div>
    );
  },
});

export default Translate;
