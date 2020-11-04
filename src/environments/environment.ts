// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    server: {
      webpath: 'http://localhost:8001'
    }
  },
  frontend: {
    template: {
      assets:'/assets',
      canvas:'/assets/canvas',
      inspinia:'/assets/inspinia',
      esvender:'/assets/esvender',
      esvenderJS:'/assets/esvender',
      esvenderCSS:'/assets/esvender/layout/style1',
      admin:'/assets/admin',
      adminJS:'/assets/admin',
      adminCSS:'/assets/admin/layout/style1'
    },
    sql:true,
    server: {
      webpath: 'http://localhost:4200'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
