try{!function(a,e){var t={id:"22"};utag.o[e].sender[22]=t,void 0===utag.ut&&(utag.ut={}),void 0===utag.ut.loader?t.loader=function(a){var e,t,r,d=document;if("iframe"===a.type){for(r in e=d.createElement("iframe"),a.attrs=a.attrs||{height:"1",width:"1",style:"display:none"},utag.loader.GV(a.attrs))e.setAttribute(r,a.attrs[r]);e.setAttribute("src",a.src)}else{if("img"==a.type)return utag.DB("Attach img: "+a.src),void((e=new Image).src=a.src);for(r in(e=d.createElement("script")).language="javascript",e.type="text/javascript",e.async=1,e.charset="utf-8",utag.loader.GV(a.attrs))e[r]=a.attrs[r];e.src=a.src}a.id&&(e.id=a.id),"function"==typeof a.cb&&(e.addEventListener?e.addEventListener("load",(function(){a.cb()}),!1):e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,a.cb())}),r=a.loc||"head",(t=d.getElementsByTagName(r)[0])&&(utag.DB("Attach to "+r+": "+a.src),"script"==r?t.parentNode.insertBefore(e,t):t.appendChild(e))}:t.loader=utag.ut.loader,t.encode=function(a,e){e="";try{e=encodeURIComponent(a)}catch(a){utag.DB(a)}return""==e&&(e=escape(a)),e},t.ev={view:1,link:1},t.scriptrequested=!1,t.rp=function(a,e){return void 0!==a&&a.indexOf("@@")>0&&(a=a.replace(/@@([^@]+)@@/g,(function(a,r){return e[r]?t.encode(e[r]):""}))),a},t.map={facebookId:"id",facebookEvent:"ev"},t.extend=[function(a,e){try{e.facebookId="101558277136289"}catch(a){utag.DB(a)}},function(a,e,t,r,d,c,i){if(void 0!==(r=e.pageKey)){t=[{d_learning_a_la_carte_modal:"Lead"},{mw_learning_a_la_carte_modal:"Lead"},{learning_a_la_carte_modal:"Lead"}];var l=!1;for(d=0;d<t.length;d++){for(c in utag.loader.GV(t[d]))r==c&&(e.facebookEvent=t[d][c],l=!0);if(l)break}l||(e.facebookEvent="PageView")}}],t.send=function(a,e){if(t.ev[a]||void 0!==t.ev.all){var r,d,c,i;for(t.data={qsp_delim:"&",kvp_delim:"=",qs_delim:"?",tag_type:"img",base_url:"//www.facebook.com/tr",secure_base_url:"",static_params:"noscript=1",cachebust:"disabled",cachevar:"_rnd",requestscriptonce:"disabled"},r=0;r<t.extend.length;r++)try{if(0==(d=t.extend[r](a,e)))return}catch(c){}for(d in utag.DB("send:22:EXTENSIONS"),utag.DB(e),r=[],utag.loader.GV(t.map))if(void 0!==e[d]&&""!==e[d])for(c=t.map[d].split(","),i=0;i<c.length;i++)t.data.hasOwnProperty(c[i])||r.push(c[i]+"##kvp_delim##"+t.encode(e[d])),t.data[c[i]]=e[d];if(!t.data.base_url){if(!t.data.secure_base_url)return void utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");t.data.base_url=t.data.secure_base_url,utag.DB("No Base URL provided, using Secure HTTPS Override.")}t.data.secure_base_url=t.data.secure_base_url||t.data.base_url,t.data.url="https:"===location.protocol?t.data.secure_base_url:t.data.base_url,0!==t.data.url.indexOf("http")&&0!==t.data.url.indexOf("/")&&(t.data.url=location.protocol+"//"+t.data.url),t.data.static_params&&r.push(t.data.static_params);var l=new RegExp("(\\"+t.data.qs_delim+"|"+t.data.qsp_delim+")"+t.data.cachevar+"=");"enabled"!==t.data.cachebust||l.test(t.data.url)||r.push([t.data.cachevar,Math.random()].join(t.data.kvp_delim)),r.length>0&&(t.data.url.indexOf(t.data.qs_delim)<0?t.data.url+=t.data.qs_delim:t.data.url.indexOf(t.data.qs_delim)!==t.data.url.length-1&&(t.data.url+=t.data.qsp_delim)),t.data.url=t.rp(t.data.url,e)+t.rp(r.join(t.data.qsp_delim),e),t.data.url=t.data.url.replace(/##kvp_delim##/g,t.data.kvp_delim),t.callback=t.callback||function(){},"enabled"===t.data.requestscriptonce&&"script"===t.data.tag_type?t.scriptrequested?t.callback():(t.scriptrequested=!0,t.loader({type:t.data.tag_type,src:t.data.url,loc:"script",id:"utag_22",cb:t.callback})):t.loader({type:t.data.tag_type,src:t.data.url,loc:"script",id:"utag_22",cb:t.callback}),utag.DB("send:22:COMPLETE")}},utag.o[e].loader.LOAD("22")}(0,"linkedin.learning-web")}catch(a){utag.DB(a)}