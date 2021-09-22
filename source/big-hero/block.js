"use strict";

/** @jsx wp.element.createElement */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
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
    RichText = _wp$components.RichText,
    Button = _wp$components.Button,
    ToolbarGroup = _wp$components.ToolbarGroup,
    ExternalLink = _wp$components.ExternalLink,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect,
    Fragment = _wp$element.Fragment;

var HeroBlockIcon = function HeroBlockIcon() {
	return wp.element.createElement(
		"svg",
		{ width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
		wp.element.createElement("rect", { x: "0.5", y: "4.5", width: "19", height: "11", fill: "#C4C4C4", stroke: "#6000FF" }),
		wp.element.createElement("rect", { x: "10", y: "2", width: "8", height: "16", fill: "#6000FF" })
	);
};

/*===================================================*/
/*              Wide Image Text Block                */
/*===================================================*/

registerBlockType('k-blocks-big-hero/k-blocks', {
	title: __('Big hero block'),
	icon: HeroBlockIcon,
	category: 'k-common-blocks',
	parent: ['core/post-content'], // only root block
	supports: {
		align: ['full']
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		reverse: {
			type: 'boolean',
			default: false
		},
		image: {
			type: 'string',
			default: ''
		},
		valign: {
			type: 'string',
			default: 'top'
		},
		height: {
			type: 'integer',
			default: 25
		},
		className: {
			type: 'string'
		}
	},

	edit: function edit(props) {

		/* valign classes change */
		function bootstrapValignClasses(valign) {
			switch (valign) {
				case 'top':
					return 'd-flex flex-column justify-content-start';
				case 'center':
					return 'd-flex flex-column justify-content-center';
				case 'bottom':
					return 'd-flex flex-column justify-content-end';
			}
			return '';
		}

		return wp.element.createElement(
			"div",
			{
				className: "k-big-hero-block" + " " + props.attributes.className,
				style: {
					backgroundImage: "url('" + props.attributes.image + "')",
					backgroundposition: "center",
					backgroundSize: "cover"
				}
			},
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(ToolbarButton, {
					icon: "align-pull-left",
					label: __("Show media on right"),
					onClick: function onClick() {
						props.setAttributes({ reverse: false });
					},
					isActive: !props.attributes.reverse
				}),
				wp.element.createElement(ToolbarButton, {
					icon: "align-pull-right",
					label: __("Show media on left"),
					onClick: function onClick() {
						props.setAttributes({ reverse: true });
					},
					isActive: props.attributes.reverse
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
					accept: "image/*",
					name: __("Background"),
					onSelect: function onSelect(newcontent) {
						props.setAttributes({ image: newcontent.url });
					}
				})
			),
			wp.element.createElement(
				Fragment,
				null,
				wp.element.createElement(
					InspectorControls,
					null,
					wp.element.createElement(
						PanelBody,
						null,
						wp.element.createElement(RangeControl, {
							label: __("Height of the hero block (rem)"),
							onChange: function onChange(newvalue) {
								props.setAttributes({ height: newvalue });
							},
							value: props.attributes.height,
							renderTooltipContent: function renderTooltipContent(value) {
								return value + "%";
							},
							min: 30,
							max: 60,
							step: 1
						})
					)
				)
			),
			wp.element.createElement(
				"div",
				{ "class": "k-big-hero-block-container k-editor-container m-auto" },
				wp.element.createElement(
					"div",
					{
						className: 'k-big-hero-block-row row px-lg-0' + (props.attributes.reverse ? ' flex-row-reverse' : ''),
						style: { minHeight: props.attributes.height + "rem" }
					},
					wp.element.createElement("div", { className: 'k-big-hero-block-col-empty d-none d-lg-block col-lg-6 px-lg-0' }),
					wp.element.createElement(
						"div",
						{ className: 'k-big-hero-block-col-content col-lg-6 px-lg-0 ' + bootstrapValignClasses(props.attributes.valign) },
						wp.element.createElement(
							"div",
							{ className: "k-big-hero-block-inner-content px-lg-3 py-4" },
							wp.element.createElement(InnerBlocks, null)
						)
					)
				)
			)
		);
	},
	save: function save(props) {

		/* valign classes change */
		function bootstrapValignClasses(valign) {
			switch (valign) {
				case 'top':
					return 'd-flex flex-column justify-content-start';
				case 'center':
					return 'd-flex flex-column justify-content-center';
				case 'bottom':
					return 'd-flex flex-column justify-content-end';
			}
			return '';
		}

		return wp.element.createElement(
			"div",
			{
				className: "k-big-hero-block",
				style: {
					backgroundImage: "url('" + props.attributes.image + "')",
					backgroundposition: "center",
					backgroundSize: "cover"
				}
			},
			wp.element.createElement(
				"div",
				{ "class": "k-big-hero-block-container container" },
				wp.element.createElement(
					"div",
					{
						className: 'k-big-hero-block-row row px-lg-0' + (props.attributes.reverse ? ' flex-row-reverse' : ''),
						style: { minHeight: props.attributes.height + "rem" }
					},
					wp.element.createElement("div", { className: 'k-big-hero-block-col-empty d-none d-lg-block col-lg-6 px-lg-0' }),
					wp.element.createElement(
						"div",
						{ className: 'k-big-hero-block-col-content col-lg-6 px-lg-0 ' + bootstrapValignClasses(props.attributes.valign) },
						wp.element.createElement(
							"div",
							{ className: "k-big-hero-block-inner-content px-lg-3 py-4" },
							wp.element.createElement(InnerBlocks.Content, null)
						)
					)
				)
			)
		);
	}
});