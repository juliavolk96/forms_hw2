import React from 'react';

interface TrainingTableProps {
  data: { date: string; distance: number }[];
  onDeleteTraining: (index: number) => void;
}

function TrainingTable(props: TrainingTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Километры</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.date}</td>
            <td>{entry.distance} км</td>
            <td>
              <button className="delete-button" onClick={() => props.onDeleteTraining(index)}>
                ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TrainingTable;
