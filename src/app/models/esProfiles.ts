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

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

import {EsProfileViews} from "./esProfileViews";

import {EsProfileModules} from "./esProfileModules";

import {EsProfileComponents} from "./esProfileComponents";

export class EsProfiles {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  pro_code:string;
  
  pro_description:string;
  
  pro_abbr:string;
  
  pro_group:string;
  
  pro_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esProfileProParStatus:EsParams;
  
  esProfileCreatedBy:EsUsers;
  
  esProfileUpdatedBy:EsUsers;
  
  //</es-section>
  
  esProfileComponents:EsProfileComponents[] = [];
  
  esProfileModules:EsProfileModules[] = [];
  
  esProfileViews:EsProfileViews[] = [];
}
