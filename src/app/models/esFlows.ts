/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:20 GMT-0400 (Bolivia Time)
 * Time: 1:7:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:20 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:20
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsFlows {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  flo_description:string;
  
  flo_group:string;
  
  flo_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esFlowFloParStatus:EsParams;
  
  esFlowCreatedBy:EsUsers;
  
  esFlowUpdatedBy:EsUsers;
  
  //</es-section>
}
