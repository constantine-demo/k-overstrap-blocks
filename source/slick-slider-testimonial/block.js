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
    SelectControl = _wp$components.SelectControl,
    Placeholder = _wp$components.Placeholder;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;
var useSelect = wp.data.useSelect;


var BlockIcon = function BlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M7 6H1V12H7V6Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M20 5H9V7H20V5Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M20 11H9V13H20V11Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M20 8H9V10H20V8Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M14 16L11 17.7321V14.2679L14 16Z', fill: '#1E1E1E' }),
    wp.element.createElement('path', { d: 'M6 16L9 14.2679V17.7321L6 16Z', fill: '#1E1E1E' })
  );
};
var ChildBlockIcon = function ChildBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M19 3H1V17H19V3Z', fill: 'white', stroke: '#3498DB', 'stroke-width': '2' }),
    wp.element.createElement('path', { d: 'M13 12H7V14H13V12Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M14 6H6V8H14V6Z', fill: '#C4C4C4' }),
    wp.element.createElement('path', { d: 'M16 9H4V11H16V9Z', fill: '#C4C4C4' })
  );
};

/*============================================================================*/
/*                              PARENTBLOCK BEGIN                             */
/*============================================================================*/

var withCustomClassName = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
  return function (props) {
    if (props.name !== 'k-blocks-slick-testimonial-child/k-blocks') {
      return wp.element.createElement(BlockListBlock, props);
    }
    return wp.element.createElement(
      'div',
      { 'class': 'k-blocks-slick-testimonial-slide-content d-block' },
      wp.element.createElement(BlockListBlock, _extends({}, props, { className: "d-block" }))
    );
  };
}, 'withClientIdClassName');
wp.hooks.addFilter('editor.BlockListBlock', 'example/filter-blocks', withCustomClassName);

registerBlockType('k-blocks-slick-testimonial-parent/k-blocks', {
  title: __('Testimonial Slick Slider'),
  icon: BlockIcon,
  category: 'k-common-blocks',
  //parent: [ 'core/post-content' ], // only root block
  supports: { anchor: true, html: false },
  attributes: {
    className: { type: 'string' },
    anchor: { type: 'string' },
    blockID: { type: 'string', default: '' },
    minHeight: { type: 'integer', default: 7 },
    maxWidth: { type: 'integer', default: 40 },
    arrows: { type: 'boolean', default: true },
    dots: { type: 'boolean', default: false },
    infinite: { type: 'boolean', default: false },
    autoplay: { type: 'boolean', default: false },
    fade: { type: 'boolean', default: false },
    pauseOnHover: { type: 'boolean', default: false },
    arrowsColorClass: { type: 'string', default: '' },
    arrowsSizeClass: { type: 'string', default: '' },
    arrowsPositionClass: { type: 'string', default: '' },
    dotsColorClass: { type: 'string', default: '' },
    dotsSizeClass: { type: 'string', default: '' },
    dotsPositionClass: { type: 'string', default: '' },
    childPadding: { type: 'string', default: 'p-3' }
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

    var innerBlockCount = useSelect(function (select) {
      return select('core/block-editor').getBlocks(props.clientId).length;
    }, [props.clientId]);
    if (props.attributes.blockID != props.clientId) props.setAttributes({ blockID: props.clientId });
    props.editMode = editMode;
    props.toggleEditMode = function () {
      setEditMode(!editMode);
    };
    props.setEditMode = function (par) {
      setEditMode(par);
    };

    var allInnerBlocks = wp.data.select('core/block-editor').getBlocks(props.clientId);
    var sliderHtml = "";
    allInnerBlocks.forEach(function (el) {
      return sliderHtml += wp.blocks.getBlockContent(el);
    });

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsParent.ControlsSetParent, { propsObject: props }),
      wp.element.createElement(
        'div',
        {
          className: "k-blocks-slick-testimonial-parent backend" + (att.className ? " " + att.className : "") + (editMode ? " editmode" : " viewmode") + controlClasses(props),
          style: { maxWidth: att.maxWidth + 'rem', marginLeft: 'auto', marginRight: 'auto' }
        },
        !innerBlockCount && wp.element.createElement(Placeholder, {
          icon: BlockIcon,
          className: editMode ? "mb-3" : "",
          label: 'Add new slide',
          style: { minHeight: att.minHeight + 'Rem' }
        }),
        editMode && wp.element.createElement(InnerBlocks, {
          allowedBlocks: ['k-blocks-slick-testimonial-child/k-blocks'],
          orientation: 'verti\u0441al',
          renderAppender: editMode ? function () {
            return wp.element.createElement(InnerBlocks.ButtonBlockAppender, null);
          } : false
        }),
        !editMode && wp.element.createElement('div', {
          className: "hero-gallery " + controlClasses(props),
          id: "testimonial-gallery-" + att.blockID,
          dangerouslySetInnerHTML: { __html: sliderHtml }
        })
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var att = props.attributes;
    var frontEndScript = '\n    jQuery(document).ready(function($) {\n      $("#testimonial-gallery-' + att.blockID + '").slick({\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: ' + props.attributes.arrows + ',\n        dots: ' + props.attributes.dots + ',\n        infinite: ' + props.attributes.infinite + ',\n        autoplay: ' + props.attributes.autoplay + ',\n        fade: ' + props.attributes.fade + ',\n        pauseOnHover: ' + props.attributes.pauseOnHover + ',\n        adaptiveHeight: true,\n      });\n    });';

    return wp.element.createElement(
      'div',
      {
        className: "k-blocks-slick-testimonial-parent testimonial-gallery " + controlClasses(props),
        style: { maxWidth: att.maxWidth + 'rem', marginLeft: 'auto', marginRight: 'auto' }
      },
      wp.element.createElement(
        'div',
        { id: "testimonial-gallery-" + att.blockID },
        wp.element.createElement(InnerBlocks.Content, null)
      ),
      wp.element.createElement('script', { dangerouslySetInnerHTML: { __html: frontEndScript } })
    );
  }
});

