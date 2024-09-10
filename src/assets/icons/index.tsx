import * as React from 'react';
import { Svg } from 'react-native-svg'; 
import { project } from './project';
import { comum } from './comum';

interface Icon {
  svg: JSX.Element;
  viewBox: string;
}

interface IconsMap {
  [key: string]: Icon;
}

const icons: IconsMap = {   
    ...comum,
    ...project
};

interface IconProps {
  icon: string;
  width?: number;
  height?: number;
  style?: object;
  fill?: string;
  stroke?: string;
}

const IconComponent: React.FC<IconProps> = (props) => {
  const { icon, width = 30, height = 30, style, fill = 'transparent', stroke = 'transparent' } = props;

  if (!icons[icon]) {
    return null; 
  }

  const { viewBox, svg } = icons[icon];

  return (
    <Svg
      viewBox={viewBox}
      width={width}
      height={height}
      style={style}
      fill={fill}
      stroke={stroke}
    >
      {svg}
    </Svg>
  );
};

export default IconComponent;
