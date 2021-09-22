"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetChild = ControlsSetChild;

var _PannelUltimateBgControl = require("../common/PannelUltimateBgControl.js");

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


  var SectionBlockButtonWide = function SectionBlockButtonWide() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "24", viewBox: "0 0 20 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("path", { d: "M18 3H2C1.44772 3 1 3.44772 1 4V20C1 20.5523 1.44772 21 2 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3Z", fill: "white" }),
      wp.element.createElement("path", { d: "M11 4H9V20H11V4Z", fill: "black" }),
      wp.element.createElement("path", { d: "M2 12L8 8V16L2 12Z", fill: "black" }),
      wp.element.createElement("path", { d: "M18 12L12 8V16L18 12Z", fill: "black" })
    );
  };

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
          icon: SectionBlockButtonWide,
          label: __("Make content conteiner full width"),
          onClick: function onClick() {
            props.setAttributes({ contentWide: !att.contentWide });
          },
          isActive: att.contentWide
        })
      ),
      wp.element.createElement(BlockVerticalAlignmentToolbar, {
        onChange: function onChange(newcontent) {
          props.setAttributes({ valign: newcontent });
        },
        value: props.attributes.valign
      })
    ),
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
        // second toolbar: image block
        , bgImgUrlValue: att.bgImage,
        bgImgIdValue: att.bgImageId,
        onBgImgSelect: function onBgImgSelect(newVal) {
          return props.setAttributes({ bgImage: newVal.url, bgImageId: newVal.id });
        },
        onSetDefaultClick: function onSetDefaultClick() {
          return props.setAttributes({ bgImage: "none", bgImageId: 0 });
        }
        // bg focal for second toolbar: optional
        , bgFocalValue: att.bgImageFocal,
        onBgImageFocalChange: function onBgImageFocalChange(newVal) {
          return props.setAttributes({ bgImageFocal: newVal });
        }
        // bg style for second toolbar: optional
        , bgStyleValue: att.bgImageType,
        onBgStyleChange: function onBgStyleChange(newVal) {
          return props.setAttributes({ bgImageType: newVal });
        }
        // third toolbar: gradient overlay block
        , gradientOvelayValue: att.bgGradient,
        onGradientOverlayChange: function onGradientOverlayChange(newVal) {
          return props.setAttributes({ bgGradient: newVal });
        }
      })
    )
  );
} /** @jsx wp.element.createElement */