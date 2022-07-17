'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controls = Controls;

var _PannelUltimateBgControl = require('../common/PannelUltimateBgControl.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /** @jsx wp.element.createElement */

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
      SelectControl = _wp$components.SelectControl;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;

  var wped = wp.blockEditor;
  var wpcom = wp.components;

  var allClassesNames = [{ name: __('~ <576px', 'megastrap'), slug: 'col' }, { name: __('SM ≥576px', 'megastrap'), slug: 'col-sm' }, { name: __('MD ≥768px', 'megastrap'), slug: 'col-md' }, { name: __('LG ≥992px', 'megastrap'), slug: 'col-lg' }, { name: __('XL ≥1200px', 'megastrap'), slug: 'col-xl' }, { name: __('XXL ≥1400px', 'megastrap'), slug: 'col-xxl' }];

  /* output */

  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      BlockControls,
      null,
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
      wp.element.createElement(
        wpcom.PanelBody,
        { title: __('Grid') },
        wp.element.createElement(ColumnControl, { props: props })
      ),
      wp.element.createElement(
        wpcom.PanelBody,
        { title: __('Padding') },
        wp.element.createElement(
          wp.element.Fragment,
          null,
          wp.element.createElement(wp.components.SelectControl, {
            label: 'Size',
            value: 0,
            options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
            onChange: function onChange(newVal) {
              console.log(newVal);
            }
          }),
          true && wp.element.createElement(
            wp.components.Card,
            { style: { marginBottom: '1.5rem' } },
            wp.element.createElement(
              wp.components.CardBody,
              null,
              wp.element.createElement(
                wp.components.Flex,
                null,
                wp.element.createElement(
                  wp.components.FlexItem,
                  null,
                  wp.element.createElement(wp.components.SelectControl, {
                    label: '\u2191',
                    value: 0,
                    options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
                    onChange: function onChange(newVal) {
                      console.log(newVal);
                    }
                  })
                ),
                wp.element.createElement(
                  wp.components.FlexItem,
                  null,
                  wp.element.createElement(wp.components.SelectControl, {
                    label: '\u2192',
                    value: 0,
                    options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
                    onChange: function onChange(newVal) {
                      console.log(newVal);
                    }
                  })
                ),
                wp.element.createElement(
                  wp.components.FlexItem,
                  null,
                  wp.element.createElement(wp.components.SelectControl, {
                    label: '\u2190',
                    value: 0,
                    options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
                    onChange: function onChange(newVal) {
                      console.log(newVal);
                    }
                  })
                ),
                wp.element.createElement(
                  wp.components.FlexItem,
                  null,
                  wp.element.createElement(wp.components.SelectControl, {
                    label: '\u2193',
                    value: 0,
                    options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }],
                    onChange: function onChange(newVal) {
                      console.log(newVal);
                    }
                  })
                )
              )
            )
          )
        )
      )
    )
  );
}

function ColumnControl(args) {
  var props = args.props;
  var __ = wp.i18n.__;

  var allClassesNames = [{ name: __('Default', 'megastrap'), slug: 'col' }, { name: __('SM ≥576px', 'megastrap'), slug: 'col-sm' }, { name: __('MD ≥768px', 'megastrap'), slug: 'col-md' }, { name: __('LG ≥992px', 'megastrap'), slug: 'col-lg' }, { name: __('XL ≥1200px', 'megastrap'), slug: 'col-xl' }, { name: __('XXL ≥1400px', 'megastrap'), slug: 'col-xxl' }];
  return wp.element.createElement(
    wp.element.Fragment,
    null,
    allClassesNames.map(function (x) {
      return wp.element.createElement(
        wp.element.Fragment,
        null,
        wp.element.createElement(wp.components.ToggleControl, {
          label: x.name,
          checked: getColValue(props, x.slug),
          onChange: function onChange(newVal) {
            if (newVal) setColValue(props, x.slug, 6);
            if (!newVal) setColValue(props, x.slug, 0);
          }
        }),
        getColValue(props, x.slug) && wp.element.createElement(
          wp.components.Card,
          { style: { marginBottom: '1.5rem' } },
          wp.element.createElement(
            wp.components.CardBody,
            null,
            wp.element.createElement(wp.components.RangeControl, {
              label: __('Width'),
              value: getColValue(props, x.slug),
              onChange: function onChange(newVal) {
                setColValue(props, x.slug, newVal);
              },
              min: 1,
              max: 12
            })
          )
        )
      );
    })
  );
}

function setColValue(props) {
  var bsClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'col';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var bsClasses = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'bsClasses';

  var allClasses = props.attributes[bsClasses].trim().split(" ");
  var colMatr = [0, 0, 0, 0, 0, 0];
  allClasses.forEach(function (val, i) {
    if (val.includes('col-') && val.length >= 4 && val.length <= 7) colMatr[0] = parseInt(val.replace(/\D/g, ''));
    if (val.includes('col-sm')) colMatr[1] = parseInt(val.replace(/\D/g, ''));
    if (val.includes('col-md')) colMatr[2] = parseInt(val.replace(/\D/g, ''));
    if (val.includes('col-lg')) colMatr[3] = parseInt(val.replace(/\D/g, ''));
    if (val.includes('col-xl')) colMatr[4] = parseInt(val.replace(/\D/g, ''));
    if (val.includes('col-xxl')) colMatr[5] = parseInt(val.replace(/\D/g, ''));
  });
  if (bsClass == 'col') colMatr[0] = value;
  if (bsClass == 'col-sm') colMatr[1] = value;
  if (bsClass == 'col-md') colMatr[2] = value;
  if (bsClass == 'col-lg') colMatr[3] = value;
  if (bsClass == 'col-xl') colMatr[4] = value;
  if (bsClass == 'col-xxl') colMatr[5] = value;
  var extClass = (colMatr[0] != 0 ? ' col-' + colMatr[0] : '') + (colMatr[1] != 0 ? ' col-sm-' + colMatr[1] : '') + (colMatr[2] != 0 ? ' col-md-' + colMatr[2] : '') + (colMatr[3] != 0 ? ' col-lg-' + colMatr[3] : '') + (colMatr[4] != 0 ? ' col-xl-' + colMatr[4] : '') + (colMatr[5] != 0 ? ' col-xxl-' + colMatr[5] : '');
  if (extClass == "") extClass = 'col';
  props.setAttributes(_defineProperty({}, bsClasses, extClass));
}

function getColValue(props) {
  var bsClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'col';
  var bsClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bsClasses';

  var classValue = null;
  var allClasses = props.attributes[bsClasses].trim().split(" ");
  allClasses.forEach(function (val, i) {
    if (val.includes(bsClass) && bsClass != 'col') classValue = parseInt(val.replace(/\D/g, ''));
    if (val.includes(bsClass) && val.length >= 4 && val.length <= 7) classValue = parseInt(val.replace(/\D/g, ''));
  });
  return classValue;
}