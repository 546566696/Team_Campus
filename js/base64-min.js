function Jiami(){var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c="abcdefghijklmnopqrstuvwxyz";this.base64encode=function(j){var g="";var r,o,m,q,n,l,k,p;var h=0;j=b(j);while(h<j.length){r=j.charCodeAt(h++);o=j.charCodeAt(h++);m=j.charCodeAt(h++);q=r>>2;n=((r&3)<<4)|(o>>4);l=((o&15)<<2)|(m>>6);k=m&63;if(isNaN(o)){l=k=64}else{if(isNaN(m)){k=64}}g=g+d.charAt(q)+d.charAt(n)+d.charAt(l)+d.charAt(k)}p=g;p=p.replace(/\+/g,"!");p=p.replace(/\//g,".");p=p.replace(/\=/g,":");return p};this.encrypt=function(h){if(!h){return""}var g=this.base64encode(h);g=f(g);return g};this.uncrypt=function(h){if(!h){return""}var g=a(h);g=this.base64decode(g);return g};var f=function(q){var p="",o="",l=q.length,k,h,n=c,m,g=parseInt(Math.random()*14)+1;if(g==10){g++}for(k=0;k<l;k++){o=q.charCodeAt(k).toString();p+="0";for(h=0;h<o.length;h++){m=parseInt(o.substr(h,1))+g;p+=n.substr(m,1)}}if(p!=""){p=p.substr(1);p+="0"+g+""}return p};var a=function(v){v=v.replace(/[^a-z0-9]/g,"");var u="",t="",p,o,h=c,q={},l,k,m,g,n;for(l=0;l<h.length;l++){q[h.substr(l,1)]=l}m=v.split("0");n=m.length;g=parseInt(m[n-1]);for(l=0;l<n-1;l++){t=m[l];p="";for(k=0;k<t.length;k++){o=parseInt(q[t.substr(k,1)])-g;p+=o.toString()}p=parseInt(p);u+=String.fromCharCode(p).toString()}return u};this.base64decode=function(j){var g="";var q,o,m;var p,n,l,k;var h=0;j=j.replace(/\!/g,"+");j=j.replace(/\./g,"/");j=j.replace(/\:/g,"=");j=j.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(h<j.length){p=d.indexOf(j.charAt(h++));n=d.indexOf(j.charAt(h++));l=d.indexOf(j.charAt(h++));k=d.indexOf(j.charAt(h++));q=(p<<2)|(n>>4);o=((n&15)<<4)|(l>>2);m=((l&3)<<6)|k;g=g+String.fromCharCode(q);if(l!=64){g=g+String.fromCharCode(o)}if(k!=64){g=g+String.fromCharCode(m)}}g=e(g);return g};var b=function(h){h=h.replace(/\r\n/g,"\n");var g="";for(var j=0;j<h.length;j++){var i=h.charCodeAt(j);if(i<128){g+=String.fromCharCode(i)}else{if((i>127)&&(i<2048)){g+=String.fromCharCode((i>>6)|192);g+=String.fromCharCode((i&63)|128)}else{g+=String.fromCharCode((i>>12)|224);g+=String.fromCharCode(((i>>6)&63)|128);g+=String.fromCharCode((i&63)|128)}}}return g};var e=function(g){var h="";var j=0;var k=c1=c2=0;while(j<g.length){k=g.charCodeAt(j);if(k<128){h+=String.fromCharCode(k);j++}else{if((k>191)&&(k<224)){c2=g.charCodeAt(j+1);h+=String.fromCharCode(((k&31)<<6)|(c2&63));j+=2}else{c2=g.charCodeAt(j+1);c3=g.charCodeAt(j+2);h+=String.fromCharCode(((k&15)<<12)|((c2&63)<<6)|(c3&63));j+=3}}}return h}}var jm=new Jiami();