// 1. Create your own resume data in JSON format

let resumeData = {
    "personalInformation": {
        "name": "Ram",
        "phone": "9012345678",
        "email": "ram005@gmail.com",
    },
    "education": {
        "graduatedYear": "2020",
        "highestQualification": "Under Graduate",
        "degree": "B. Tech",
        "course": "Mechanical Engineering",
        "university": "Sastra University",
        "percentage": "82%",
    },
    "workExperiance": [{
            "companyName": "ABC",
            "timeperiod": "1.5 years",
            "role": "Trainee",
            "technology": "Html, Css, Javascript"
        },
        {   "companyName": "DEF",
            "timeperiod": "1.5 years",
            "role": "System Engineer",
            "technology": "Angular"
        }
    ],
    "skills": ["Html", "CSS", "Javascript", "Angular"],
    "languages": ["Tamil", "English"]
};

resumeData = JSON.stringify(resumeData)
resumeData = JSON.parse(resumeData);

console.log(`\n///// Using For Loop /////\n`);

for(let i = 0; i < Object.keys(resumeData).length; i++) {
    let parentData = Object.keys(resumeData)[i];
    console.log(`${parentData}:`);
    let childData = resumeData[parentData];
    // console.log(childData);
    if(Array.isArray(childData)) {
        let arr = [];
       for(let k = 0; k < childData.length; k++) {
           let data = childData[k];
           if(typeof data === "object") {
                for(let l = 0; l < Object.keys(data).length; l++) {
                    let obj = Object.keys(data)[l];
                    console.log(`\t${obj} - ${data[obj]}`);
                }
           } else {
            arr.push(childData[k])
            console.log(`\t${childData[k]}`)
           }
       } 
    }
    else if(typeof childData === "object") {
        for(let j = 0; j < Object.keys(childData).length; j++) {
            let obj = Object.keys(childData)[j];
            console.log(`\t${obj} - ${childData[obj]}`)
        }
    }
}

console.log(`\n///// Using For in Loop /////\n`);

for(let keys in resumeData) {
    let parentData = keys;
    console.log(`${parentData}:`);
    let childData = resumeData[keys];
    // console.log(childData);
    if(Array.isArray(childData)) {
        let arr = [];
       for(let keys1 in childData) {
           let data = childData[keys1];
           if(typeof data === "object") {
               for(let keys3 in data) {
                   console.log(`\t${keys3} - ${data[keys3]}`)
               }
           } else {
            arr.push(childData[keys1])
            console.log(`\t${childData[keys1]}`)
           }
       } 
    }
    else if(typeof childData === "object") {
        for(let keys2 in childData) {
            let obj = keys2;
            console.log(`\t${obj} - ${childData[obj]}`)
        }
    }
}

console.log(`\n///// Using For of Loop /////\n`);

for(let keys of Object.keys(resumeData)) {
    let parentData = keys;
    console.log(`${parentData}:`);
    let childData = resumeData[keys];
    // console.log(childData);
    if(Array.isArray(childData)) {
        let arr = [];
       for(let keys1 of Object.keys(childData)) {
           let data = childData[keys1];
           if(typeof data === "object") {
               for(let keys3 of Object.keys(data)) {
                   console.log(`\t${keys3} - ${data[keys3]}`)
               }
           } else {
            arr.push(childData[keys1])
            console.log(`\t${childData[keys1]}`)
           }
       } 
    }
    else if(typeof childData === "object") {
        for(let keys2 of Object.keys(childData)) {
            let obj = keys2;
            console.log(`\t${obj} - ${childData[obj]}`)
        }
    }
}

console.log(`\n///// Using For Each Loop /////\n`);

Object.keys(resumeData).forEach(parentData => {
    console.log(`${parentData}:`);
    let childData = resumeData[parentData];
    if(Array.isArray(childData)) {
        childData.forEach(data => {
            if(typeof data === 'object') {
                Object.keys(data).forEach(element => {
                    console.log(`\t${element} - ${data[element]}`)
                });
            }
            else {
                console.log(`\t${data}`)
            }
        });
    }
    else if(typeof childData === "object") {
        Object.keys(childData).forEach(element => {
            console.log(`\t${element} - ${childData[element]}`)
        });
    }
});