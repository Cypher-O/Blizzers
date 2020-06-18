function fileValidation() {
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.png)$/i;
    const file = document.getElementById('file');
    if (!allowedExtensions.exec(filePath)) {
        alert('Please upload file having extensions .jpg/.png/ only.');
        fileInput.value = '';
        return false;
    } else {
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="' + e.target.result + '"/>';

                // checkFileSize();
            };
            fileInput.style.display = "block";
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

// Filevalidation = () => { 
//     const fi = document.getElementById('file'); 
//     // Check if any file is selected. 
//     if (fi.files.length > 0) { 
//         for (const i = 0; i <= fi.files.length - 1; i++) { 

//             const fsize = fi.files.item(i).size; 
//             const file = Math.round((fsize / 1024)); 
//             // The size of the file. 
//             if (file >= 4096) { 
//                 alert( 
//                   "File too Big, please select a file less than 4mb"); 
//             } else if (file < 2048) { 
//                 alert( 
//                   "File too small, please select a file greater than 2mb"); 
//             } else { 
//                 document.getElementById('size').innerHTML = '<b>'
//                 + file + '</b> KB'; 
//             } 
//         } 
//     } 
// } 

// function checkFileSize() {
//     for (const i = 0; i <= fi.files.length - 1; i++) {

//         const fsize = fi.files.item(i).size;
//         const file = Math.round((fsize / 1024));
//         // The size of the file. 
//         if (file >= 1024) {
//             alert(
//                 "File too Big, please select a file less than 4mb");
//         } else if (file < 1024) {
//             alert(
//                 "File too small, please select a file greater than 2mb");
//         } else {
//             document.getElementById('size').innerHTML = '<b>' +
//                 file + '</b> KB';
//         }
//     }
// };



// const inputFile = document.getElementById("inputFile");
// const previewContainer = document.getElementById("imagePreview");
// const previewImage = previewContainer.querySelector("image-preview__image");
// const previewDefaultText = previewContainer.querySelector("image-preview__default-text");

// inputFile.addEventListener("change", function(){
//     const file = this.files[0];
//     console.log(file);

//     if(file){
//         const reader = new FileReader();

//         previewDefaultText.style.display = "none";
//         previewImage.style.display = "block";

//         reader.addEventListener("load", function(){
//             console.log(this);
//             previewImage.setAttribute("src", this.result);
//         });

//         reader.readAsDataURL(file);
//     }else{ 
//         previewDefaultText.style.display = null;
//         previewImage.style.display = null;
//         previewImage.setAttribute("src", "");
//     }

// });

function validateEmail() {
    var form = document.getElementById('form');
    var email = document.getElementById('inputEmail').value;
    var text = document.getElementById('text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Email is valid";
        text.style.color = "#00ff00";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Enter valid email";
        text.style.color = "#FF0000";
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function validateForm() {
    var form = document.getElementById('form');
    var username = document.getElementById('inputUsername').value;
    var firstname = document.getElementById('inputFirstname').value;
    var lastname = document.getElementById('inputLastname').value;

    if (username == "" || firstname == "" || lastname == "") {
        alert("one or more fields are empty");
    } else {
        onsubmit = "setTimeout(function () { window.location.reload(); }, 10)"
    }
}

const data = [{
        "name": "Isaac Ogunleye",
        "role": "Admin",
        "actions": ""
    },
    {
        "name": "Olumide Awodeji",
        "role": "Secetrary",
        "actions": ""
    },
    {
        "name": "Joshua Emmanuel",
        "role": "Developer",
        "actions": ""
    },
    {
        "name": "Edmund Giwa",
        "role": "QA",
        "actions": ""
    },
    {
        "name": "Joy Ajiboye",
        "role": "Manager",
        "actions": ""
    },
    {
        "name": "Martins Mark",
        "role": "Devloper",
        "actions": ""
    }
]


const div = document.querySelector("#tbody")

// const convert = JSON.parse(data);

// console.log(convert)

const populate = data.map(data => {
    let firstname = data.name
    let role = data.role
    let action = data.actions
    return (`
        <tr>
            <td colspan=2>${firstname}</td>
            <td colspan=2>${role}</td>
            <td colspan=2><i class="fas fa-pencil-alt"></i><${action}/td>
        </tr>`)
})

console.log(populate)

div.innerHTML += populate.join("");