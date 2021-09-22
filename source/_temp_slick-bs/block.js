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
    BlockEdit = _wp$blockEditor.BlockEdit,
    useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment,
    useEffect = _wp$element.useEffect;
var _wp = wp,
    serverSideRender = _wp.serverSideRender;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    ServerSideRender = _wp$components.ServerSideRender;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    useDispatch = _wp$data.useDispatch,
    useSelect = _wp$data.useSelect;


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

registerBlockType('k-blocks-bs-slider-parent/k-blocks', {
  title: __('BS slider'),
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

    /*const innerBlocks = useSelect(
      ( select ) =>
        select( 'core/block-editor' ).getBlocks( props.clientId ),
      [ props.clientId ]
    );
    console.log(innerBlocks);*/

    /*withDispatch( ( dispatch, ownProps, registry ) => {
    return {
      updateEditable( isEditing ) {
        const { clientId, setAttributes } = ownProps;
        const { getBlockOrder, getBlock } = registry.select( 'core/block-editor' );
          //get all innerBlockIds
        const innerBlockIds = getBlockOrder( clientId );
        innerBlockIds.forEach( ( innerBlockId ) => {
          console.log( getBlock( innerBlockId ) );
        } );
      },
    };
    } )*/

    console.log(wp.data.select('core/block-editor').getBlock(props.clientId));
    //console.log( props );
    //console.log( InnerBlocks );

    useEffect(function () {
      jQuery(".k-block-backend>div>.block-editor-block-list__layout").not('.slick-initialized').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        infinite: true,
        autoplay: false,
        adaptiveHeight: true
      });
    });

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controls.Controls, { propsObject: props }),
      wp.element.createElement(
        'div',
        { className: "k-block-backend " + props.attributes.className },
        wp.element.createElement(
          'h1',
          null,
          'PARENT HEADER CONTENT - EDIT'
        ),
        wp.element.createElement(InnerBlocks, {
          allowedBlocks: ['k-blocks-bs-slider-child/k-blocks'],
          renderAppender: function renderAppender() {
            return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
          },
          orientation: 'vertical',
          templateLock: 'all'
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
      { className: "k-block-backend " + props.attributes.className },
      wp.element.createElement(
        'h1',
        null,
        'PARENT HEADER CONTENT - SAVE'
      ),
      wp.element.createElement(InnerBlocks.Content, null)
    );
  }
});

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

registerBlockType('k-blocks-bs-slider-child/k-blocks', {
  title: __('slider Slide'),
  icon: SectionBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-bs-slider-parent'],
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
        { className: "bg-primary text-white p-3 mb-3" },
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
        { className: "bg-primary text-white p-3 mb-3" },
        wp.element.createElement(InnerBlocks.Content, null)
      )
    );
  }
});