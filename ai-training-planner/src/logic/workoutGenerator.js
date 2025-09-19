import { fetchExercises, fetchExerciseGif } from '../services/mockApi';

const getExercisesByGoal = (allExercises, goal) => {
  switch (goal) {
    case 'Muscle Gain':
      return allExercises.filter(ex => ['Chest', 'Back', 'Legs', 'Shoulders'].includes(ex.category.name));
    case 'Fat Loss':
      return allExercises.filter(ex => ex.equipment.some(e => e.name === 'Bodyweight' || e.name === 'Kettlebells'));
    case 'Strength':
        return allExercises.filter(ex => ex.name.includes('Bench Press') || ex.name.includes('Squat') || ex.name.includes('Deadlift'));
    default:
      return allExercises.slice(0, 5); // General fitness
  }
};

export const generateWorkoutPlan = async (userData, goalData) => {
  const allExercises = await fetchExercises();
  const selectedExercises = getExercisesByGoal(allExercises, goalData.primaryGoal);

  const plan = [];
  for (let i = 0; i < goalData.trainingFrequency; i++) {
    const dayPlan = {
      day: `Day ${i + 1}`,
      exercises: [],
    };

    // Simple logic to assign exercises to days
    const exercisesForDay = selectedExercises.slice(i * 2, (i + 1) * 2);

    for (const exercise of exercisesForDay) {
      const gif = await fetchExerciseGif(exercise.name);
      dayPlan.exercises.push({
        name: exercise.name,
        sets: goalData.primaryGoal === 'Strength' ? 5 : 4,
        reps: goalData.primaryGoal === 'Strength' ? '5' : '8-12',
        rest: goalData.primaryGoal === 'Strength' ? '180s' : '90s',
        gif: gif,
      });
    }
    plan.push(dayPlan);
  }

  return plan;
};
