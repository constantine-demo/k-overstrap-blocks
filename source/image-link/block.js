'use strict';

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
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Popover = _wp$components.Popover;
var useState = wp.element.useState;


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

registerBlockType('k-blocks-img-link/k-blocks', {
	title: __('Fluid image Link'),
	icon: BlockIcon,
	category: 'k-common-blocks',
	supports: {
		color: { // This also enables text and background UI controls.
			gradient: true // Enable gradients UI control.
		}
	},
	attributes: {
		supports: {
			color: { // This also enables text and background UI controls.
				gradient: true // Enable gradients UI control.
			}
		},
		image: {
			type: 'string',
			default: ''
		},
		valign: {
			type: 'string',
			default: 'center'
		},
		className: {
			type: 'string'
		},
		url: {
			type: 'string',
			default: '#'
		},
		opensInNewTab: {
			type: 'boolean',
			default: false
		}
	},

	edit: function edit(props) {

		return wp.element.createElement(
			'div',
			{
				className: "k-blocks-img-link position-relative " + props.attributes.className,
				style: {
					minHeight: props.attributes.image == "" ? '15rem' : 'unset',
					backgroundColor: props.attributes.image == "" ? '#f0f0f0' : 'transparent'
				}
			},
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(_LinkToolbar.LinkToolbar, {
					value: { url: props.attributes.url, opensInNewTab: props.attributes.opensInNewTab },
					onChange: function onChange(nextValue) {
						if (nextValue.url != undefined) props.setAttributes({ url: nextValue.url });
						if (nextValue.opensInNewTab != undefined) props.setAttributes({ opensInNewTab: nextValue.opensInNewTab });
					}
				}),
				wp.element.createElement(BlockVerticalAlignmentToolbar, {
					onChange: function onChange(newcontent) {
						props.setAttributes({ valign: newcontent });
					},
					value: props.attributes.valign
				}),
				wp.element.createElement(MediaReplaceFlow, {
					mediaURL: props.attributes.image,
					allowedTypes: ['image'],
					accept: 'image/*',
					name: __("Background"),
					onSelect: function onSelect(newcontent) {
						props.setAttributes({ image: newcontent.url });
					}
				})
			),
			wp.element.createElement('img', { 'class': 'k-blocks-img-link-img w-100', src: props.attributes.image }),
			wp.element.createElement(
				'div',
				{
					className: 'k-blocks-img-link-text-wrapper position-absolute d-flex ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign),
					style: { top: '0', left: '0', right: '0', bottom: '0' }
				},
				wp.element.createElement(
					'div',
					{ className: 'k-blocks-img-link-inner-content px-lg-3 py-4 has-text-align-center' },
					wp.element.createElement(InnerBlocks, { allowedBlocks: ['core/paragraph', 'core/heading'] })
				)
			)
		);
	},
	save: function save(props) {

		return wp.element.createElement(
			'div',
			{ className: "k-big-hero-block position-relative " + props.attributes.className },
			wp.element.createElement(
				'a',
				{ href: props.attributes.url, target: props.attributes.opensInNewTab ? "_blank" : false, rel: 'noopener noreferrer' },
				wp.element.createElement('img', { 'class': 'k-blocks-img-link-img w-100', src: props.attributes.image }),
				wp.element.createElement(
					'div',
					{
						className: 'k-blocks-img-link-text-wrapper position-absolute d-flex ' + (0, _commonFunctions.bootstrapValignClasses)(props.attributes.valign),
						style: { top: '0', left: '0', right: '0', bottom: '0' }
					},
					wp.element.createElement(
						'div',
						{ className: 'k-blocks-img-link-inner-content px-lg-3 py-4 has-text-align-center' },
						wp.element.createElement(InnerBlocks.Content, null)
					)
				)
			)
		);
	}
});