// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types

import { Color } from "../colors";
import { 
  BooleanChoice,
  CheckboxGroup,
  DatePicker,
  InputControlDefinition,
  LikertScale,
  NumberInput,
  RadioGroup,
  RelativeDatePicker,
  TextArea,
  TextInput,
  Toggle,
  ToggleButtonGroup,
  VisualAnalogScale,
} from "./controls";

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
  label: string,
  color: Color,
  inputControls: Array<InputControlDefinition>,
  variableGroups: Array<VariableGroup>,
  hasParameters: boolean,
  hasOptions: boolean,
};

export const number: VariableDefinition = {
  label: 'Number',
  color: Color.PARADISE_PINK,
  inputControls: [NumberInput],
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
    TextInput,
    TextArea
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
    BooleanChoice,
    Toggle,
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
    RadioGroup,
    LikertScale,
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

export const scalar: VariableDefinition = {
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

const datetime: VariableDefinition = {
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

type VariableTypeDefinition = {
  [key: string]: VariableDefinition,
};

export const VARIABLE_TYPES: VariableTypeDefinition = {
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
  VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Ordinal)
  || VARIABLE_TYPES[variableType].variableGroups.includes(VariableGroup.Categorical);

export const getComponentsForType = (variableType: string) => {
  return VARIABLE_TYPES[variableType].inputControls;
};

export const getVariableTypeColor = (variableType: string) => VARIABLE_TYPES[variableType].color;

export default VARIABLE_TYPES;