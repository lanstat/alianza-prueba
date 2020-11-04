/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Sat Oct 17 2020 10:01:32 GMT-0400 (Bolivia Time)
 * Time: 10:1:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Sat Oct 17 2020 10:01:32 GMT-0400 (Bolivia Time)
 * Last time updated: 10:1:32
 *
 * Caution: es-sections will be replaced by script execution
 */

import {Inject, Injectable, NgZone} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {
  CanvasScriptStore,
  CanvasStyleStore,
  InspiniaScriptStore,
  InspiniaStyleStore
} from "../file-store.component";
import '../helpers/utils';
import {ActivatedRoute, Router} from "@angular/router";
let reinit: boolean = false;
declare var document: any;

//<es-section>
import {EsModules} from "../models/esModules";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class EsModuleService {

  basePath: string = `${environment.backend.server.webpath}/api-esvender/es-modules/`;
  private scripts: any = {};
  private styles: any = {};
  private scriptsByUrl: any = {};
  private stylesByUrl: any = {};
  reload:boolean = false;
  actualModule:string = '';
  constructor(
    private ngZone:NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private http:HttpClient,
    @Inject('module') public module: string
  ) {
    // this.ngZone.onStable.subscribe(this.onZoneStable);
    // this.ngZone.onUnstable.subscribe(this.onZoneUnstable);
    // this.ngZone.onError.subscribe(this.onZoneError);
    reinit = false;
    
    switch (module) {
      case 'canvas':
        CanvasStyleStore.forEach(async (style: any) => {
          this.styles[style.name] = {
            loaded: false,
            style: style
          };
          this.stylesByUrl[style.href] = {
            loaded: false,
            style: style
          };
        });
        CanvasScriptStore.forEach(async (script: any) => {
          this.scripts[script.name] = {
            loaded: false,
            script: script
          };
          this.scriptsByUrl[script.src] = {
            loaded: false,
            script: script
          };
        });
        break;
      
      case 'inspinia':
        InspiniaStyleStore.forEach(async (style: any) => {
          this.styles[style.name] = {
            loaded: false,
            style: style
          };
          this.stylesByUrl[style.href] = {
            loaded: false,
            style: style
          };
        });
        InspiniaScriptStore.forEach(async (script: any) => {
          this.scripts[script.name] = {
            loaded: false,
            script: script
          };
          this.scriptsByUrl[script.src] = {
            loaded: false,
            script: script
          };
        });
        break;
      
        
    }
  }
  
  async load(styleNames: string[] = null, scriptNames: string[] = null, callback:Function = null) {
    var promises: any[] = [];
    if(styleNames.length) {
      for (let i = 0 ; i < styleNames.length ; i++) {
        let styleName = styleNames[i];
        await promises.push(await this.loadStyle(styleName))
  
      }
    }
    if(scriptNames.length) {
      for (let j = 0 ; j < scriptNames.length ; j++) {
        let scriptName = scriptNames[j];
        await promises.push(await this.loadScript(scriptName))
      }
    }
    if(typeof callback == 'function') await callback();
    return Promise.all(promises);
  }
  
  async loadByUrl(styleUrls: string[] = null, scriptUrls: string[] = null, callback:Function = null) {
    var promises: any[] = [];
    if(styleUrls.length) {
        for (let i = 0 ; i < styleUrls.length ; i++) {
          let styleUrl = styleUrls[i];
          promises.push(await this.loadStyleByUrl(styleUrl))
        }
    }
      if(scriptUrls.length) {
        for (let j = 0 ; j < scriptUrls.length ; j++) {
          let scriptUrl = scriptUrls[j];
          promises.push(await this.loadScriptByUrl(scriptUrl))
        }
      }
      if(typeof callback == 'function') await callback();
      return Promise.all(promises);
  }

  async unloadByUrl(styleUrls: string[] = [], scriptUrls: string[] = [], callback:Function = null) {
    var promises: any[] = [];
    if(styleUrls.length) {
      for (let i = 0 ; i < styleUrls.length ; i++) {
        let styleUrl = styleUrls[i];
        await this.unloadStyleByUrl(styleUrl)
      }
    }
    if(scriptUrls.length) {
      for (let i = 0 ; i < scriptUrls.length ; i++) {
        let scriptUrl = scriptUrls[i];
        await this.unloadScriptByUrl(scriptUrl);
      }
    }
    if(typeof callback == 'function') await callback();
    return Promise.all(promises);
  }
  
  async loadScript(name: string, callback: Function = null) {
    return await new Promise(async (resolve, reject) => {
      //resolve if already loaded
      try {
        if (this.scripts[name].loaded) {
          await resolve({script: name, loaded: true, status: 'Already Loaded'});
        }
        else {
          //load script
          let script = this.scripts[name].script;
          let scriptElemnt = document.createElement('script');
          scriptElemnt.type = 'text/javascript';
          scriptElemnt.src = script.src;
          if(script.extras != undefined && script.extras.length){
            for (let i = 0 ; i < script.extras.length ; i++) {
              let extra = script.extras[i];
              if(Object.keys(extra).length) {
                let name = Object.keys(extra)[0];
                let value = Object.values(extra)[0];
                scriptElemnt[name] = value;
              }
            }
          }
          if (scriptElemnt.readyState) {  //IE
            scriptElemnt.onreadystatechange = async () => {
              if (scriptElemnt.readyState === "loaded" || scriptElemnt.readyState === "complete") {
                scriptElemnt.onreadystatechange = null;
                this.scripts[name].loaded = true;
                await resolve({script: name, loaded: true, status: 'Loaded'});
              }
            };
          } else {  //Others
            scriptElemnt.onload = async () => {
              this.scripts[name].loaded = true;
              await resolve({script: name, loaded: true, status: 'Loaded'});
            };
          }
          scriptElemnt.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
          await document.getElementsByTagName('head')[0].appendChild(scriptElemnt);
        }
      } catch (e) {
        console.log(e);
      }
    });
    if(typeof callback == 'function') {
      callback(true);
    }
  }
  
  async loadScriptByUrl(src: string, callback: Function = null) {
    return await new Promise(async (resolve, reject) => {
      //resolve if already loaded
      try {
        if (this.scriptsByUrl[src].loaded) {
          await resolve({script: src, loaded: true, status: 'Already Loaded'});
        }
        else {
          //load script
          let script = this.scriptsByUrl[src].script;
          let scriptElemnt = document.createElement('script');
          scriptElemnt.type = 'text/javascript';
          scriptElemnt.src = script.src;
          if(script.extras != undefined && script.extras.length){
            for (let i = 0 ; i < script.extras.length ; i++) {
              let extra = script.extras[i];
              if(Object.keys(extra).length) {
                let name = Object.keys(extra)[0];
                let value = Object.values(extra)[0];
                scriptElemnt[name] = value;
              }
            }
          }
          if (scriptElemnt.readyState) {  //IE
            scriptElemnt.onreadystatechange = async () => {
              if (scriptElemnt.readyState === "loaded" || scriptElemnt.readyState === "complete") {
                scriptElemnt.onreadystatechange = null;
                this.scriptsByUrl[src].loaded = true;
                await resolve({script: src, loaded: true, status: 'Loaded'});
              }
            };
          } else {  //Others
            scriptElemnt.onload = async () => {
              this.scriptsByUrl[src].loaded = true;
              await resolve({script: src, loaded: true, status: 'Loaded'});
            };
          }
          scriptElemnt.onerror = (error: any) => resolve({script: src, loaded: false, status: 'Loaded'});
          await document.getElementsByTagName('head')[0].appendChild(scriptElemnt);
        }
      } catch (e) {
        console.log(e);
      }
    });
    if(typeof callback == 'function') {
      callback(true);
    }
  }
  
  async unloadScriptByUrl(src: string, callback: Function = null) {
    return await new Promise(async (resolve, reject) => {
      //resolve if already loaded
      try {
        let scriptKeys = Object.keys(this.scriptsByUrl);
        if(scriptKeys.includes(src)) {
          if (this.scriptsByUrl[src].loaded) {
            delete this.scriptsByUrl[src];
            await resolve({script: src, loaded: true, status: 'Deleted: '+src});
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
    if(typeof callback == 'function') {
      callback(true);
    }
  }
  
  async loadStyle(name: string) {
    return new Promise(async (resolve, reject) => {
      //resolve if already loaded
      try {
        if (this.styles[name].loaded) {
          await resolve({style: name, loaded: true, status: 'Already Loaded'});
        }
        else {
          //load style
          let style = this.styles[name].style;
          let styleElemnt = document.createElement('link');
          styleElemnt.type = 'text/css';
          styleElemnt.rel = 'stylesheet';
          styleElemnt.href = style.href;
          styleElemnt.classList.add(style.href);
          if(style.extras != undefined && style.extras.length){
            for (let i = 0 ; i < style.extras.length ; i++) {
              let extra = style.extras[i];
              if(Object.keys(extra).length) {
                let name = Object.keys(extra)[0];
                let value = Object.values(extra)[0];
                styleElemnt[name] = value;
              }
            }
          }
          if (styleElemnt.readyState) {  //IE
            styleElemnt.onreadystatechange = async () => {
              if (styleElemnt.readyState === "loaded" || styleElemnt.readyState === "complete") {
                styleElemnt.onreadystatechange = null;
                this.styles[name].loaded = true;
                await resolve({style: name, loaded: true, status: 'Loaded'});
              }
            };
          } else {  //Others
            styleElemnt.onload = async () => {
              this.styles[name].loaded = true;
              await resolve({style: name, loaded: true, status: 'Loaded'});
            };
          }
          styleElemnt.onerror = (error: any) => resolve({style: name, loaded: false, status: 'Loaded'});
          await document.getElementsByTagName('head')[0].appendChild(styleElemnt);
        }
      } catch (e) {
        console.log(e)
      }
    });
  }
  
  async loadStyleByUrl(href: string) {
    return new Promise(async (resolve, reject) => {
      //resolve if already loaded
      try {
        
        if (this.stylesByUrl[href].loaded) {
          await resolve({style: href, loaded: true, status: 'Already Loaded'});
        }
        else {
          //load style
          let style = this.stylesByUrl[href].style;
          let styleElemt = document.createElement('link');
          styleElemt.type = 'text/css';
          styleElemt.rel = 'stylesheet';
          styleElemt.href = style.href;
          styleElemt.classList.add(style.href);
          if(style.extras != undefined && style.extras.length){
            for (let i = 0 ; i < style.extras.length ; i++) {
              let extra = style.extras[i];
              if(Object.keys(extra).length) {
                let name = Object.keys(extra)[0];
                let value = Object.values(extra)[0];
                styleElemt[name] = value;
              }
            }
          }
          if (styleElemt.readyState) {  //IE
            styleElemt.onreadystatechange = async () => {
              if (styleElemt.readyState === "loaded" || styleElemt.readyState === "complete") {
                styleElemt.onreadystatechange = null;
                this.stylesByUrl[href].loaded = true;
                await resolve({style: href, loaded: true, status: 'Loaded'});
              }
            };
          } else {  //Others
            styleElemt.onload = async () => {
              this.stylesByUrl[href].loaded = true;
              resolve({style: href, loaded: true, status: 'Loaded'});
            };
          }
          styleElemt.onerror = (error: any) => resolve({style: href, loaded: false, status: 'Loaded'});
          await document.getElementsByTagName('head')[0].appendChild(styleElemt);
        }
      } catch (e) {
        console.log(e)
      }
    });
  }
  
  unloadStyleByUrl(href: string) {
      //resolve if already loaded
      try {
        this.removeStyle(href);
      } catch (e) {
        console.log(e)
      }
  }
  
  async asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
  
  onZoneStable() {
    console.log('We are stable');
  }
  
  onZoneUnstable() {
    console.log('We are unstable');
  }
  
  onZoneError(error) {
    console.error('Error', error instanceof Error ? error.message : error.toString());
  }
  
  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }
  
  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
  
  getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }
  
  getExistingLinkElementByKey(key: string) {
    let childrens = Object.values(document.head.children);
    for (let i = 0 ; i < childrens.length ; i++) {
      let children:any = childrens[i];
      if(children.className == key)
        return childrens[i];
    }
  }
  
  createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(key);
    document.head.appendChild(linkEl);
    return linkEl;
  }
  
  //<es-section>
  
  getEsModules() {
    return this.http.get(this.basePath);
  }
  createEsModule(esModule:EsModules) {
    return this.http.post(this.basePath, esModule);
  }
  getEsModule(id:any) {
    return this.http.get(this.basePath + id);
  }
  updateEsModule(id:any, esModule:EsModules) {
    return this.http.post(this.basePath + id, esModule);
  }
  deleteEsModule(id:any) {
    return this.http.delete(this.basePath + id);
  }
  
  //</es-section>
}
