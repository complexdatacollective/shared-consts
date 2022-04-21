// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types
import { Color } from "../colors";
import { BooleanChoice, CheckboxGroup, DatePicker, LikertScale, NumberInput, RadioGroup, RelativeDatePicker, TextArea, TextInput, Toggle, ToggleButtonGroup, VisualAnalogScale, } from "./controls";
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
export const number = {
    label: 'Number',
    color: Color.PARADISE_PINK,
    inputControls: [NumberInput],
    variableGroups: [
        VariableGroup.Number,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const text = {
    label: 'Text',
    color: Color.CERULEAN_BLUE,
    inputControls: [
        TextInput,
        TextArea
    ],
    variableGroups: [
        VariableGroup.Text,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const boolean = {
    label: 'Boolean',
    color: Color.NEON_CARROT,
    inputControls: [
        BooleanChoice,
        Toggle,
    ],
    variableGroups: [
        VariableGroup.Boolean,
    ],
    hasParameters: false,
    hasOptions: false,
};
export const ordinal = {
    label: 'Ordinal',
    color: Color.SEA_GREEN,
    inputControls: [
        RadioGroup,
        LikertScale,
    ],
    variableGroups: [
        VariableGroup.Ordinal,
    ],
    hasParameters: false,
    hasOptions: true,
};
export const categorical = {
    label: 'Categorical',
    color: Color.MUSTARD,
    inputControls: [
        CheckboxGroup,
        ToggleButtonGroup,
        RadioGroup,
    ],
    variableGroups: [
        VariableGroup.Categorical,
    ],
    hasParameters: false,
    hasOptions: true,
};
export const scalar = {
    label: 'Scalar',
    color: Color.KIWI,
    inputControls: [
        VisualAnalogScale,
    ],
    variableGroups: [
        VariableGroup.Scalar,
    ],
    hasParameters: true,
    hasOptions: false,
};
const datetime = {
    label: 'Date',
    color: Color.TOMATO,
    inputControls: [
        DatePicker,
        RelativeDatePicker,
    ],
    variableGroups: [
        VariableGroup.Date,
    ],
    hasParameters: true,
    hasOptions: false,
};
const layout = {
    label: 'Layout',
    color: Color.PURPLE_PIZAZZ,
    inputControls: [],
    variableGroups: [],
    hasParameters: false,
    hasOptions: false,
};
const location = {
    label: 'Location',
    color: Color.SLATE_BLUE_DARK,
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
export const isOrdinalOrCategoricalType = (variableType) => VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Ordinal)
    || VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Categorical);
export const getComponentsForType = (variableType) => {
    return VARIABLE_TYPES[variableType].inputControls;
};
export const getVariableTypeColor = (variableType) => VARIABLE_TYPES[variableType].color;
