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

import {EsMails} from "./esMails";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsMailAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  mai_id:string;
  
  mai_att_name:string;
  
  mai_att_description:string;
  
  mai_att_group:string;
  
  mai_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esMailAttributeMai:EsMails;
  
  esMailAttributeMaiAttParStatus:EsParams;
  
  esMailAttributeCreatedBy:EsUsers;
  
  esMailAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
