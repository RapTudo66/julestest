import React, { useState } from 'react';

const UserInfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    age: '',
    gender: 'Male',
    weight: '',
    height: '',
    bodyFat: '',
    experience: 'Beginner',
    injuries: '',
    availability: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
    timePerSession: '60',
    equipment: [],
    motivation: 'Appearance',
    healthConditions: {
      hypertension: false,
      diabetes: false,
      cardiacIssues: false,
      none: true,
    },
    sleepHours: '',
    stressLevel: 3,
    activityLevel: 'Sedentary',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle nested state for availability and healthConditions
      const [outer, inner] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [outer]: { ...prev[outer], [inner]: checked }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMultiSelectChange = (e) => {
    const options = [...e.target.selectedOptions];
    const values = options.map(option => option.value);
    setFormData({ ...formData, equipment: values });
  }

  return (
    <div className="form-section">
      <h2>About You</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleInputChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Height (cm)</label>
          <input type="number" name="height" value={formData.height} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Body Fat % (optional)</label>
          <input type="number" name="bodyFat" value={formData.bodyFat} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Training Experience</label>
          <select name="experience" value={formData.experience} onChange={handleInputChange}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label>Injuries or Restrictions</label>
          <textarea name="injuries" value={formData.injuries} onChange={handleInputChange}></textarea>
        </div>
        <div className="form-group full-width">
          <label>Training Availability (Days)</label>
          <div className="checkbox-group">
            {Object.keys(formData.availability).map(day => (
              <label key={day}>
                <input type="checkbox" name={`availability.${day}`} checked={formData.availability[day]} onChange={handleInputChange} />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Time per session</label>
          <select name="timePerSession" value={formData.timePerSession} onChange={handleInputChange}>
            <option value="30">30 min</option>
            <option value="45">45 min</option>
            <option value="60">60 min</option>
            <option value="90">90 min+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Available Equipment</label>
          <select name="equipment" multiple value={formData.equipment} onChange={handleMultiSelectChange}>
            <option value="full-gym">Full Gym</option>
            <option value="dumbbells">Dumbbells</option>
            <option value="barbells">Barbells</option>
            <option value="kettlebells">Kettlebells</option>
            <option value="resistance-bands">Resistance Bands</option>
            <option value="bodyweight">Bodyweight</option>
          </select>
        </div>
        <div className="form-group">
          <label>Primary Motivation</label>
          <select name="motivation" value={formData.motivation} onChange={handleInputChange}>
            <option>Appearance</option>
            <option>Performance</option>
            <option>Health</option>
            <option>Energy</option>
          </select>
        </div>
        <div className="form-group full-width">
          <label>Health Conditions</label>
          <div className="checkbox-group">
             {Object.keys(formData.healthConditions).map(condition => (
              <label key={condition}>
                <input type="checkbox" name={`healthConditions.${condition}`} checked={formData.healthConditions[condition]} onChange={handleInputChange} />
                {condition.charAt(0).toUpperCase() + condition.slice(1)}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Average Sleep Hours</label>
          <input type="number" name="sleepHours" value={formData.sleepHours} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Stress Level (1-5)</label>
          <input type="range" min="1" max="5" name="stressLevel" value={formData.stressLevel} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label>Daily Activity Level</label>
          <select name="activityLevel" value={formData.activityLevel} onChange={handleInputChange}>
            <option>Sedentary</option>
            <option>Active</option>
            <option>Very Active</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
