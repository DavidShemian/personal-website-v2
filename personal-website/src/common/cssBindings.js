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
