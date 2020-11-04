import {environment} from "../environments/environment";

interface Scripts {
  name: string;
  src: string;
  extras:[{}]
}

interface Styles {
  name: string;
  href: string;
  extras:[{}];
}

const AssetsPath:string = `${environment.frontend.template.assets}`;
const CanvasPath:string = `${environment.frontend.template.canvas}`;
const InspiniaPath:string = `${environment.frontend.template.inspinia}`;

// -- Front Scripts and Styles --

// -- Canvas Styles ---

export const CanvasStyleStore: Styles[] = [
  {name: 'googleapis', href: "http://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic", extras:[{}]},
  
  {name: 'settings', href: CanvasPath + "/include/rs-plugin/css/settings.css", extras:[{media:'screen'}]},
  {name: 'magnific_popup', href: CanvasPath + "/css/magnific-popup.css", extras:[{}]},
  {name: 'font_icons', href: CanvasPath + "/css/font-icons.css", extras:[{}]},
  {name: 'responsive', href: CanvasPath + "/css/responsive.css", extras:[{}]},
  {name: 'bootstrap', href: CanvasPath + "/css/bootstrap.css", extras:[{}]},
  {name: 'animate', href: CanvasPath + "/css/animate.css", extras:[{}]},
  {name: 'dark', href: CanvasPath + "/css/dark.css", extras:[{}]},
  {name: 'style', href: CanvasPath + "/style.css", extras:[{}]},
];


//-- Canvas Scripts --

