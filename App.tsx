import { useState } from 'react'
import { SocialIcons } from './components/SocialIcons';
import './App.css'
import { Container, 
            Form, 
            ContainerP, 
            ContainerA , 
            ContainerSpan, 
            ContainerInput,
            Button, 
            ToggleContainer, 
            Toggle,
            TogglePanel,
            FormContainer
        } from './styled';

const App = () => {
    const [isActive, setIsActive] = useState(false);

    let span1 = 'or use your email for registeration';
    let span2 = 'or use your email password';
    const valueSpan = isActive ? span1 : span2;

    let p1 = 'Enter your personal details to use all of site features';
    let p2 = 'Register with your personal details to use all of site features';
    const valueP = isActive ? p1 : p2;

    let title11 = 'Create Account';
    let title12 = 'Sign In';
    const title1 = isActive ? title11 : title12;

    let title21 = 'Welcome Back!';
    let title22 = 'Hello, Friend!';
    const title2 = isActive ? title21 : title22;

    let button1 = 'Sign Up';
    let button2 = 'Sign In';
    const valueButton = isActive ? button1 : button2;
    const valueButton2 = isActive ? button2 : button1;

    const formSign = `${isActive ? 'sign-up' : 'sign-in'}`;
    
    const toggleSide = `${isActive ? 'toggle-left' : 'toggle-right'}`;

    const ContainerActive = `container ${isActive ? 'active' : ''}`;
    const active = isActive ? 'active' : '';

    const hidden = `hidden ${isActive ? '' : 'active'}`;

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <Container className={ContainerActive}>
            <FormContainer className={formSign}>
                <Form>
                    <h1> { title1 } </h1>
                    <SocialIcons />
                    <ContainerSpan> { valueSpan } </ContainerSpan>
                    {isActive && <ContainerInput type="text" placeholder="Name" />}
                    <ContainerInput type="email" placeholder="Email" />
                    <ContainerInput type="password" placeholder="Password" />
                    {!isActive && <ContainerA href="#">Forget Your Password?</ContainerA>}
                    <Button> { valueButton } </Button>
                </Form>
            </FormContainer>
            <ToggleContainer className={active}>
                <Toggle className={active}>
                    <TogglePanel className={toggleSide}>
                        <h1>{ title2 }</h1>
                        <ContainerP> { valueP } </ContainerP>
                        <Button className={ hidden } onClick={handleToggle}>
                            { valueButton2 }
                        </Button>
                    </TogglePanel>
                </Toggle>
            </ToggleContainer>
        </Container>
    );
};

export default App;
