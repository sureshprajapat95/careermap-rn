import * as React from 'react';
import Svg, {Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

const Login = props => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect className="cls-1" width={24} height={24} />
      </ClipPath>
    </Defs>
    <G className="cls-2">
      <Path d="M11.47,13a.76.76,0,0,1-.75-.75.75.75,0,0,1,.75-.75l8.26,0h0a.75.75,0,0,1,.75.74.76.76,0,0,1-.75.76l-8.25,0Z" />
      <Path d="M17,16.84a.71.71,0,0,1-.53-.22.75.75,0,0,1,0-1.06l3.36-3.36L16.44,8.84a.74.74,0,0,1,0-1.06.75.75,0,0,1,1.06,0l3.9,3.88a.75.75,0,0,1,0,1.06l-3.88,3.9A.74.74,0,0,1,17,16.84Z" />
      <Path d="M11.59,21.21a9.24,9.24,0,0,1-5.36-1.72A9.21,9.21,0,0,1,17,4.51a.75.75,0,0,1,.17,1,.74.74,0,0,1-1,.17,7.71,7.71,0,1,0-.57,12.91.75.75,0,1,1,.76,1.29A9.24,9.24,0,0,1,11.59,21.21Z" />
    </G>
  </Svg>
);
export default Login;
