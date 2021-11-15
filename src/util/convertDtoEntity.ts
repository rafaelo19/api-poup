export function convertDtoInEntity(dto, entity): any {
     Object.keys(dto).map(function(keyDto) {
         Object.keys(entity).map(function(keyEntity) {
             if (keyDto == keyEntity) {
                 entity[keyEntity] = dto[keyDto]
             }
         })
     })
     return entity;
}