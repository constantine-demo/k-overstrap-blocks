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
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;


var SectionBlockIcon = function SectionBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '24', viewBox: '0 0 20 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M18 3H2C1.44772 3 1 3.44772 1 4V20C1 20.5523 1.44772 21 2 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3Z', fill: '#c10000' })
  );
};

/*============================================================================*/
/*                        bootstrap Section Block begin                       */
/*============================================================================*/

registerBlockType('k-blocks-new-block/k-blocks', {
  title: __('MY NEW BLOCK'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    align: { type: 'string', default: 'full' },
    valign: { type: 'string', default: 'center' },
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
        null,
        wp.element.createElement(
          'h1',
          null,
          'TEST CONTENT'
        )
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {
    return wp.element.createElement(
      'div',
      null,
      wp.element.createElement(
        'h1',
        null,
        'TEST content'
      )
    );
  }
});