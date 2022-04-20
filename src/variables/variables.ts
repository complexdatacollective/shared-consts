// Docs: https://github.com/codaco/Network-Canvas/wiki/Variable-Types

import { COLORS } from "../colors";
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

enum VARIABLE_GROUPS {
  NUMBER = 'number',
  TEXT = 'text',
  BOOLEAN = 'boolean',
  DATE = 'date',
  SCALAR = 'scalar',
  ORDINAL = 'ordinal',
  CATEGORICAL = 'categorical',
}

export type VariableDefinition = {
  label: string,
  color: string,
  inputControls: Array<InputControlDefinition>,
  variableGroups: Array<VARIABLE_GROUPS>,
  hasParameters: boolean,
  hasOptions: boolean,
};

export const number: VariableDefinition = {
  label: 'Number',
  color: COLORS.PARADISE_PINK,
  inputControls: [NumberInput],
  variableGroups: [
    VARIABLE_GROUPS.NUMBER,
  ],
  hasParameters: false,
  hasOptions: false,
};

export const text: VariableDefinition = {
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

export const boolean: VariableDefinition = {
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

export const ordinal: VariableDefinition = {
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

export const categorical: VariableDefinition = {
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

export const scalar: VariableDefinition = {
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

const datetime: VariableDefinition = {
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

const layout: VariableDefinition = {
  label: 'Layout',
  color: COLORS.PURPLE_PIZAZZ,
  inputControls: [],
  variableGroups: [],
  hasParameters: false,
  hasOptions: false,
};

const location: VariableDefinition = {
  label: 'Location',
  color: COLORS.SLATE_BLUE_DARK,
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
  VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.ORDINAL)
  || VARIABLE_TYPES[variableType].variableGroups.includes(VARIABLE_GROUPS.CATEGORICAL);

export const getComponentsForType = (variableType: string) => {
  return VARIABLE_TYPES[variableType].inputControls;
};

export const getVariableTypeColor = (variableType: string) => VARIABLE_TYPES[variableType].color;

export default VARIABLE_TYPES;