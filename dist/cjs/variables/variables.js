"use strict";
// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariableTypeColor = exports.getComponentsForType = exports.isOrdinalOrCategoricalType = exports.VARIABLE_TYPES = exports.scalar = exports.categorical = exports.ordinal = exports.boolean = exports.text = exports.number = void 0;
const colors_1 = require("../colors");
const controls_1 = require("./controls");
var VARIABLE_GROUPS;
(function (VARIABLE_GROUPS) {
    VARIABLE_GROUPS["NUMBER"] = "number";
    VARIABLE_GROUPS["TEXT"] = "text";
    VARIABLE_GROUPS["BOOLEAN"] = "boolean";
    VARIABLE_GROUPS["DATE"] = "date";
    VARIABLE_GROUPS["SCALAR"] = "scalar";
    VARIABLE_GROUPS["ORDINAL"] = "ordinal";
    VARIABLE_GROUPS["CATEGORICAL"] = "categorical";
})(VARIABLE_GROUPS || (VARIABLE_GROUPS = {}));
exports.number = {
    label: 'Number',
    color: colors_1.COLORS.PARADISE_PINK,
    inputControls: [controls_1.NumberInput],
    variableGroups: [
        VARIABLE_GROUPS.NUMBER,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.text = {
    label: 'Text',
    color: colors_1.COLORS.CERULEAN_BLUE,
    inputControls: [
        controls_1.TextInput,
        controls_1.TextArea
    ],
    variableGroups: [
        VARIABLE_GROUPS.TEXT,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.boolean = {
    label: 'Boolean',
    color: colors_1.COLORS.NEON_CARROT,
    inputControls: [
        controls_1.BooleanChoice,
        controls_1.Toggle,
    ],
    variableGroups: [
        VARIABLE_GROUPS.BOOLEAN,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.ordinal = {
    label: 'Ordinal',
    color: colors_1.COLORS.SEA_GREEN,
    inputControls: [
        controls_1.RadioGroup,
        controls_1.LikertScale,
    ],
    variableGroups: [
        VARIABLE_GROUPS.ORDINAL,
    ],
    hasParameters: false,
    hasOptions: true,
};
exports.categorical = {
    label: 'Categorical',
    color: colors_1.COLORS.MUSTARD,
    inputControls: [
        controls_1.CheckboxGroup,
        controls_1.ToggleButtonGroup,
        controls_1.RadioGroup,
    ],
    variableGroups: [
        VARIABLE_GROUPS.CATEGORICAL,
    ],
    hasParameters: false,
    hasOptions: true,
};
exports.scalar = {
    label: 'Scalar',
    color: colors_1.COLORS.KIWI,
    inputControls: [
        controls_1.VisualAnalogScale,
    ],
    variableGroups: [
        VARIABLE_GROUPS.SCALAR,
    ],
    hasParameters: true,
    hasOptions: false,
};
const datetime = {
    label: 'Date',
    color: colors_1.COLORS.TOMATO,
    inputControls: [
        controls_1.DatePicker,
        controls_1.RelativeDatePicker,
    ],
    variableGroups: [
        VARIABLE_GROUPS.DATE,
    ],
    hasParameters: true,
    hasOptions: false,
};
const layout = {
    label: 'Layout',
    color: colors_1.COLORS.PURPLE_PIZAZZ,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
const location = {
    label: 'Location',
    color: colors_1.COLORS.SLATE_BLUE_DARK,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
exports.VARIABLE_TYPES = {
    number: exports.number,
    text: exports.text,
    boolean: exports.boolean,
    ordinal: exports.ordinal,
    categorical: exports.categorical,
    scalar: exports.scalar,
    datetime,
    layout,
    location,
};
const isOrdinalOrCategoricalType = (variableType) => exports.VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.ORDINAL)
    || exports.VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.CATEGORICAL);
exports.isOrdinalOrCategoricalType = isOrdinalOrCategoricalType;
const getComponentsForType = (variableType) => {
    return exports.VARIABLE_TYPES[variableType].inputControls;
};
exports.getComponentsForType = getComponentsForType;
const getVariableTypeColor = (variableType) => exports.VARIABLE_TYPES[variableType].color;
exports.getVariableTypeColor = getVariableTypeColor;
exports.default = exports.VARIABLE_TYPES;
