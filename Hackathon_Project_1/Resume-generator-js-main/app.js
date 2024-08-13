const inputfields = document.querySelector('.input-fields');
const output = document.querySelector('.output');
const printBtn = document.getElementById('printBtn');

let inputShow = true;

async function TextEditor(element) {
    const newEditor = await ClassicEditor
        .create(element, {
            toolbar: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
        });
    return newEditor;
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor => {
    workExpdetails = nEditor;
});
let Academic;
TextEditor(inputfields["academics"]).then(nEditor => {
    Academic = nEditor;
});

function toggle() {
    if (inputShow) {
        inputfields.style.display = "none";
        inputShow = false;
        output.innerHTML = `
           <div class="hero">
            <h1>${inputfields["name"].value}</h1>
            <h3>${inputfields["title"].value}</h3>
           </div>
           <div class="main">
               <div>
                 <h2>OBJECTIVE</h2>
                 <p>${inputfields["objective"].value}</p>
                 <h2>SKILLS</h2>
                 <p>${inputfields["skills"].value}</p>
                 <h2>ACHIEVEMENTS</h2>
                 <p>${inputfields["achievements"].value}</p>
                 <h2>CONTACT</h2>
                 <p>${inputfields["contact"].value}</p>
               </div>
               <div>
                <h2>WORK EXPERIENCE</h2>
                ${workExpdetails.getData()}
                <h2>ACADEMIC DETAILS</h2>
                 ${Academic.getData()}
                <h2>PROJECTS</h2>
                <p>${inputfields["projects"].value}</p>
               </div>
           </div>
         `;
        printBtn.style.display = "inline-block"; // Show the print button
    } else {
        inputfields.style.display = "block";
        inputShow = true;
        output.innerHTML = "";
        printBtn.style.display = "none"; // Hide the print button
    }
}

function printResume() {
    window.print();
}
