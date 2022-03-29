import { formatDate } from '../../helpers/dateFilter';
import { Item } from '../../types/Item'
import * as C from './styles'
import { categories } from '../../data/categories'

interface TableItemProps {
    item: Item;
}

export function TableItem ({ item }: TableItemProps) {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? '#FF6B6B' : '#6BCB77'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}