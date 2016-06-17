import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import times from 'lodash.times';

import { cssVendorPrefix } from 'utils';
import View from 'View';

const Grid = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.func,
    ]),
    itemSize: React.PropTypes.shape({
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired,
    }).isRequired,
    style: React.PropTypes.object,
    type: React.PropTypes.oneOf(['fill']),
  },

  mixins: [PureRenderMixin],

  getDefaultProps() {
    return {
      type: 'fill',
    };
  },

  getInitialState() {
    return {
      xCount: Math.floor(window.innerWidth / this.props.itemSize.x),
      yCount: Math.floor(window.innerHeight / this.props.itemSize.y),
    };
  },

  render() {
    const {
      children,
      itemSize,
      style,
    } = this.props;

    const {
      xCount,
      yCount,
    } = this.state;

    const gridStyle = {
      position: 'relative',
      display: 'flex',
      ...cssVendorPrefix('alignItems', 'center'),
      ...cssVendorPrefix('justifyContent', 'center'),
    };

    const gridElementStyle = {
      position: 'absolute',
    };

    return (
      <View {...this.props} className="Grid" style={{...style, ...gridStyle}}>
        <View style={{
          width: xCount * itemSize.x,
          height: yCount * itemSize.y,
        }}>
        {times(xCount, xIndex => times(yCount, yIndex => (
          <View style={{
            ...gridElementStyle,
            left: xIndex * itemSize.x,
            top: yIndex * itemSize.y,
            width: itemSize.x,
            height: itemSize.y,
            margin: 'auto',
          }}>{typeof children === 'function'
            ? children({x: xIndex, y: yIndex}, {x: xCount, y: yCount})
            : children}</View>
        )))}
        </View>
      </View>
    );
  },
});

export default Grid;
