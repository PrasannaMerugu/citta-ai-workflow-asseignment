import {
  useWorkflowStore
} from "../store/workflowStore";



export default function TemplateSidebar(){



  const templates =

    useWorkflowStore(

      state => state.templates

    );





  const createFromTemplate =

    useWorkflowStore(

      state => state.createFromTemplate

    );






  return (



    <div



      style={{



        width:"220px",



        padding:"15px",



        borderRight:"1px solid #ddd",



        background:"#f5f5f5"



      }}



    >



      <h3>

        Templates

      </h3>






      {

        templates.length === 0 ?



        (



          <p>

            No templates saved

          </p>



        )



        :



        templates.map((template)=>(



          <button



            key={template.id}



            style={{



              width:"100%",



              marginBottom:"10px",



              padding:"10px",



              cursor:"pointer"



            }}



            onClick={()=>



              createFromTemplate(template)



            }



          >



            {template.label}



          </button>



        ))



      }




    </div>



  );


}