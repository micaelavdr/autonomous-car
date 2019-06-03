module.exports.simulate = (input) => {
    const track = input.track;
    const travelLog = input.travelLog;
    let lane = "b";
    let pos = 0;
    let obstacles = {};

    // map for easier search
    track.forEach(t => {
        obstacles[t.position] = t.obstacles    
    });
    
    for (var item in travelLog) { 

        item = travelLog[item];

        while (pos != item.position) {
            // handle reverse
            if (pos <= item.position) {
                pos++;
            } else{
                pos--;
            }

            // change lane
            if (pos == item.position) {
                if (item.laneChange == "left") {
                    lane = String.fromCharCode(lane.charCodeAt(0) - 1)
                } else if (item.laneChange == "right") {
                    lane = String.fromCharCode(lane.charCodeAt(0) + 1)
                } else {
                    return { "status": "error", "position": pos }
                }
            }
            
            // check if out of bounds
            if (lane < "a" || lane > "c") {
                return { "status": "error", "position": pos }
            }

            // check for obstacles
            if (obstacles[pos] && obstacles[pos].includes(lane)) {
                return { "status": "error", "position": pos }
            }
        }
    };

    return {"status": "success"}
};
