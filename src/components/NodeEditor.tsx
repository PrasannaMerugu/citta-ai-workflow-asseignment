import {
  useWorkflowStore
} from "../store/workflowStore";



export default function NodeEditor(){


  const selectedNode =
    useWorkflowStore(
      state => state.selectedNode
    );



  const updateNode =
    useWorkflowStore(
      state => state.updateNode
    );



  const saveTemplate =
    useWorkflowStore(
      state => state.saveTemplate
    );




  if(!selectedNode){

    return (

      <div

        style={{

          width:"300px",

          padding:"20px",

          borderLeft:"1px solid #ddd"

        }}

      >

        Select a node

      </div>

    );

  }





  const updateProperty = (

    key:string,

    value:string

  ) => {


    updateNode({

      ...selectedNode,


      config:{


        ...selectedNode.config,


        properties:{


          ...selectedNode.config.properties,


          [key]:value


        }


      }


    });


  };







  return (

    <div

      style={{


        width:"300px",


        padding:"20px",


        borderLeft:"1px solid #ddd",


        background:"white"


      }}

    >



      <h3>
        Node Editor
      </h3>





      <label>

        Label

      </label>




      <input


        style={{


          width:"100%",


          marginBottom:"15px"


        }}



        value={selectedNode.config.label}



        onChange={(e)=>



          updateNode({


            ...selectedNode,



            config:{



              ...selectedNode.config,



              label:e.target.value



            }



          })



        }



      />







      <h4>

        Properties

      </h4>







      {

        Object.entries(

          selectedNode.config.properties

        )

        .map(([key,value])=>(



          <div


            key={key}



            style={{


              marginBottom:"10px"


            }}



          >



            <label>

              {key}

            </label>





            <input



              style={{


                width:"100%"


              }}



              value={value}



              onChange={(e)=>



                updateProperty(


                  key,


                  e.target.value



                )



              }



            />



          </div>



        ))



      }








      <button


        style={{



          marginTop:"20px",



          width:"100%",



          padding:"10px",



          cursor:"pointer"



        }}



        onClick={()=>{



          saveTemplate({



            id:crypto.randomUUID(),



            type:selectedNode.type,



            label:selectedNode.config.label,



            defaultProperties:

            selectedNode.config.properties,



            version:1



          });



        }}



      >



        Save as Template



      </button>







    </div>


  );


}