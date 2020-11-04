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

import {EsModules} from "./esModules";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsComponents {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  com_mod_id:string;
  
  com_code:string;
  
  com_tag:string;
  
  com_description:string;
  
  com_par_type_id:string;
  
  com_parent_id:string;
  
  com_group:string;
  
  com_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  createdAt:Date;
  
  
  
  esComponentComMod:EsModules;
  
  esComponentComParType:EsParams;
  
  esComponentComParent:EsComponents;
  
  esComponentComParStatus:EsParams;
  
  esComponentCreatedBy:EsUsers;
  
  esComponentUpdatedBy:EsUsers;
  
  //</es-section>
}
