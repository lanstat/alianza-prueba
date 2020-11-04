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

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

import {EsFileAttributes} from "./esFileAttributes";

export class EsFiles {

  //<es-section>  
  
  _id:string;
  
  id:string;
  
  fil_rute:string;
  
  fil_par_type_id:string;
  
  fil_group:string;
  
  fil_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esFileFilParType:EsParams;
  
  esFileFilParStatus:EsParams;
  
  esFileCreatedBy:EsUsers;
  
  esFileUpdatedBy:EsUsers;
  
  //</es-section>
  
  esFileAttributes:EsFileAttributes[] = [];
}
