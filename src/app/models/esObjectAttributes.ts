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

import {EsObjects} from "./esObjects";

import {EsAttributes} from "./esAttributes";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsObjectAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  obj_id:string;
  
  att_id:string;
  
  obj_att_default_value:string;
  
  obj_att_par_editable_id:string;
  
  obj_att_par_interface_behavior_id:string;
  
  obj_att_group:string;
  
  obj_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  updatedAt:Date;
  
  
  
  esObjectAttributeObj:EsObjects;
  
  esObjectAttributeAtt:EsAttributes;
  
  esObjectAttributeObjAttParEditable:EsParams;
  
  esObjectAttributeObjAttParInterfaceBehavior:EsParams;
  
  esObjectAttributeObjAttParStatus:EsParams;
  
  esObjectAttributeCreatedBy:EsUsers;
  
  esObjectAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
