import React from "react";
import ProgressbarPage from "../../Pages/ProgressbarPage";
import TablePage from "../../Pages/TablePage";
import TableIdPage from "../../Pages/TableIdPage";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export const routes: IRoute[] = [
    {
        path: '/',
        element: ProgressbarPage
    },
    {
        path: '/table',
        element: TablePage
    },
    {
        path: '/table/:id',
        element: TableIdPage
    }
]