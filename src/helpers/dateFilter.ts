import { Item } from '../types/Item'

export function getCurrentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export function filterListByMonth(list: Item[], date: string): Item[] {
    const newList: Item[] = [];
    const [year, month] = date.split('-');
    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
    }

    return newList
}