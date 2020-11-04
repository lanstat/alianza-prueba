/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:15 GMT-0400 (Bolivia Time)
 * Time: 1:7:15
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:15 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:15
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsDictionaries {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  dic_code:string;
  
  dic_description:string;
  
  dic_group:string;
  
  dic_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esDictionaryDicParStatus:EsParams;
  
  esDictionaryCreatedBy:EsUsers;
  
  esDictionaryUpdatedBy:EsUsers;
  
  //</es-section>
}
