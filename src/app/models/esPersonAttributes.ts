/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:17 GMT-0400 (Bolivia Time)
 * Time: 1:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsPeople} from "./esPeople";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsPersonAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  per_id:string;
  
  per_att_name:string;
  
  per_att_value:string;
  
  per_att_group:string;
  
  per_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esPersonAttributePer:EsPeople;
  
  esPersonAttributePerAttParStatus:EsParams;
  
  esPersonAttributeCreatedBy:EsUsers;
  
  esPersonAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
