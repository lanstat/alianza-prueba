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

import {EsParams} from "./esParams";

import {EsRoles} from "./esRoles";

import {EsModules} from "./esModules";

import {EsPeople} from "./esPeople";

import {EsFiles} from "./esFiles";

//</es-section>

import {EsUserRoles} from "./esUserRoles";

export class EsUsers {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  usr_id:string;
  
  usr_username:string;
  
  usr_password:string;
  
  usr_mail:string;
  
  usr_token:string;
  
  usr_name:string;
  
  usr_lastname:string;
  
  usr_par_auth_strategy_id:string;
  
  usr_accept_terms:boolean;
  
  usr_rol_id:string;
  
  usr_mod_id:string;
  
  usr_person_id:string;
  
  usr_fil_img_id:string;
  
  usr_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esUserUsrParAuthStrategy:EsParams;
  
  esUserUsrRol:EsRoles;
  
  esUserUsrMod:EsModules;
  
  esUserUsrPerson:EsPeople;
  
  esUserUsrFilImg:EsFiles;
  
  esUserUsrParStatus:EsParams;
  
  esUserCreatedBy:EsUsers;
  
  esUserUpdatedBy:EsUsers;
  
  //</es-section>
  
  esUserRoles:EsUserRoles[];
}
