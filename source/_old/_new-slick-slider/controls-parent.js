"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetParent = ControlsSetParent;

var _PannelUltimateBgControl = require("../common/PannelUltimateBgControl.js");

function ControlsSetParent(args) {

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
      SelectControl = _wp$components.SelectControl;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;


  var slickPath = ".hero-gallery-" + att.blockID + ".backend>.block-editor-inner-blocks>.block-editor-block-list__layout";
  function stop() {
    jQuery(slickPath + '.slick-initialized').slick('unslick');
  }
  function start() {
    jQuery(slickPath).not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      adaptiveHeight: false
    });
  }
  function prevSlide() {
    jQuery(slickPath).slick('slickPrev');
  }
  function nextSlide() {
    jQuery(slickPath).slick('slickNext');
  }
  function addEmptySlide() {
    var block = wp.blocks.createBlock('k-blocks-slick-test-child/k-blocks', { content: 'test' });
    wp.data.dispatch('core/block-editor').insertBlocks(block, 0, props.clientId);
  }

  useEffect(function () {
    if (props.editMode) stop();else start();
  });

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
      !props.editMode && wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "arrow-left-alt2",
          title: "Previous Slide",
          onClick: prevSlide
        }),
        wp.element.createElement(ToolbarButton, {
          icon: "arrow-right-alt2",
          title: "Next Slide",
          onClick: nextSlide
        })
      ),
      props.editMode && wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "plus-alt2",
          title: "Add new slide before",
          onClick: addEmptySlide
        })
      ),
      wp.element.createElement(
        Toolbar,
        null,
        wp.element.createElement(ToolbarButton, {
          icon: "edit",
          title: "Edit mode",
          onClick: props.toggleEditMode,
          isActive: props.editMode
        })
      )
    ),
    wp.element.createElement(InspectorControls, null)
  );
} /** @jsx wp.element.createElement */