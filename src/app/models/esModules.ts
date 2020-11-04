/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:16 GMT-0400 (Bolivia Time)
 * Time: 1:7:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:16 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:16
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsModules {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  mod_parent_id:string;
  
  mod_code:string;
  
  mod_description:string;
  
  mod_abbr:string;
  
  mod_icon:string;
  
  mod_group:string;
  
  mod_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  updatedAt:Date;
  
  
  
  esModuleModParent:EsModules;
  
  esModuleModParStatus:EsParams;
  
  esModuleCreatedBy:EsUsers;
  
  esModuleUpdatedBy:EsUsers;
  
  //</es-section>
}
