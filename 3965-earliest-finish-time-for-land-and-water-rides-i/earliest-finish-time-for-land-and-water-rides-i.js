/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let minFinishTime = Infinity;
    const n = landStartTime.length;
    const m = waterStartTime.length;

    // Loop through every possible land ride
    for (let i = 0; i < n; i++) {
        const lStart = landStartTime[i];
        const lDur = landDuration[i];
        const lEnd = lStart + lDur;

        // Loop through every possible water ride
        for (let j = 0; j < m; j++) {
            const wStart = waterStartTime[j];
            const wDur = waterDuration[j];
            const wEnd = wStart + wDur;

            // Scenario 1: Land ride first, then Water ride
            const landFirstFinish = Math.max(lEnd, wStart) + wDur;
            
            // Scenario 2: Water ride first, then Land ride
            const waterFirstFinish = Math.max(wEnd, lStart) + lDur;

            // Keep track of the absolute earliest finish time
            minFinishTime = Math.min(minFinishTime, landFirstFinish, waterFirstFinish);
        }
    }

    return minFinishTime;
};