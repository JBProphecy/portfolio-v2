export const SLIDE_SIZE_FACTOR = 64;
export const SLIDE_WIDTH_FACTOR = 16;
export const SLIDE_HEIGHT_FACTOR = 9;
export const SLIDE_WIDTH_VALUE = SLIDE_WIDTH_FACTOR  * SLIDE_SIZE_FACTOR;
export const SLIDE_HEIGHT_VALUE = SLIDE_HEIGHT_FACTOR * SLIDE_SIZE_FACTOR;

// It's interesting how for both the constants below, the numerical value is computed and actually part of the constant, unlike the value used in their creation.
export const SLIDE_WIDTH = `${SLIDE_WIDTH_VALUE}px`;
export const SLIDE_HEIGHT = `${SLIDE_HEIGHT_VALUE}px`;
