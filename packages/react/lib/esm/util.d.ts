export declare let colors: {
    default: {
        primary: string;
        secondary: string;
        border: string;
    };
    soft: {
        primary: string;
        secondary: string;
        border: string;
    };
    stellar: {
        primary: string;
        secondary: string;
        border: string;
    };
    eclipse: {
        primary: string;
        secondary: string;
        border: string;
    };
    twilight: {
        primary: string;
        secondary: string;
        border: string;
    };
    jupiter: {
        primary: string;
        secondary: string;
        border: string;
    };
    mars: {
        primary: string;
        secondary: string;
        border: string;
    };
    spacex: {
        primary: string;
        secondary: string;
        border: string;
    };
    dark: {
        primary: string;
        secondary: string;
        border: string;
    };
};
export declare const ICON_SIZE = "24px";
export declare const STROKE_SIZE = "1px";
export declare type IconProps = {
    theme?: keyof typeof colors | string;
    size?: number | string;
    primary?: string;
    secondary?: string;
    border?: string;
    stroke?: string;
    className?: string;
    onClick?: () => void;
};
