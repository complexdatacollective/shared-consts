// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types
import { COLORS } from "../colors";
import { BooleanChoice, CheckboxGroup, DatePicker, LikertScale, NumberInput, RadioGroup, RelativeDatePicker, TextArea, TextInput, Toggle, ToggleButtonGroup, VisualAnalogScale, } from "./controls";
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
export const number = {
    label: 'Number',
    color: COLORS.PARADISE_PINK,
    inputControls: [NumberInput],
    variableGroups: [
        VARIABLE_GROUPS.NUMBER,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const text = {
    label: 'Text',
    color: COLORS.CERULEAN_BLUE,
    inputControls: [
        TextInput,
        TextArea
    ],
    variableGroups: [
        VARIABLE_GROUPS.TEXT,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const boolean = {
    label: 'Boolean',
    color: COLORS.NEON_CARROT,
    inputControls: [
        BooleanChoice,
        Toggle,
    ],
    variableGroups: [
        VARIABLE_GROUPS.BOOLEAN,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const ordinal = {
    label: 'Ordinal',
    color: COLORS.SEA_GREEN,
    inputControls: [
        RadioGroup,
        LikertScale,
    ],
    variableGroups: [
        VARIABLE_GROUPS.ORDINAL,
    ],
    hasParameters: false,
    hasOptions: true,
};
export const categorical = {
    label: 'Categorical',
    color: COLORS.MUSTARD,
    inputControls: [
        CheckboxGroup,
        ToggleButtonGroup,
        RadioGroup,
    ],
    variableGroups: [
        VARIABLE_GROUPS.CATEGORICAL,
    ],
    hasParameters: false,
    hasOptions: true,
};
export const scalar = {
    label: 'Scalar',
    color: COLORS.KIWI,
    inputControls: [
        VisualAnalogScale,
    ],
    variableGroups: [
        VARIABLE_GROUPS.SCALAR,
    ],
    hasParameters: true,
    hasOptions: false,
};
const datetime = {
    label: 'Date',
    color: COLORS.TOMATO,
    inputControls: [
        DatePicker,
        RelativeDatePicker,
    ],
    variableGroups: [
        VARIABLE_GROUPS.DATE,
    ],
    hasParameters: true,
    hasOptions: false,
};
const layout = {
    label: 'Layout',
    color: COLORS.PURPLE_PIZAZZ,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
const location = {
    label: 'Location',
    color: COLORS.SLATE_BLUE_DARK,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
export const VARIABLE_TYPES = {
    number,
    text,
    boolean,
    ordinal,
    categorical,
    scalar,
    datetime,
    layout,
    location,
};
export const isOrdinalOrCategoricalType = (variableType) => VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.ORDINAL)
    || VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.CATEGORICAL);
export const getComponentsForType = (variableType) => {
    return VARIABLE_TYPES[variableType].inputControls;
};
export const getVariableTypeColor = (variableType) => VARIABLE_TYPES[variableType].color;
export default VARIABLE_TYPES;