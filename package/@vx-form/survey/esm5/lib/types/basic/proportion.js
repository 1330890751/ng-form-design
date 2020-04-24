/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FieldType, Guid } from "@vx-form/core";
import { VXFormAntService } from "../../tools/service";
var VXSurveyProportion = /** @class */ (function (_super) {
    tslib_1.__extends(VXSurveyProportion, _super);
    function VXSurveyProportion(dyService) {
        var _this = _super.call(this) || this;
        _this.guid = Guid.create()["value"];
        _this.marks = {
            0: '0',
            20: '20',
            40: '40',
            60: '60',
            80: '80',
            100: '100'
        };
        _this.service = dyService;
        return _this;
    }
    //添加选项
    //添加选项
    /**
     * @return {?}
     */
    VXSurveyProportion.prototype.addOption = 
    //添加选项
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("add", "", this.field);
    };
    //批量添加
    //批量添加
    /**
     * @return {?}
     */
    VXSurveyProportion.prototype.addOptions = 
    //批量添加
    /**
     * @return {?}
     */
    function () {
        this.service.optionOperational("adds", "", this.field);
    };
    //删除选项
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    VXSurveyProportion.prototype.deleteOption = 
    //删除选项
    /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.service.optionOperational("delete", option, this.field);
    };
    VXSurveyProportion.decorators = [
        { type: Component, args: [{
                    selector: "vxsurvey-proportion",
                    template: " \n    <ng-container *ngIf=\"formStatus !== 0\"> \n        <div class=\"question-wrap_title\">\n          <div class=\"required\">\n            <span *ngIf=\"to.required\">*</span>\n          </div>\n          <inline-editor [(ngModel)]=\"to.label\" [active]=\"active\"\n          ></inline-editor>\n        </div>\n        <div class=\"question-wrap_content\">\n          <div class=\"option_wrap basic_radio\"  *ngFor=\"let item of to.options\">\n            <div class=\"option\">\n            \n            </div>\n            <div class=\"operate\"  (click)=\"deleteOption(item)\" *ngIf=\"active==true\">\n              <i class=\"icon-KT-Close\"></i>\n            </div>\n          </div>\n        </div> \n        <div class=\"question-wrap_operate\">\n          <span (click)=\"addOption()\">\u6DFB\u52A0\u5355\u4E2A\u9009\u9879</span> \n          <span (click)=\"addOptions()\">\u6279\u91CF\u6DFB\u52A0\u9009\u9879</span>\n        </div> \n    </ng-container>\n\n    <ng-container *ngIf=\"formStatus === 0\">\n      <ng-container *ngIf=\"editor === true\">\n        <nz-radio-group\n          [nzName]=\"'radiogroup-' + guid\"\n          [formControl]=\"formControl\"\n          [vxFormAttributes]=\"field\"\n          [class.is-invalid]=\"showError\"\n        >\n          <ng-container *ngFor=\"let item of to.options\">\n            <label nz-radio [nzValue]=\"item.value\">{{ item.label }}</label>\n          </ng-container>\n        </nz-radio-group>\n        <div class=\"tips\">\n          <i\n            class=\"icon-bangzhu\"\n            [nzTooltipTitle]=\"tips\"\n            nzTooltipPlacement=\"top\"\n            nz-tooltip\n            *ngIf=\"tips != ''\"\n          ></i>\n        </div>\n      </ng-container>\n\n      <div class=\"fieldtext\" *ngIf=\"editor === false\">{{ textSingle }}</div>\n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    VXSurveyProportion.ctorParameters = function () { return [
        { type: VXFormAntService }
    ]; };
    return VXSurveyProportion;
}(FieldType));
export { VXSurveyProportion };
if (false) {
    /** @type {?} */
    VXSurveyProportion.prototype.service;
    /** @type {?} */
    VXSurveyProportion.prototype.guid;
    /** @type {?} */
    VXSurveyProportion.prototype.marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcG9ydGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B2eC1mb3JtL3N1cnZleS8iLCJzb3VyY2VzIjpbImxpYi90eXBlcy9iYXNpYy9wcm9wb3J0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd2RDtJQXNEd0MsOENBQVM7SUFHL0MsNEJBQVksU0FBMkI7UUFBdkMsWUFDRSxpQkFBTyxTQUVSO1FBSkQsVUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUtuQyxXQUFLLEdBQVE7WUFDWCxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsRUFBRSxJQUFJO1lBQ1IsRUFBRSxFQUFFLElBQUk7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7U0FDWCxDQUFDO1FBVEEsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7O0lBQzNCLENBQUM7SUFTRCxNQUFNOzs7OztJQUNOLHNDQUFTOzs7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsTUFBTTs7Ozs7SUFDTix1Q0FBVTs7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELE1BQU07Ozs7OztJQUNOLHlDQUFZOzs7Ozs7SUFBWixVQUFhLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSx3ekRBa0RUO2lCQUNGOzs7O2dCQXhEUSxnQkFBZ0I7O0lBb0Z6Qix5QkFBQztDQUFBLEFBakZELENBc0R3QyxTQUFTLEdBMkJoRDtTQTNCWSxrQkFBa0I7OztJQUM3QixxQ0FBYTs7SUFDYixrQ0FBbUM7O0lBS25DLG1DQU9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlLCBHdWlkIH0gZnJvbSBcIkB2eC1mb3JtL2NvcmVcIjtcclxuaW1wb3J0IHsgVlhGb3JtQW50U2VydmljZSB9IGZyb20gXCIuLi8uLi90b29scy9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInZ4c3VydmV5LXByb3BvcnRpb25cIixcclxuICB0ZW1wbGF0ZTogYCBcclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzICE9PSAwXCI+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX3RpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0by5yZXF1aXJlZFwiPio8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbmxpbmUtZWRpdG9yIFsobmdNb2RlbCldPVwidG8ubGFiZWxcIiBbYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgICAgICAgICA+PC9pbmxpbmUtZWRpdG9yPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX2NvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25fd3JhcCBiYXNpY19yYWRpb1wiICAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3BlcmF0ZVwiICAoY2xpY2spPVwiZGVsZXRlT3B0aW9uKGl0ZW0pXCIgKm5nSWY9XCJhY3RpdmU9PXRydWVcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tS1QtQ2xvc2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi13cmFwX29wZXJhdGVcIj5cclxuICAgICAgICAgIDxzcGFuIChjbGljayk9XCJhZGRPcHRpb24oKVwiPua3u+WKoOWNleS4qumAiemhuTwvc3Bhbj4gXHJcbiAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiYWRkT3B0aW9ucygpXCI+5om56YeP5re75Yqg6YCJ6aG5PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtU3RhdHVzID09PSAwXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlZGl0b3IgPT09IHRydWVcIj5cclxuICAgICAgICA8bnotcmFkaW8tZ3JvdXBcclxuICAgICAgICAgIFtuek5hbWVdPVwiJ3JhZGlvZ3JvdXAtJyArIGd1aWRcIlxyXG4gICAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCJcclxuICAgICAgICAgIFt2eEZvcm1BdHRyaWJ1dGVzXT1cImZpZWxkXCJcclxuICAgICAgICAgIFtjbGFzcy5pcy1pbnZhbGlkXT1cInNob3dFcnJvclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0by5vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpWYWx1ZV09XCJpdGVtLnZhbHVlXCI+e3sgaXRlbS5sYWJlbCB9fTwvbGFiZWw+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L256LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCI+XHJcbiAgICAgICAgICA8aVxyXG4gICAgICAgICAgICBjbGFzcz1cImljb24tYmFuZ3podVwiXHJcbiAgICAgICAgICAgIFtuelRvb2x0aXBUaXRsZV09XCJ0aXBzXCJcclxuICAgICAgICAgICAgbnpUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgbnotdG9vbHRpcFxyXG4gICAgICAgICAgICAqbmdJZj1cInRpcHMgIT0gJydcIlxyXG4gICAgICAgICAgPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmllbGR0ZXh0XCIgKm5nSWY9XCJlZGl0b3IgPT09IGZhbHNlXCI+e3sgdGV4dFNpbmdsZSB9fTwvZGl2PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVlhTdXJ2ZXlQcm9wb3J0aW9uIGV4dGVuZHMgRmllbGRUeXBlIHtcclxuICBzZXJ2aWNlOiBhbnk7XHJcbiAgZ3VpZDogYW55ID0gR3VpZC5jcmVhdGUoKVtcInZhbHVlXCJdO1xyXG4gIGNvbnN0cnVjdG9yKGR5U2VydmljZTogVlhGb3JtQW50U2VydmljZSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc2VydmljZSA9IGR5U2VydmljZTtcclxuICB9IFxyXG4gIG1hcmtzOiBhbnkgPSB7XHJcbiAgICAwOiAnMCcsXHJcbiAgICAyMDogJzIwJyxcclxuICAgIDQwOiAnNDAnLFxyXG4gICAgNjA6ICc2MCcsXHJcbiAgICA4MDogJzgwJywgXHJcbiAgICAxMDA6ICcxMDAnXHJcbiAgfTtcclxuICAvL+a3u+WKoOmAiemhuVxyXG4gIGFkZE9wdGlvbigpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImFkZFwiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/mibnph4/mt7vliqBcclxuICBhZGRPcHRpb25zKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlLm9wdGlvbk9wZXJhdGlvbmFsKFwiYWRkc1wiLCBcIlwiLCB0aGlzLmZpZWxkKTtcclxuICB9XHJcbiAgLy/liKDpmaTpgInpoblcclxuICBkZWxldGVPcHRpb24ob3B0aW9uOiBhbnkpIHtcclxuICAgIHRoaXMuc2VydmljZS5vcHRpb25PcGVyYXRpb25hbChcImRlbGV0ZVwiLCBvcHRpb24sIHRoaXMuZmllbGQpO1xyXG4gIH1cclxufVxyXG4iXX0=