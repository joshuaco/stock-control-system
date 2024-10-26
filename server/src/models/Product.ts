import { DataType, Model, Table, Column, Default } from 'sequelize-typescript';

@Table
class Product extends Model {
  @Column({ type: DataType.STRING(100) })
  name: string;

  @Column({ type: DataType.FLOAT })
  price: number;

  @Default(true)
  @Column({ type: DataType.BOOLEAN })
  inStock: boolean;
}

export default Product;
