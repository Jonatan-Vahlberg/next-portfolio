import React from 'react';
import { Table } from 'react-bootstrap';
type TableRow = {
  name: string;
  colums: string[];
};
const rows: string[] = ['Mobile', 'Web', 'Other'];
const colums: string[][] = [
  ['React-Native(Hybrid)', 'React', 'Git/GitFlow'],
  ['Kotlin, Java (Android)', 'HTML, JS, CSS, SCSS', 'Node.js'],
  ['Swift, XCode (IOS)', 'Next.js', 'Firebase suite, SQLite'],
  ['', 'TypeScript', 'UI Design'],
];

const AboutTable: React.FC<{}> = () => {
  return (
    <div className="">
      <table className="table table-dark  table-bordered d-none d-sm-table ">
        <thead>
          <tr>
            {rows.map((row) => (
              <th scope="col">{row}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {colums.map((column) => (
            <tr>
              {column.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {rows.map((row, index) => (
        <table className="table table-dark w-100  table-bordered d-table d-sm-none mx-auto ">
          <thead>
            <th>{row}</th>
          </thead>
          <tbody>
            {colums.map((column) => {
              return column[index] !== '' ? (
                <tr>
                  <td>{column[index]}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default AboutTable;
