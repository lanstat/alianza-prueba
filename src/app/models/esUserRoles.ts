/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:16 GMT-0400 (Bolivia Time)
 * Time: 1:7:16
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:16 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:16
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsUsers} from "./esUsers";

import {EsRoles} from "./esRoles";

import {EsParams} from "./esParams";

//</es-section>

export class EsUserRoles {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  usr_id:string;
  
  rol_id:string;
  
  usr_rol_group:string;
  
  usr_rol_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esUserRoleUsr:EsUsers;
  
  esUserRoleRol:EsRoles;
  
  esUserRoleUsrRolParStatus:EsParams;
  
  esUserRoleCreatedBy:EsUsers;
  
  esUserRoleUpdatedBy:EsUsers;
  
  //</es-section>
}
