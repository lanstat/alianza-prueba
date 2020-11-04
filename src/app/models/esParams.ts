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

import {EsDictionaries} from "./esDictionaries";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsParams {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  par_cod:string;
  
  par_description:string;
  
  par_abbr:string;
  
  par_group:string;
  
  par_dictionary_id:string;
  
  par_order:number;
  
  par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  updatedAt:Date;
  
  
  
  esParamParDictionary:EsDictionaries;
  
  esParamParStatus:EsParams;
  
  esParamCreatedBy:EsUsers;
  
  esParamUpdatedBy:EsUsers;
  
  //</es-section>
}
