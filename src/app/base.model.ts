export interface BaseModel {
  // la propiedad readonly permite solo lectura
  // es normal que el id y createdat venga desde la base de datos
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
