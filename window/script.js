let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.outerWidth;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

// Location Object : 현재 url 정보
val = window.location;      //url 정보
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
//window.location.href = 'http://google.com/' //url 이동
val = window.location.search;

//window.location.reload();


// History Object : 사용자가 방문한 url 정보
window.history.go(-2);
val = window.history.length;

// Navigator Object : 브라우저에 대한 정보
val = window.navigator;
val = window.navigator.userAgent;
val = window.navigator.language;
console.log(val);