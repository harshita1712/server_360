var search=document.getElementById('search');


search.addEventListener('focus',(event)=>{

  document.getElementById('search-wrapper').style.border="1px solid #00395d";

});


search.addEventListener('focusout',(event)=>{

document.getElementById('search-wrapper').style.border="1px solid rgba(0, 0, 0, 0.276)";

});

// JavaScript code
function openModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
let hostnames = [];
let options = ['Chef', 'Data', 'Patching', 'Change','Incident', 'Configuration'];

function addHostnamesFromModal() {
    const textarea = document.getElementById("serverNamesTextarea");
    const input = textarea.value.trim();
    const uploadedHostnames = input.split('\n').map(hostname => hostname.trim());
    hostnames = hostnames.concat(uploadedHostnames);
    // console.log(hostnames);
   
    textarea.value = "";
    closeModal();
    displayOptions();
}


function addHostname() {
    const input = document.getElementById("search");
    const hostname = input.value.trim();
    if (hostname) {
        hostnames.push(hostname);
        // console.log(hostnames);
        input.value = "";
       
        displayOptions();
    }
}

function displayOptions() {
    const optionsList = document.getElementById("optionsList");
    optionsList.style.display = "block";

    const optionsUl = document.getElementById("options");
    optionsUl.innerHTML = "";

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        checkbox.addEventListener("change", () => selectOption(option, checkbox.checked));

        const label = document.createElement("label");
        label.textContent = option;
        label.appendChild(checkbox);

        const listItem = document.createElement("li");
        listItem.appendChild(label);

        optionsUl.appendChild(listItem);
    }
}

function selectOption(option, isSelected) {
    // if (isSelected) {
    //     hostnames.push(option);
    // } else {
    //     const index = hostnames.indexOf(option);
    //     if (index !== -1) {
    //         hostnames.splice(index, 1);
    //     }
    // }

    // Check if any individual checkbox is unchecked
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById("selectAll");
    
    for (const checkbox of checkboxes) {
        if (checkbox !== selectAllCheckbox && !checkbox.checked) {
            selectAllCheckbox.checked = false;
            return; // Exit the loop
        }
    }
}
function toggleCheckboxes(selectAllCheckbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        if (checkbox !== selectAllCheckbox) {
            checkbox.checked = selectAllCheckbox.checked;
        }
    });
}
