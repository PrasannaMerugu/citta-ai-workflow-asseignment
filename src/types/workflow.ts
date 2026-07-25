export interface NodeConfig {

    type:string;

    label:string;

    properties:Record<string,string>;

}



export interface WorkflowNode {

    id:string;

    type:string;

    position:{
        x:number;
        y:number;
    };

    config:NodeConfig;

}



export interface NodeTemplate {

    id:string;

    type:string;

    label:string;

    defaultProperties:
    Record<string,string>;

    version:number;

}