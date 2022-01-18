"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLModel = exports.URL = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@hasezoey/typegoose");
class URL extends typegoose_1.Typegoose {
}
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "hash", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "originURL", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], URL.prototype, "shortURL", void 0);
exports.URL = URL;
exports.URLModel = new URL().getModelForClass(URL);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVJMLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL21vZGVsL1VSTC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbURBQXFEO0FBRXJELE1BQWEsR0FBSSxTQUFRLHFCQUFTO0NBU2pDO0FBUEE7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O2lDQUNiO0FBR1o7SUFEQyxJQUFBLGdCQUFJLEVBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNSO0FBR2pCO0lBREMsSUFBQSxnQkFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDVDtBQVJqQixrQkFTQztBQUVZLFFBQUEsUUFBUSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9wLCBUeXBlZ29vc2UgfSBmcm9tICdAaGFzZXpvZXkvdHlwZWdvb3NlJ1xuXG5leHBvcnQgY2xhc3MgVVJMIGV4dGVuZHMgVHlwZWdvb3NlIHtcblx0QHByb3AoeyByZXF1aXJlZDogdHJ1ZSB9KVxuXHRoYXNoOiBzdHJpbmdcblxuXHRAcHJvcCh7IHJlcXVpcmVkOiB0cnVlIH0pXG5cdG9yaWdpblVSTDogc3RyaW5nXG5cblx0QHByb3AoeyByZXF1aXJlZDogdHJ1ZSB9KVxuXHRzaG9ydFVSTDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBVUkxNb2RlbCA9IG5ldyBVUkwoKS5nZXRNb2RlbEZvckNsYXNzKFVSTCkiXX0=