/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:21 GMT-0400 (Bolivia Time)
 * Time: 1:7:21
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:21 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:21
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsLogs} from "./esLogs";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsLogAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  log_id:string;
  
  log_att_name:string;
  
  log_att_description:string;
  
  log_att_group:string;
  
  log_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esLogAttributeLog:EsLogs;
  
  esLogAttributeLogAttParStatus:EsParams;
  
  esLogAttributeCreatedBy:EsUsers;
  
  esLogAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
