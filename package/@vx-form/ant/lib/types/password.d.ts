import { FieldType } from "@vx-form/core";
import { VXFormAntService } from "../tools/service";
export declare class VXFormFieldPassWord extends FieldType {
    service: any;
    constructor(dyService: VXFormAntService);
    fieldOperational(sign: string): void;
}