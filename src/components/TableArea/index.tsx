import { Table, TableHeadColumn, EmptyTable } from './styled';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
    filteredList: Item[];
    setList: (list: Item[]) => void;
}
export const TableArea = ({ list, filteredList, setList }: Props) => {
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <TableHeadColumn width={115}>Data</TableHeadColumn>
                        <TableHeadColumn width={150}>Categoria</TableHeadColumn>
                        <TableHeadColumn>Título</TableHeadColumn>
                        <TableHeadColumn width={150}>Valor</TableHeadColumn>
                        <TableHeadColumn width={100}>Ação</TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((item, index) => (
                        <TableItem key={index} item={item} list={list} setList={setList} />
                    ))}
                </tbody>
            </Table>

            {filteredList.length <= 0 &&
                <EmptyTable>Sem registro no mês selecionado</EmptyTable>
            }
        </>
    );
}