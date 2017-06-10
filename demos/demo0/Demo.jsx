import React, { PureComponent } from 'react';
import color from 'onecolor';

import {
  Fade,
  GradientBackground,
  Rotator,
  Parallax,
  Scale,
  TrackingTiltPlane,
  Translate,
  View,
  Zoom,
  utils,
} from 'react-scifi';

import './Demo.styl';
import { colors } from './styleVariables';
import {
  circle34,
  circle14striped,
} from './shapes';

const {
  cssVendorPrefix,
} = utils;

class Demo extends PureComponent {
  state = {
    initialMount: false,
    showDemo: false,
    bgEndColor: color(colors.highlight.verydark),
    bgStartColor: color(colors.highlight.dark),
    lightCircle: color(colors.highlight.light),
    mediumCircle: color(colors.highlight.medium),
  }

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
  }

  showDemo = () => this.setState({
    initialMount: true,
    showDemo: true,
  })

  hideDemo = () => this.setState({ showDemo: false })

  render() {
    const {
      bgStartColor,
      bgEndColor,
      initialMount,
      lightCircle,
      mediumCircle,
      showDemo,
    } = this.state;

    const contentStyle = {
      position: 'relative',
      width: '500px',
      height: '500px',
      minWidth: 500,
    };

    const circlePosition = {
      position: 'absolute',
      top: 0,
      left: 0,
    };

    const reactIsCool = {
      color: lightCircle.hex(),
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      textAlign: 'center',
      fontFamily: 'Monaco, fixed-width',
      fontSize: '40px',
      fontWeight: 'bold',
      cursor: 'pointer',
      ...cssVendorPrefix('userSelect', 'none'),
    };

    return (
      <GradientBackground
        type="radial"
        startColor={bgStartColor.hex()}
        endColor={bgEndColor.hex()}
      >
        <View
          flex
          onMouseDown={() => { this.hideDemo(); }}
          onMouseUp={() => { this.showDemo(); }}
          onTouchStart={() => { this.hideDemo(); }}
          onTouchEnd={() => { this.showDemo(); }}
        >
          <View flex style={contentStyle}>
            <Fade show={showDemo} flex>
              <Zoom
                show={showDemo}
                stifness={showDemo ? 160 : 170}
                damping={showDemo ? 13 : 26}
              >
                <TrackingTiltPlane maxTiltDeg={60}>
                  <Rotator
                    spinDuration={8000}
                    spinDirection="cw"
                    style={circlePosition}
                  >
                    {circle34(lightCircle.hex())}
                  </Rotator>

                  <Translate z={-100} style={circlePosition}>
                    <Rotator
                      spinDuration={12000}
                      spinDirection="ccw"
                    >
                      <Scale scale={1.1}>
                        {circle34(mediumCircle.hex())}
                      </Scale>
                    </Rotator>
                  </Translate>

                  <Rotator
                    spinDuration={5000}
                    spinDirection="ccw"
                    style={circlePosition}
                  >
                    <Scale scale={0.9}>
                      {circle14striped(lightCircle.hex())}
                    </Scale>
                  </Rotator>
                </TrackingTiltPlane>
              </Zoom>
            </Fade>

            <div style={reactIsCool}>
              <TrackingTiltPlane maxTiltDeg={60}>
                <Zoom
                  show={!showDemo && initialMount}
                  stifness={!showDemo ? 150 : 170}
                  damping={!showDemo ? 11 : 26}
                >
                  <Fade show={!showDemo && initialMount}>
                    <Parallax count={5} distance={-200}>
                      {index => (
                        <View
                          style={{ opacity: 1 - (index / 5) }}
                          flex
                          key={index}
                        >
                          React.js is cool
                        </View>
                      )}
                    </Parallax>
                  </Fade>
                </Zoom>
              </TrackingTiltPlane>
            </div>
          </View>
        </View>

        <footer className="Footer">
          <a
            href="https://github.com/nygardk/react-scifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub: nygardk/react-scifi
          </a>
        </footer>
      </GradientBackground>
    );
  }
}

export default Demo;
