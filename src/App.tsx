import React, { useState, FC, FormEvent } from 'react';
import {
    Layout,
    Form,
    Title,
    SubTitle,
    Input,
    Checkbox,
    Label,
    Button,
    Link
} from './ui/ui';

const App: FC = () => {
    const [email, onChangeEmail] = useState<string>('');
    const [password, onChangePassword] = useState<string>('');
    const [isChecked, setCheck] = useState<boolean>(false);

    const handleChangeEmail = (e: { currentTarget: EventTarget }) => {
        const { value } = e.currentTarget as HTMLInputElement;
        onChangeEmail(value);
    };

    const handleChangePassword = (e: { currentTarget: EventTarget }) => {
        const { value } = e.currentTarget as HTMLInputElement;
        onChangePassword(value);
    };

    const handleCheck = () => setCheck(!isChecked);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email && password) {
            alert(`Email - ${email}, Password - ${password}`);
        } else {
            alert('Email and Password are required fields');
        }
    };

    return (
        <Layout>
            <Form onSubmit={handleSubmit}>
                <Title>Log in to Example</Title>
                <SubTitle>or create an account</SubTitle>

                <Label>E-mail</Label>
                <Input
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="e.g. john.doe@gmail.com"
                />

                <Label>Password</Label>
                <Input
                    type="password"
                    value={password}
                    onChange={handleChangePassword}
                    placeholder="password"
                />

                <Label className="wrapper-checkbox">
                    <Checkbox
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                    />
                    Agree with<Link>Terms & Conditions</Link>
                </Label>

                <Button type="submit" className={isChecked ? '' : 'disable'}>
                    Login
                </Button>
                <Link>Forgotten password?</Link>
            </Form>
        </Layout>
    );
};

export default App;
