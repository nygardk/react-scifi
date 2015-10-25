import React from 'react';
import { Motion, spring } from 'react-motion';

import View from 'View';
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

    return (
      <View className="Fade" style={style}>
        <Motion defaultStyle={{opacity: 0}}
          style={{opacity: spring(show ? 1 : 0)}}>
          {value => (
            <Translucent opacity={value.opacity}>
              {children}
            </Translucent>
          )}
        </Motion>
      </View>
    );
  },
});

export default Fade;
