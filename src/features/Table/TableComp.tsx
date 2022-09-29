import React, {useState} from 'react';
import './Table.css'
import {Button, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {ITableItem} from "../../app/Interfaces/ITableItem";
import {useAppSelector} from "../../app/hooks";
import 'antd/dist/antd.css';
import {useNavigate} from "react-router-dom";

enum Colors {
    'green' = '#00FF00',
    'yellow' = '#FFFF00',
    'red' = '#FF0000',
    'gray' = '#808080'
}

function hexToRGB(hex: string, alpha: number) {
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)

    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
}

function getItemColor(itemStatus: string) {
    return Colors[itemStatus as keyof typeof Colors]
}

const TableComp = () => {
    const {items} = useAppSelector(state => state.tableBarReducer)
    const navigate = useNavigate()
    const [itemId, setItemId] = useState<number | null>(null)

    const configureProjectStatusFilters = () => {
        let filters: {text: string, value: string}[] = [];
        Object.keys(Colors).map(item => {
            filters.push({text: item, value: item})
        })
        return filters
    }

    const configureProjectTypeFilters = () => {
        let filters: {text: string, value: string}[] = [];
        items.map(storeItem => {
            let findState = filters.find(item => item.text === storeItem.type)
            return !findState && filters.push({text: storeItem.type, value: storeItem.type})
        })
        return filters
    }

    const columns: ColumnsType<ITableItem> = [
        {
            title: 'Project',
            filters: configureProjectStatusFilters(),
            dataIndex: 'name',
            key: 'project',
            width: '1000px',
            onFilter: (value, record) => record.status.indexOf(String(value)) === 0,
            sorter: (a,b) => {
                if (a.name > b.name) return 1
                return -1
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Token type',
            dataIndex: 'type',
            key: 'tokenType',
            width: '1000px',
            filters: configureProjectTypeFilters()!,
            onFilter: (value, record) => record.type.indexOf(String(value)) === 0,
            sorter: (a,b) => {
                if (a.type > b.type) return 1
                return -1
            },
            sortDirections: ['descend'],
        },
        {
            title: 'Conditions',
            dataIndex: 'conditions',
            key: 'conditions',
            width: '1000px',
            sorter: (a,b) => {
                if (a.conditions > b.conditions) return 1
                return -1
            },
            sortDirections: ['descend'],
            render: (text) => {
                return <div className={"conditionSpan"}><div>{text[0]}</div>{text.replace(/,/g, ', ').slice(1)}</div>
            }
        },
        {
            title: 'Volume',
            dataIndex: 'volume',
            key: 'volume',
            width: '1000px',
            render: (text) => {
                return <div>$ {text.toLocaleString()}</div>
            }
        },
        {
            title: 'ROI',
            dataIndex: 'roi',
            key: 'roi',
            width: '1000px',
            render: (text) => {
                return <div>{text} %</div>
            }
        },
        {
            title: 'Free float',
            dataIndex: 'free',
            key: 'freeFloat',
            width: '1000px'
        },
        {
            title: 'Insurance hedge',
            dataIndex: 'hedge',
            key: 'hedge',
            width: '1000px',
            render: (text) => {
                return <div>{text} %</div>
            }
        },
        {
            render: (record) => <Button onClick={onBuy(record.id)} className={"buyButton"}>Buy</Button>,
        }
    ];

    const data: ITableItem[] = items

    const onRowClick = (id: number) => (event: React.MouseEvent<HTMLTableRowElement>) => {
        navigate(`/table/${id}`)
    }
    const onBuy = (record: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        setItemId(record)
    }

    return (
        <div className={"tableCont"}>
            <Table
                className={"tableExactly"}
                columns={columns}
                dataSource={data}
                pagination={false}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: onRowClick(record.id),
                        style: {background: hexToRGB(getItemColor(record.status), 0.15), cursor: 'pointer'}
                    }
                }}
            />
            <h3>Want to buy item with ID: {itemId}</h3>
        </div>
    );
};

export default TableComp;