declare var _default: {
    number: variables.VariableDefinition;
    text: variables.VariableDefinition;
    boolean: variables.VariableDefinition;
    ordinal: variables.VariableDefinition;
    categorical: variables.VariableDefinition;
    scalar: variables.VariableDefinition;
    VARIABLE_TYPES: {
        [key: string]: variables.VariableDefinition;
    };
    isOrdinalOrCategoricalType: (variableType: string) => boolean;
    getComponentsForType: (variableType: string) => import("./variables/controls").InputControlDefinition[];
    getVariableTypeColor: (variableType: string) => import("./colors").Color;
    StageTypes: Readonly<{
        NameGenerator: string;
        NameGeneratorQuickAdd: string;
        NameGeneratorRoster: string;
        NameGeneratorList: string;
        NameGeneratorAutoComplete: string;
        Sociogram: string;
        Information: string;
        OrdinalBin: string;
        CategoricalBin: string;
        Narrative: string;
        AlterForm: string;
        EgoForm: string;
        AlterEdgeForm: string;
        DyadCensus: string;
        TieStrengthCensus: string;
    }>;
    caseProperty: "caseId";
    sessionProperty: "sessionId";
    protocolProperty: "protocolUID";
    protocolName: "protocolName";
    sessionStartTimeProperty: "sessionStart";
    sessionFinishTimeProperty: "sessionFinish";
    sessionExportTimeProperty: "sessionExported";
    codebookHashProperty: "codebookHash";
    EntityTypes: Readonly<{
        edge: string;
        node: string;
    }>;
    nodeExportIDProperty: "nodeID";
    edgeExportIDProperty: "edgeID";
    egoProperty: "networkCanvasEgoUUID";
    ncTypeProperty: "networkCanvasType";
    ncProtocolNameProperty: "networkCanvasProtocolName";
    ncCaseProperty: "networkCanvasCaseID";
    ncSessionProperty: "networkCanvasSessionID";
    ncUUIDProperty: "networkCanvasUUID";
    ncSourceUUID: "networkCanvasSourceUUID";
    ncTargetUUID: "networkCanvasTargetUUID";
    entityPrimaryKeyProperty: "_uid";
    entityAttributesProperty: "attributes";
    edgeSourceProperty: "from";
    edgeTargetProperty: "to";
    InformationContentType: Readonly<{
        text: string;
        asset: string;
    }>;
    AssetType: Readonly<{
        image: string;
        video: string;
        audio: string;
    }>;
};
export default _default;
import * as variables from "./variables/variables";
