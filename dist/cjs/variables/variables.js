"use strict";
// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVariableTypeColor = exports.getComponentsForType = exports.isOrdinalOrCategoricalType = exports.VARIABLE_TYPES = exports.scalar = exports.categorical = exports.ordinal = exports.boolean = exports.text = exports.number = void 0;
const colors_1 = require("../colors");
const controls_1 = require("./controls");
var VariableGroup;
(function (VariableGroup) {
    VariableGroup["Number"] = "number";
    VariableGroup["Text"] = "text";
    VariableGroup["Boolean"] = "boolean";
    VariableGroup["Date"] = "date";
    VariableGroup["Scalar"] = "scalar";
    VariableGroup["Ordinal"] = "ordinal";
    VariableGroup["Categorical"] = "categorical";
})(VariableGroup || (VariableGroup = {}));
exports.number = {
    label: 'Number',
    color: colors_1.Color.PARADISE_PINK,
    inputControls: [controls_1.NumberInput],
    variableGroups: [
        VariableGroup.Number,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.text = {
    label: 'Text',
    color: colors_1.Color.CERULEAN_BLUE,
    inputControls: [
        controls_1.TextInput,
        controls_1.TextArea
    ],
    variableGroups: [
        VariableGroup.Text,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.boolean = {
    label: 'Boolean',
    color: colors_1.Color.NEON_CARROT,
    inputControls: [
        controls_1.BooleanChoice,
        controls_1.Toggle,
    ],
    variableGroups: [
        VariableGroup.Boolean,
    ],
    hasParameters: false,
    hasOptions: false,
};
exports.ordinal = {
    label: 'Ordinal',
    color: colors_1.Color.SEA_GREEN,
    inputControls: [
        controls_1.RadioGroup,
        controls_1.LikertScale,
    ],
    variableGroups: [
        VariableGroup.Ordinal,
    ],
    hasParameters: false,
    hasOptions: true,
};
exports.categorical = {
    label: 'Categorical',
    color: colors_1.Color.MUSTARD,
    inputControls: [
        controls_1.CheckboxGroup,
        controls_1.ToggleButtonGroup,
        controls_1.RadioGroup,
    ],
    variableGroups: [
        VariableGroup.Categorical,
    ],
    hasParameters: false,
    hasOptions: true,
};
exports.scalar = {
    label: 'Scalar',
    color: colors_1.Color.KIWI,
    inputControls: [
        controls_1.VisualAnalogScale,
    ],
    variableGroups: [
        VariableGroup.Scalar,
    ],
    hasParameters: true,
    hasOptions: false,
};
const datetime = {
    label: 'Date',
    color: colors_1.Color.TOMATO,
    inputControls: [
        controls_1.DatePicker,
        controls_1.RelativeDatePicker,
    ],
    variableGroups: [
        VariableGroup.Date,
    ],
    hasParameters: true,
    hasOptions: false,
};
const layout = {
    label: 'Layout',
    color: colors_1.Color.PURPLE_PIZAZZ,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
const location = {
    label: 'Location',
    color: colors_1.Color.SLATE_BLUE_DARK,
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
const isOrdinalOrCategoricalType = (variableType) => exports.VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Ordinal)
    || exports.VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Categorical);
exports.isOrdinalOrCategoricalType = isOrdinalOrCategoricalType;
const getComponentsForType = (variableType) => {
    return exports.VARIABLE_TYPES[variableType].inputControls;
};
exports.getComponentsForType = getComponentsForType;
const getVariableTypeColor = (variableType) => exports.VARIABLE_TYPES[variableType].color;
exports.getVariableTypeColor = getVariableTypeColor;
