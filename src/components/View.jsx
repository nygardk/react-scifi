import React from 'react';
import classnames from 'classnames';

import { cssVendorPrefix } from 'utils';
import './View.styl';

const View = React.createClass({
  propTypes: {
    flex: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
  },

  render() {
    const {
      flex,
      children,
      className,
      style,
    } = this.props;

    const flexStyle = flex ? {
      display: 'flex',
      ...cssVendorPrefix('alignItems', 'center'),
      ...cssVendorPrefix('justifyContent', 'center'),
    } : {};

    const viewStyle = {
      height: '100%',
      width: '100%',
      ...flexStyle,
      ...cssVendorPrefix('transformStyle', 'preserve-3d'),
      ...style,
    };

    const classes = classnames('View', className);

    return (
      <div {...this.props} className={classes} style={viewStyle}>
        {children}
      </div>
    );
  },
});

export default View;
