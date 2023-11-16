import { useState } from 'react';
import { Container, ContainerInput, Label, Input, Selected, Option, AddBtn } from './styled';
import { categoryList } from '../../data/categories';
import { Item } from '../../types/Item';

type Props = {
    onAdd: (item: Item) => void;
    setMessage: (message: string[]) => void;
}
export const InputArea = ({ onAdd, setMessage }: Props) => {
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        let errorMessage = '';
        let errorList: string[] = [];
        if (date == '') {
            errorMessage += 'Campo Data está inválida\n'
            errorList.push('- Campo Data está inválido');
        }
        if (category == '' || category == 'Selecione uma opção') {
            errorMessage += 'Escolha uma Categoria\n'
            errorList.push('- Escolha uma Categoria');
        }
        if (title == '') {
            errorMessage += 'Campo Título não está preenchido\n';
            errorList.push('- Campo Título não está preenchido');
        }
        if (isNaN(value) || value <= 0) {
            errorMessage += 'Campo Valor não está preenchido ou está inválido\n';
            errorList.push('- Campo Valor não está preenchido ou está inválido');
        }

        if (errorMessage != '') {
            //alert(errorMessage);
            setMessage(errorList);
        } else {
            let [year, month, day] = date.split('-');
            console.log(year, month, day);

            let newItem: Item = {
                date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
                category: category,
                title: title,
                value: value
            }
            onAdd(newItem);
        }
    }

    return (
        <Container onSubmit={handleSubmit}>
            <ContainerInput>
                <Label>Data</Label>
                <Input
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <Label>Categoria</Label>
                <Selected
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <Option value={''}>Selecione uma opção</Option>
                    {categoryList.map((item, index) => (
                        <Option key={index} value={item.category}>{item.PTcategory}</Option>
                    ))}
                </Selected>
            </ContainerInput>
            <ContainerInput>
                <Label>Título</Label>
                <Input
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </ContainerInput>
            <ContainerInput>
                <Label>Valor</Label>
                <Input
                    type='number'
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const numericValue = parseInt(e.target.value, 10); // Converta para número inteiro
                        setValue(isNaN(numericValue) ? 0 : numericValue); // Defina como 0 se não for um número válido
                    }}
                />
            </ContainerInput>
            <ContainerInput>
                <Label></Label>
                <AddBtn>Adicionar</AddBtn>
            </ContainerInput>
        </Container>
    );
}