'use strict';

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
    Fragment = _wp$element.Fragment;
var Button = wp.components.Button;


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

registerBlockType('k-blocks-bs-tabs/k-blocks', {
  title: __('Bootstrap tabs'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    className: { type: 'string' },
    anchor: { type: 'string' }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

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
          'PARENT HEADER CONTENT - EDIT'
        ),
        wp.element.createElement(InnerBlocks, {
          allowedBlocks: ['k-blocks-bs-tabs-item/k-blocks'],
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

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

registerBlockType('k-blocks-bs-tabs-item/k-blocks', {
  title: __('Accordion Slide'),
  icon: SectionBlockIcon,
  category: 'k-common-tabs',
  parent: ['k-blocks-bs-accordion'],
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
//# sourceMappingURL=block.js.map