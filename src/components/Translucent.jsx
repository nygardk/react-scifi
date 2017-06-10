import React from 'react';

import View from 'View';

const Translucent = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    opacity: React.PropTypes.number,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      opacity,
      style,
    } = this.props;

    const translucentStyle = {
      height: '100%',
      width: '100%',
      opacity,
    };

    return (
      <View className="Translucent" style={{ ...translucentStyle, ...style }}>
        {children}
      </View>
    );
  },
});

export default Translucent;
