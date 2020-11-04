String.prototype.trimWhiteSpaces = trimWhiteSpaces;
String.prototype.replaceAll = replaceAll;
String.prototype.hasString = hasString;
String.prototype.escapeRegExp = escapeRegExp;
String.prototype.ucFirst = ucFirst;
String.prototype.lcFirst = lcFirst;

Date.prototype.getDayToShow = getDayToShow;
Date.prototype.getMonthToShow = getMonthToShow;
Date.prototype.getYearToShow = getYearToShow;
Date.prototype.getDayNameToShow = getDayNameToShow;
Date.prototype.getMonthNameToShow = getMonthNameToShow;

let date = new Date();

let months = {
  es:['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'],
  en:['january','february','march','april','may','june','july','august','september','october','november','december'],
  fr:[],
};

let days = {
  es:['domingo','lunes','martes','miercoles','jueves','viernes','sabado','domingo'],
  en:['sunday','monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
  fr:[],
};

let temporary = {
  es:['ante ayer','ayer','hoy','mañana','pasado mañana'],
  en:['the day before yesterday','yesterday','today','tomorrow','day after tomorrow'],
  fr:[],
}

interface String {
  trimWhiteSpaces: typeof trimWhiteSpaces;
  replaceAll: typeof replaceAll;
  hasString: typeof hasString;
  escapeRegExp: typeof escapeRegExp;
  ucFirst: typeof ucFirst;
  lcFirst: typeof lcFirst;
}

interface Date {
  getDayToShow: typeof getDayToShow;
  getMonthToShow: typeof getMonthToShow;
  getYearToShow: typeof getYearToShow;
  getDayNameToShow: typeof getDayNameToShow;
  getMonthNameToShow: typeof getMonthNameToShow;
}

function ucFirst() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

function lcFirst() {
  return this.charAt(0).toLowerCase() + this.slice(1)
}

function trimWhiteSpaces() {
  return this.split(' ').join('');
}

function escapeRegExp() {
  return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(term, replacement) {
  return this.replace(new RegExp(term.escapeRegExp(), 'g'), replacement);
}

function hasString(term) {
  return this.indexOf(term) >= 0;
}

function getDayToShow() {
  return parseInt(leftPad(this.getDate(), 2));
}

function getMonthToShow() {
  return parseInt(leftPad(this.getMonth()+1, 2));
}

function getYearToShow() {
  return parseInt(this.getFullYear());
}

function getDayNameToShow() {
  if(this.getDate() == date.getDate()-1) {
    return temporary[localStorage.getItem('lang')][1];
  } else if(this.getDate() == date.getDate()){
    return temporary[localStorage.getItem('lang')][2];
  } else if(this.getDate() == date.getDate()+1){
    return temporary[localStorage.getItem('lang')][3];
  } else {
    return days[localStorage.getItem('lang')][this.getDay()];
  }
}

function getMonthNameToShow() {
  return months[localStorage.getItem('lang')][this.getMonth()];
}


function leftPad(number, targetLength) {
  var output = number + '';
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}
