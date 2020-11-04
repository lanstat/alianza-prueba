/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Oct 25 2020 17:43:13 GMT-0400 (Bolivia Time)
 * Time: 17:43:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Oct 25 2020 17:43:13 GMT-0400 (Bolivia Time)
 * Last time updated: 17:43:13
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsModules} from "./esModules";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsPages {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  pag_module_id:string;
  
  pag_code:string;
  
  pag_description:string;
  
  pag_route:string;
  
  pag_params:string;
  
  pag_return_id:string;
  
  pag_icon:string;
  
  pag_group:string;
  
  pag_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  
  
  esPagePagModule:EsModules;
  
  esPagePagReturn:EsPages;
  
  esPagePagParStatus:EsParams;
  
  esPageCreatedBy:EsUsers;
  
  esPageUpdatedBy:EsUsers;
  
  //</es-section>
}
