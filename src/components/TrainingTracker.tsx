import React, { useState, useEffect } from 'react';
import TrainingForm from './TrainingForm';
import TrainingTable from './TrainingTable';

interface TrainingEntry {
  date: string;
  distance: number;
}

function TrainingTracker() {
  const [trainingData, setTrainingData] = useState<TrainingEntry[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem('trainingData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTrainingData(parsedData);
    }
  }, []);

  const addTraining = (date: string, distance: number) => {
    const newEntry: TrainingEntry = { date, distance };
    const updatedData = [...trainingData, newEntry].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setTrainingData(updatedData);
    localStorage.setItem('trainingData', JSON.stringify(updatedData)); 
  };

  const deleteTraining = (index: number) => {
    const updatedData = [...trainingData];
    updatedData.splice(index, 1);
    setTrainingData(updatedData);
    localStorage.setItem('trainingData', JSON.stringify(updatedData));
  };
  

  return (
    <div>
      <h1>Отслеживание тренировок и прогулок</h1>
      <TrainingForm onAddTraining={addTraining} />
      <TrainingTable data={trainingData} onDeleteTraining={deleteTraining} />
    </div>
  );
}

export default TrainingTracker;
