export const maskDate = (value: string): string => {
	const cleanValue = value.replace(/\D+/g, '');
	const day = cleanValue.slice(0, 2);
	const month = cleanValue.slice(2, 4);
	const year = cleanValue.slice(4, 8);

	return `${day}${month.length ? '/' : ''}${month}${year.length ? '/' : ''}${year}`.trim();
};

export const maskTime = (value: string): string => {
	const cleanValue = value.replace(/\D+/g, '');
	const hours = cleanValue.slice(0, 2);
	const minutes = cleanValue.slice(2, 4);

	return `${hours}${minutes.length ? ':' : ''}${minutes}`.trim();
};