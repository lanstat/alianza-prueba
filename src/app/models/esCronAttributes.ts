/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sun Sep 06 2020 01:07:20 GMT-0400 (Bolivia Time)
 * Time: 1:7:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sun Sep 06 2020 01:07:20 GMT-0400 (Bolivia Time)
 * Last time updated: 1:7:20
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {EsCrons} from "./esCrons";

import {EsParams} from "./esParams";

import {EsUsers} from "./esUsers";

//</es-section>

export class EsCronAttributes {

  //<es-section>  
  
  _id:string;
  
  id:number;
  
  cro_id:string;
  
  cro_att_name:string;
  
  cro_att_description:string;
  
  cro_att_group:string;
  
  cro_att_par_status_id:string;
  
  createdById:string;
  
  updatedById:string;
  
  dueAt:Date;
  
  createdAt:Date;
  
  updatedAt:Date;
  
  
  
  esCronAttributeCro:EsCrons;
  
  esCronAttributeCroAttParStatus:EsParams;
  
  esCronAttributeCreatedBy:EsUsers;
  
  esCronAttributeUpdatedBy:EsUsers;
  
  //</es-section>
}