export const CanvasScriptStore: Scripts[] = [
  
  {name: 'sensor', src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCOUSp30wEWljD8LvCGfdh4LMV0VVVy84I&callback=initMap", extras:[{}]},
  {name: 'css3_mediaqueries', src: "http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js", extras:[{}]},
  {name: 'themepunch_revolution', src: CanvasPath + "/include/rs-plugin/js/jquery.themepunch.revolution.min.js", extras:[{}]},
  {name: 'themepunch_tools', src: CanvasPath + "/include/rs-plugin/js/jquery.themepunch.tools.min.js", extras:[{}]},
  {name: 'carousel_single_product', src: CanvasPath + "/js/libs/carousel-single-product.js", extras:[{}]},
  {name: 'carousel_portafolio', src: CanvasPath + "/js/libs/carousel-portafolio.js", extras:[{}]},
  {name: 'carousel_product', src: CanvasPath + "/js/libs/carousel-product.js", extras:[{}]},
  {name: 'carousel_clients', src: CanvasPath + "/js/libs/carousel-clients.js", extras:[{}]},
  {name: 'subscribe-light', src: CanvasPath + "/js/libs/subscribe-light.js", extras:[{}]},
  {name: 'carousel_images', src: CanvasPath + "/js/libs/carousel-images.js", extras:[{}]},
  {name: 'submit_handler', src: CanvasPath + "/js/libs/submit-handler.js", extras:[{}]},
  {name: 'subscribe', src: CanvasPath + "/js/libs/subscribe.js", extras:[{}]},
  {name: 'jquery_gmap', src: CanvasPath + "/js/jquery.gmap.js", extras:[{}]},
  {name: 'banners', src: CanvasPath + "/js/libs/banners.js", extras:[{}]},
  {name: 'functions', src: CanvasPath + "/js/functions.js", extras:[{}]},
  {name: 'plugins', src: CanvasPath + "/js/plugins.js", extras:[{}]},
  {name: 'gmap', src: CanvasPath + "/js/libs/gmap.js", extras:[{}]},
  {name: 'markerclusterer', src: CanvasPath + "/js/libs/markerclusterer.js", extras:[{}]},
  {name: 'portaforlio_item', src: CanvasPath + "/js/libs/portafolio-items.js", extras:[{}]},
  {name: 'google_map', src: CanvasPath + "/js/libs/google-map.js", extras:[{}]},
  {name: 'map_form', src: CanvasPath + "/js/libs/submit-map-form.js", extras:[{}]},
  {name: 'contact_form', src: CanvasPath + "/js/libs/contact-form.js", extras:[{}]},
  {name: 'contact_form', src: CanvasPath + "/js/libs/portafolio-filter-items.js", extras:[{}]},
  {name: 'contact_form', src: CanvasPath + "/js/libs/carousel-clients-corporate.js", extras:[{}]},
  {name: 'contact_form', src: CanvasPath + "/js/libs/carousel-projects.js", extras:[{}]},
  {name: 'contact_form', src: CanvasPath + "/js/libs/slide-parallax-corporate.js", extras:[{}]},
  {name: 'jquery', src: CanvasPath + "/js/jquery.js", extras:[{}]},
];

// -- Admin Scripts and Styles --

// -- Inspinia Styles ---

export const InspiniaStyleStore: Styles[] = [
  {name: 'fullcalendar_print', href: InspiniaPath + "/css/plugins/fullcalendar/fullcalendar.print.css",extras:[{media:'print'}]},
  {name: 'fullcalendar', href: InspiniaPath + "/css/plugins/fullcalendar/fullcalendar.css",extras:[{}]},
  {name: 'font_awesome', href: InspiniaPath + "/font-awesome/css/font-awesome.css", extras:[{}]},
  {name: 'iCheck_custom', href: InspiniaPath + "/css/plugins/iCheck/custom.css",extras:[{}]},
  {name: 'toastr', href: InspiniaPath + "/css/plugins/toastr/toastr.min.css", extras:[{}]},
  {name: 'bootstrap', href: InspiniaPath + "/css/bootstrap.css", extras:[{}]},
  {name: 'bootstrap_min', href: InspiniaPath + "/css/bootstrap.min.css", extras:[{}]},
  {name: 'animate', href: InspiniaPath + "/css/animate.css", extras:[{}]},
  {name: 'style', href: InspiniaPath + "/css/style.css", extras:[{}]},
  {name: 'morris', href: InspiniaPath + "/css/plugins/morris/morris-0.4.3.min.css", extras:[{}]},
  {name: 'jquery_gritter', href: InspiniaPath + "/js/plugins/gritter/jquery.gritter.css", extras:[{}]},
  {name: 'summernote', href: InspiniaPath + "/css/plugins/summernote/summernote.css", extras:[{}]},
  {name: 'summernote_bs3', href: InspiniaPath + "/css/plugins/summernote/summernote-bs3.css", extras:[{}]},
  {name: 'datepicker3', href: InspiniaPath + "/css/plugins/datapicker/datepicker3.css", extras:[{}]},
  {name: 'footable_core', href: InspiniaPath + "/css/plugins/footable/footable.core.css", extras:[{}]},
  {name: 'dropzone_basic', href: InspiniaPath + "/css/plugins/dropzone/basic.css", extras:[{}]},
  {name: 'dropzone', href: InspiniaPath + "/js/plugins/dropzone/dropzone.css", extras:[{}]},
  {name: 'font_awesome', href: InspiniaPath + "/font-awesome/css/font-awesome.min.css", extras:[{}]}
];

//-- Inspinia Scripts --

export const InspiniaScriptStore: Scripts[] = [
  {name: 'jquery_slimscroll', src: InspiniaPath + "/js/plugins/slimscroll/jquery.slimscroll.min.js", extras:[{}]},
  {name: 'jquery_metisMenu', src: InspiniaPath + "/js/plugins/metisMenu/jquery.metisMenu.js", extras:[{}]},
  {name: 'fullcalendar_moment', src: InspiniaPath + "/js/plugins/fullcalendar/moment.min.js", extras:[{}]},
  {name: 'fullcalendar', src: InspiniaPath + "/js/plugins/fullcalendar/fullcalendar.min.js", extras:[{}]},
  {name: 'calendar_iChecks', src: InspiniaPath + "/js/libs/calendar-iChecks.js", extras:[{}]},
  {name: 'jquery_ui_custom', src: InspiniaPath + "/js/jquery-ui.custom.min.js", extras:[{}]},
  {name: 'icheck', src: InspiniaPath + "/js/plugins/iCheck/icheck.min.js", extras:[{}]},
  {name: 'jquery_ui', src: InspiniaPath + "/js/jquery-ui-1.10.4.min.js", extras:[{}]},
  {name: 'sortable', src: InspiniaPath + "/js/libs/sortable-list.js", extras:[{}]},
  {name: 'sortable', src: InspiniaPath + "/js/libs/contact-box.js", extras:[{}]},
  {name: 'dashboard_plot_chart', src: InspiniaPath + "/js/libs/dashboard-plot-chart.js", extras:[{}]},
  {name: 'dashboard_easyPieChart', src: InspiniaPath + "/js/libs/dashboard-easyPieChart.js", extras:[{}]},
  {name: 'dashboard_linedata', src: InspiniaPath + "/js/libs/dashboard-lineData.js", extras:[{}]},
  {name: 'dashboard_plot_chart', src: InspiniaPath + "/js/libs/dashboard-plot-chart.js", extras:[{}]},
  {name: 'footable_datepicker', src: InspiniaPath + "/js/libs/footable-datepicker.js", extras:[{}]},
  {name: 'summernote_datepicker', src: InspiniaPath + "/js/libs/summernote-datepicker.js", extras:[{}]},
  {name: 'footable', src: InspiniaPath + "/js/libs/footable.js", extras:[{}]},
  {name: 'file_box_animation', src: InspiniaPath + "/js/libs/file-box-animation.js", extras:[{}]},
  {name: 'dropzone_file_upload', src: InspiniaPath + "/js/libs/dropzone-file-upload.js", extras:[{}]},
  {name: 'window_print', src: InspiniaPath + "/js/libs/window-print.js", extras:[{}]},
  {name: 'landing_scrollspy', src: InspiniaPath + "/js/libs/landing-scrollspy.js", extras:[{}]},
  {name: 'register_iCheck', src: InspiniaPath + "/js/libs/register-iCheck.js", extras:[{}]},
  {name: 'loading_simpleLoad', src: InspiniaPath + "/js/libs/loading-simpleLoad.js", extras:[{}]},
  {name: 'pace', src: InspiniaPath + "/js/plugins/pace/pace.min.js", extras:[{}]},
  {name: 'bootstrap_min', src: InspiniaPath + "/js/bootstrap.min.js", extras:[{}]},
  {name: 'bootstrap', src: InspiniaPath + "/js/bootstrap.js", extras:[{}]},
  {name: 'jquery', src: InspiniaPath + "/js/jquery-2.1.1.js", extras:[{}]},
  {name: 'inspinia', src: InspiniaPath + "/js/inspinia.js", extras:[{}]},
  {name: 'jquery_flot', src: InspiniaPath + "/js/plugins/flot/jquery.flot.js", extras:[{}]},
  {name: 'jquery_flot_tooltip', src: InspiniaPath + "/js/plugins/flot/jquery.flot.tooltip.min.js", extras:[{}]},
  {name: 'jquery_flot_spline', src: InspiniaPath + "/js/plugins/flot/jquery.flot.spline.js", extras:[{}]},
  {name: 'jquery_flot_resize', src: InspiniaPath + "/js/plugins/flot/jquery.flot.resize.js", extras:[{}]},
  {name: 'jquery_flot_pie', src: InspiniaPath + "/js/plugins/flot/jquery.flot.pie.js", extras:[{}]},
  {name: 'jquery_flot_symbol', src: InspiniaPath + "/js/plugins/flot/jquery.flot.symbol.js", extras:[{}]},
  {name: 'jquery_flot_time', src: InspiniaPath + "/js/plugins/flot/jquery.flot.time.js", extras:[{}]},
  {name: 'jquery_peity', src: InspiniaPath + "/js/plugins/peity/jquery.peity.min.js", extras:[{}]},
  {name: 'peity_demo', src: InspiniaPath + "/js/demo/peity-demo.js", extras:[{}]},
  {name: 'jquery_ui', src: InspiniaPath + "/js/plugins/jquery-ui/jquery-ui.min.js", extras:[{}]},
  {name: 'jquery_jvectormap', src: InspiniaPath + "/js/plugins/jvectormap/jquery-jvectormap-2.0.2.min.js", extras:[{}]},
  {name: 'jquery_jvectormap_world_mill_en', src: InspiniaPath + "/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js", extras:[{}]},
  {name: 'jquery_easypiechart', src: InspiniaPath + "/js/plugins/easypiechart/jquery.easypiechart.js", extras:[{}]},
  {name: 'jquery_sparkline', src: InspiniaPath + "/js/plugins/sparkline/jquery.sparkline.min.js", extras:[{}]},
  {name: 'sparkline_demo', src: InspiniaPath + "/js/demo/sparkline-demo.js", extras:[{}]},
  {name: 'curvedLines', src: InspiniaPath + "/js/plugins/flot/curvedLines.js", extras:[{}]},
  {name: 'chartJs', src: InspiniaPath + "/js/plugins/chartJs/Chart.min.js", extras:[{}]},
  {name: 'bootstrap_datepicker', src: InspiniaPath + "/js/plugins/datapicker/bootstrap-datepicker.js", extras:[{}]},
  {name: 'footable_all', src: InspiniaPath + "/js/plugins/footable/footable.all.min.js", extras:[{}]},
  {name: 'summernote', src: InspiniaPath + "/js/plugins/summernote/summernote.min.js", extras:[{}]},
  {name: 'dropzone', src: InspiniaPath + "/js/plugins/dropzone/dropzone.js", extras:[{}]},
  {name: 'wow', src: InspiniaPath + "/js/plugins/wow/wow.min.js", extras:[{}]},
];
