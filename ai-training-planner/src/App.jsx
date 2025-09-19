import React from 'react';
import UserInfoForm from './components/UserInfoForm';
import TrainingGoalsForm from './components/TrainingGoalsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Training Planner</h1>
      </header>
      <main>
        <UserInfoForm />
        <TrainingGoalsForm />
        <div className="cta-container">
          <button className="cta-button">
            ⚡ Generate Training Plan
          </button>
        </div>
        <div id="workout-plan">
          {/* Workout plan will be rendered here */}
        </div>
      </main>
    </div>
  );
}

export default App;
