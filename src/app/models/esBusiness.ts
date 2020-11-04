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

import {EsParams} from "./esParams";

//</es-section>

export class EsBusiness {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  bus_name:string;
  
  bus_description:string;
  
  bus_mission:string;
  
  bus_vision:string;
  
  bus_purpose:string;
  
  bus_user_account:string;
  
  bus_group:string;
  
  bus_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  createdAt:Date;
  
  
  
  esBusineBusUserAccount:EsUsers;
  
  esBusineBusParStatus:EsParams;
  
  esBusineCreatedBy:EsUsers;
  
  esBusineUpdatedBy:EsUsers;
  
  //</es-section>
}
