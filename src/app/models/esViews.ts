/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:18 GMT-0400 (Bolivia Time)
 * Time: 1:7:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:18 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:18
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsModules} from "./esModules";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsViews {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  vie_module_id:string;
  
  vie_code:string;
  
  vie_description:string;
  
  vie_route:string;
  
  vie_params:string;
  
  vie_return_id:string;
  
  vie_icon:string;
  
  vie_group:string;
  
  vie_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  
  
  esViewVieModule:EsModules;
  
  esViewVieReturn:EsViews;
  
  esViewVieParStatus:EsParams;
  
  esViewCreatedBy:EsUsers;
  
  esViewUpdatedBy:EsUsers;
  
  //</es-section>
}
