import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

interface CurrentMonthProps {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export function InfoArea ({ currentMonth, onMonthChange, income, expense }: CurrentMonthProps) {
    const handlePreviousMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        const [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }

    

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePreviousMonth}>←</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>→</C.MonthArrow>

            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem
                    title="Balanço"
                    value={income - expense}
                    color={() => {
                        if ((income - expense) === 0) {
                            return '#000'
                        } else if ((income - expense) > 0) {
                            return '#6BCB77'
                        } else {
                            return '#FF6B6B'}
                    }}
                />
            </C.ResumeArea>
        </C.Container>
    );
}