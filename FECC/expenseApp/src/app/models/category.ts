import { Expense } from './expense';

export interface Category {
    id: number;
    name: string;
    description: string;
    expenses: Expense[];
}