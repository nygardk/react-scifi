import React from 'react';
import classnames from 'classnames';

import 'View.styl';
import { cssVendorPrefix } from 'utils';

const View = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
  },

  render() {
    const {
      children,
      className,
      style,
    } = this.props;

    const viewStyle = {
      height: '100%',
      width: '100%',
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
