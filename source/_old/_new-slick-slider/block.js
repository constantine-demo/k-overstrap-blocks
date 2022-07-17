'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controlsParent = require('./controls-parent.js');

var _controlsChild = require('./controls-child.js');

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp = wp,
    serverSideRender = _wp.serverSideRender;
var _wp$blockEditor = wp.blockEditor,
    BlockVerticalAlignmentToolbar = _wp$blockEditor.BlockVerticalAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar;
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


var SectionBlockIcon = function SectionBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '24', viewBox: '0 0 20 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M18 3H2C1.44772 3 1 3.44772 1 4V20C1 20.5523 1.44772 21 2 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3Z', fill: '#c10000' })
  );
};

/*============================================================================*/
/*                              PARENTBLOCK BEGIN                             */
/*============================================================================*/

var withCustomClassName = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name !== 'k-blocks-slick-test-child/k-blocks') {
      return wp.element.createElement(BlockListBlock, props);
    }
    return wp.element.createElement(
      'div',
      { 'class': 'k-blocks-slick-test-slide-content d-block' },
      wp.element.createElement(BlockListBlock, _extends({}, props, { className: "d-block" }))
    );
  };
}, 'withClientIdClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'example/filter-blocks', withCustomClassName);

registerBlockType('k-blocks-slick-test-parent/k-blocks', {
  title: __('Test Slick Slider'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    className: { type: 'string' },
    anchor: { type: 'string' },
    blockID: { type: 'string', default: '' }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    var att = props.attributes;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        editMode = _useState2[0],
        setEditMode = _useState2[1];

    if (props.attributes.blockID != props.clientId) props.setAttributes({ blockID: props.clientId });
    props.editMode = editMode;
    props.toggleEditMode = function () {
      setEditMode(!editMode);
    };
    props.setEditMode = function (par) {
      setEditMode(par);
    };

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsParent.ControlsSetParent, { propsObject: props }),
      wp.element.createElement(
        'div',
        { className: "k-blocks-slick-test-parent backend" + (att.className ? " " + att.className : "") + (editMode ? " editmode" : " viewmode") + " hero-gallery-" + att.blockID },
        wp.element.createElement(InnerBlocks, {
          allowedBlocks: ['k-blocks-slick-test-child/k-blocks'],
          orientation: 'verti\u0441al',
          templateLock: editMode ? false : "all",
          renderAppender: editMode ? function () {
            return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
          } : false
        })
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var att = props.attributes;
    var frontEndScript = '\n    jQuery(document).ready(function($) {\n      $(".hero-gallery-' + att.blockID + '").slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        adaptiveHeight: true\n      });\n    });';

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        'div',
        { className: "k-blocks-slick-test-parent hero-gallery-" + att.blockID },
        wp.element.createElement(InnerBlocks.Content, null)
      ),
      wp.element.createElement('script', { dangerouslySetInnerHTML: { __html: frontEndScript } })
    );
  }
});

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

registerBlockType('k-blocks-slick-test-child/k-blocks', {
  title: __('Slide'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-slick-test-parent'],
  supports: { html: false, className: false },
  attributes: {
    className: { type: 'string' },
    content: { type: 'string' }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsChild.ControlsSetChild, { propsObject: props }),
      wp.element.createElement(
        'div',
        { className: "bg-primary text-white p-3" },
        wp.element.createElement(InnerBlocks, {
          templateLock: false
        })
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {
    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        'div',
        { className: "bg-primary text-white p-3" },
        wp.element.createElement(InnerBlocks.Content, null)
      )
    );
  }
});