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

import {EsObjectAttributes} from "./esObjectAttributes";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsObjectAttributeInstances {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  obj_att_id:string;
  
  value:string;
  
  obj_att_ins_group:string;
  
  obj_att_ins_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esObjectAttributeInstanceObjAtt:EsObjectAttributes;
  
  esObjectAttributeInstanceObjAttInsParStatus:EsParams;
  
  esObjectAttributeInstanceCreatedBy:EsUsers;
  
  esObjectAttributeInstanceUpdatedBy:EsUsers;
  
  //</es-section>
}
