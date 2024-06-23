import React from 'react';
import { Table } from 'antd';

const dataSource = [
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
  // Add other rows in similar format
  {
    key: '3',
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
  // Continue adding all the rows here...
];

const columns = [
  {
    title: 'Roll No',
    dataIndex: 'rollNo',
    key: 'rollNo'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Problem Definition',
    dataIndex: 'problemDefinition',
    key: 'problemDefinition'
  },
  {
    title: 'SRS Document',
    dataIndex: 'srsDocument',
    key: 'srsDocument'
  },
  {
    title: 'Design Document',
    dataIndex: 'designDocument',
    key: 'designDocument'
  },
  {
    title: 'Implementation',
    dataIndex: 'implementation',
    key: 'implementation'
  },
  {
    title: 'Report & Presentation',
    dataIndex: 'reportPresentation',
    key: 'reportPresentation'
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total'
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
    key: 'grade'
  }
];

const StudentGradesTable = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default StudentGradesTable;
