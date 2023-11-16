import { TableRow, TableColumn, Category, Value, Delete } from './styled';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { removeItem } from '../../helpers/crud';

type Props = {
    item: Item;
    list: Item[];
    setList: (list: Item[]) => void;
}
export const TableItem = ({ item, list, setList }: Props) => {

    const handleDeleteItem = () => {
        let newlist = removeItem(list, item);
        setList(newlist);
    }

    const formattedValue = item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <TableRow>
            <TableColumn>{formatDate(item.date)}</TableColumn>
            <TableColumn>
                <Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </Category>
            </TableColumn>
            <TableColumn>{item.title}</TableColumn>
            <TableColumn>
                <Value color={categories[item.category].expense ? 'red' : 'green'}>
                    {formattedValue}
                </Value>
            </TableColumn>
            <TableColumn>
                <Delete onClick={handleDeleteItem}>Remover</Delete>
            </TableColumn>
        </TableRow>
    );
}