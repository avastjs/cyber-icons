export let colors: Record<string, {primary: string, secondary: string, border: string}> = {
  default: {
    primary: '#ffffff',
    secondary: '#b0acb0',
    border: '#000000',
  },
  soft: {
    primary: "#036982",
    secondary: "#f32b6a",
    border: "#04e6e4",
  },
  stellar: {
    primary: "#083e12",
    secondary: "#1afe49",
    border: "#3d43b4",
  },
  eclipse: {
    primary: "#de004e",
    secondary: "#321450",
    border: "#f887ff",
  },
  twilight: {
    primary: '#ff9760',
    secondary: '#e96d5e',
    border: '#393f5f',
  },
  jupiter: {
    primary: '#de00fe',
    secondary: '#0016ee',
    border: '#defe47',
  },
  mars: {
    primary: '#0a9cf5',
    secondary: '#ff184c',
    border: '#ffccdc',
  },
  spacex: {
    primary: '#85ebd9',
    secondary: '#2f404d',
    border: '#b0acb0',
  },
  dark: {
    primary: 'gray',
    secondary: 'black',
    border: 'white',
  }
}

export const categories = ['standard-actions', 'standard-application', 'standard-categories']

export const ICON_SIZE = '24px'

export const STROKE_SIZE = '1px'

export type IconProps = {
  theme?: keyof typeof colors | string;
  size?: number | string;
  primary?: string;
  secondary?: string;
  border?: string;
  stroke?: string;
  className?: string;
  onClick?: () => void;
}

