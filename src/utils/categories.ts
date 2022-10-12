import { Category } from "./types";

export const categories: Category = {
    'salary':{ expense: false, color: 'var(--clr-green)', title: 'monthly income' },
    'rent':{ expense: true, color: 'var(--clr-red)', title: 'house rent' },
    'market':{ expense: true, color: 'var(--clr-red)', title: 'market' },
}