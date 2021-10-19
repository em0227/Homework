

const selectLocation = function (cityStr, jobArray) {

    
    return {
        type: "SWITCH_LOCATION",
        city: cityStr,
        jobs: jobArray
    }
}

// window.selectLocation = selectLocation

export default selectLocation;