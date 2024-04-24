import React from 'react';

// Create the context
const AuthorContext = React.createContext({
    authorName: 'Yan Michalevsky'
});

// Create a provider component
export const AuthorProvider = ({ children }) => {
    const {authorName, setAuthorName} = React.useContext(AuthorContext);

    return (
        <AuthorContext.Provider value={{ authorName }}>
            {children}
        </AuthorContext.Provider>
    );
};

export const useAuthorContext = () => React.useContext(AuthorContext);
export default AuthorProvider;