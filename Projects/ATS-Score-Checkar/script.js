async function callGemini() {
    const jd = document.getElementById("inputJD").Value;
    const resume = document.getElementById("inputText").Value;



    if(!jd || !resume){
        alert("Please fill in both the job description and Resume fields")
    }

    console.log("Job Description:", jd );
    console.log("Resume:", resume );
}