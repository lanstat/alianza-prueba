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

import {EsUsers} from "./esUsers";

import {EsParams} from "./esParams";

//</es-section>

export class EsAuths {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  usr_id:string;
  
  aut_data:string;
  
  aut_group:string;
  
  aut_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esAuthUsr:EsUsers;
  
  esAuthAutParStatus:EsParams;
  
  esAuthCreatedBy:EsUsers;
  
  esAuthUpdatedBy:EsUsers;
  
  //</es-section>
}
