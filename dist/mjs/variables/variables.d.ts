import { InputControlDefinition } from "./controls";
declare enum VARIABLE_GROUPS {
    NUMBER = "number",
    TEXT = "text",
    BOOLEAN = "boolean",
    DATE = "date",
    SCALAR = "scalar",
    ORDINAL = "ordinal",
    CATEGORICAL = "categorical"
}
export declare type VariableDefinition = {
    label: string;
    color: string;
    inputControls: Array<InputControlDefinition>;
    variableGroups: Array<VARIABLE_GROUPS>;
    hasParameters: boolean;
    hasOptions: boolean;
};
export declare const number: VariableDefinition;
export declare const text: VariableDefinition;
export declare const boolean: VariableDefinition;
export declare const ordinal: VariableDefinition;
export declare const categorical: VariableDefinition;
export declare const scalar: VariableDefinition;
declare type VariableTypeDefinition = {
    [key: string]: VariableDefinition;
};
export declare const VARIABLE_TYPES: VariableTypeDefinition;
export declare const isOrdinalOrCategoricalType: (variableType: string) => boolean;
export declare const getComponentsForType: (variableType: string) => InputControlDefinition[];
export declare const getVariableTypeColor: (variableType: string) => string;
export default VARIABLE_TYPES;