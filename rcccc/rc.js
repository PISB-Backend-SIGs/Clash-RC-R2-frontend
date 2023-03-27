let editor1 = document.querySelector("#editor1");
ace.edit(editor1, {
  theme: "ace/theme/cobalt",
});

const langSelect = document.getElementById('langbtn');

// Create an Ace editor instance
const editor = ace.edit('editor1');
editor.session.setValue(" Select the language First and then Start the Coding .");

// Add an event listener to the select element
langSelect.addEventListener('change', function() {
 
  const selectedLang = langSelect.value;

  // Set the mode of the Ace editor based on the selected language    
    if(selectedLang==='c_cpp'){
      editor.session.setMode(`ace/mode/c_cpp`);
      editor.session.setValue("");
      editor.session.setValue("#include<iostream>\n int main(){{\n\n\n\t\t//write your code here \n\t\treturn 0;\n}"); 
      
    }
    if(selectedLang==='c'){
      editor.session.setMode(`ace/mode/c_cpp`);
      editor.session.setValue("");
      editor.session.setValue("#include<stdio.h>\n\n void main(){\n\n\n\t\t//write your code here \n\t\treturn 0;\n}");
    }
  
  if(selectedLang==='python'){
    editor.session.setMode(`ace/mode/${selectedLang}`);
    editor.session.setValue("");
    editor.session.setValue("#Write the Python code.....");
    
  }

});





// code for choosing only the suppoirted files only c cpp and python 
const fileInput = document.getElementById("customFile");

fileInput.addEventListener("change", function() {
  const file = fileInput.files[0];
  const fileName = file.name;
  const fileExtension = fileName.split(".").pop();
  console.log(fileExtension)

  if (fileExtension !== "cpp" && fileExtension !== "c" && fileExtension !== "py") {
    fileInput.value = "";
    alert("Unsupported file format. Please select a C++, C, or Python file.");
    return;
  }
});




//code for scrolling on to the status div 


const submitBtn = document.querySelector('#submit-btn');
const consoleBtn=document.querySelector('#console-btn');
const statusDiv = document.querySelector('.Status');
const consoleDiv = document.querySelector('.consoleBlocks');

submitBtn.addEventListener('click', () => {
  statusDiv.scrollIntoView({ behavior: 'smooth' });
});
consoleBtn.addEventListener('click', () => {
  consoleDiv.scrollIntoView({ behavior: 'smooth' });
});



//console buttons onclicke events 

var consoleBtnn = document.getElementById("console-btn");
var consoleBtnDown = consoleBtnn.querySelector(".down");
var consoleBtnUp = consoleBtnn.querySelector(".up");

consoleBtnn.addEventListener("click", function() {
  if (consoleBtnDown.classList.contains("hidden")) {
    consoleBtnDown.classList.remove("hidden");
    consoleBtnUp.classList.add("hidden");
  } else {
    consoleBtnDown.classList.add("hidden");
    consoleBtnUp.classList.remove("hidden");
  }
});




