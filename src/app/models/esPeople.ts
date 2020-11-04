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

import {EsPersonAttributes} from "./esPersonAttributes";

export class EsPeople {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  per_first_name:string;
  
  per_second_name:string;
  
  per_first_lastname:string;
  
  per_second_lastname:string;
  
  per_license:string;
  
  per_license_comp:string;
  
  per_home_address:string;
  
  per_mail:string;
  
  per_home_phone:string;
  
  per_cellphone:string;
  
  per_parent_id:string;
  
  per_par_type_doc_id:string;
  
  per_par_city_id:string;
  
  per_par_sex_id:string;
  
  per_par_country_id:string;
  
  per_par_nacionality_id:string;
  
  per_group:string;
  
  per_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  
  
  esPersonPerParent:EsPeople;
  
  esPersonPerParTypeDoc:EsParams;
  
  esPersonPerParCity:EsParams;
  
  esPersonPerParSex:EsParams;
  
  esPersonPerParCountry:EsParams;
  
  esPersonPerParNacionality:EsParams;
  
  esPersonPerParStatus:EsParams;
  
  esPersonCreatedBy:EsUsers;
  
  esPersonUpdatedBy:EsUsers;
  
  //</es-section>
  
  esPersonAttributes:EsPersonAttributes[] = [];
  
}
