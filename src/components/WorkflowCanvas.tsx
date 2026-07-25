import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import DynamicNode from "../nodes/DynamicNode";

import type {
  WorkflowNode
} from "../types/workflow";


type Props = {

  nodes: WorkflowNode[];

  onNodeClick:
  (node: WorkflowNode)=>void;

};



const nodeTypes = {

  dynamic: DynamicNode

};



export default function WorkflowCanvas(
{
  nodes,
  onNodeClick
}: Props
){



  const flowNodes: Node[] = nodes.map((node)=>({

    id: node.id,


    type:"dynamic",


    position: node.position,


    data:{

      label: node.config.label,


      properties: node.config.properties

    }

  }));




  return (

    <div

      style={{

        width:"100%",

        height:"100%"

      }}

    >


      <ReactFlow

        nodes={flowNodes}


        edges={[]}


        nodeTypes={nodeTypes}


        fitView



        onNodeClick={(event, clickedNode)=>{


          const selected =

          nodes.find(

            item => item.id === clickedNode.id

          );



          if(selected){

            onNodeClick(selected);

          }


        }}


      >


        <Background />


        <Controls />


        <MiniMap />


      </ReactFlow>


    </div>

  );

}