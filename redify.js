/*
 * This program should iterate through every element and apply some configured set of rules
 *
 * TODO: Have defined rules be a parsed JSON?
 */

// An array with color-related styles
const colorStyles = [
	"background-color",
	"border-color",
	"border-top-color",
	"border-right-color",
	"border-bottom-color",
	"border-left-color",
	"color",
	"layer-background-color",
	"outline-color",
	"scrollbar-arrow-color",
	"scrollbar-base-color",
	"scrollbar-dark-shadow-color",
	"scrollbar-face-color",
	"scrollbar-highlight-color",
	"scrollbar-shadow-color",
	"scrollbar-3d-light-color",
	"scrollbar-track-color"
];

// Returns whether a element is visible
const isHidden = (element) => {
	return element.offsetParent === null;
};

// Returns whether a color is cool
const isCool = (color) => {
	// The format should be something like "rgb(X, Y, Z)"
	// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
	
	// Perhaps `return Blue > Red`
	return true;
}

const getWarm = (color) => {
	// Precondition: Provided color is *not* a warm color
	// Returns warm version of color
	
	// Perhaps swap Red and Blue values?
	return "#000000"
}

const redify = () => {
	document.querySelectorAll("*").forEach((element) => {
		if (!isHidden(element)) {
			// Some browsers require the "pseudo-element" parameter hence the `null`
			let computedStyle = window.getComputedStyle(element, null);
			
			colorStyles.forEach((colorStyle) => {
				let color = computedStyle[colorStyle];
				if (color && isCool(color)) {
					element.style[colorStyle] = getWarm(color);
				}
			}
		}

	}
}
