// Generated by CoffeeScript 1.7.1
(function() {
  var SELECT;

  SELECT = (function() {
    var _getElementVal;

    _getElementVal = function(value) {
      var els, i, options, set, type, useValueProperty, values;
      set = !!value;
      useValueProperty = function(value) {
        if (set != null) {
          this.el.value = value;
          return this.api;
        } else {
          return this.el.value;
        }
      };
      switch (this.el.nodeName.toLowerCase()) {
        case "input":
          type = this.el.getAttribute("type");
          if (type === "radio" || type === "checkbox") {
            els = queryAll('[name="' + this.el.getAttribute("name") + '"]', parent);
            values = [];
            i = -1;
            while (++i < els.length) {
              if (set && els[i].checked) {
                els[i].removeAttribute('checked');
              }
            }
          } else {
            return useValueProperty.apply(this, [value]);
          }
          break;
        case "textarea":
          return useValueProperty.call(this, [value]);
          break;
        case "select":
          if (set != null) {
            options = queryAll("option", this.el);
          } else {
            this.el.value;
          }
          break;
        default:
          if (set) {
            this.el.innerHTML = this.val = value;
          } else {
            if (typeof this.el.textContent !== "undefined") {
              return this.el.textContent;
            } else if (typeof this.el.innerText !== "undefined") {
              return typeof this.el.innerText;
            } else {
              return this.el.innerHTML;
            }
          }
          break;
      }
      return this;
    };

    function SELECT(el, parent) {
      this.api = {
        el: null
      };
      this.api.val = function(value) {
        return _getElementVal.call(this, value);
      };
      switch (typeof el) {
        case "string":
          parent = parent && typeof parent === "string" ? this.query(parent) : parent;
          this.api.el = this.query(el, parent);
          break;
        case "object":
          if (typeof el.nodeName !== "undefined") {
            this.api.el = el;
          }
      }
      return this.api;
    }

    SELECT.prototype.query = function(selector, parent) {
      parent = parent || document;
      return parent.querySelector(selector);
    };

    SELECT.prototype.queryAll = function(selector, parent) {
      parent = parent || document;
      return parent.querySelectorAll(selector);
    };

    return SELECT;

  })();

  window.Select = SELECT;

}).call(this);
