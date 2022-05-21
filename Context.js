import React from 'react'

const [usernames, setUserName] = useState('');
const [phone, setPhone] = useState('');
const Context = React.createContext({usernames, setUserName,phone, setPhone });

const Provider = ({ children }) => {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
};
export { Context, Provider };