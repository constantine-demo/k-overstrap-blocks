'use strict';

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
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
    ExternalLink = _wp$components.ExternalLink,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;

/*===================================================*/
/*               Section Header Block                */
/*===================================================*/

registerBlockType('k-blocks-header-custom/k-blocks', {
	title: __('Section Custom Header'),
	icon: IconHeaderSimple(),
	category: 'k-common-blocks',
	attributes: {
		header: {
			type: 'string',
			source: 'html',
			selector: '.k-SectionHeader-inner',
			default: 'header'
		},
		reverse: {
			type: 'boolean',
			default: false
		}
	},
	edit: function edit(props) {

		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(
					Toolbar,
					{ label: 'Options' },
					wp.element.createElement(ToolbarButton, {
						icon: SwapRight(),
						label: __("Show media on right"),
						onClick: function onClick() {
							props.setAttributes({ reverse: false });
						},
						isActive: !props.attributes.reverse
					}),
					wp.element.createElement(ToolbarButton, {
						icon: SwapLeft(),
						label: __("Show media on left"),
						onClick: function onClick() {
							props.setAttributes({ reverse: true });
						},
						isActive: props.attributes.reverse
					})
				)
			),
			wp.element.createElement(
				'div',
				{ className: 'k-block k-SectionHeader-header-wrapper mt-5 mb-4' },
				wp.element.createElement(
					'div',
					{ className: "d-flex " + (props.attributes.reverse ? ' flex-row-reverse' : '') },
					wp.element.createElement(
						'h2',
						{
							style: { minWidth: '5rem', borderWidth: '3px' + '!important' },
							ref: function ref(el) {
								if (el) {
									el.style.setProperty('border-width', '3px', 'important');
								}
							},
							className: 'm-0 px-3 py-2 k-section-header k-SectionHeader-header border border-primary text-primary'
						},
						wp.element.createElement(RichText, {
							tagName: 'div',
							className: 'k-SectionHeader-inner',
							multiline: false,
							placeholder: __('Enter header here'),
							value: props.attributes.header,
							onChange: function onChange(newcontent) {
								return props.setAttributes({ header: newcontent });
							}
						})
					),
					wp.element.createElement('div', {
						className: 'bg-primary flex-grow-1 m-1',
						style: { background: 'linear-gradient(' + (props.attributes.reverse ? '240deg' : '90deg') + ', rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)' }
					})
				)
			)
		);
	},
	save: function save(props) {
		return wp.element.createElement(
			'div',
			{ className: 'k-block k-SectionHeader-header-wrapper mt-5 mb-4' },
			wp.element.createElement(
				'div',
				{ className: "d-flex " + (props.attributes.reverse ? ' flex-row-reverse' : '') },
				wp.element.createElement(
					'h2',
					{
						style: { minWidth: '5rem', borderWidth: '3px' + '!important' },
						ref: function ref(el) {
							if (el) {
								el.style.setProperty('border-width', '3px', 'important');
							}
						},
						className: 'm-0 px-3 py-2 k-section-header k-SectionHeader-header border border-primary text-primary'
					},
					wp.element.createElement(RichText.Content, { tagName: 'div', className: 'k-SectionHeader-inner', value: props.attributes.header })
				),
				wp.element.createElement('div', {
					className: 'bg-primary flex-grow-1 m-1',
					style: { background: 'linear-gradient(' + (props.attributes.reverse ? '240deg' : '90deg') + ', rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)' }
				})
			)
		);
	}
});

function IconHeaderSimple() {
	return React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, React.createElement("path", { d: "M16.9028 18H12.9834V11.1719H7.17725V18H3.23535V1.64844H7.17725V8.13965H12.9834V1.64844H16.9028V18Z", fill: "#6000FF" }));
};
function PictoImage() {
	return wp.element.createElement(
		'svg',
		{ width: '24', height: '24', viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg', role: 'img', 'aria-hidden': 'true', focusable: 'false' },
		wp.element.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z' })
	);
};
function SwapLeft() {
	return wp.element.createElement(
		'svg',
		{ width: '24', height: '24', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', role: 'img', 'aria-hidden': 'true', focusable: 'false' },
		wp.element.createElement('path', { d: 'M14 6v12h6V6h-6zM4 9.5h7V8H4v1.5zm0 6h7V14H4v1.5z' })
	);
};
function SwapRight() {
	return wp.element.createElement(
		'svg',
		{ width: '24', height: '24', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', role: 'img', 'aria-hidden': 'true', focusable: 'false' },
		wp.element.createElement('path', { d: 'M4 18h6V6H4v12zm9-10v1.5h7V8h-7zm0 7.5h7V14h-7v1.5z' })
	);
};