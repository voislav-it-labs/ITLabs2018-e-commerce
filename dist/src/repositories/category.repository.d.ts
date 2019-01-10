import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { Category } from '../models';
import { Getter } from '@loopback/core';
import { Product } from '../models/product.model';
import { ProductRepository } from './product.repository';
import { PostgresqlDataSource } from '../datasources/postgresql.datasource';
export declare class CategoryRepository extends DefaultCrudRepository<Category, typeof Category.prototype.id> {
    readonly products: HasManyRepositoryFactory<Product, typeof Category.prototype.id>;
    constructor(dataSource: PostgresqlDataSource, getProductRepository: Getter<ProductRepository>);
}
