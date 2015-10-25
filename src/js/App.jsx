import React from 'react';
import color from 'onecolor';

import Fade from 'Fade';
import GradientBackground from 'GradientBackground';
import Rotator from 'Rotator';
import Scale from 'Scale';
import TrackingTiltPlane from 'TrackingTiltPlane';
import Translate from 'Translate';
import Zoom from 'Zoom';
import { colors } from 'styleVariables';
import {
  circle34,
  circle14striped,
} from 'shapes';
import { cssVendorPrefix } from 'utils';

const App = React.createClass({
  getInitialState() {
    return {
      initialMount: false,
      showDemo: false,
      bgEndColor: color(colors.highlight.verydark),
      bgStartColor: color(colors.highlight.dark),
      lightCircle: color(colors.highlight.light),
      mediumCircle: color(colors.highlight.medium),
    };
  },

  componentDidMount() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          bgEndColor: prevState.bgEndColor.hue(0.0005, true),
          bgStartColor: prevState.bgStartColor.hue(0.0005, true),
          lightCircle: prevState.lightCircle.hue(0.0005, true),
          mediumCircle: prevState.mediumCircle.hue(0.0005, true),
        };
      });
    }, 25);

    setTimeout(() => {
      this.showDemo();
    }, 300);
  },

  showDemo() {
    this.setState({
      initialMount: true,
      showDemo: true,
    });
  },

  hideDemo() {
    this.setState({
      showDemo: false,
    });
  },

  render() {
    const {
      bgStartColor,
      bgEndColor,
      initialMount,
      lightCircle,
      mediumCircle,
      showDemo,
    } = this.state;

    const flexContainer = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    };

    const contentStyle = {
      ...flexContainer,
      width: '500px',
      height: '500px',
      cursor: 'pointer',
    };

    const circlePosition = {
      position: 'absolute',
      top: 0,
      left: 0,
    };

    const reactIsCool = {
      color: lightCircle.hex(),
      position: 'absolute',
      width: '300px',
      left: '50%',
      top: '50%',
      marginTop: '-5px',
      marginLeft: '-150px',
      textAlign: 'center',
      fontFamily: 'Monaco, fixed-width',
      fontSize: '30px',
      fontWeight: 'bold',
      cursor: 'pointer',
      ...cssVendorPrefix('userSelect', 'none'),
    };

    return (
      <GradientBackground
        startColor={bgStartColor.hex()}
        endColor={bgEndColor.hex()}>
        <div style={flexContainer}
          onMouseDown={() => { this.hideDemo(); }}
          onMouseUp={() => { this.showDemo(); }}>
          <div style={contentStyle}>
            <Fade show={showDemo} style={flexContainer}>
              <Zoom show={showDemo}>
                <TrackingTiltPlane>
                  <Rotator spinDuration={8000}
                    spinDirection="cw"
                    style={circlePosition}>
                    {circle34(lightCircle.hex())}
                  </Rotator>

                  <Translate z={-100} style={circlePosition}>
                    <Rotator spinDuration={12000}
                      spinDirection="ccw">
                      <Scale scale={1.1}>
                        {circle34(mediumCircle.hex())}
                      </Scale>
                    </Rotator>
                  </Translate>

                  <Rotator spinDuration={5000}
                    spinDirection="ccw"
                    style={circlePosition}>
                    <Scale scale={0.9}>
                      {circle14striped(lightCircle.hex())}
                    </Scale>
                  </Rotator>
                </TrackingTiltPlane>
              </Zoom>
            </Fade>

            <div style={reactIsCool}>
              <TrackingTiltPlane>
                <Zoom show={!showDemo && initialMount}
                  stifness={!showDemo ? 150 : 170}
                  damping={!showDemo ? 11 : 26}>
                  <Fade show={!showDemo && initialMount}>
                    React.js is cool
                  </Fade>
                </Zoom>
              </TrackingTiltPlane>
            </div>
          </div>
        </div>
      </GradientBackground>
    );
  },
});

export default App;
