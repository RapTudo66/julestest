// Mock data simulating WGER API response
const mockWgerExercises = {
  results: [
    { id: 345, name: 'Bench Press', category: { name: 'Chest' }, equipment: [{ name: 'Barbell' }] },
    { id: 12, name: 'Squat', category: { name: 'Legs' }, equipment: [{ name: 'Barbell' }] },
    { id: 88, name: 'Deadlift', category: { name: 'Back' }, equipment: [{ name: 'Barbell' }] },
    { id: 101, name: 'Overhead Press', category: { name: 'Shoulders' }, equipment: [{ name: 'Barbell' }] },
    { id: 92, name: 'Pull-up', category: { name: 'Back' }, equipment: [{ name: 'Bodyweight' }] },
    { id: 212, name: 'Dumbbell Curl', category: { name: 'Biceps' }, equipment: [{ name: 'Dumbbell' }] },
    { id: 333, name: 'Tricep Pushdown', category: { name: 'Triceps' }, equipment: [{ name: 'Cable' }] },
    { id: 45, name: 'Leg Press', category: { name: 'Legs' }, equipment: [{ name: 'Machine' }] },
    { id: 74, name: 'Lateral Raises', category: { name: 'Shoulders' }, equipment: [{ name: 'Dumbbell' }] },
    { id: 23, name: 'Plank', category: { name: 'Abs' }, equipment: [{ name: 'Bodyweight' }] },
  ],
};

// Mock data simulating ExerciseDB API response
const mockExerciseDbGifs = {
  'Bench Press': 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif',
  'Squat': 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif',
  'Deadlift': 'http://d205bpvrqc9yn1.cloudfront.net/0032.gif',
  'Overhead Press': 'http://d205bpvrqc9yn1.cloudfront.net/0043.gif',
  'Pull-up': 'http://d205bpvrqc9yn1.cloudfront.net/0047.gif',
  'Dumbbell Curl': 'http://d205bpvrqc9yn1.cloudfront.net/0244.gif',
  'Tricep Pushdown': 'http://d205bpvrqc9yn1.cloudfront.net/0804.gif',
  'Leg Press': 'http://d205bpvrqc9yn1.cloudfront.net/0564.gif',
  'Lateral Raises': 'http://d205bpvrqc9yn1.cloudfront.net/0343.gif',
  'Plank': 'http://d205bpvrqc9yn1.cloudfront.net/3342.gif',
};

export const fetchExercises = async () => {
  console.log('Fetching exercises from mock WGER API...');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockWgerExercises.results);
    }, 500);
  });
};

export const fetchExerciseGif = async (exerciseName) => {
  console.log(`Fetching GIF for ${exerciseName} from mock ExerciseDB API...`);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockExerciseDbGifs[exerciseName] || null);
    }, 300);
  });
};
