import { Container, Title, Info } from "./styled";

type Props = {
    title: string;
    value: string;
    color?: string;
}
export const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Info color={color}> {value} </Info>
        </Container>
    );
}