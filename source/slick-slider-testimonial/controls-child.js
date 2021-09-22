'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetChild = ControlsSetChild;

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

function ControlsSetChild(args) {

  /* definitions */

  var props = args.propsObject;
  var att = args.propsObject.attributes;

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


  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(BlockControls, null),
    wp.element.createElement(
      InspectorControls,
      null,
      wp.element.createElement(_PannelUltimateBgControl.PannelUltimateBgControl
      // first toolbar: color block
      , { colorValue: att.color,
        onColorChange: function onColorChange(newVal) {
          return props.setAttributes({ color: newVal });
        },
        bgColorValue: att.bgColor,
        onBgColorChange: function onBgColorChange(newVal) {
          return props.setAttributes({ bgColor: newVal });
        }
      })
    )
  );
} /** @jsx wp.element.createElement */