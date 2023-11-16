import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import { Container, MonthArea, MonthArrow, MonthTitle, ResumeArea } from './styled';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const formattedIncome = income.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    const formattedExpense = `R$ -${expense.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
    const balance = income - expense;
    const formattedBalance = balance < 0
        ? `R$ -${Math.abs(balance).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
        : `R$ ${balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;

    {/*para saber se o mes selecionado é o mes atual*/}
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthNumber = currentDate.getMonth() + 1;
    const isCurrentMonth = currentMonth === `${currentYear} - ${currentMonthNumber}`;

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getUTCFullYear()} - ${currentDate.getMonth() + 1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
    
        // Verifica se o próximo mês é maior que o mês atual
        const isNextMonthValid = currentDate <= new Date();
    
        if (!isCurrentMonth && isNextMonthValid) {
            onMonthChange(`${currentDate.getUTCFullYear()} - ${currentDate.getMonth() + 1}`);
        }
    };

    return (
        <Container>
            <MonthArea>
                <MonthArrow onClick={handlePrevMonth}>⬅️</MonthArrow>
                <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
                {!isCurrentMonth && <MonthArrow onClick={handleNextMonth}>➡️</MonthArrow>}
            </MonthArea>
            <ResumeArea>
                <ResumeItem title="Receita" value={formattedIncome} />
                <ResumeItem title="Despesas" value={formattedExpense} />
                <ResumeItem
                    title="Balanço"
                    value={formattedBalance}
                    color={balance < 0 ? 'red' : 'green'}
                />
            </ResumeArea>
        </Container>
    );
}