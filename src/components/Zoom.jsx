import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Motion, spring } from 'react-motion';

import View from 'View';
import Scale from 'Scale';

const Zoom = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    damping: React.PropTypes.number,
    show: React.PropTypes.bool.isRequired,
    stifness: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  mixins: [PureRenderMixin],

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

    return (
      <View className="Zoom" style={style}>
        <Motion defaultStyle={{zoom: 0}}
          style={{zoom: spring(show ? 1 : 0, [stifness, damping])}}>
          {value => (
            <Scale scale={value.zoom.toFixed(2)}>
              {children}
            </Scale>
          )}
        </Motion>
      </View>
    );
  },
});

export default Zoom;
