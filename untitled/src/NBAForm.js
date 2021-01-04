import React, {useState} from "react";

function NBAForm() {
    const [name, setName] = useState("");
    const [awards, setAwards] = useState({
        mvp: false,
        roty: false,
        dpoy: false,
        scoring: false
    });
    const [skillsRange, setSkillsRange] = useState({
       threes: 50,
       dunks: 50,
       passing: 50,
       defence: 50
    });
    const [textInput, setTextInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            Name: ${name}
            ${awards.mvp && "MVP"} | ${awards.roty && "ROTY"} | ${awards.dpoy && "DPOY"} | ${awards.scoring && "KD Award"}
            3PT: ${skillsRange.threes}
            Dunks: ${skillsRange.dunks}
            Passing: ${skillsRange.passing}
            Defence: ${skillsRange.defence}
            Blob Text: ${textInput}
        `);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAwardChange = (e) => {
        const {name, checked} = e.target;
        setAwards({
            ...awards,
            [name]: checked
        })
    }

    const handleTextInput = (e) => {
        setTextInput(e.target.value);
    }

    const handleSkillsChange = (e) => {
        const {name, value} = e.target;
        setSkillsRange({
            ...skillsRange,
            [name]: value
        })
    }

    return (
        <form style={{
            display: "flex",
            flexDirection: "column"
        }}
            onSubmit={handleSubmit}
        >
            <h3>Basic Info</h3>
            <label>
                Name:
                <input type="text" value={name} placeholder="Enter name" onChange={handleNameChange}/>
            </label>
            <hr/>

            <h3>Which Awards will LaMelo win?</h3>
            <label>
                <input type="checkbox" checked={awards.mvp} name="mvp" onChange={handleAwardChange}/>
                MVP
            </label>
            <label>
                <input type="checkbox" checked={awards.roty} name="roty" onChange={handleAwardChange}/>
                ROTY
            </label>
            <label>
                <input type="checkbox" checked={awards.dpoy} name="dpoy" onChange={handleAwardChange}/>
                DPOY
            </label>
            <label>
                <input type="checkbox" checked={awards.scoring} name="scoring" onChange={handleAwardChange}/>
                Scoring Champ
            </label>
            <hr/>

            <h3>Please Rate LaMelo's Skills</h3>
            <label>
                <p>3PT: {skillsRange.threes}</p>
                <input type="range" value={skillsRange.threes} name="threes" onChange={handleSkillsChange}/>
            </label>
            <label>
                <p>Dunks: {skillsRange.dunks}</p>
                <input type="range" value={skillsRange.dunks} name="dunks" onChange={handleSkillsChange}/>
            </label>
            <label>
                <p>Passing: {skillsRange.passing}</p>
                <input type="range" value={skillsRange.passing} name="passing" onChange={handleSkillsChange}/>
            </label>
            <label>
                <p>Defence: {skillsRange.defence}</p>
                <input type="range" value={skillsRange.defence} name="defence" onChange={handleSkillsChange}/>
            </label>

            <textarea value={textInput} onChange={handleTextInput}/>

            <button>Submit</button>
        </form>
    )
}

export default NBAForm;