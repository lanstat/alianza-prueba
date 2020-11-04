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

import {EsComponents} from "./esComponents";

import {EsFields} from "./esFields";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsComponentFieldAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  com_id:string;
  
  fie_id:string;
  
  com_fie_att_name:string;
  
  com_fie_att_description:string;
  
  com_fie_att_group:string;
  
  com_fie_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  
  
  esComponentFieldAttributeCom:EsComponents;
  
  esComponentFieldAttributeFie:EsFields;
  
  esComponentFieldAttributeComFieAttParStatus:EsParams;
  
  esComponentFieldAttributeCreatedBy:EsUsers;
  
  esComponentFieldAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
