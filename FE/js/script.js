document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      country: document.getElementById("country").value,
      company_name: document.getElementById("companyname").value,
      message: document.getElementById("message").value,
    };

    fetch("https://tbh-peaf.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        alert("Thank you for getting in touch!");
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("An error occurred while saving the data.");
      });
  });
