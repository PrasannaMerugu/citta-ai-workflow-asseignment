import {
  Handle,
  Position
} from "@xyflow/react";


export default function DynamicNode({ data }: any) {


  return (

    <div

      style={{

        width: "240px",

        padding: "15px",

        border: "1px solid #aaa",

        borderRadius: "10px",

        background: "white",

        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"

      }}

    >

      <Handle
        type="target"
        position={Position.Top}
      />


      <h3

        style={{

          margin: "0 0 15px 0",

          fontSize: "16px"

        }}

      >

        {data.label}

      </h3>



      {
        Object.entries(data.properties || {})
        .map(([key,value]) => (

          <div

            key={key}

            style={{

              display:"flex",

              justifyContent:"space-between",

              marginBottom:"8px",

              fontSize:"13px"

            }}

          >

            <strong>
              {key}
            </strong>


            <span>
              {String(value)}
            </span>


          </div>

        ))
      }



      <Handle

        type="source"

        position={Position.Bottom}

      />


    </div>

  );

}