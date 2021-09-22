'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PannelUltimateBgControl = PannelUltimateBgControl;
/** @jsx wp.element.createElement */

/* BG CONTROL PANNEL
-----------------------------------------------------*/

/* USAGE

// attributes fot PannelUltimateBgControl
color: { type: 'string', default: 'inherit', },
bgColor: { type: 'string', default: 'transparent', },
bgGradient: { type: 'string', default: 'none', },
bgImage: { type: 'string', default: 'none', },
bgImageId: { type: 'integer', default: 0 },
bgImageType: { type: 'string', default: 'cover', },

// Link inspectorControls all toolbars are optional remoove values to disable them
<PannelUltimateBgControl
	// first toolbar: color block
	colorValue={ props.attributes.color }
	onColorChange={ ( newVal ) => props.setAttributes({ color: newVal }) }
	bgColorValue={ props.attributes.bgColor }
	onBgColorChange={ ( newVal ) => props.setAttributes({ bgColor: newVal }) }
	// second toolbar: image block
	bgImgUrlValue={ props.attributes.bgImage }
	bgImgIdValue={ props.attributes.bgImageId }
	onBgImgSelect={ ( newVal ) => props.setAttributes({ bgImage: newVal.url, bgImageId: newVal.id }) }
	onSetDefaultClick={ () => props.setAttributes({ bgImage: "none", bgImageId: 0 }) }
	// bg focal for second toolbar: optional
	bgFocalValue={ props.attributes.bgImageFocal }
	onBgImageFocalChange={ ( newVal ) => props.setAttributes({ bgImageFocal: newVal }); }
	// bg style for second toolbar: optional
	bgStyleValue={ props.attributes.bgImageType }
	onBgStyleChange={ ( newVal ) => props.setAttributes({ bgImageType: newVal }) }
	// third toolbar: gradient overlay block
	gradientOvelayValue={ props.attributes.bgGradient }
	onGradientOverlayChange={ ( newVal ) => props.setAttributes({ bgGradient: newVal }) }
/>

*/

function PannelUltimateBgControl(args) {
	var __ = wp.i18n.__;
	var _wp$blockEditor = wp.blockEditor,
	    MediaUpload = _wp$blockEditor.MediaUpload,
	    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
	    MediaPlaceholder = _wp$blockEditor.MediaPlaceholder,
	    __experimentalPanelColorGradientSettings = _wp$blockEditor.__experimentalPanelColorGradientSettings;
	var _wp$components = wp.components,
	    Button = _wp$components.Button,
	    Dashicon = _wp$components.Dashicon,
	    SVG = _wp$components.SVG,
	    Path = _wp$components.Path,
	    PanelBody = _wp$components.PanelBody,
	    PanelRow = _wp$components.PanelRow,
	    SelectControl = _wp$components.SelectControl,
	    FocalPointPicker = _wp$components.FocalPointPicker;
	var Fragment = wp.element.Fragment;

	if (args.colorValue == undefined) {
		args.colorValue = 'inherit';
	}
	if (args.bgColorValue == undefined) {
		args.bgColorValue = 'transparent';
	}
	if (args.bgImgUrlValue == undefined) {
		args.bgImgUrlValue = 'none';
	}
	if (args.bgImgIdValue == undefined) {
		args.bgImgIdValue = 0;
	}
	if (args.bgStyleValue == undefined) {
		args.bgStyleValue = 'cover';
	}
	if (args.gradientOvelayValue == undefined) {
		args.gradientOvelayValue = 'none';
	}
	var colorSettings = [];
	if (args.onColorChange != undefined) colorSettings.push({ label: __('Text Color'), colorValue: args.colorValue, onColorChange: args.onColorChange });
	if (args.onBgColorChange != undefined) colorSettings.push({ label: __('Background Color'), colorValue: args.bgColorValue, onColorChange: args.onBgColorChange });
	return wp.element.createElement(
		Fragment,
		null,
		(args.onColorChange != undefined || args.onBgColorChange != undefined) && wp.element.createElement(__experimentalPanelColorGradientSettings, {
			title: __('Colors'),
			settings: colorSettings
		}),
		args.onBgImgSelect != undefined && args.onSetDefaultClick != undefined && wp.element.createElement(
			PanelBody,
			{ title: __('Select background image') },
			wp.element.createElement(
				'div',
				{ className: 'editor-post-featured-image', style: { marginBottom: "24px" } },
				wp.element.createElement(
					MediaUploadCheck,
					null,
					wp.element.createElement(MediaUpload, {
						onSelect: args.onBgImgSelect,
						value: args.bgImgIdValue,
						allowedTypes: ['image'],
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								Button,
								{
									className: args.bgImgUrlValue == "none" ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
									onClick: open
								},
								args.bgImgUrlValue == "none" && __('Choose an image'),
								(args.bgImgUrlValue != "none" && args.onBgImageFocalChange == undefined || args.bgImgUrlValue != "none" && args.bgStyleValue != 'cover') && wp.element.createElement('div', {
									style: {
										backgroundImage: "url('" + args.bgImgUrlValue + "')",
										backgroundSize: args.bgStyleValue == 'repeat' ? "60%" : args.bgStyleValue == 'contain' ? "contain" : "cover",
										backgroundRepeat: args.bgStyleValue == 'repeat' ? "repeat" : "no-repeat",
										backgroundPosition: args.bgStyleValue == 'repeat' ? "top left" : "center",
										height: "150px", backgroundColor: "#f0f0f0"
									}
								})
							);
						}
					})
				),
				args.onBgImageFocalChange != undefined && args.bgImgUrlValue != "none" && args.bgStyleValue == 'cover' && wp.element.createElement(FocalPointPicker, {
					url: args.bgImgUrlValue
					//dimensions={ dimensions }
					, value: args.bgFocalValue,
					onChange: args.onBgImageFocalChange
				}),
				args.bgImgUrlValue != "none" && wp.element.createElement(
					Fragment,
					null,
					wp.element.createElement(
						MediaUploadCheck,
						null,
						wp.element.createElement(MediaUpload, {
							title: __('Replace image'),
							value: args.bgImgIdValue,
							onSelect: args.onBgImgSelect,
							allowedTypes: ['image'],
							render: function render(_ref2) {
								var open = _ref2.open;
								return wp.element.createElement(
									Button,
									{ onClick: open, isDefault: true, isLarge: true },
									__('Replace image')
								);
							}
						})
					),
					wp.element.createElement(
						MediaUploadCheck,
						null,
						wp.element.createElement(
							Button,
							{ onClick: args.onSetDefaultClick, isLink: true, isDestructive: true },
							__('Remove image')
						)
					)
				)
			),
			args.bgImgUrlValue != "none" && args.onBgStyleChange != undefined && wp.element.createElement(SelectControl, {
				label: __('Background type'),
				value: args.bgStyleValue,
				onChange: args.onBgStyleChange,
				options: [{ value: 'cover', label: __('Cover') }, { value: 'repeat', label: __('Repeat') }, { value: 'contain', label: __('Contain') }]
			})
		),
		args.onGradientOverlayChange != undefined && wp.element.createElement(__experimentalPanelColorGradientSettings, {
			title: __('Overlay'),
			settings: [{
				label: __('Background Overlay'),
				gradientValue: args.gradientOvelayValue,
				onGradientChange: args.onGradientOverlayChange
			}]
		})
	);
}