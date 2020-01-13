import { Category } from './category';

export interface Expense {
    id: number;
    name: string;
    value: number;
    description: string;
    categoryId: number;
    category: Category;
}