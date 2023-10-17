export const interpolateRGB = (
  arrayA: [number, number, number],
  arrayB: [number, number, number],
  r: number
): [number, number, number] => {
  return arrayA.map((elementA, idx) => {
    const difference = (arrayB[idx] - elementA) * r;
    return difference + elementA;
  }) as [number, number, number];
};

export const arrayToRGB = (array: [number, number, number]) => {
  return `rgb(${array[0]}, ${array[1]}, ${array[2]})`;
};

export const calculateOpacity = (
  height: number | undefined,
  scrollPos: number,
  navBarHeight: number
) => {
  return height
    ? 1 -
        Math.min(
          Math.max(Math.abs((scrollPos - navBarHeight) / (height / 3)), 0),
          1
        )
    : 0;
};
