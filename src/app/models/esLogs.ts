/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:19 GMT-0400 (Bolivia Time)
 * Time: 1:7:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:19 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:19
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsObjects} from "./esObjects";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsLogs {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  log_obj_id:string;
  
  log_description:string;
  
  log_group:string;
  
  log_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esLogLogObj:EsObjects;
  
  esLogLogParStatus:EsParams;
  
  esLogCreatedBy:EsUsers;
  
  esLogUpdatedBy:EsUsers;
  
  //</es-section>
}
