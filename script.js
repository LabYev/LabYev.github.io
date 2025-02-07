//card number
document.getElementById("cardnumber").addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // deleting words
        
        let count = 0;

        // insert "-" every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, function(match, p1) {
        count++;
        if (count <= 3) {
            return p1 + '-'; // Add a hyphen after the group if the number of groups <= 3
        } else {
            return p1; // Do not add a hyphen after group 3
        }
    });

        e.target.value = value;


    });
    //adds deletion functions 
  document.getElementById("cardnumber").addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && this.value.endsWith(" - ")) {
            this.value = this.value.slice(-1); 
            e.preventDefault();
        }
    });


//expire date
document.getElementById("expireDate").addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // deleting words
        if (value.length > 2) {
            value = value.substring(0, 2) + " / " + value.substring(2, 5); // Add `/`
        }
        e.target.value = value;
    });
    //adds deletion functions
    document.getElementById("expireDate").addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && this.value.endsWith(" / ")) {
            this.value = this.value.slice(0, -3); 
            e.preventDefault();
        }
    });

// counter
// Getting data about the selected tour
        let tourData = JSON.parse(localStorage.getItem("selectedTour"));

        if (tourData) {
            document.getElementById("tourName").textContent = tourData.name;
            document.getElementById("tourPrice").textContent = tourData.price;
            calculateTotal(); // Calculate the price initially
        }

        function calculateTotal() {
            let peopleCount = document.getElementById("peopleCount").value;
            let total = tourData.price * peopleCount;
            document.getElementById("totalPrice").textContent = total;
        }

// action after submit button
document.getElementById("formcheck").addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the standard form submission

        // Check if the form is valid
        if (this.checkValidity()) {
            window.location.href = "submit.html"; // Go to the confirmation page
        } else {
            alert("Please fill out all required fields correctly.");
        }
    });
