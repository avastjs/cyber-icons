export declare let colors: Record<string, {
    primary: string;
    secondary: string;
    border: string;
}>;
export declare const categories: string[];
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
