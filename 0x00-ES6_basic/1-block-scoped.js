export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Assign the value to the existing variable
  }

  return [task, task2];
}
