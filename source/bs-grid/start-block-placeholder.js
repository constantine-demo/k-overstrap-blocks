"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartBlockPlaceholder = StartBlockPlaceholder;
/** @jsx wp.element.createElement */

function StartBlockPlaceholder(args) {

  /* definitions */

  var props = args.propsObject;

  var __ = wp.i18n.__;
  var _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
      MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow;
  var _wp$components = wp.components,
      Button = _wp$components.Button,
      ToolbarGroup = _wp$components.ToolbarGroup,
      Toolbar = _wp$components.Toolbar,
      ToolbarButton = _wp$components.ToolbarButton,
      Dashicon = _wp$components.Dashicon,
      SVG = _wp$components.SVG,
      Path = _wp$components.Path,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      SelectControl = _wp$components.SelectControl,
      IconButton = _wp$components.IconButton;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;


  var addClass = props.attributes.className ? " " + props.attributes.className : "";
  function createChild() {
    var xs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var sm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var md = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;
    var lg = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var xl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    return wp.blocks.createBlock('k-blocks-bs-grid-child/k-blocks', {
      className: '',
      colBreakpoint: xs,
      colSmBreakpoint: sm,
      colMdBreakpoint: md,
      colLgBreakpoint: lg,
      colXlBreakpoint: xl
    });
  }
  function add_two_columns() {
    for (var i = 1; i <= 2; i++) {
      wp.data.dispatch('core/block-editor').insertBlocks(createChild(), null, props.clientId);
    }
  }
  function add_three_columns() {
    for (var i = 1; i <= 3; i++) {
      wp.data.dispatch('core/block-editor').insertBlocks(createChild(0, 0, 4, 0, 0), null, props.clientId);
    }
  }
  function add_four_columns() {
    for (var i = 1; i <= 4; i++) {
      wp.data.dispatch('core/block-editor').insertBlocks(createChild(0, 0, 3, 0, 0), null, props.clientId);
    }
  }

  /* output */

  return wp.element.createElement(
    "div",
    { className: "components-placeholder is-large" },
    wp.element.createElement(
      "div",
      { className: "components-placeholder__label" },
      wp.element.createElement(
        "svg",
        { width: "25", height: "25", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        wp.element.createElement("path", { d: "M23.75 3.75H1.25V21.25H23.75V3.75Z", fill: "#C4C4C4", stroke: "#6000FF", "stroke-width": "2" }),
        wp.element.createElement("path", { d: "M16.25 5H8.75V20H16.25V5Z", fill: "#6000FF" })
      ),
      "Bootstrap Columns"
    ),
    wp.element.createElement(
      "div",
      { className: "components-placeholder__instructions mb-3" },
      "Select a variation to start with."
    ),
    wp.element.createElement(
      "div",
      { className: "components-placeholder__fieldset" },
      wp.element.createElement(
        Button,
        { isSecondary: true, onClick: add_two_columns },
        "2 Equal Columns"
      ),
      wp.element.createElement(
        Button,
        { isSecondary: true, onClick: add_three_columns },
        "3 Equal Columns"
      ),
      wp.element.createElement(
        Button,
        { isSecondary: true, onClick: add_four_columns },
        "4 Equal Columns"
      )
    )
  );
}