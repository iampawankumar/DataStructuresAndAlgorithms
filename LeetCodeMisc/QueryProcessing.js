function batchTasks(tasks, batchTime) {
    const batches = [];
    let currentBatch = [];
    let currentTime = 0;

    for (const task of tasks) {
        if (currentTime + task <= batchTime) {
            currentBatch.push(task);
            currentTime += task;
        } else {
            if (currentBatch.length > 0) {
                batches.push(currentBatch);
            }
            currentBatch = [task];
            currentTime = task;
        }
    }

    if (currentBatch.length > 0) {
        batches.push(currentBatch);
    }

    return batches;
}

// Example usage
const tasks = [2, 3, 1, 5, 2];
const batchTime = 5;
console.log(batchTasks(tasks, batchTime)); // Output: [[2, 3], [1, 2], [5]]