import { Color } from "../colors";
import { InputControlDefinition } from "./controls";
declare enum VariableGroup {
    Number = "number",
    Text = "text",
    Boolean = "boolean",
    Date = "date",
    Scalar = "scalar",
    Ordinal = "ordinal",
    Categorical = "categorical"
}
export declare type VariableDefinition = {
    label: string;
    color: Color;
    inputControls: Array<InputControlDefinition>;
    variableGroups: Array<VariableGroup>;
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
export declare const getVariableTypeColor: (variableType: string) => Color;
export default VARIABLE_TYPES;
