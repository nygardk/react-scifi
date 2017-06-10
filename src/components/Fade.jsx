import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import cx from 'classnames';

import View from './View';
import Translucent from './Translucent';

const Fade = ({
  children,
  className,
  show,
  style,
  ...rest
}) => (
  <View {...rest} className={cx('Fade', className)} style={style}>
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: spring(show ? 1 : 0) }}
    >
      {value => (
        <Translucent opacity={parseFloat(value.opacity.toFixed(2))}>
          {children}
        </Translucent>
      )}
    </Motion>
  </View>
);

Fade.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default Fade;
