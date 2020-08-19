export const backgroundCssBindOdd = (getIsLightMode) => {
	return {
		'light-background': getIsLightMode,
		'dark-background': !getIsLightMode,
	};
};

export const backgroundCssBindEven = (getIsLightMode) => {
	return {
		'blue-background': getIsLightMode,
		'grey-background': !getIsLightMode,
	};
};

export const textCssBind = (getIsLightMode) => {
	return {
		'dark-text': getIsLightMode,
		'light-text': !getIsLightMode,
	};
};

export const invertImageBind = (isLightMode) => {
	return {
		'invert-image': !isLightMode,
	};
};

export const rightToLeftBind = (isRightToLeft) => {
	return {
		'right-to-left': isRightToLeft,
	};
};
