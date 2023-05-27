export function mappingObject(object, newObject): any {
  Object.keys(object).map(function (keyDto) {
    Object.keys(newObject).map(function (keyEntity) {
      if (keyDto == keyEntity) {
        newObject[keyEntity] = object[keyDto];
      }
    });
  });
  return newObject;
}
