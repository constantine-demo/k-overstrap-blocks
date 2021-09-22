"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controls = Controls;

var _PannelUltimateBgControl = require("../common/PannelUltimateBgControl.js");

function Controls(args) {

  /* definitions */

  var props = args.propsObject;

  var __ = wp.i18n.__;
  var _wp$blockEditor = wp.blockEditor,
      MediaUpload = _wp$blockEditor.MediaUpload,
      MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
      MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
      MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow;
  var _wp$blockEditor2 = wp.blockEditor,
      BlockVerticalAlignmentToolbar = _wp$blockEditor2.BlockVerticalAlignmentToolbar,
      BlockControls = _wp$blockEditor2.BlockControls,
      InspectorControls = _wp$blockEditor2.InspectorControls,
      AlignmentToolbar = _wp$blockEditor2.AlignmentToolbar;
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
      IconButton = _wp$components.IconButton,
      DropdownMenu = _wp$components.DropdownMenu,
      MenuGroup = _wp$components.MenuGroup,
      MenuItem = _wp$components.MenuItem,
      MenuItemsChoice = _wp$components.MenuItemsChoice;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;

  var ColGutterIcon = function ColGutterIcon() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("rect", { "class": "active-white", x: "1", y: "5", width: "3", height: "10", fill: "#1E1E1E" }),
      wp.element.createElement("rect", { "class": "active-white", x: "16", y: "5", width: "3", height: "10", fill: "#1E1E1E" }),
      wp.element.createElement("path", { "class": "active-white", d: "M5 10L8.75 7.40192V12.5981L5 10Z", fill: "#1E1E1E" }),
      wp.element.createElement("path", { "class": "active-white", d: "M15 10L11.25 12.5981L11.25 7.40192L15 10Z", fill: "#1E1E1E" })
    );
  };

  var innerColumnsCount = useSelect(function (select) {
    return select('core/block-editor').getBlocks(props.clientId).length;
  }, [props.clientId]);

  function addEmptyColumn() {
    var block = wp.blocks.createBlock('k-blocks-bs-grid-child/k-blocks', { colMdBreakpoint: 6 });
    wp.data.dispatch('core/block-editor').insertBlocks(block, innerColumnsCount, props.clientId);
  }

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: ColGutterIcon,
          title: "No Gutters",
          isActive: props.attributes.noGutters,
          onClick: function onClick() {
            props.setAttributes({ noGutters: !props.attributes.noGutters });
          }
        })
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "leftright",
          title: "Center columns",
          isActive: props.attributes.halign,
          onClick: function onClick() {
            props.setAttributes({ halign: !props.attributes.halign });
          }
        })
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(
          DropdownMenu,
          { icon: 'sort', label: "Select a direction" },
          function (_ref) {
            var onClose = _ref.onClose;
            return wp.element.createElement(
              MenuGroup,
              { label: "vertical Align Colums" },
              wp.element.createElement(MenuItemsChoice, {
                choices: [{ value: 'align-items-stretch', label: 'Stretch (default)' }, { value: 'align-items-start', label: 'Top' }, { value: 'align-items-center', label: 'Center' }, { value: 'align-items-end', label: 'Bottom' }],
                value: props.attributes.valign,
                onSelect: function onSelect(mode) {
                  return props.setAttributes({ valign: mode });
                }

              })
            );
          }
        )
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "plus-alt2",
          title: "Add new column",
          onClick: addEmptyColumn
        })
      )
    ),
    wp.element.createElement(InspectorControls, null)
  );
} /** @jsx wp.element.createElement */