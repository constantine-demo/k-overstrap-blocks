'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _LinkToolbar = require('../common/LinkToolbar.js');

var _commonFunctions = require('../common/common-functions.js');

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaReplaceFlow = _wp$blockEditor.MediaReplaceFlow,
    BlockVerticalAlignmentToolbar = _wp$blockEditor.BlockVerticalAlignmentToolbar,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    URLPopover = _wp$blockEditor.URLPopover,
    URLInput = _wp$blockEditor.URLInput;
var _wp$components = wp.components,
    RichText = _wp$components.RichText,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton,
    ToggleControl = _wp$components.ToggleControl,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Popover = _wp$components.Popover;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    Fragment = _wp$element.Fragment;


var BlockIcon = function BlockIcon() {
	return wp.element.createElement(
		'svg',
		{ width: '20', height: '20', viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
		wp.element.createElement('path', { d: 'M19 4H1V16H19V4Z', fill: '#6000FF' }),
		wp.element.createElement('rect', { x: '4', y: '8', width: '6', height: '4', fill: '#C4C4C4' }),
		wp.element.createElement('rect', { x: '10', y: '9', width: '6', height: '2', fill: '#C4C4C4' })
	);
};

/*===================================================*/
/*              Fluid image Link Block               */
/*===================================================*/

var ConditionalWrapper = function ConditionalWrapper(_ref) {
	var condition = _ref.condition,
	    wrapper = _ref.wrapper,
	    children = _ref.children;
	return condition ? wrapper(children) : children;
};

registerBlockType('k-blocks-img-link/k-blocks', {
	title: __('Image Fluid'),
	icon: BlockIcon,
	category: 'k-common-blocks',
	supports: {
		color: { // This also enables text and background UI controls.
			gradient: true // Enable gradients UI control.
		}
	},
	attributes: {
		image: { type: 'string', default: '' },
		valign: { type: 'string', default: 'bottom' },
		className: { type: 'string', default: '' },
		url: { type: 'string', default: '#' },
		opensInNewTab: { type: 'boolean', default: false },
		hasLink: { type: 'boolean', default: false },
		hasOverlay: { type: 'boolean', default: false },
		isW100: { type: 'boolean', default: false }
	},

	edit: function edit(props) {

		var pr = props.attributes;

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				BlockControls,
				null,
				pr.hasLink && wp.element.createElement(_LinkToolbar.LinkToolbar, {
					value: { url: pr.url, opensInNewTab: pr.opensInNewTab },
					onChange: function onChange(nextValue) {
						if (nextValue.url != undefined) props.setAttributes({ url: nextValue.url });
						if (nextValue.opensInNewTab != undefined) props.setAttributes({ opensInNewTab: nextValue.opensInNewTab });
					}
				}),
				pr.hasOverlay && wp.element.createElement(BlockVerticalAlignmentToolbar, {
					onChange: function onChange(newcontent) {
						props.setAttributes({ valign: newcontent });
					},
					value: pr.valign
				}),
				wp.element.createElement(MediaReplaceFlow, {
					mediaURL: pr.image,
					allowedTypes: ['image'],
					accept: 'image/*',
					name: __("Image"),
					onSelect: function onSelect(newcontent) {
						props.setAttributes({ image: newcontent.url });
					}
				})
			),
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('General') },
					wp.element.createElement(ToggleControl, {
						label: 'Image Link',
						checked: pr.hasLink,
						onChange: function onChange() {
							return props.setAttributes({ hasLink: !pr.hasLink });
						}
					}),
					wp.element.createElement(ToggleControl, {
						label: 'Has Caption Overlay',
						checked: pr.hasOverlay,
						onChange: function onChange() {
							return props.setAttributes({ hasOverlay: !pr.hasOverlay });
						}
					}),
					!pr.hasOverlay && wp.element.createElement(ToggleControl, {
						label: 'Width 100%',
						checked: pr.isW100,
						onChange: function onChange() {
							return props.setAttributes({ isW100: !pr.isW100 });
						}
					})
				)
			),
			wp.element.createElement(
				ConditionalWrapper,
				{
					condition: pr.hasOverlay || pr.image == "",
					wrapper: function wrapper(children) {
						return wp.element.createElement(
							'figure',
							{
								className: "k-blocks-img-link position-relative d-inline-block" + pr.className,
								style: {
									minHeight: pr.image == "" ? '10rem' : 'unset',
									minWidth: pr.image == "" ? '10rem' : 'unset',
									backgroundColor: pr.image == "" ? '#f0f0f0' : 'transparent',
									marginBottom: '0'
								}
							},
							children
						);
					}
				},
				wp.element.createElement('img', { 'class': "k-blocks-img" + (pr.isW100 || pr.hasOverlay ? " w-100" : " img-fluid") + (pr.hasOverlay ? "" : " " + (pr.className ? pr.className : '')), src: pr.image }),
				pr.hasOverlay && wp.element.createElement(
					'figcaption',
					{
						className: 'k-blocks-img-link-text-wrapper position-absolute ' + (0, _commonFunctions.bootstrapValignClasses)(pr.valign),
						style: { top: '0', left: '0', right: '0', bottom: '0' }
					},
					wp.element.createElement(
						'div',
						{ className: 'k-blocks-img-caption-inner-content has-text-align-center' },
						wp.element.createElement(InnerBlocks
						//allowedBlocks={ [ 'core/paragraph', 'core/heading' ] }
						, null)
					)
				)
			)
		);
	},
	save: function save(props) {

		var pr = props.attributes;

		return wp.element.createElement(
			ConditionalWrapper,
			{
				condition: pr.hasOverlay,
				wrapper: function wrapper(children) {
					return wp.element.createElement(
						'figure',
						{ className: "k-big-hero-block position-relative d-inline-block " + pr.className },
						children
					);
				}
			},
			wp.element.createElement(
				ConditionalWrapper,
				{
					condition: pr.hasLink,
					wrapper: function wrapper(children) {
						return wp.element.createElement(
							'a',
							{ href: pr.url, target: pr.opensInNewTab ? "_blank" : false, rel: 'noopener noreferrer' },
							children
						);
					}
				},
				wp.element.createElement('img', { 'class': "k-blocks-img" + (pr.isW100 || pr.hasOverlay ? " w-100" : " img-fluid") + (pr.hasOverlay ? "" : " " + pr.className), src: pr.image }),
				pr.hasOverlay && wp.element.createElement(
					'figcaption',
					{
						className: 'k-blocks-img-link-text-wrapper position-absolute ' + (0, _commonFunctions.bootstrapValignClasses)(pr.valign),
						style: { top: '0', left: '0', right: '0', bottom: '0' }
					},
					wp.element.createElement(
						'div',
						{ className: 'k-blocks-img-caption-inner-content has-text-align-center' },
						wp.element.createElement(InnerBlocks.Content, null)
					)
				)
			)
		);
	}
});

/*=============================================================================*/
/*                ADD CLASS TO NESTED BLOCK WRAPPER WITH FILTER                */
/*=============================================================================*/

var withCustomClassName = wp.compose.createHigherOrderComponent(function (BlockListBlock) {
	return function (props) {
		if (props.name !== 'k-blocks-img-link/k-blocks') return wp.element.createElement(BlockListBlock, props);
		if (!props.attributes.isW100) return wp.element.createElement(BlockListBlock, _extends({}, props, { className: "d-inline-block" }));else return wp.element.createElement(BlockListBlock, props);
	};
}, 'withClientIdClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'image-block/filter-blocks', withCustomClassName);
//# sourceMappingURL=block.js.map