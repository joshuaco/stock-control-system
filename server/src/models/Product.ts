import { DataType, Model, Table, Column, Default } from 'sequelize-typescript';

@Table
class Product extends Model {
  @Column({ type: DataType.STRING(100) })
  declare name: string;

  @Column({ type: DataType.FLOAT })
  declare price: number;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  declare inStock: boolean;
}

export default Product;
