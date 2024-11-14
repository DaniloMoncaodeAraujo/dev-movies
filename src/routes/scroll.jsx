import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [scrollPositions, setScrollPositions] = useState({});

    return (
        <ScrollContext.Provider value={{ scrollPositions, setScrollPositions }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
