import React, {useState, useMemo, createContext, useContext} from "react";

export const UserContext = createContext();

function UserProvider({children}) {
    const [userId, setUserId] = useState("");
    //const [isLogin, setIsLogin] = useState(false);

    const actions = useMemo(
        () => ({
            changeUserId(e) {
                setUserId(e);
            },
        }),
        []
    );

    const value = useMemo(() => [userId, actions]);
    //const value = useMemo(() => [userId], [isLogin]);

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserState() {
    const value = useContext(UserContext);

    if(value === undefined) {
        throw new Error('useUserState should be used withn UserProvider');
    }

    return value;
}

export default UserProvider;