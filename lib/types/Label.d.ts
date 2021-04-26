import { BPointConstructor, BPoint, Point } from './Point';
import { BSize, Size } from './Size';
export interface BLabelConstructor {
    new (content: string, opts?: BLabelOptions): BLabel;
}
export interface BLabel {
    setStyle(styles: any): void;
    setContent(content: string): void;
    setPosition(postion: BPointConstructor): void;
    setTitle(title: string): void;
    getTitle(): string;
}
export interface BLabelOptions {
    offset?: BSize;
    position?: BPoint;
    enableMassClear?: boolean;
    content: string;
    styles: any;
}
export interface LabelOptions {
    offset?: Size;
    position?: Point;
    enableMassClear?: boolean;
    content: string;
    styles: any;
}
