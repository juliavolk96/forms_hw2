import React, { useState } from 'react';

// Указываем тип параметра
interface TrainingFormProps {
  onAddTraining: (date: string, distance: number) => void;
}

function TrainingForm(props: TrainingFormProps) {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onAddTraining(date, parseFloat(distance));
    setDate('');
    setDistance('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      placeholder='Дата (DD.MM.YYYY)'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
      <input type='number'
      placeholder='километры'
      value={distance}
      onChange={(e) => setDistance(e.target.value)}
      />
      <button type='submit'>ОК</button>
    </form>
  );
}

export default TrainingForm;