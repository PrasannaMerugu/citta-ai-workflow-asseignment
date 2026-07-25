import { create } from "zustand";

import type {
  NodeTemplate,
  WorkflowNode
} from "../types/workflow";

import {
  saveTemplates,
  loadTemplates
} from "../utils/storage";



interface WorkflowStore {


  nodes: WorkflowNode[];


  templates: NodeTemplate[];


  selectedNode: WorkflowNode | null;



  setSelectedNode:
  (node: WorkflowNode | null)=>void;



  addNode:
  (node: WorkflowNode)=>void;



  updateNode:
  (node: WorkflowNode)=>void;



  saveTemplate:
  (template: NodeTemplate)=>void;



  createFromTemplate:
  (template: NodeTemplate)=>void;


}




export const useWorkflowStore =
create<WorkflowStore>((set)=>({



nodes:[

{

id:"1",


type:"email",


position:{

x:250,

y:150

},


config:{

type:"email",


label:"Send Email",


properties:{


recipient:"prasanna@example.com",


subject:"Welcome!"

}

}


}

],




templates:loadTemplates(),




selectedNode:null,





setSelectedNode:(node)=>set({

selectedNode:node

}),





addNode:(node)=>set((state)=>({


nodes:[

...state.nodes,

node

]


})),






updateNode:(updatedNode)=>set((state)=>({


nodes:

state.nodes.map((node)=>

node.id===updatedNode.id

?

updatedNode

:

node

),


selectedNode:updatedNode


})),







saveTemplate:(template)=>set((state)=>{


const exists = state.templates.find(

(item)=>

item.type === template.type &&

item.label === template.label

);



if(exists){

return {

templates:state.templates

};

}



const updatedTemplates=[

...state.templates,

template

];



saveTemplates(updatedTemplates);



return {

templates:updatedTemplates

};


}),






createFromTemplate:(template)=>set((state)=>{


const newNode:WorkflowNode={


id:crypto.randomUUID(),


type:template.type,


position:{

x:400,

y:200

},


config:{


type:template.type,


label:template.label,


properties:{

...template.defaultProperties

}


}


};



return {


nodes:[

...state.nodes,

newNode

]


};


})



}));