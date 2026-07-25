import {
  useWorkflowStore
} from "./store/workflowStore";


import WorkflowCanvas
from "./components/WorkflowCanvas";


import NodeEditor
from "./components/NodeEditor";


import TemplateSidebar
from "./components/TemplateSidebar";



function App(){


  const nodes =
    useWorkflowStore(
      (state)=>state.nodes
    );



  const setSelectedNode =
    useWorkflowStore(
      (state)=>state.setSelectedNode
    );



  return (

    <div

      style={{

        display:"flex",

        width:"100%",

        height:"100vh",

        overflow:"hidden"

      }}

    >


      {/* Saved Templates */}

      <TemplateSidebar />



      {/* React Flow Canvas */}

      <div

        style={{

          flex:1,

          height:"100%"

        }}

      >

        <WorkflowCanvas

          nodes={nodes}

          onNodeClick={setSelectedNode}

        />


      </div>



      {/* Node Property Editor */}

      <NodeEditor />


    </div>

  );

}


export default App;