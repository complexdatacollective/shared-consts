"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityTypes = void 0;
// Docs: https://github.com/complexdatacollective/Network-Canvas/wiki/protocol.json#variable-registry
exports.EntityTypes = Object.freeze({
    edge: 'edge',
    node: 'node',
});
// Todo: add TS definitions for entity types here, and ultimately the protocol json structure itself
exports.default = {
    EntityTypes: exports.EntityTypes,
};
