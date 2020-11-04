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

import {EsRoles} from "./esRoles";

import {EsProfiles} from "./esProfiles";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsRoleProfiles {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  rol_id:string;
  
  pro_id:string;
  
  rol_pro_group:string;
  
  rol_pro_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esRoleProfileRol:EsRoles;
  
  esRoleProfilePro:EsProfiles;
  
  esRoleProfileRolProParStatus:EsParams;
  
  esRoleProfileCreatedBy:EsUsers;
  
  esRoleProfileUpdatedBy:EsUsers;
  
  //</es-section>
}
