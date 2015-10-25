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

function scifiCircle(fillColor) {
  return (
    <svg width="500px" height="500px" viewBox="0 0 100 100" x="0px" y="0px">
      <path fill={fillColor} d="M98.785,48.516C98.8,49.01,98.823,49.502,98.823,50c0,26.921-21.902,48.823-48.823,48.823
        C23.079,98.823,1.177,76.921,1.177,50C1.177,23.079,23.079,1.177,50,1.177c8.847,0,17.146,2.378,24.311,6.51l0.595-1.016
        C67.565,2.437,59.064,0,50,0C22.43,0,0,22.43,0,50s22.43,50,50,50s50-22.43,50-50c0-0.519-0.022-1.032-0.039-1.547L98.785,48.516z"
        />
    </svg>
  );
}

const App = React.createClass({
  getInitialState() {
    return {
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
  },

  showDemo() {
    this.setState({
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
      lightCircle,
      mediumCircle,
      showDemo,
    } = this.state;

    const appStyle = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    };

    const contentStyle = {
      width: '500px',
      height: '500px',
    };

    const rotatorStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
    };

    return (
      <GradientBackground
        startColor={bgStartColor.hex()}
        endColor={bgEndColor.hex()}>
          <div style={appStyle}
            onMouseDown={() => { this.hideDemo(); }}
            onMouseUp={() => { this.showDemo(); }}>
            <div style={contentStyle}>
              <Fade show={showDemo}>
                <Zoom show={showDemo}>
                  <TrackingTiltPlane tiltX={60} tiltY={30} perspective={500}>
                    <Rotator spinDuration={8000}
                      spinDirection="cw"
                      style={rotatorStyle}>
                      {scifiCircle(lightCircle.hex())}
                    </Rotator>

                    <Translate z={-100}>
                      <Rotator spinDuration={12000}
                        spinDirection="ccw"
                        style={rotatorStyle}>
                        <Scale scale={1}>
                          {scifiCircle(mediumCircle.hex())}
                        </Scale>
                      </Rotator>
                    </Translate>
                  </TrackingTiltPlane>
                </Zoom>
              </Fade>
            </div>
          </div>
      </GradientBackground>
    );
  },
});

export default App;
