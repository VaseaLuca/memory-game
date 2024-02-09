export const shuffle = <T>(array: T[]): T[] => {
  let oldElement: T;

  for (let i = array.length - 1; i > 0; i--) {
    const randomIdx = Math.floor(Math.random() * (i + 1));

    oldElement = array[i];
    array[i] = array[randomIdx];
    array[randomIdx] = oldElement;
  }

  return array;
};
