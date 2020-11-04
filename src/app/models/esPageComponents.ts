/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Oct 26 2020 01:04:50 GMT-0400 (Bolivia Time)
 * Time: 1:4:50
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Oct 26 2020 01:04:50 GMT-0400 (Bolivia Time)
 * Last time updated: 1:4:50
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsPages} from "./esPages";

import {EsComponents} from "./esComponents";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsPageComponents {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  pag_id:string;
  
  com_id:string;
  
  pag_com_code:string;
  
  pag_com_group:string;
  
  pag_com_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esPageComponentPag:EsPages;
  
  esPageComponentCom:EsComponents;
  
  esPageComponentPagComParStatus:EsParams;
  
  esPageComponentCreatedBy:EsUsers;
  
  esPageComponentUpdatedBy:EsUsers;
  
  //</es-section>
}
