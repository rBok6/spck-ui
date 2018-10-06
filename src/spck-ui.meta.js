(function (exports) {
  var $definitions = exports.definitions;

  (function ($setters) {
    $setters.screen.$$desc = 'Determines which screen size to show the component on.';
    $setters.badge.$$desc = 'Change the label style to a badge.';
    $setters.card.$$desc = 'Change the element style to a card.';
    $setters.fill.$$desc = 'Determine how the element will fill its parent.';
    $setters.margin.$$desc = 'Add margins to the component.';
    $setters.position.$$desc = 'Change the CSS property <code>position</code>.';
    $setters.display.$$desc = 'Change the CSS property <code>display</code>.';
    $setters.hidden.$$desc = 'Show or hide the component.';
    $setters.animation.$$desc = 'Animation classes to use for the component.';
    $setters.selectable.$$desc = 'Change text to unselectable.';
    $setters.flex.$$desc = 'Change component to use flex layout.';
    $setters.flexOrder.$$desc = 'Flex order of the component.';
    $setters.flexLayout.$$desc = 'Set the flex layout class.';
    $setters.flexAlign.$$desc = 'Set the flex alignment class.';
    $setters.flexSize.$$desc = 'Set the flex size class.';
    $setters.flexSpace.$$desc = 'Set the flex spacing class.';
    $setters.flexWrap.$$desc = 'Set the flex wrap class.';
    $setters.float.$$desc = 'Change the CSS property <code>float</code>.';
    $setters.halign.$$desc = 'Determine horizontal alignment for non-flex layout.';
    $setters.valign.$$desc = 'Determine vertical alignment for non-flex layout.';
    $setters.textAlign.$$desc = 'Change the CSS property <code>text-align</code>.';
    $setters.textColor.$$desc = 'Set the text color from a list of predefined colors.';
    $setters.text.$$desc = 'Special text classes, mostly transformations.';
    $setters.wrap.$$desc = 'Text wrap classes for the component.';
    $setters.scroll.$$desc = 'Determine the scrolling behavior of the component.';
    $setters.padding.$$desc = 'Padding classes for the component.';
    $setters.device.$$desc = 'Show the component on touch or no-touch devices only.';
  }(exports.CommonStyles.$setters));


  (function ($setters) {
    $setters.disabled.$$desc = 'Set the <code>disabled</code> attribute.';
    $setters.disabled.$$type = 'boolean';
    $setters.sticky.$$desc = 'Makes the component sticky on the screen.';
    $setters.uploader.$$desc = 'Turns the component into an upload button.';
    $setters.tooltip.$$desc = 'Add a tooltip to the component.';
    $setters.tooltip.$$type = 'string';
    $setters.cls.$$desc = 'Custom CSS classes for the component.';
    $setters.cls.$$type = 'string | string[]';
    $setters.dropdown.$$desc = 'Configuration object to show in a context menu.';
    $setters.uploader.$$type = 'boolean';

    $setters.$$meta = {
      dropdownEvent: "The event type to trigger a dropdown",
      dropdownOptions: "Configuration passed to dropdown component",
      template: "A string or a function that returns a HTML template string for the component. For examples, see source code on Github.",
      style: "A object containing properties to feed into the style attribute of the element"
    };
  }($definitions.element.prototype.$setters));


  (function ($setters) {
    $setters.cells.$$type = 'any[]';
    $setters.cells.$$desc = "An array of Component configuration objects.";
  }($definitions.flexgrid.prototype.$setters));


  (function ($setters) {
    $setters.help.$$type = 'string';
    $setters.formClass.options = {"": "", "danger": "danger", "success": "success"};
    $setters.formClass.$$desc = "Set the validation class of the form control.";
    $setters.help.$$desc = "Set the help text of the form control.";
    $setters.type.$$desc = "Set the <code>type</code> attribute of the form control.";
    $setters.type.$$type = 'string';
    $setters.multiple.$$desc = "Set the <code>multiple</code> attribute of the form control.";
    $setters.multiple.$$type = 'boolean';
    $setters.value.$$desc = "Initial value of the input element.";
    $setters.value.$$type = 'string';
  }(exports.FormControl.$setters));


  (function ($setters) {
    $setters.bodyWidth.$$type = 'string';
    $setters.bodyHeight.$$type = 'string';
    $setters.closeButton.$$type = 'boolean';
    $setters.body.$$desc = "Configuration object to put in the modal body";
    $setters.header.$$desc = "Configuration object to put in the modal header";
    $setters.footer.$$desc = "Configuration object to put in the modal footer";
    $setters.caption.$$type = 'string';
    $setters.$$meta = {
      bgClose: {$$type: 'boolean'},
      keyboard: {$$type: 'boolean'},
      minScrollHeight: {$$type: 'number'},
      closeModals: {$$type: 'boolean'},
      center: {$$type: 'boolean'}
    };
  }($definitions.modal.prototype.$setters));


  (function ($setters) {
    $setters.$$meta = {
      iconClass: {$$type: 'string'},
      icon: {$$type: 'string'}
    };
  }($definitions.button.prototype.$setters));


  (function ($setters) {
    $setters.href.$$type = 'string';
    $setters.src.$$type = 'string';
    $setters.target.$$type = 'string';
  }($definitions.image.prototype.$setters));


  (function ($setters) {
    $setters.href.$$type = 'string';
    $setters.target.$$type = 'string';
  }($definitions.link.prototype.$setters));


  (function ($setters) {
    $setters.iconStyle.$$desc = 'Type of icon';
  }($definitions.icon.prototype.$setters));


  (function ($setters) {
    $setters.color.$$desc = "Set the style type of the progress element";
  }($definitions.progress.prototype.$setters));


  (function ($setters) {
    $setters.autocomplete.$$type = 'boolean';
    $setters.autocomplete.$$desc = 'Set the <code>autocomplete</code> attribute of the input.';
    $setters.autocapitalize.$$type = 'boolean';
    $setters.autocapitalize.$$desc = 'Set the <code>autocapitalize</code> attribute of the input.';
    $setters.autocorrect.$$type = 'boolean';
    $setters.autocorrect.$$desc = 'Set the <code>autocorrect</code> attribute of the input.';
    $setters.placeholder.$$type = 'string';
    $setters.placeholder.$$desc = 'Set the <code>placeholder</code> attribute of the input.';
  }(exports.InputControl.$setters));


  (function ($setters) {
    $setters.autocomplete.$$type = 'Function';
    $setters.autocomplete.$$desc = 'Function that overrides the way completions are fetched. Use this if completions are fetched using a Promise. The first argument is a callback function that handles autocompletion results; default uses the <code>sources</code> property.';
    $setters.sources.$$desc = 'An array of sources for the autocomplete or a function that provides the completions or a list of completions';
    $setters.sources.$$type = 'any[] | Function';
    $setters.$$meta = {
      caseSensitive: {$$type: 'boolean', $$desc: 'Completion matching will be case-sensitive.'},
      minLength: {$$type: 'number', $$desc: 'Minimum number of characters for completions matching.'}
    };
  }($definitions.autocomplete.prototype.$setters));

  
  (function ($setters) {
    $setters.checked.$$type = 'boolean';
    $setters.checked.$$desc = 'Set the <code>checked</code> attribute if input is a checkbox.';
    $setters.readonly.$$type = 'boolean';
    $setters.readonly.$$desc = 'Set the <code>readonly</code> attribute of the input.';
    $setters.size.$$desc = 'Size classes for controlling the input appearance.';
    $setters.width.$$desc = 'Width classes for controlling the input appearance.';
  }($definitions.input.prototype.$setters));

  (function ($setters) {
    $setters.filter.$$desc = 'A function to determine which child components to display. The function is passed the child component object.';
    $setters.droppable.$$desc = 'A function to determine if a child component can be drag and dropped upon. The function is passed the child component object.';
    $setters.$$meta = {
      data: {$$type: 'Component[]', $$desc: 'An array of item/component objects.'},
      itemTagClass: {$$type: 'string', $$desc: 'CSS class applied to each item element.'}
    };
  }($definitions.stack.prototype.$setters));


  (function ($setters) {
    $setters.listStyle.$$desc = 'Predefined list style';
    $setters.tab.$$type = 'boolean';
    $setters.tab.$$desc = 'When true, sets additional behaviors for tabs such as responsiveness and events ' +
      '<code>onTabMenuClick, onItemSelectionChanged</code>';
  }($definitions.list.prototype.$setters));


  (function ($setters) {
    $setters.$$meta = {
      indentWidth: {$$type: 'number'},
      dataTransfer: 'The data representation of an item, only for FireFox',
      draggable: {$$type: 'boolean'},
      orderAfter: {$$type: 'Function', $$desc: 'Low level function that determines ordering of tree items'},
      droppable: {
        $$type: 'Function',
        $$desc: 'Function that determines if an item can be dropped upon'
      }
    };
  }($definitions.tree.prototype.$setters));

  
  (function ($setters) {
    $setters.tableStyle.$$desc = 'Predefined table style';
    $setters.columns.$$desc = "List of schema objects containing data display info";
    $setters.columns.$$type = 'any[]';
    $setters.header.$$desc = "List of header objects containing the header and alignment info";
    $setters.header.$$type = 'boolean | any[]';
    $setters.footer.$$desc = "List of footer objects containing the footer title";
    $setters.footer.$$type = 'boolean | any[]';
    $setters.caption.$$desc = 'Table caption';
    $setters.caption.$$type = 'string';
  }($definitions.table.prototype.$setters));


  (function ($setters) {
    $setters.formStyle.$$desc = 'Predefined form style';
    $setters.fieldset.$$desc = 'Fieldset object';
    $setters.fieldsets.$$desc = 'An array of Fieldset objects';
    $setters.fieldset.$$type = 'any[]';
  }($definitions.form.prototype.$setters));


  Object.keys($definitions).forEach(function (def) {
    var setters = $definitions[def].prototype.$setters;
    var bases = $definitions[def].prototype.__bases__;
    var meta = setters.$$meta || {};
    Object.keys(meta).forEach(function (n) {
      meta[n].__class__ = def;
    });
    setters.$$meta = meta;
    bases.forEach(function (base) {
      if (UI.isFunction(base)) base = base.prototype;
      var $setters = base.$setters || {};
      UI.defaults(meta, $setters.$$meta || {});
    });
  });
  
  exports.debug = true;
}(UI));
