(()=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}function t(o,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(o,r(n.key),n)}}function r(t){var r=function(t,r){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==o(r)?r:r+""}var e=function(){return o=function o(){!function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o)},(r=[{key:"init",value:function(){$(document).on("click",".approve-product-for-selling-button",(function(o){o.preventDefault(),$("#confirm-approve-product-for-selling-button").data("action",$(o.currentTarget).prop("href")),$("#approve-product-for-selling-modal").modal("show")})),$(document).on("click","#confirm-approve-product-for-selling-button",(function(o){o.preventDefault();var t=$(o.currentTarget);t.addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:t.data("action"),success:function(o){o.error?Botble.showError(o.message):(Botble.showSuccess(o.message),$(".approve-product-warning").fadeOut(500),window.location.reload()),t.removeClass("button-loading"),t.closest(".modal").modal("hide")},error:function(o){Botble.handleError(o),t.removeClass("button-loading")}})}))}}])&&t(o.prototype,r),e&&t(o,e),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r,e}();$((function(){(new e).init()}))})();