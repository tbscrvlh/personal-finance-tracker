import * as C from './styles'

interface ResumeItemProps {
    title: string;
    value: number;
    color?: any;
}

export function ResumeItem ({ title, value, color }: ResumeItemProps) {

    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>R$ {value}</C.Info>
        </C.Container>
    )
}