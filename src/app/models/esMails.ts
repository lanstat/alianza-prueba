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

import {EsUsers} from "./esUsers";

import {EsBusiness} from "./esBusiness";

import {EsParams} from "./esParams";

//</es-section>

export class EsMails {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  mai_description:string;
  
  mai_user_account:string;
  
  mai_bus_id:string;
  
  mai_group:string;
  
  mai_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esMailMaiUserAccount:EsUsers;
  
  esMailMaiBus:EsBusiness;
  
  esMailMaiParStatus:EsParams;
  
  esMailCreatedBy:EsUsers;
  
  esMailUpdatedBy:EsUsers;
  
  //</es-section>
}
