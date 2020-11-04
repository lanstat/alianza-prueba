/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:18 GMT-0400 (Bolivia Time)
 * Time: 1:7:18
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:18 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:18
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsProfiles} from "./esProfiles";

import {EsComponents} from "./esComponents";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsProfileComponents {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  pro_id:string;
  
  com_id:string;
  
  pro_com_group:string;
  
  pro_com_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esProfileComponentPro:EsProfiles;
  
  esProfileComponentCom:EsComponents;
  
  esProfileComponentProComParStatus:EsParams;
  
  esProfileComponentCreatedBy:EsUsers;
  
  esProfileComponentUpdatedBy:EsUsers;
  
  //</es-section>
}
