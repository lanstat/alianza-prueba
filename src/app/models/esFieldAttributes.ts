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

import {EsFields} from "./esFields";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsFieldAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  fie_id:string;
  
  fie_att_name:string;
  
  fie_att_description:string;
  
  fie_att_group:string;
  
  fie_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esFieldAttributeFie:EsFields;
  
  esFieldAttributeFieAttParStatus:EsParams;
  
  esFieldAttributeCreatedBy:EsUsers;
  
  esFieldAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
