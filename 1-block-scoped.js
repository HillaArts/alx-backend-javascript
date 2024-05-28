export default function taskBlock(trueOrFalse) {
        let task = false;
        let task2 = true;
    
        if (trueOrFalse) {
            task2 = false; // New variable scoped to the if block
        }
    
        return [task, task2];
    }
  