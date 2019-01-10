import { DefaultCrudRepository } from '@loopback/repository';
import { Product } from '../models';
import { PostgresqlDataSource } from '../datasources/postgresql.datasource';
export declare class ProductRepository extends DefaultCrudRepository<Product, typeof Product.prototype.id> {
    constructor(dataSource: PostgresqlDataSource);
}
