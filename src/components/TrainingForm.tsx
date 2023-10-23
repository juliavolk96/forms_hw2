import React, { useState } from 'react';

// Указываем тип параметра
interface TrainingFormProps {
  onAddTraining: (date: string, distance: number) => void;
}

function TrainingForm(props: TrainingFormProps) {
  const [date, setDate] = useState<string>('');
  const [distance, setDistance] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onAddTraining(date, distance);
    setDate('');
    setDistance(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="custom-input"
      />
      <input
        type="number"
        placeholder="километры"
        value={distance}
        onChange={(e) => setDistance(parseFloat(e.target.value))}
        min={0}
        step={0.1}
        className="custom-input"
      />
      <button type="submit">ОК</button>
    </form>
  );
}

export default TrainingForm;
