import React from 'react';

type Props = {};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav className="bg-red-500 text-white">
                Nabvar auth
            </nav>
            {children}
        </div>)
    ;
};

export default AuthLayout;
