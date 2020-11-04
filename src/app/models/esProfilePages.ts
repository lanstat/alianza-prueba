/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Oct 25 2020 17:43:13 GMT-0400 (Bolivia Time)
 * Time: 17:43:13
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Oct 25 2020 17:43:13 GMT-0400 (Bolivia Time)
 * Last time updated: 17:43:13
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsProfiles} from "./esProfiles";

import {EsPages} from "./esPages";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsProfilePages {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  pro_id:string;
  
  pag_id:string;
  
  pro_pag_group:string;
  
  pro_pag_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esProfilePagePro:EsProfiles;
  
  esProfilePagePag:EsPages;
  
  esProfilePageProPagParStatus:EsParams;
  
  esProfilePageCreatedBy:EsUsers;
  
  esProfilePageUpdatedBy:EsUsers;
  
  //</es-section>
}
