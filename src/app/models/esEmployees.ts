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

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsEmployees {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  emp_name:string;
  
  emp_position:string;
  
  emp_office:string;
  
  emp_salary:number;
  
  emp_group:string;
  
  emp_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  
  
  esEmployeeEmpParStatus:EsParams;
  
  esEmployeeCreatedBy:EsUsers;
  
  esEmployeeUpdatedBy:EsUsers;
  
  //</es-section>
}
