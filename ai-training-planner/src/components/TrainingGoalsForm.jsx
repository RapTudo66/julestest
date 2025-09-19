import React, { useState } from 'react';

const TrainingGoalsForm = () => {
  const [goals, setGoals] = useState({
    primaryGoal: 'Muscle Gain',
    secondaryGoals: [],
    trainingFrequency: '3',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoals({ ...goals, [name]: value });
  };

  const handleMultiSelectChange = (e) => {
    const options = [...e.target.selectedOptions];
    const values = options.map(option => option.value);
    setGoals({ ...goals, secondaryGoals: values });
  }

  return (
    <div className="form-section">
      <h2>Your Objectives</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Primary Goal</label>
          <select name="primaryGoal" value={goals.primaryGoal} onChange={handleInputChange}>
            <option>Muscle Gain</option>
            <option>Fat Loss</option>
            <option>Strength</option>
            <option>Endurance</option>
            <option>General Fitness</option>
            <option>Body Recomposition</option>
          </select>
        </div>
        <div className="form-group">
          <label>Secondary Goals</label>
          <select name="secondaryGoals" multiple value={goals.secondaryGoals} onChange={handleMultiSelectChange}>
            <option>Mobility</option>
            <option>Athletic Performance</option>
            <option>Posture Correction</option>
            <option>Injury Prevention</option>
          </select>
        </div>
        <div className="form-group">
          <label>Training Frequency (days/week)</label>
          <select name="trainingFrequency" value={goals.trainingFrequency} onChange={handleInputChange}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TrainingGoalsForm;
