// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types

import {Color} from './colors';
import {
  booleanChoice,
  checkboxGroup,
  datePicker,
  InputControlDefinition,
  likertScale,
  numberInput,
  radioGroup,
  relativeDatePicker,
  textArea,
  textInput,
  toggle,
  toggleButtonGroup,
  visualAnalogScale,
} from './controls/index';

enum VariableGroup {
  Number = 'number',
  Text = 'text',
  Boolean = 'boolean',
  Date = 'date',
  Scalar = 'scalar',
  Ordinal = 'ordinal',
  Categorical = 'categorical',
}

export type VariableDefinition = {
  label: string;
  color: Color;
  inputControls: InputControlDefinition[];
  variableGroups: VariableGroup[];
  hasParameters: boolean;
  hasOptions: boolean;
};

export const number: VariableDefinition = {
  label: 'Number',
  color: Color.PARADISE_PINK,
  inputControls: [numberInput],
  variableGroups: [
    VariableGroup.Number,
  ],
  hasParameters: false,
  hasOptions: false,
};

export const text: VariableDefinition = {
  label: 'Text',
  color: Color.CERULEAN_BLUE,
  inputControls: [
    textInput,
    textArea,
  ],
  variableGroups: [
    VariableGroup.Text,
  ],
  hasParameters: false,
  hasOptions: false,
};

export const boolean: VariableDefinition = {
  label: 'Boolean',
  color: Color.NEON_CARROT,
  inputControls: [
    booleanChoice,
    toggle,
  ],
  variableGroups: [
    VariableGroup.Boolean,
  ],
  hasParameters: false,
  hasOptions: false,
};

export const ordinal: VariableDefinition = {
  label: 'Ordinal',
  color: Color.SEA_GREEN,
  inputControls: [
    radioGroup,
    likertScale,
  ],
  variableGroups: [
    VariableGroup.Ordinal,
  ],
  hasParameters: false,
  hasOptions: true,
};

export const categorical: VariableDefinition = {
  label: 'Categorical',
  color: Color.MUSTARD,
  inputControls: [
    checkboxGroup,
    toggleButtonGroup,
    radioGroup,
  ],
  variableGroups: [
    VariableGroup.Categorical,
  ],
  hasParameters: false,
  hasOptions: true,
};

export const scalar: VariableDefinition = {
  label: 'Scalar',
  color: Color.KIWI,
  inputControls: [
    visualAnalogScale,
  ],
  variableGroups: [
    VariableGroup.Scalar,
  ],
  hasParameters: true,
  hasOptions: false,
};

const datetime: VariableDefinition = {
  label: 'Date',
  color: Color.TOMATO,
  inputControls: [
    datePicker,
    relativeDatePicker,
  ],
  variableGroups: [
    VariableGroup.Date,
  ],
  hasParameters: true,
  hasOptions: false,
};

const layout: VariableDefinition = {
  label: 'Layout',
  color: Color.PURPLE_PIZAZZ,
  inputControls: [],
  variableGroups: [],
  hasParameters: false,
  hasOptions: false,
};

const location: VariableDefinition = {
  label: 'Location',
  color: Color.SLATE_BLUE_DARK,
  inputControls: [],
  variableGroups: [],
  hasParameters: false,
  hasOptions: false,
};

type VariableTypeDefinition = Record<string, VariableDefinition>;

export const variableTypes: VariableTypeDefinition = {
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

export const isOrdinalOrCategoricalType = (variableType: string) =>
  variableTypes[variableType].variableGroups.includes(VariableGroup.Ordinal)
  || variableTypes[variableType].variableGroups.includes(VariableGroup.Categorical);

export const getComponentsForType = (variableType: string) => variableTypes[variableType].inputControls;

export const getVariableTypeColor = (variableType: string) => variableTypes[variableType].color;

export default variableTypes;
