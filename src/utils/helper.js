export const formatNumbers = (number) => {
    if (number < 100000) {
        return number.toFixed(2);
    }
    return number.toPrecision(4);
};
