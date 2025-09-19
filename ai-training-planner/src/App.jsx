import React, { useState } from 'react';
import UserInfoForm from './components/UserInfoForm';
import TrainingGoalsForm from './components/TrainingGoalsForm';
import WorkoutPlan from './components/WorkoutPlan';
import { generateWorkoutPlan } from './logic/workoutGenerator';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
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

  const [goals, setGoals] = useState({
    primaryGoal: 'Muscle Gain',
    secondaryGoals: [],
    trainingFrequency: '3',
  });

  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleGeneratePlan = async () => {
    const plan = await generateWorkoutPlan(userInfo, goals);
    setWorkoutPlan(plan);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Training Planner</h1>
      </header>
      <main>
        <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo} />
        <TrainingGoalsForm goals={goals} setGoals={setGoals} />
        <div className="cta-container">
          <button className="cta-button" onClick={handleGeneratePlan}>
            ⚡ Generate Training Plan
          </button>
        </div>
        <WorkoutPlan plan={workoutPlan} />
      </main>
    </div>
  );
}

export default App;
