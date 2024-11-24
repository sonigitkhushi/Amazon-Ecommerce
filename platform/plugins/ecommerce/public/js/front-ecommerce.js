(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(r){d=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),c=new q(n||[]);return i(a,"_invoke",{value:_(e,r,c)}),a}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}n.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",b="completed",g={};function y(){}function w(){}function E(){}var T={};d(T,l,(function(){return this}));var k=Object.getPrototypeOf,$=k&&k(k(z([])));$&&$!==o&&a.call($,l)&&(T=$);var x=E.prototype=y.prototype=Object.create(T);function C(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,r){function n(o,i,c,l){var u=m(t[o],t,i);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==e(d)&&a.call(d,"__await")?r.resolve(d.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):r.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,l)}))}l(u.arg)}var o;i(this,"_invoke",{value:function(e,t){function a(){return new r((function(r,o){n(e,t,r,o)}))}return o=o?o.then(a,a):a()}})}function _(e,t,n){var o=p;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===b){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=m(e,t,n);if("normal"===u.type){if(o=n.done?b:h,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=b,n.method="throw",n.arg=u.arg)}}}function L(e,t){var n=t.method,o=e.iterator[n];if(o===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=r,L(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=m(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,g;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function z(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return w.prototype=E,i(x,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=d(E,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,d(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},n.awrap=function(e){return{__await:e}},C(S.prototype),d(S.prototype,u,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,o,a){void 0===a&&(a=Promise);var i=new S(f(e,t,r,o),a);return n.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(x),d(x,s,"Generator"),d(x,l,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},n.values=z,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return c.type="throw",c.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:z(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(e,t,r,n,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void r(e)}c.done?t(l):Promise.resolve(l).then(n,o)}function n(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,l,"next",e)}function l(e){r(i,o,a,c,l,"throw",e)}c(void 0)}))}}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function a(e,t,r){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,r)}function i(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==e(r)?r:r+""}function l(e,t){return e.get(function(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r;throw new TypeError("Private element is not present on this object")}(e,t))}var u=new WeakMap,s=new WeakMap,d=new WeakMap,f=new WeakMap,m=function(){return e=function e(){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"quickSearchAjax",null),a(this,u,(function(e){var t=[];return e.map((function(e){e.value&&t.push(e)})),t})),a(this,s,(function(e,t){var n=e.find('button[type="submit"]'),o=e.find('input[name="q"]'),a=e.find(".bb-quick-search-results");o.val()?r.quickSearchAjax=$.ajax({type:"GET",url:t||e.data("ajax-url"),data:e.serialize(),beforeSend:function(){n.addClass("btn-loading"),t||a.removeClass("show").html(""),null!==r.quickSearchAjax&&r.quickSearchAjax.abort()},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(a.addClass("show"),t?a.find(".bb-quick-search-list").append($(o).find(".bb-quick-search-list").html()):a.html(o))},complete:function(){return n.removeClass("btn-loading")}}):a.removeClass("show").html("")})),a(this,d,(function(e,t,r){var n=$(".bb-product-form-filter");$.ajax({url:e,type:"GET",data:t,beforeSend:function(){document.dispatchEvent(new CustomEvent("ecommerce.product-filter.before",{detail:{data:t,element:n}}))},success:function(t){var o=t.message;t.error?Theme.showError(o):(window.history.pushState(t,null,r||e),document.dispatchEvent(new CustomEvent("ecommerce.product-filter.success",{detail:{data:t,element:n}})))},error:function(e){return Theme.handleError(e)},complete:function(){void 0!==Theme.lazyLoadInstance&&Theme.lazyLoadInstance.update(),document.dispatchEvent(new CustomEvent("ecommerce.product-filter.completed",{detail:{element:n}}))}})})),a(this,f,n(t().mark((function e(){var r,n,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=function(e,t,r){$.ajax({url:e,method:"GET",beforeSend:function(){return t()},success:function(e){var t=e.error,n=e.data;t||(r(n),document.dispatchEvent(new CustomEvent("ecommerce.categories-dropdown.success",{detail:{data:n}})))},error:function(e){return Theme.handleError(e)}})},(n=$(document).find('[data-bb-toggle="init-categories-dropdown"]')).length&&(o=n.first().data("url"),r(o,(function(){}),(function(e){n.each((function(t,r){var n=$(r),o=$(n.data("bb-target"));o.length?o.html(e.dropdown):n.append(e.select)}))})));case 3:case"end":return e.stop()}}),e)})))),i(this,"productQuantityToggle",(function(){$('[data-bb-toggle="product-quantity"]').on("click",'[data-bb-toggle="product-quantity-toggle"]',(function(e){var t=$(e.currentTarget),r=t.data("value");if(r){var n=null;if("plus"===r?n=t.prev():"minus"===r&&(n=t.next()),n){var o=parseInt(n.val())||1;n.val("plus"===r?o+1:1===o?1:o-1),document.dispatchEvent(new CustomEvent("ecommerce.cart.quantity.change",{detail:{element:t,action:"+"===r?"increase":"decrease"}}))}}}))})),i(this,"onChangeProductAttribute",(function(){window.onBeforeChangeSwatches=function(e,t){var r=t.closest("form");e&&(r.find('button[type="submit"]').prop("disabled",!0),r.find('button[data-bb-toggle="add-to-cart"]').prop("disabled",!0))},window.onChangeSwatchesSuccess=function(e,t){if(e){var r=$(".bb-product-detail"),n=t.closest("form"),o=n.find('button[type="submit"]'),a=n.find('input[name="qty"]'),i=r.find(".number-items-available"),c=r.find('[data-bb-value="product-sku"]'),l=e.error,u=e.data;if(l)return o.prop("disabled",!0),a.prop("disabled",!0),void n.find('input[name="id"]').val("");o.prop("disabled",!1),a.prop("disabled",!1),n.find('input[name="id"]').val(u.id),r.find('[data-bb-value="product-price"]').text(u.display_sale_price),u.original_price!==u.price?r.find('[data-bb-value="product-original-price"]').text(u.display_price).show():r.find('[data-bb-value="product-original-price"]').hide(),u.sku?(c.text(u.sku),c.closest("div").show()):c.closest("div").hide(),u.error_message?(o.prop("disabled",!0),a.prop("disabled",!0),i.html('<span class="text-danger">'.concat(u.error_message,"</span>")).show()):u.success_message?i.html('<span class="text-success">'.concat(u.success_message,"</span>")).show():i.html("").hide(),r.find(".bb-product-attribute-swatch-item").removeClass("disabled"),r.find(".bb-product-attribute-swatch-list select option").prop("disabled",!1);var s=u.unavailable_attribute_ids||[];s.length&&s.map((function(e){var t=r.find('.bb-product-attribute-swatch-item[data-id="'.concat(e,'"]'));t.length?(t.addClass("disabled"),t.find("input").prop("checked",!1)):(t=r.find('.bb-product-attribute-swatch-list select option[data-id="'.concat(e,'"]'))).length&&t.prop("disabled",!0)}));var d="",f="";u.image_with_sizes.origin.length?u.image_with_sizes.origin.forEach((function(e){d+='\n                    <a href="'.concat(e,'">\n                        <img src="').concat(e,'" alt="').concat(u.name,'">\n                    </a>\n                ')})):u.image_with_sizes.origin.push(siteConfig.img_placeholder),u.image_with_sizes.thumb.length?u.image_with_sizes.thumb.forEach((function(e){f+='\n                    <div>\n                        <img src="'.concat(e,'" alt="').concat(u.name,'">\n                    </div>\n                ')})):u.image_with_sizes.thumb.push(siteConfig.img_placeholder);var m=r.find(".bb-product-gallery");m.find(".bb-product-gallery-thumbnails").slick("unslick").html(f);var p=$(document).find(".bb-quick-view-gallery-images");p.length&&p.slick("unslick").html(d),m.find(".bb-product-gallery-images").slick("unslick").html(d),"undefined"!=typeof EcommerceApp&&EcommerceApp.initProductGallery()}}})),i(this,"handleUpdateCart",(function(e){var t;t=e?$(e).closest("form"):$("form.cart-form"),$.ajax({type:"POST",url:t.prop("action"),data:t.serialize(),success:function(e){var t=e.error,n=e.message,o=e.data;t&&Theme.showError(n),r.ajaxLoadCart(o)},error:function(e){return Theme.handleError(e)}})})),i(this,"ajaxLoadCart",(function(e){if(e){var t=$('[data-bb-toggle="cart-content"]');void 0!==e.count&&$('[data-bb-value="cart-count"]').text(e.count),void 0!==e.total_price&&$('[data-bb-value="cart-total-price"]').text(e.total_price),t.length&&(t.replaceWith(e.cart_content),r.productQuantityToggle(),void 0!==Theme.lazyLoadInstance&&Theme.lazyLoadInstance.update())}})),$(document).on("click",'[data-bb-toggle="toggle-product-categories-tree"]',(function(e){e.preventDefault();var t=$(e.currentTarget);t.toggleClass("active"),t.closest(".bb-product-filter-item").find("> .bb-product-filter-items").slideToggle()})).on("click",'[data-bb-toggle="toggle-filter-sidebar"]',(function(){$(".bb-filter-offcanvas-area").toggleClass("offcanvas-opened"),$(".body-overlay").toggleClass("opened")})).on("click",".body-overlay",(function(){$(".bb-filter-offcanvas-area").removeClass("offcanvas-opened"),$(".body-overlay").removeClass("opened")})).on("submit","form.bb-product-form-filter",(function(e){e.preventDefault();var t=$(e.currentTarget),n=l(u,r).call(r,t.serializeArray()),o=t.prop("action"),a=o,i=[];n.map((function(e){i.push("".concat(encodeURIComponent(e.name),"=").concat(encodeURIComponent(e.value)))})),i.length&&(a+="?".concat(i.join("&"))),n.push({name:"_",value:Date.now()}),window.location.href!==a&&l(d,r).call(r,o,n,a)})).on("change","form.bb-product-form-filter input, form.bb-product-form-filter select",(function(e){$(e.currentTarget).closest("form").trigger("submit")})).on("keyup",".bb-form-quick-search input",(function(e){l(s,r).call(r,$(e.currentTarget).closest("form"))})).on("click","body",(function(e){$(e.target).closest(".bb-form-quick-s4earch").length||$(".bb-quick-search-results").removeClass("show").html("")})).on("click",'[data-bb-toggle="quick-shop"]',(function(e){var t=$(e.currentTarget),r=$("#quick-shop-modal");$.ajax({url:t.data("url"),type:"GET",beforeSend:function(){r.find(".modal-body").html(""),r.modal("show"),document.dispatchEvent(new CustomEvent("ecommerce.quick-shop.before-send",{detail:{element:t,modal:r}}))},success:function(e){var t=e.data;r.find(".modal-body").html(t)},error:function(e){return Theme.handleError(e)},complete:function(){document.dispatchEvent(new CustomEvent("ecommerce.quick-shop.completed",{detail:{element:t,modal:r}}))}})})).on("click",".bb-product-filter-link",(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.closest("form"),n=t.closest(".bb-product-filter"),o=r.find('input[name="categories[]"]');n.find(".bb-product-filter-link").removeClass("active"),t.addClass("active"),o.length?o.val(t.data("id")).trigger("change"):r.prop("action",t.prop("href")).trigger("submit")})).on("click",".bb-product-filter-clear",(function(e){e.preventDefault();var t=$(e.currentTarget);l(d,r).call(r,t.prop("href"))})).on("click",".bb-product-filter-clear-all",(function(e){e.preventDefault();var t=$(".bb-product-form-filter");t.find('input[type="text"], input[type="hidden"], input[type="checkbox"], input[type="radio"], select').val(null),t.trigger("submit")})).on("submit","form#cancel-order-form",(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.closest(".modal"),n=r.find('button[type="submit"]');$.ajax({url:t.prop("action"),type:"POST",data:t.serialize(),beforeSend:function(){n.addClass("btn-loading")},success:function(e){var t=e.error,n=e.message;t?Theme.showError(n):(Theme.showSuccess(n),r.modal("hide"),setTimeout((function(){return window.location.reload()}),1e3))},error:function(e){return Theme.handleError(e)},complete:function(){return n.removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="add-to-compare"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.hasClass("active")?t.data("remove-url"):t.data("url"),n={};t.hasClass("active")&&(n={_method:"DELETE"}),$.ajax({url:r,method:"POST",data:n,beforeSend:function(){return t.addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(Theme.showSuccess(n),t.toggleClass("active"),void 0!==o.count&&$('[data-bb-value="compare-count"]').text(o.count),t.hasClass("active")?document.dispatchEvent(new CustomEvent("ecommerce.compare.added",{detail:{data:o,element:t}})):document.dispatchEvent(new CustomEvent("ecommerce.compare.removed",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="remove-from-compare"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.closest("table");$.ajax({url:t.data("url"),method:"POST",data:{_method:"DELETE"},success:function(e){var n=e.error,o=e.message,a=e.data;n?Theme.showError(o):(Theme.showSuccess(o),document.dispatchEvent(new CustomEvent("ecommerce.compare.removed",{detail:{data:a,element:t}})),void 0!==a.count&&$('[data-bb-value="compare-count"]').text(a.count),a.count>0?r.find("td:nth-child(".concat(t.closest("td").index()+1,")")).remove():window.location.reload())},error:function(e){return Theme.handleError(e)}})})).on("click",'[data-bb-toggle="add-to-wishlist"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.data("url");$.ajax({url:r,method:"POST",beforeSend:function(){return t.addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(void 0!==o.count&&$('[data-bb-value="wishlist-count"]').text(o.count),Theme.showSuccess(n),document.dispatchEvent(new CustomEvent("ecommerce.wishlist.added",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="remove-from-wishlist"]',(function(e){e.preventDefault();var t=$(e.currentTarget);$.ajax({url:t.data("url"),method:"POST",data:{_method:"DELETE"},beforeSend:function(){return t.addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(Theme.showSuccess(n),void 0!==o.count&&$('[data-bb-value="wishlist-count"]').text(o.count),t.closest("tr").remove(),0===o.count&&window.location.reload(),document.dispatchEvent(new CustomEvent("ecommerce.wishlist.removed",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="add-to-cart"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r={id:t.data("id")},n=t.closest("tr").find('input[name="qty"]');n&&(r.qty=n.val()),$.ajax({url:t.data("url"),method:"POST",data:r,dataType:"json",beforeSend:function(){return t.addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(Theme.showSuccess(n),void 0!==o.count&&$('[data-bb-value="cart-count"]').text(o.count),document.dispatchEvent(new CustomEvent("ecommerce.cart.added",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="remove-from-cart"]',(function(e){e.preventDefault();var t=$(e.currentTarget);$.ajax({url:t.prop("href")||t.data("url"),method:"GET",beforeSend:function(){return t.addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(Theme.showSuccess(n),t.closest("tr").remove(),void 0!==o.count&&$('[data-bb-value="cart-count"]').text(o.count),0===o.count&&window.location.reload(),document.dispatchEvent(new CustomEvent("ecommerce.cart.removed",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.removeClass("btn-loading")}})})).on("submit",'[data-bb-toggle="coupon-form"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.find('button[type="submit"]');$.ajax({url:t.prop("action"),type:"POST",data:t.serialize(),beforeSend:function(){return r.prop("disabled",!0).addClass("btn-loading")},success:function(e){var r=e.error,n=e.message,o=e.data;r?Theme.showError(n):(Theme.showSuccess(n),document.dispatchEvent(new CustomEvent("ecommerce.coupon.applied",{detail:{data:o,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return r.prop("disabled",!1).removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="quick-view-product"]',(function(e){e.preventDefault();var t=$(e.currentTarget);$.ajax({url:t.data("url"),type:"GET",beforeSend:function(){return t.prop("disabled",!0).addClass("btn-loading")},success:function(e){var n=e.error,o=e.message,a=e.data;if(n)Theme.showError(o);else{var i=$('[data-bb-toggle="quick-view-modal"]');i.modal("show"),i.find(".modal-body").html(a),document.dispatchEvent(new CustomEvent("ecommerce.quick-view.initialized",{detail:{data:a,element:t}})),setTimeout((function(){r.initProductGallery(!0)}),100)}},error:function(e){return Theme.handleError(e)},complete:function(){return t.prop("disabled",!1).removeClass("btn-loading")}})})).on("click",'[data-bb-toggle="product-form"] button[type="submit"]',(function(e){e.preventDefault();var t=$(e.currentTarget),r=t.closest("form"),n=r.serializeArray();""!==r.find('input[name="id"]').val()&&(n.push({name:"checkout",value:"checkout"===t.prop("name")?1:0}),$.ajax({type:"POST",url:r.prop("action"),data:n,beforeSend:function(){t.prop("disabled",!0).addClass("btn-loading")},success:function(e){var n=e.error,o=e.message,a=e.data;n?Theme.showError(o):(Theme.showSuccess(o),r.find('input[name="qty"]').val(1),void 0!==a.count&&$('[data-bb-value="cart-count"]').text(a.count),document.dispatchEvent(new CustomEvent("ecommerce.cart.added",{detail:{data:a,element:t}})))},error:function(e){return Theme.handleError(e)},complete:function(){return t.prop("disabled",!1).removeClass("btn-loading")}}))})),$(".bb-product-price-filter").length&&this.initPriceFilter(),l(f,this).call(this)},r=[{key:"isRtl",value:function(){return"rtl"===document.body.getAttribute("dir")}},{key:"initLightGallery",value:function(e){e.length&&(e.data("lightGallery")&&e.data("lightGallery").destroy(!0),e.lightGallery({selector:"a",thumbnail:!0,share:!1,fullScreen:!1,autoplay:!1,autoplayControls:!1,actualSize:!1}))}},{key:"initProductGallery",value:function(){var e=this;if(!(arguments.length>0&&void 0!==arguments[0]&&arguments[0])){var t=function(e,t){null!=e&&null!=t&&e.contentWindow.postMessage(JSON.stringify(t),"*")},r=function(e,r){var n,o,a,i,c;if(o=(n=e.find(".slick-current")).data("provider"),i=n.get(0),a=n.data("video-start"),"vimeo"===o)switch(r){case"play":null!=a&&a>0&&!n.hasClass("started")&&(n.addClass("started"),t(i,{method:"setCurrentTime",value:a})),t(i,{method:"play",value:1});break;case"pause":t(i,{method:"pause",value:1})}else if("youtube"===o)switch(r){case"play":t(i,{event:"command",func:"mute"}),t(i,{event:"command",func:"playVideo"});break;case"pause":t(i,{event:"command",func:"pauseVideo"})}else"video"===o&&null!=(c=n.children("video").get(0))&&("play"===r?c.play():c.pause())},n=$(document).find(".bb-product-gallery-images");if(!n.length)return;var o=$(document).find(".bb-product-gallery-thumbnails");n.on("init",(function(e){e=$(e.currentTarget),setTimeout((function(){r(e,"play")}),1e3)})),n.on("beforeChange",(function(e,t){t=$(t.$slider),r(t,"pause")})),n.on("afterChange",(function(e,t){t=$(t.$slider),r(t,"play")})),$(document).on("click",".bb-button-trigger-play-video",(function(e){var t=$(e.currentTarget),r=document.getElementById(t.data("target"));r.play(),t.closest(".bb-product-video").addClass("video-playing"),r.addEventListener("ended",(function(){t.closest(".bb-product-video").removeClass("video-playing"),r.currentTime=0,r.pause()}))})),n.length&&n.map((function(t,r){var n=$(r);n.hasClass("slick-initialized")&&n.slick("unslick"),n.slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!1,infinite:!1,fade:!0,lazyLoad:"ondemand",asNavFor:".bb-product-gallery-thumbnails",rtl:e.isRtl()})})),o.length&&o.slick({slidesToShow:6,slidesToScroll:1,asNavFor:".bb-product-gallery-images",focusOnSelect:!0,infinite:!1,rtl:this.isRtl(),vertical:1===o.data("vertical"),prevArrow:'<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg></button>',nextArrow:'<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></button>',responsive:[{breakpoint:768,settings:{slidesToShow:4,vertical:!1}}]}),this.initLightGallery(n),void 0!==Theme.lazyLoadInstance&&Theme.lazyLoadInstance.update()}var a=$(document).find(".bb-quick-view-gallery-images");a.length&&(a.hasClass("slick-initialized")&&a.slick("unslick"),a.slick({slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0,adaptiveHeight:!1,rtl:this.isRtl()})),this.initLightGallery(a)}},{key:"initPriceFilter",value:function(){if(void 0===$.fn.slider)throw new Error("jQuery UI slider is required for price filter");var e=$(".bb-product-price-filter"),t=e.find(".price-slider"),r=e.find(".input-range-label");if(e){var n=e.find('input[name="min_price"]'),o=e.find('input[name="max_price"]');t.slider({range:!0,min:t.data("min"),max:t.data("max"),values:[n.val()||t.data("min"),o.val()||t.data("max")],slide:function(e,t){r.find(".from").text(EcommerceApp.formatPrice(t.values[0])),r.find(".to").text(EcommerceApp.formatPrice(t.values[1]))},change:function(e,t){parseInt(n.val())!==t.values[0]&&n.val(t.values[0]).trigger("change"),parseInt(o.val())!==t.values[1]&&o.val(t.values[1]).trigger("change")}}),r.find(".from").text(this.formatPrice(t.slider("values",0))),r.find(".to").text(this.formatPrice(t.slider("values",1)))}}},{key:"formatPrice",value:function(e,t,r){var n=window.currencies||{};t||(t=void 0!==n.number_after_dot?n.number_after_dot:2);var o="\\d(?=(\\d{"+(r||3)+"})+$)",a="";if(n.show_symbol_or_title&&(a=n.symbol||n.title||""),n.display_big_money){var i="";e>=1e6&&e<1e9?(e/=1e6,i=n.million):e>=1e9&&(e/=1e9,i=n.billion),a=i+(a?" ".concat(a):"")}return e=(e=e.toFixed(Math.max(0,~~t)).toString().split("."))[0].toString().replace(new RegExp(o,"g"),"$&".concat(n.thousands_separator))+(e[1]?n.decimal_separator+e[1]:""),n.show_symbol_or_title&&(e=n.is_prefix_symbol?a+e:e+a),e}}],r&&o(e.prototype,r),c&&o(e,c),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,c}();$((function(){window.EcommerceApp=new m,EcommerceApp.productQuantityToggle(),EcommerceApp.initProductGallery(),EcommerceApp.onChangeProductAttribute(),$(".bb-product-price-filter").length&&EcommerceApp.initPriceFilter(),document.addEventListener("ecommerce.quick-shop.completed",(function(){EcommerceApp.productQuantityToggle()})),document.addEventListener("ecommerce.cart.quantity.change",(function(e){var t=e.detail.element;EcommerceApp.handleUpdateCart(t)})),document.addEventListener("ecommerce.product-filter.before",(function(){$('[data-bb-toggle="product-list"]').find(".bb-product-items-wrapper").append('<div class="loading-spinner"></div>')})),document.addEventListener("ecommerce.product-filter.success",(function(e){var t=e.detail.data;$(".bb-product-items-wrapper").html(t.data),t.additional&&$(".bb-shop-sidebar").replaceWith(t.additional.filters_html),$(".bb-product-price-filter").length&&EcommerceApp.initPriceFilter(),$("html, body").animate({scrollTop:$(".bb-product-items-wrapper").offset().top-120})})),document.addEventListener("ecommerce.product-filter.completed",(function(){void 0!==Theme.lazyLoadInstance&&Theme.lazyLoadInstance.update()}))}))})();