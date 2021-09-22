'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _commonFunctions = require('../common/common-functions.js');

var _controls = require('./controls.js');

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder;
var _wp$components = wp.components,
    Dashicon = _wp$components.Dashicon,
    SVG = _wp$components.SVG,
    Path = _wp$components.Path;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;


var WideBlockIcon = function WideBlockIcon() {
  return wp.element.createElement(
    'svg',
    { width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'M10 2H0V18H10V2Z', fill: '#6000FF' }),
    wp.element.createElement('path', { d: 'M20 2H10V18H20V2Z', fill: '#C4C4C4' })
  );
};

/*=============================================================================*/
/*                        Wide Image Text Block Start                          */
/*=============================================================================*/

registerBlockType('k-blocks-text-wide/k-blocks', {
  title: __('Section Wide Image'),
  icon: WideBlockIcon,
  category: 'k-common-blocks',
  parent: ['core/post-content'], // only root block
  supports: { align: ['full'], anchor: true, html: false },
  attributes: {
    align: { type: 'string', default: 'full' },
    reverse: { type: 'boolean', default: false },
    image: { type: 'string', default: 'unset' },
    video: { type: 'string', default: '' },
    valign: { type: 'string', default: 'top' },
    third: { type: 'boolean', default: false },
    color: { type: 'string', default: 'inherit' },
    bgColor: { type: 'string', default: 'transparent' },
    bgGradient: { type: 'string', default: 'none' },
    bgImage: { type: 'string', default: 'none' },
    bgImageId: { type: 'integer', default: 0 },
    bgImageType: { type: 'string', default: 'cover' },
    className: { type: 'string' },
    anchor: { type: 'string' }
  },

  /*=============================================================================*/
  /*                                    EDIT                                     */
  /*=============================================================================*/

  edit: function edit(props) {
    var _useState = useState(document.getElementsByClassName('edit-post-visual-editor')[0].clientWidth),
        _useState2 = _slicedToArray(_useState, 2),
        blockWidth = _useState2[0],
        setBlockWidth = _useState2[1];

    function calculateMarginValue() {
      if (document.body.clientWidth >= 991) {
        if (props.attributes.align == 'full') {
          return 'calc( ' + (props.attributes.third ? '150%' : '100%') + ' - ' + document.getElementsByClassName('edit-post-visual-editor')[0].clientWidth / 2 + 'px )';
        } else {
          return '0';
        }
      }
    };

    function rerenderIfChanged() {
      setBlockWidth(document.getElementsByClassName('edit-post-visual-editor')[0].clientWidth);
    }

    useEffect(function () {
      setTimeout(function () {
        rerenderIfChanged();
      }, 50);
      window.addEventListener("resize", rerenderIfChanged);
      document.body.addEventListener("click", function () {
        setTimeout(function () {
          rerenderIfChanged();
        }, 5);
      });
    });

    var editStyle = { backgroundImage: props.attributes.image, position: 'relative' };
    if (props.attributes.reverse == false) {
      editStyle.marginLeft = calculateMarginValue();
    } else {
      editStyle.marginRight = calculateMarginValue();
    }

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

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(_controls.Controls, { propsObject: props }),
      wp.element.createElement(
        'div',
        {
          className: 'k-bs-section-block',
          style: {
            color: props.attributes.color,
            backgroundColor: props.attributes.bgColor,
            backgroundImage: (props.attributes.bgGradient ? props.attributes.bgGradient : 'none') + ',' + (props.attributes.bgImage ? "url('" + props.attributes.bgImage + "')" : 'none'),
            backgroundSize: props.attributes.bgImageType == 'cover' ? 'auto, cover' : props.attributes.bgImageType == 'contain' ? 'auto, contain' : 'auto, auto',
            backgroundRepeat: props.attributes.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
            backgroundPosition: props.attributes.bgImageType != 'repeat' ? 'center, center' : 'center,center',
            paddingLeft: props.attributes.isSectionWide ? "16px" : "0",
            paddingRight: props.attributes.isSectionWide ? "16px" : "0"
          }
        },
        wp.element.createElement(
          'div',
          { 'class': 'k-wide-block-container k-editor-container m-auto' },
          wp.element.createElement(
            'div',
            { className: 'k-wide-block-row no-gutters row px-lg-0' + (props.attributes.reverse ? ' flex-row-reverse' : '') },
            wp.element.createElement(
              'div',
              { className: 'k-wide-block-col-bgimg ' + (props.attributes.third ? 'col-lg-4' : 'col-lg-6') + ' px-lg-0 ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign) },
              wp.element.createElement(
                'div',
                {
                  className: props.attributes.reverse ? 'outer-img-right' : 'outer-img-left',
                  style: editStyle
                },
                props.attributes.image == 'unset' && props.attributes.video == '' && wp.element.createElement(MediaPlaceholder, {
                  className: 'h-100',
                  onSelect: selectMedia,
                  allowedTypes: ['image', 'video'],
                  multiple: false
                  /*labels = { { title: 'The Image' } }*/
                  , icon: wp.element.createElement(Dashicon, { icon: 'format-image' })
                }),
                props.attributes.video != '' && wp.element.createElement('video', {
                  style: { position: "absolute", overflow: "hidden", width: "100%", height: "100%", objectFit: "cover", top: "50%", left: "50%", transform: "translate(-50%,-50%)" },
                  autoplay: 'autoplay',
                  loop: 'loop',
                  src: props.attributes.video
                })
              )
            ),
            wp.element.createElement(
              'div',
              { className: 'k-wide-block-col-content ' + (props.attributes.third ? 'col-lg-8' : 'col-lg-6') + ' px-lg-0 ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign) },
              wp.element.createElement(
                'div',
                { className: 'k-wide-block-inercontent px-lg-3 py-4' },
                wp.element.createElement(InnerBlocks, null),
                props.attributes.bgImageID
              )
            )
          )
        )
      )
    );
  },


  /*===========================================================================*/
  /*                                   SAVE                                    */
  /*===========================================================================*/

  save: function save(props) {

    var offcetFront = '0';
    var bgImgStylesObj = {
      backgroundImage: props.attributes.image,
      position: 'relative'
    };
    if (props.attributes.align != 'full') {
      bgImgStylesObj['marginLeft'] = '0';
      bgImgStylesObj['marginRight'] = '0';
    };

    {/* SAVE RENDER
      =========================================================================*/}

    return wp.element.createElement(
      'div',
      {
        className: 'k-bs-section-block',
        style: {
          color: props.attributes.color,
          backgroundColor: props.attributes.bgColor,
          backgroundImage: (props.attributes.bgGradient ? props.attributes.bgGradient : 'none') + ',' + (props.attributes.bgImage ? "url('" + props.attributes.bgImage + "')" : 'none'),
          backgroundSize: props.attributes.bgImageType == 'cover' ? 'auto, cover' : props.attributes.bgImageType == 'contail' ? 'auto, contain' : 'auto, auto',
          backgroundRepeat: props.attributes.bgImageType != 'repeat' ? 'no-repeat,no-repeat' : 'no-repeat,repeat',
          backgroundPosition: props.attributes.bgImageType != 'repeat' ? 'center, center' : 'center,center',
          paddingLeft: props.attributes.isSectionWide ? "16px" : "0",
          paddingRight: props.attributes.isSectionWide ? "16px" : "0"
        }
      },
      wp.element.createElement(
        'div',
        { className: 'k-wide-block-container container' },
        wp.element.createElement(
          'div',
          { className: 'k-wide-block-row row px-lg-0' + (props.attributes.reverse ? ' flex-row-reverse' : '') },
          wp.element.createElement(
            'div',
            { className: 'k-wide-block-col-bgimg ' + (props.attributes.third ? 'col-lg-4' : 'col-lg-6') + ' px-lg-0 ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign) },
            wp.element.createElement(
              'div',
              {
                className: (props.attributes.reverse ? 'outer-img-right' : 'outer-img-left') + (props.attributes.third ? ' third' : ''),
                style: bgImgStylesObj
              },
              props.attributes.video != '' && wp.element.createElement('video', {
                style: { position: "absolute", overflow: "hidden", width: "100%", height: "100%", objectFit: "cover", top: "50%", left: "50%", transform: "translate(-50%,-50%)" },
                autoplay: 'autoplay',
                loop: 'loop',
                src: props.attributes.video
              })
            )
          ),
          wp.element.createElement(
            'div',
            { className: 'k-wide-block-col-content ' + (props.attributes.third ? 'col-lg-8' : 'col-lg-6') + ' px-lg-0 ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign) },
            wp.element.createElement(
              'div',
              { className: 'k-wide-block-inercontent px-lg-3 py-4' },
              wp.element.createElement(InnerBlocks.Content, null)
            )
          )
        )
      )
    );
  }
});