import React, {createContext, ReactNode} from 'react';
import BaseCubit from "./baseCubit";

export const BlocContext = createContext<any>(null);
export default function BlocProvider<T extends BaseCubit<any>>(props: { create: T, child?: ReactNode }) {
    return (
        <BlocContext.Provider value={props.create}>
            {props.child}
        </BlocContext.Provider>
    );
}
