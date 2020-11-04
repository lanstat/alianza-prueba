/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Sep 23 2020 21:09:33 GMT-0400 (Bolivia Time)
 * Time: 21:9:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Sep 23 2020 21:09:33 GMT-0400 (Bolivia Time)
 * Last time updated: 21:9:33
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsFlowAttributes} from "./esFlowAttributes";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsFlowAttributeInstances {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  flo_att_id:string;
  
  value:string;
  
  flo_att_ins_group:string;
  
  flo_att_ins_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esFlowAttributeInstanceFloAtt:EsFlowAttributes;
  
  esFlowAttributeInstanceFloAttInsParStatus:EsParams;
  
  esFlowAttributeInstanceCreatedBy:EsUsers;
  
  esFlowAttributeInstanceUpdatedBy:EsUsers;
  
  //</es-section>
}
