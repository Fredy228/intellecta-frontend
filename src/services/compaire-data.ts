interface AnyObject {
  [key: string]: any;
}

export function compareObjects(
  obj1: AnyObject | null,
  obj2: AnyObject | null,
): AnyObject | undefined | null {
  if (obj1 === obj2) return undefined;
  if (!obj1 && obj2) return obj2;
  if (!obj2 && obj1) return null;
  if (!obj1 || !obj2) return undefined;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Проверяем, что ключи объектов совпадают
  if (
    keys1.length !== keys2.length ||
    !keys1.every((key) => keys2.includes(key))
  ) {
    return undefined;
  }

  const differences: AnyObject = {};

  // Проверяем каждое поле объектов
  keys1.forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      differences[key] = obj2[key];
    }
  });

  return Object.keys(differences).length ? differences : undefined;
}

export function compareStringAndNumber<T>(
  value1: T,
  value2: T,
): undefined | T | null {
  let currState1: T | undefined | null;
  let currState2: T | undefined | null;

  if (!value1 && value1 !== false && value1 !== 0) {
    if (value1 === null || value1 === "") {
      currState1 = null;
    } else {
      currState1 = undefined;
    }
  } else {
    currState1 = value1;
  }
  if (!value2 && value2 !== false && value2 !== 0) {
    if (value2 === null || value2 === "") {
      currState2 = null;
    } else {
      currState2 = undefined;
    }
  } else {
    currState2 = value2;
  }

  if (currState1 === currState2) {
    return undefined;
  } else {
    return currState2;
  }
}
