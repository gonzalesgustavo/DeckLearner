import { CSSProperties } from "react";

export default class CssFactory {
    static makeStyles(styles: Record<string, CSSProperties>): Record<string, CSSProperties> {
        return styles;
    }
}