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

import {EsFiles} from "./esFiles";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsFileAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  fil_id:string;
  
  fil_att_name:string;
  
  fil_att_value:string;
  
  fil_att_group:string;
  
  fil_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esFileAttributeFil:EsFiles;
  
  esFileAttributeFilAttParStatus:EsParams;
  
  esFileAttributeCreatedBy:EsUsers;
  
  esFileAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
