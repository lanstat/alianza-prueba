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

import { TestBed } from '@angular/core/testing';
//<es-section>

import { EsModuleService } from './es-module.service';

describe('EsModuleService', () => {
  let service: EsModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
