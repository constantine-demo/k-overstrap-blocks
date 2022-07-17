'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _commonFunctions = require('../common/common-functions.js');

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

var _controls = require('./controls.js');

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockEdit = _wp$blockEditor.BlockEdit;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var Button = wp.components.Button;
var useSelect = wp.data.useSelect;


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

registerBlockType('k-blocks-bs-gallery/k-blocks', {
  title: __('BS NEW'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    className: { type: 'string' },
    anchor: { type: 'string' }
  },

  /*============================================================================*/
  /*                                   EDIT                                     */
  /*============================================================================*/

  edit: function edit(props) {

    var innerColumns = useSelect(function (select) {
      return select('core/block-editor').getBlock(props.clientId);
    }, [props.clientId]);
    console.log(innerColumns);

    useEffect(function () {});

    /*var $slideshow = jQuery('#ephad-gallery').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });*/

    jQuery(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      jQuery(this).ekkoLightbox();
    });

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controls.Controls, { propsObject: props }),
      wp.element.createElement(
        'div',
        { className: "" + props.attributes.className },
        wp.element.createElement(
          'h1',
          null,
          'TEST AREA'
        ),
        wp.element.createElement(
          'h1',
          null,
          'PARENT HEADER CONTENT - EDIT'
        ),
        wp.element.createElement('h2', null),
        wp.element.createElement(InnerBlocks, {
          allowedBlocks: ['k-blocks-bs-gallery-child/k-blocks'],
          renderAppender: function renderAppender() {
            return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
          },
          orientation: 'vertical'
        })
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    return wp.element.createElement(
      'div',
      { className: "" + props.attributes.className },
      wp.element.createElement(
        'h1',
        null,
        'PARENT HEADER CONTENT'
      ),
      wp.element.createElement(InnerBlocks.Content, null)
    );
  }
});

function print_r(arr, level) {
  var print_red_text = "";
  if (!level) level = 0;
  var level_padding = "";
  for (var j = 0; j < level + 1; j++) {
    level_padding += "    ";
  }if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) == 'object') {
    for (var item in arr) {
      var value = arr[item];
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        print_red_text += level_padding + "'" + item + "' :\n";
        print_red_text += print_r(value, level + 1);
      } else print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
    }
  } else print_red_text = "===>" + arr + "<===(" + (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) + ")";
  return print_red_text;
}

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

registerBlockType('k-blocks-bs-gallery-child/k-blocks', {
  title: __('gallery Slide'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-bs-gallery'],
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
      wp.element.createElement(
        'div',
        { className: "bg-primary text-white p-3" },
        wp.element.createElement(InnerBlocks, {
          templateInsertUpdatesSelection: true
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