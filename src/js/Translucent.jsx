import React from 'react';


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
      opacity: opacity,
    };

    return (
      <div className="Translucent" style={{...translucentStyle, ...style}}>
        {children}
      </div>
    );
  },
});

export default Translucent;
