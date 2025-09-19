import React from 'react';

const WorkoutPlan = ({ plan }) => {
  if (!plan || plan.length === 0) {
    return null;
  }

  return (
    <div className="workout-plan">
      <h2>Your Personalized Training Plan</h2>
      {plan.map((day, index) => (
        <div key={index} className="day-plan">
          <h3>{day.day}</h3>
          <div className="exercise-cards">
            {day.exercises.map((exercise, i) => (
              <div key={i} className="exercise-card">
                <h4>{exercise.name}</h4>
                <img src={exercise.gif} alt={`${exercise.name} GIF`} />
                <p>Sets: {exercise.sets}</p>
                <p>Reps: {exercise.reps}</p>
                <p>Rest: {exercise.rest}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
