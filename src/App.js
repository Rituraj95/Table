import React, { useState, useCallback } from 'react';
import { Table, Button, Popconfirm, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './StudentGradesTable.css';

const { Search } = Input;

const initialDataSource = [
  {
    key: '1',
    rollNo: 'CSB20027',
    name: 'Ayushman Gohain',
    problemDefinition: 'a',
    srsDocument: 'a',
    designDocument: 'a',
    implementation: 'a',
    reportPresentation: 'a',
    total: 0,
    grade: 'W'
  },
  {
    key: '2',
    rollNo: 'CSB20033',
    name: 'Saurav Gogoi',
    problemDefinition: 7,
    srsDocument: 6,
    designDocument: 7,
    implementation: 8,
    reportPresentation: 42,
    total: 70,
    grade: 'B+'
  },
  {
    key: '3',
    rollNo: 'CSB21021',
    name: 'Mayur Mudoi',
    problemDefinition: 9,
    srsDocument: 9,
    designDocument: 8,
    implementation: 8,
    reportPresentation: 52,
    total: 86,
    grade: 'A+'
  },
  {
    key: '4',
    rollNo: 'CSB21019',
    name: 'Zekib Ahmed',
    problemDefinition: 9,
    srsDocument: 9,
    designDocument: 8,
    implementation: 8,
    reportPresentation: 52,
    total: 86,
    grade: 'A+'
  },
  {
    key: '5',
    rollNo: 'CSB21032',
    name: 'Nitul Nath',
    problemDefinition: 9,
    srsDocument: 9,
    designDocument: 8,
    implementation: 8,
    reportPresentation: 52,
    total: 86,
    grade: 'A+'
  },
  {
    key: '6',
    rollNo: 'CSB21004',
    name: 'Ankur Sarmah',
    problemDefinition: 9,
    srsDocument: 9,
    designDocument: 8,
    implementation: 8,
    reportPresentation: 52,
    total: 86,
    grade: 'A+'
  },

];

const StudentGradesTable = () => {
  const [dataSource, setDataSource] = useState(initialDataSource);
  const [searchText, setSearchText] = useState('');

  const handleDelete = useCallback((key) => {
    setDataSource((prevDataSource) => prevDataSource.filter(item => item.key !== key));
  }, []);

  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredDataSource = dataSource.filter(item =>
    item.rollNo.toLowerCase().includes(searchText) ||
    item.name.toLowerCase().includes(searchText)
  );

  const columns = [
    {
      title: 'Roll No',
      dataIndex: 'rollNo',
      key: 'rollNo',
      sorter: (a, b) => a.rollNo.localeCompare(b.rollNo),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Problem Definition',
      dataIndex: 'problemDefinition',
      key: 'problemDefinition',
      sorter: (a, b) => a.problemDefinition - b.problemDefinition,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'SRS Document',
      dataIndex: 'srsDocument',
      key: 'srsDocument',
      sorter: (a, b) => a.srsDocument - b.srsDocument,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Design Document',
      dataIndex: 'designDocument',
      key: 'designDocument',
      sorter: (a, b) => a.designDocument - b.designDocument,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Implementation',
      dataIndex: 'implementation',
      key: 'implementation',
      sorter: (a, b) => a.implementation - b.implementation,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Report & Presentation',
      dataIndex: 'reportPresentation',
      key: 'reportPresentation',
      sorter: (a, b) => a.reportPresentation - b.reportPresentation,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.total - b.total,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      sorter: (a, b) => a.grade.localeCompare(b.grade),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this row?"
          onConfirm={() => handleDelete(record.key)}
        >
          <Button type="link" className="delete-button">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="table-container">
      <div className="table-search">
        <Search
          placeholder="Search by Roll No or Name"
          onChange={(e) => handleSearch(e.target.value)}
          allowClear
          prefix={<SearchOutlined />}
        />
      </div>
      <Table
        dataSource={filteredDataSource}
        columns={columns}
        pagination={{ pageSize: 10 }}
        className="table"
      />
    </div>
  );
};

export default StudentGradesTable;
