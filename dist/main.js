(()=>{var e={744:()=>{const e=e=>{e.classList.remove("fade"),e.offsetWidth,e.classList.add("fade")},t=(()=>{const t=document.querySelector(".left"),s=document.querySelector(".right"),c=document.querySelector("img");let o=[0];const n=["assets/city.jpg","assets/clay.jpg","assets/gates.jpg","assets/singlegate.jpg","assets/sun.jpg"];return s.addEventListener("click",(()=>{o[0]++,e(c),c.src=n[o[0]],r(),o[0]>n.length-1&&(o[0]=0,c.src=n[0])})),t.addEventListener("click",(()=>{o[0]--,o[0]<0&&(o[0]=n.length-1),e(c),c.src=n[o[0]],r()})),{imageArr:n,counter:o,img:c}})(),s=(document.querySelectorAll(".button").forEach((s=>{s.addEventListener("click",(s=>{const c=parseInt(s.target.dataset.index);e(t.img),t.img.src=t.imageArr[c],t.counter[0]=c,r()}))})),()=>{t.counter[0]++,t.counter[0]>4&&(t.counter[0]=0),e(t.img),t.img.src=t.imageArr[t.counter[0]],r(),console.log(t.counter[0])}),r=()=>{document.querySelectorAll(".button").forEach(((e,s)=>{e.classList.remove("active"),s===t.counter[0]&&e.classList.toggle("active")}))};setInterval(s,2e3)}},t={};function s(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}(()=>{"use strict";s(744),document.querySelectorAll("li").forEach((e=>{const t=e.querySelector(".info");e.addEventListener("mouseover",(e=>{t.classList.toggle("active")})),e.addEventListener("mouseleave",(()=>{t.classList.remove("active")})),t.addEventListener("mouseover",(()=>{t.classList.toggle("active")})),t.addEventListener("mouseleave",(()=>{t.classList.remove("active")}))}))})()})();