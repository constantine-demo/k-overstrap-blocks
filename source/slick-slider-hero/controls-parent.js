"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlsSetParent = ControlsSetParent;

var _PannelUltimateBgControl = require("../common/PannelUltimateBgControl.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /** @jsx wp.element.createElement */

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
      ButtonGroup = _wp$components.ButtonGroup,
      ToolbarGroup = _wp$components.ToolbarGroup,
      Toolbar = _wp$components.Toolbar,
      ToolbarButton = _wp$components.ToolbarButton,
      Dashicon = _wp$components.Dashicon,
      SVG = _wp$components.SVG,
      Path = _wp$components.Path,
      PanelBody = _wp$components.PanelBody,
      PanelRow = _wp$components.PanelRow,
      SelectControl = _wp$components.SelectControl,
      ColorIndicator = _wp$components.ColorIndicator,
      RangeControl = _wp$components.RangeControl,
      Flex = _wp$components.Flex,
      FlexItem = _wp$components.FlexItem,
      FlexBlock = _wp$components.FlexBlock,
      Icon = _wp$components.Icon,
      CheckboxControl = _wp$components.CheckboxControl,
      Disabled = _wp$components.Disabled,
      ToggleControl = _wp$components.ToggleControl,
      __experimentalRadioGroup = _wp$components.__experimentalRadioGroup,
      __experimentalRadio = _wp$components.__experimentalRadio;
  var _wp$element = wp.element,
      useState = _wp$element.useState,
      useEffect = _wp$element.useEffect,
      Fragment = _wp$element.Fragment;
  var useSelect = wp.data.useSelect;


  var slickPath = "#hero-gallery-" + att.blockID;
  function stop() {
    jQuery(slickPath + ".slick-initialized").slick('unslick');
  }
  function start() {
    jQuery(slickPath).not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: att.arrows,
      dots: att.dots,
      infinite: att.infinite,
      autoplay: att.autoplay,
      fade: att.fade,
      pauseOnHover: true,
      adaptiveHeight: false,
      pauseOnFocus: true,
      touchMove: false,
      swipeToSlide: false
    });
  }
  function prevSlide() {
    jQuery(slickPath).slick('slickPrev');
  }
  function nextSlide() {
    jQuery(slickPath).slick('slickNext');
  }
  function addEmptySlide() {
    var block = wp.blocks.createBlock('k-blocks-slick-hero-child/k-blocks', { content: 'test' });
    wp.data.dispatch('core/block-editor').insertBlocks(block, 0, props.clientId);
  }
  function safelySetAttribute(attribute, newcontent) {
    props.setAttributes(_defineProperty({}, attribute, newcontent));
  }

  useEffect(function () {
    if (props.editMode) stop();else start();
  });

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
    wp.element.createElement(
      InspectorControls,
      null,
      wp.element.createElement(
        PanelBody,
        { title: __('Slider options') },
        wp.element.createElement(
          Button,
          {
            icon: "edit",
            title: "Edit mode",
            isSecondary: true,
            style: { 'marginTop': '0.5rem', 'marginBottom': '0.5rem' },
            onClick: props.toggleEditMode,
            isActive: props.editMode
          },
          props.editMode && __('Preview mode'),
          " ",
          !props.editMode && __('Edit mode')
        ),
        props.editMode && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(RangeControl, {
            value: att.minHeight,
            onChange: function onChange(newvalue) {
              return safelySetAttribute('minHeight', newvalue);
            },
            min: 0,
            max: 60,
            label: __('Slider height' + ' (Em)'),
            type: "Em"
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Arrows'),
            checked: att.arrows,
            onChange: function onChange() {
              return safelySetAttribute('arrows', !att.arrows);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Dots'),
            checked: att.dots,
            onChange: function onChange() {
              return safelySetAttribute('dots', !att.dots);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Infinite'),
            checked: att.infinite,
            onChange: function onChange() {
              return safelySetAttribute('infinite', !att.infinite);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Autoplay'),
            checked: att.autoplay,
            onChange: function onChange() {
              return safelySetAttribute('autoplay', !att.autoplay);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Fade'),
            checked: att.fade,
            onChange: function onChange() {
              return safelySetAttribute('fade', !att.fade);
            }
          }),
          wp.element.createElement(ToggleControl, {
            label: __('Pause autoplay on hover'),
            checked: att.pauseOnHover,
            onChange: function onChange() {
              return safelySetAttribute('pauseOnHover', !att.pauseOnHover);
            }
          })
        )
      ),
      props.editMode && wp.element.createElement(
        PanelBody,
        { title: __('Control style options') },
        att.arrows && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '1rem', 'marginTop': '0.5rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Arrows Color"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(
                ButtonGroup,
                null,
                wp.element.createElement(
                  Button,
                  { className: att.arrowsColorClass == '' ? 'is-primary' : '', onClick: function onClick() {
                      return props.setAttributes({ arrowsColorClass: "" });
                    } },
                  "Dark"
                ),
                wp.element.createElement(
                  Button,
                  { className: att.arrowsColorClass == 'light-arrows' ? 'is-primary' : '', onClick: function onClick() {
                      return props.setAttributes({ arrowsColorClass: "light-arrows" });
                    } },
                  "Light"
                )
              )
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '0.5rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Arrow Size"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(SelectControl, {
                value: att.arrowsSizeClass,
                options: [{ label: 'Big', value: 'big-arrows' }, { label: 'Medium', value: '' }, { label: 'Small', value: 'small-arrows' }],
                onChange: function onChange(size) {
                  return props.setAttributes({ arrowsSizeClass: size });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '2rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Arrow Position"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(SelectControl, {
                value: att.arrowsPositionClass,
                options: [{ label: 'Outer', value: 'arrows-outer' }, { label: 'Inner', value: 'arrows-inner' }, { label: 'Outer on desktop', value: '' }],
                onChange: function onChange(pos) {
                  return props.setAttributes({ arrowsPositionClass: pos });
                }
              })
            )
          )
        ),
        att.dots && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '1rem', 'marginTop': '0.5rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Dots Color"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(
                ButtonGroup,
                null,
                wp.element.createElement(
                  Button,
                  { className: att.dotsColorClass == '' ? 'is-primary' : '', onClick: function onClick() {
                      return props.setAttributes({ dotsColorClass: "" });
                    } },
                  "Dark"
                ),
                wp.element.createElement(
                  Button,
                  { className: att.dotsColorClass == 'light-dots' ? 'is-primary' : '', onClick: function onClick() {
                      return props.setAttributes({ dotsColorClass: "light-dots" });
                    } },
                  "Light"
                )
              )
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '0.5rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Dots Size"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(SelectControl, {
                value: att.dotsSizeClass,
                options: [{ label: 'Big', value: 'big-dots' }, { label: 'Medium', value: '' }, { label: 'Small', value: 'small-dots' }],
                onChange: function onChange(size) {
                  return props.setAttributes({ dotsSizeClass: size });
                }
              })
            )
          ),
          wp.element.createElement(
            Flex,
            { style: { 'marginBottom': '2rem' } },
            wp.element.createElement(
              FlexItem,
              { className: "css-wdf2ti-Wrapper" },
              wp.element.createElement(
                "label",
                null,
                "Dots Position"
              )
            ),
            wp.element.createElement(
              FlexItem,
              null,
              wp.element.createElement(SelectControl, {
                value: att.dotsPositionClass,
                options: [{ label: 'Outer', value: '' }, { label: 'Inner', value: 'dots-inner' }],
                onChange: function onChange(pos) {
                  return props.setAttributes({ dotsPositionClass: pos });
                }
              })
            )
          )
        )
      )
    )
  );
}