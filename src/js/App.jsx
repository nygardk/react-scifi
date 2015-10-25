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

    setTimeout(() => {
      this.showDemo();
    }, 300);
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

    const circlePosition = {
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

                    <Rotator spinDuration={6000}
                      spinDirection="ccw"
                      style={circlePosition}>
                      <Scale scale={0.9}>
                        {circle14striped(mediumCircle.hex())}
                      </Scale>
                    </Rotator>
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
