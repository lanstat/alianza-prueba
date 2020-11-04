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

import {EsJobAttributes} from "./esJobAttributes";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsJobAttributeInstances {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  job_att_id:string;
  
  valor:string;
  
  job_att_ins_group:string;
  
  job_att_ins_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esJobAttributeInstanceJobAtt:EsJobAttributes;
  
  esJobAttributeInstanceJobAttInsParStatus:EsParams;
  
  esJobAttributeInstanceCreatedBy:EsUsers;
  
  esJobAttributeInstanceUpdatedBy:EsUsers;
  
  //</es-section>
}
