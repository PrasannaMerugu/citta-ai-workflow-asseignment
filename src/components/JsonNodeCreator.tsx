import { useState } from "react";

import {
  useWorkflowStore
} from "../store/workflowStore";


export default function JsonNodeCreator(){


  const addNode =
    useWorkflowStore(
      state => state.addNode
    );


  const [json,setJson] = useState(`{
  "type":"slack",
  "label":"Send Slack Message",
  "properties":{
    "channel":"general",
    "message":"Hello"
  }
}`);




  const createNode = ()=>{


    try{


      const config = JSON.parse(json);



      addNode({


        id:crypto.randomUUID(),


        type:config.type,


        position:{

          x:300,

          y:300

        },


        config:{


          type:config.type,


          label:config.label,


          properties:config.properties


        }


      });



      alert("Node created");


    }

    catch(error){

      alert("Invalid JSON");

    }


  };




  return (

    <div

      style={{

        padding:"15px",

        borderBottom:"1px solid #ddd",

        background:"#fafafa"

      }}

    >


      <h3>
        Create Node From JSON
      </h3>



      <textarea

        value={json}

        onChange={(e)=>

          setJson(e.target.value)

        }


        style={{

          width:"300px",

          height:"150px"

        }}

      />



      <br/>


      <button

        onClick={createNode}

        style={{

          marginTop:"10px",

          padding:"8px 15px"

        }}

      >

        Create Node

      </button>


    </div>

  );


}