/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Step 1: Initialize the adjacency list and in-degree array
    const adjList = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);
    
    // Step 2: Build the graph
    // prerequisites[i] = [course, prereq] -> means prereq must be taken before course (prereq -> course)
    for (const [course, prereq] of prerequisites) {
        adjList[prereq].push(course);
        inDegree[course]++;
    }
    
    // Step 3: Add all courses with an in-degree of 0 to the queue
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    // Step 4: Process the queue
    let takenCoursesCount = 0;
    
    while (queue.length > 0) {
        const current = queue.shift();
        takenCoursesCount++;
        
        // Reduce the in-degree of all neighboring courses
        for (const neighbor of adjList[current]) {
            inDegree[neighbor]--;
            
            // If in-degree becomes 0, it means all prerequisites are met
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    // Step 5: If we were able to take all courses, no cycle exists
    return takenCoursesCount === numCourses;
};