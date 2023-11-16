import { Container, MessageArea, CloseArea, Close, CloseTitle, Message } from "./styled";

type Props = {
    message: string[];
    setMessage: (message: string[]) => void;
    showErro: boolean;
    closeErro: () => void;
};

export const MessageError = ({ message, setMessage, showErro, closeErro }: Props) => {

    return (
        <Container>
            <MessageArea showErro={showErro}>
                <CloseArea showErro={showErro}>
                    <Close onClick={closeErro}>❌</Close>
                    <CloseTitle>ERRO</CloseTitle>
                </CloseArea>
                <Message showErro={showErro}>
                    {message.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </Message>
            </MessageArea>
        </Container>
    );
};