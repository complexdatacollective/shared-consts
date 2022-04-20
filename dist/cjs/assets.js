"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetType = exports.InformationContentType = void 0;
// Docs: https://github.com/complexdatacollective/Network-Canvas/wiki/Information-Interface#content-types
exports.InformationContentType = Object.freeze({
    text: 'text',
    asset: 'asset',
});
exports.AssetType = Object.freeze({
    image: 'image',
    video: 'video',
    audio: 'audio',
});
exports.default = {
    InformationContentType: exports.InformationContentType,
    AssetType: exports.AssetType,
};
