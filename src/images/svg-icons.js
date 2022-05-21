import * as React from 'react';
import { Svg, Path } from 'react-native-svg';

export const HomeIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16.61,2.21a1,1,0,0,0-1.24,0L1,13.42,2.24,15,4,13.62V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V13.63L29.76,15,31,13.43ZM18,26H14V18h4Zm2,0h0V18a2,2,0,0,0-2-2H14a2,2,0,0,0-2,2v8H6V12.06L16,4.27l10,7.8V26Z'>
      </Path>
    </Svg>
  );
};

export const ChatIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
          d='M17.74,30,16,29l4-7h6a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H6A2,2,0,0,0,4,8V20a2,2,0,0,0,2,2h9v2H6a4,4,0,0,1-4-4V8A4,4,0,0,1,6,4H26a4,4,0,0,1,4,4V20a4,4,0,0,1-4,4H21.16Z'>
      </Path>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
          d='M8 10H24V12H8zM8 16H18V18H8z'>
      </Path>
    </Svg>
  );
};

export const MapIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z'>
      </Path>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16,4a8.88,8.88,0,0,1,9,8.71,8.47,8.47,0,0,1-1.79,5.21l0,0,0,0L16,28.46,8.85,18l0,0,0,0A8.47,8.47,0,0,1,7,12.71,8.88,8.88,0,0,1,16,4m0-2A10.86,10.86,0,0,0,5,12.71a10.53,10.53,0,0,0,2.2,6.43L16,32l8.8-12.86A10.53,10.53,0,0,0,27,12.71,10.86,10.86,0,0,0,16,2Z'>
      </Path>
    </Svg>
  );
};
export const UserIcon = (props) => {
  const height = props.height || 28;
  const width = props.width || 28;
  const fill = props.fill || '#000';
  const stroke = props.stroke || 'none';
  const strokeWidth = props.strokeWidth || 0;

  return (
    <Svg height={height} width={width} viewBox='0 0 32 32'>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M16,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,8Z'>
      </Path>
      <Path fill={fill} stroke={stroke} strokeLinecap='round' strokeLinejoin='round' strokeWidth={strokeWidth}
            d='M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'>
      </Path>
    </Svg>
  );
};
