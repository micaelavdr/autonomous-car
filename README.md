## Autonomous car simulator

This simulator takes track and travel log data in json format.

If the car went out of bounds, or met an obstacle, it will respond with:
```json
{ "status" : "error", "position" : 2 }
```
If input has bad data, it will respond with:
```json
{ "status" : "error" }
```
Otherwise if it reached the last position successfully, it will respond with:
```json
{ "status" : "success" }
```

The simulator can simulate a reversing car with the following sample input:
```json
{
    "track": [
    ],
    "travelLog": [
        {
            "position": 1,
            "laneChange": "left"
        },
        {
            "position": 5,
            "laneChange": "right"
        },
        {
            "position": 2,
            "laneChange": "left"
        }
    ]
}
```

## Getting started

    # Install dependencies
    $ npm install
    
    # Run the simulator
    $ npm start
    
    # Test the simulator
    $ npm test
