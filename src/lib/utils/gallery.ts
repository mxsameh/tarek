import gsap from 'gsap';

/**
 *  GALLERY
 */
const getColImages = (imgs: NodeListOf<Element>, col: number): Element[] => {
	let colImages: Element[] = [];
	imgs.forEach((img, i) => {
		if (i % colsNumber == col) colImages.push(img);
	});

	return colImages;
};

const getColHeight = (colImages: Element[]): number => {
	let colHeight = 0;

	colImages.forEach((img) => {
		colHeight += img.clientHeight;
	});

	colHeight += rowGap * (colImages.length - 1);

	return colHeight;
};

const calcGalleryHeight = (imgs: NodeListOf<Element>): number => {
	let galleryHeight = 0;

	for (let i = 0; i < 1; i++) {
		let colImages = getColImages(imgs, i);
		let colHeight = getColHeight(colImages);

		if (colHeight > galleryHeight) galleryHeight = colHeight;
	}

	return galleryHeight;
};

/**
 *  COLUMNS
 */
let colsNumber: number;
let colGap = 8;
let rowGap = 16;

const setColsNumber = (galleryWidth: number) => {
	if (galleryWidth > 1240) {
		colsNumber = 4;
	} else if (galleryWidth > 1024) {
		colsNumber = 3;
	} else if (galleryWidth > 768) {
		colsNumber = 2;
	} else {
		colsNumber = 1;
	}

	return colsNumber;
};

const getColsNumber = (gallerWidth: number) => {
	let colsNumber = setColsNumber(gallerWidth);
	return colsNumber;
};

const getColsWidth = (galleryWidth: number, colsNumber: number) => {
	let colsWidth = [];
	galleryWidth = galleryWidth - (colGap * colsNumber - 1);
	let colWidth = Math.floor(galleryWidth / colsNumber);

	if (galleryWidth % colsNumber != 0) {
		for (let i = 1; i < colsNumber; i++) {
			colsWidth.push(colWidth);
		}
		let lastColWidth = galleryWidth - colWidth * (colsNumber - 1);
		colsWidth.push(lastColWidth);
	} else {
		for (let i = 0; i < colsNumber; i++) {
			colsWidth.push(colWidth);
		}
	}

	return colsWidth;
};

/**
 *  IMAGES
 */

const getImageWidth = (i: number, colsWidth: number[], colsNumber: number) => {
	const colIndex = i % colsNumber;
	const width = colsWidth[colIndex];

	return width;
};

const getImageLeft = (i: number, colsWidth: number[], colsNumber: number) => {
	let left = 0;
	let index = i % colsNumber;

	while (index != 0) {
		index--;
		left += colsWidth[index] + colGap;
	}

	return left;
};

const getImageTop = (i: number, imgs: NodeListOf<Element>, colsNumber: number) => {
	let top = 0;
	let n = i;

	while (n - colsNumber >= 0) {
		n -= colsNumber;

		if (imgs[n].clientHeight) {
			top += imgs[n].clientHeight + rowGap;
		}
	}

	return top;
};

const getImageEase = (i: number): number => {
	let col = i % colsNumber;
	let colEase = 0.6 + 0.2 * col;

	return colEase;
};

const scrollImage = (imgs: NodeListOf<Element>) => {
	let y = window.pageYOffset;
	gsap.to(imgs, {
		y: `-${y}`,
		duration: (i) => getImageEase(i),
		ease: 'power.out'
	});
};

const positionImages = (imgs: NodeListOf<Element>, gallery: HTMLDivElement) => {
	let galleryWidth = gallery.clientWidth;
	let colsNumber = setColsNumber(galleryWidth);
	let colsWidth = getColsWidth(galleryWidth, colsNumber);

	imgs.forEach((img, i) => {
		let width = getImageWidth(i, colsWidth, colsNumber);
		let left = getImageLeft(i, colsWidth, colsNumber);
		let top = getImageTop(i, imgs, colsNumber);

		gsap.set(img, { width, left, top });
	});

	let galleryHeight = calcGalleryHeight(imgs);
	gallery.style.height = `${galleryHeight}px`;
};

export { positionImages as default, getColsNumber, getImageEase, scrollImage };
