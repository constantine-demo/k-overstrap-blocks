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
      RangeControl = _wp$components.RangeControl;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;


  var WideBlockButtonThird = function WideBlockButtonThird() {
    return wp.element.createElement(
      "svg",
      { width: "20", height: "24", viewBox: "0 0 20 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      wp.element.createElement("rect", { x: "1", y: "3", width: "18", height: "18", rx: "1", fill: "white" }),
      wp.element.createElement("rect", { x: "3", y: "6", width: "6", height: "12", fill: "black" }),
      wp.element.createElement("path", { d: "M10 12L17 8V16L10 12Z", fill: "black" })
    );
  };

  function selectMedia(media) {
    switch (media.type) {
      case 'image':
        props.setAttributes({ image: "url('" + media.url + "')" });
        props.setAttributes({ video: "" });
        break;
      case 'video':
        props.setAttributes({ image: "unset" });
        props.setAttributes({ video: media.url });
        break;
    }
    console.log(media);
  }

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
      wp.element.createElement(ToolbarButton, {
        icon: "align-pull-left",
        label: __("Show media on right"),
        onClick: function onClick() {
          props.setAttributes({ reverse: false });
        },
        isActive: !props.attributes.reverse
      }),
      wp.element.createElement(ToolbarButton, {
        icon: "align-pull-right",
        label: __("Show media on left"),
        onClick: function onClick() {
          props.setAttributes({ reverse: true });
        },
        isActive: props.attributes.reverse
      }),
      wp.element.createElement(ToolbarButton, {
        icon: WideBlockButtonThird,
        label: __("Make media smaller (1/3)"),
        onClick: function onClick() {
          props.setAttributes({ third: !props.attributes.third });
        },
        isActive: props.attributes.third
      }),
      wp.element.createElement(BlockVerticalAlignmentToolbar, {
        onChange: function onChange(newcontent) {
          props.setAttributes({ valign: newcontent });
        },
        value: props.attributes.valign
      }),
      !(props.attributes.image == 'unset' && props.attributes.video == '') && wp.element.createElement(MediaReplaceFlow, {
        mediaURL: props.attributes.image,
        allowedTypes: ['image', 'video']
        //accept="image/*"
        , onSelect: selectMedia
      })
    ),
    wp.element.createElement(
      InspectorControls,
      null,
      wp.element.createElement(
        PanelBody,
        { title: __('Options') },
        wp.element.createElement(RangeControl, {
          value: props.attributes.minHeight,
          onChange: function onChange(newvalue) {
            return props.setAttributes({ minHeight: newvalue });
          },
          min: 0,
          max: 50,
          label: __('Outer image minimum height' + ' (Rem)'),
          type: "Rem"
        })
      ),
      wp.element.createElement(_PannelUltimateBgControl.PannelUltimateBgControl
      // first toolbar: color block
      , { colorValue: props.attributes.color,
        onColorChange: function onColorChange(newVal) {
          return props.setAttributes({ color: newVal });
        },
        bgColorValue: props.attributes.bgColor,
        onBgColorChange: function onBgColorChange(newVal) {
          return props.setAttributes({ bgColor: newVal });
        }
        // second toolbar: image block
        , bgImgUrlValue: props.attributes.bgImage,
        bgImgIdValue: props.attributes.bgImageId,
        onBgImgSelect: function onBgImgSelect(newVal) {
          return props.setAttributes({ bgImage: newVal.url, bgImageId: newVal.id });
        },
        onSetDefaultClick: function onSetDefaultClick() {
          return props.setAttributes({ bgImage: "none", bgImageId: 0 });
        }
        // bg style for second toolbar: optional
        , bgStyleValue: props.attributes.bgImageType,
        onBgStyleChange: function onBgStyleChange(newVal) {
          return props.setAttributes({ bgImageType: newVal });
        }
        // third toolbar: gradient overlay block
        , gradientOvelayValue: props.attributes.bgGradient,
        onGradientOverlayChange: function onGradientOverlayChange(newVal) {
          return props.setAttributes({ bgGradient: newVal });
        }
      })
    )
  );
} /** @jsx wp.element.createElement */
//# sourceMappingURL=controls.js.map