/*============================================================================*/
/*                             CHILD BLOCK BEGIN                              */
/*============================================================================*/

registerBlockType('k-blocks-slick-testimonial-child/k-blocks', {
  title: __('Slide'),
  icon: ChildBlockIcon,
  category: 'k-common-blocks',
  parent: ['k-blocks-slick-testimonial-parent'],
  supports: { html: false, className: false },
  attributes: {
    className: { type: 'string' },
    minHeight: { type: 'integer', default: 10 },
    color: { type: 'string', default: 'inherit' },
    bgColor: { type: 'string', default: 'transparent' },
    childPadding: { type: 'string', default: 'p-3' }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {

    var atts = props.attributes;
    var parent = useSelect(function (select) {
      return select('core/block-editor').getBlockParents(props.clientId);
    });
    var parentAttributes = useSelect(function (select) {
      return select('core/block-editor').getBlockAttributes(parent);
    });
    props.setAttributes({ minHeight: parentAttributes.minHeight });
    props.setAttributes({ childPadding: parentAttributes.childPadding });

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controlsChild.ControlsSetChild, { propsObject: props }),
      wp.element.createElement(
        'div',
        {
          className: "k-blocks-slick-testimonial-slide d-flex flex-column justify-content-center " + atts.childPadding,
          style: { color: atts.color, backgroundColor: atts.bgColor, minHeight: atts.minHeight + 'Rem' }
        },
        wp.element.createElement(InnerBlocks, {
          templateLock: false
          //renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
        })
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var atts = props.attributes;

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        'div',
        {
          className: "k-blocks-slick-testimonial-slide d-flex flex-column justify-content-center " + atts.childPadding,
          style: { color: atts.color, backgroundColor: atts.bgColor, minHeight: atts.minHeight + 'Rem' }
        },
        wp.element.createElement(
          'div',
          { className: 'k-blocks-slick-testimonial-inner-content d-block' },
          wp.element.createElement(InnerBlocks.Content, null)
        )
      )
    );
  }
});

function controlClasses(props) {
  var att = props.attributes;
  var allClasses = [att.arrowsColorClass, att.arrowsSizeClass, att.arrowsPositionClass, att.dotsColorClass, att.dotsSizeClass, att.dotsPositionClass];
  return allClasses.filter(function (e) {
    return e !== '';
  }).join(' ');
}