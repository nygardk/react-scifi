/* eslint-disable id-length */

import React from 'react';

import {
  Grid,
  GradientBackground,
  MatrixModifier,
  View,
} from 'react-scifi';

import './Demo.styl';
import { colors } from './styleVariables';

function modifyFn(valueMatrix, xIndex, yIndex) {
  const newMatrix = valueMatrix.createCopy();

  // const newValues = {};
  // const keys = Object.keys(values);

  // for (let i = 0; i < keys.length; i++) {
  //   newValues[keys[i]] = values[keys[i]] - Math.random();
  // }

  // console.log(newValues);

  // return newValues;

  return newMatrix;
}

const Demo = React.createClass({
  render() {
    return (
      <GradientBackground
        type="radial"
        startColor={colors.highlight.dark}
        endColor={colors.highlight.verydark}>
        <MatrixModifier
          initialValue={{opacity: 0.0}}
          modifyFn={modifyFn}>
          {(valueMatrix, randomize, release) => (
            <Grid type="fill" itemSize={{x: 30, y: 30}}>
              {position => (
                <View flex={true}
                  onMouseOver={randomize}
                  onMouseOut={release}>
                  <svg width="8px" height="8px" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      style={{
                        fill: `white`,
                        opacity: valueMatrix.get(position.x, position.y)
                          .opacity.val.toFixed(2),
                      }} />
                  </svg>
                </View>
              )}
            </Grid>
          )}
        </MatrixModifier>

        <footer className="Footer">
          <a href="https://github.com/nygardk/react-scifi" target="_blank">
            GitHub: nygardk/react-scifi
          </a>
        </footer>
      </GradientBackground>
    );
  },
});

export default Demo;
