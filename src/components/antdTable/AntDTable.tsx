import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';

import { AppointmentEntityType } from '../../types/models';

import styles from './antdtable.module.css';

type DataIndexRef = keyof AppointmentEntityType;

interface Props {
    data: AppointmentEntityType[];
}

const TableComponent: React.FC<Props> = ({ data }) => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: DataIndexRef,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndexRef): ColumnType<AppointmentEntityType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columnsRef: ColumnsType<AppointmentEntityType> = [
        {
            title: 'Code',
            dataIndex: 'uniqueCode',
            key: 'uniqueCode',
            width: '15%',
            ...getColumnSearchProps('uniqueCode'),
        },
        {
            title: 'Name',
            dataIndex: 'clientName',
            key: 'clientName',
            width: '25%',
            ...getColumnSearchProps('clientName'),
        },
        {
            title: 'Gender',
            dataIndex: 'sex',
            key: 'sex',
            width: '10%',
            ...getColumnSearchProps('sex'),
            filters: [
                {
                    text: 'Male',
                    value: 'Male',
                },
                {
                    text: 'Female',
                    value: 'Female',
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value, record) => record.clientName.startsWith(value as string),
        },
        {
            title: 'Address',
            dataIndex: 'address1',
            key: 'address1',
            width: '20%',
            ...getColumnSearchProps('address1'),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: '10%',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            ...getColumnSearchProps('email'),
        },
        {
            title: 'Appointment Date',
            dataIndex: 'appointmentDate',
            key: 'appointmentDate',
            width: '40%',
            ...getColumnSearchProps('appointmentDate'),
        },
        {
            title: 'Status',
            dataIndex: 'appointmentStatus',
            key: 'appointmentStatus',
            width: '30%',
            ...getColumnSearchProps('appointmentStatus'),
            sortDirections: ['descend', 'ascend'],
        },
    ];

    return <Table className={styles.table__layout} columns={columnsRef} dataSource={data} />;
};

export default TableComponent;
