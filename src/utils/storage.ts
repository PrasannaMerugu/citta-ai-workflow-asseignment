import type {
  NodeTemplate
} from "../types/workflow";


const TEMPLATE_KEY = "workflow_templates";



export function saveTemplates(
  templates: NodeTemplate[]
) {

  localStorage.setItem(
    TEMPLATE_KEY,
    JSON.stringify(templates)
  );

}




export function loadTemplates(): NodeTemplate[] {

  const data =
    localStorage.getItem(TEMPLATE_KEY);


  if (!data) {

    return [];

  }


  return JSON.parse(data);

}