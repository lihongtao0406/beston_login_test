import { useEffect, useRef } from 'react';
/* eslint-disable */
// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useScriptRef = () => {
    const scripted = useRef(true);

    useEffect(
        () => () => {
            scripted.current = false;
        },
        []
    );

    return scripted;
};

export default useScriptRef;
