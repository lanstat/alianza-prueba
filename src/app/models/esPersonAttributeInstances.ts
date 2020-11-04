/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Sep 21 2020 02:28:14 GMT-0400 (Bolivia Time)
 * Time: 2:28:14
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Sep 21 2020 02:28:14 GMT-0400 (Bolivia Time)
 * Last time updated: 2:28:14
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsPersonAttributes} from "./esPersonAttributes";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsPersonAttributeInstances {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  per_att_id:string;
  
  per_att_value:string;
  
  per_att_ins_group:string;
  
  per_att_ins_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esPersonAttributeInstancePerAtt:EsPersonAttributes;
  
  esPersonAttributeInstancePerAttInsParStatus:EsParams;
  
  esPersonAttributeInstanceCreatedBy:EsUsers;
  
  esPersonAttributeInstanceUpdatedBy:EsUsers;
  
  //</es-section>
}
