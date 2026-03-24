import { Box } from '@mui/material';
import * as React from 'react';
import LoginCard from './LoginCard';
import theme from '../theme';

const MyLoginPage = () => {
    document.body.style.backgroundColor = theme.palette.third.main
    return (
        <Box sx={{ backgroundColor: theme.palette.third.main }}>
            <LoginCard width="30%" />
        </Box>
    )
};

export default MyLoginPage;



/* 
login form
input - только password - автозаполнение/подсказка
nginx
*/



/*
 const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /><br /> 
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                /><br />
                <Box>
                    work
                </Box>
                <button>Sign in</button>
            </form>
        </div>
    );
*/