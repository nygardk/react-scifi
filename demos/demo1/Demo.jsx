/* eslint-disable id-length */

import React from 'react';

import {
  Grid,
  GradientBackground,
  Randomizer,
  View,
} from 'react-scifi';

import './Demo.styl';
import { colors } from './styleVariables';

const Demo = React.createClass({
  render() {
    return (
      <GradientBackground
        type="radial"
        startColor={colors.highlight.dark}
        endColor={colors.highlight.verydark}>
        <Grid type="fill" itemSize={{x: 20, y: 20}}>
          {() => (
            <Randomizer values={{opacity: 1}}
              randomizerFn={value => value - Math.random()}>
              {(values, randomize, release) => (
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
                        opacity: values.opacity.val.toFixed(2),
                      }} />
                  </svg>
                </View>
              )}
            </Randomizer>
          )}
        </Grid>

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
