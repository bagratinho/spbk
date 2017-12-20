import * as _ from "lodash";

interface ILinearGradientParams {
  deg?: number;
  startColor: string;
  endColor: string;
}

interface IBoxShadowParams {
  inset?: boolean;
  x: number;
  y: number;
  blur: number;
  stroke: number;
  color: string;
}

interface ITextShadowParams {
  x: number;
  y: number;
  blur: number;
  color: string;
}

interface IMpParams {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const linearGradient = (params: ILinearGradientParams): string => {
  const { deg, startColor, endColor } = params;
  return `linear-gradient(${deg}deg,
      ${startColor} 0%, ${endColor} 100%)`;
};

const pxToRem = (size: number): string => {
  return `${size / 10}rem`;
};

const boxShadow = (params: IBoxShadowParams[]) => {
  return _.reduce(params, (str, item, index) => {
    const { x, y, blur, stroke, color, inset} = item;
    const addition = `${inset ? "inset" : ""} ${x}px ${y}px ${blur}px ${stroke}px ${color}`;
    return !index ? `${addition}` : `${str}, ${addition}`;
  }, "");
};

const textShadow = (params: ITextShadowParams[]) => {
  return _.reduce(params, (str, item, index) => {
    const { x, y, blur, color} = item;
    const addition = `${x}px ${y}px ${blur}px ${color}`;
    return !index ? `${addition}` : `${str}, ${addition}`;
  }, "");
};

const transitionsToString = (transitions: string[]) => {
  return _.reduce(transitions, (str, item, index) => {
    return !index ? `${item}` : `${str}, ${item}`;
  }, "");
};

const arrayToBackground = (colors: string[]) => {
  if (colors.length === 1) { return colors[0]; }
  return linearGradient({
    deg: 180,
    startColor: colors[0],
    endColor: colors[colors.length - 1],
  });
};

const mpToPxRem = (params: IMpParams) => {
  const { top, left, right, bottom } = params;
  return `${pxToRem(top)} ${pxToRem(right)} ${pxToRem(bottom)} ${pxToRem(left)}`;
};

export {
  pxToRem,
  boxShadow,
  textShadow,
  transitionsToString,
  linearGradient,
  arrayToBackground,
  mpToPxRem,
};
