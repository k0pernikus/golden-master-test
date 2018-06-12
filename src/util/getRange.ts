export const getRange = (start: number, end: number, inclusiveRange: boolean): number[] => {
    const offset = inclusiveRange ? end : end - 1;

    return Array.from(Array(offset).keys()).map(c => {
        return c + start;
    });
};
