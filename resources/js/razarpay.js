// Select all buttons with the class 'pay-btn'
// const payButtons = document.querySelectorAll('.pay-btn');

// payButtons.forEach((button) => {
//     button.addEventListener('click', function (e) {
//         e.preventDefault();

//         // Razorpay options
//         var options = {
//             key: "rzp_test_0pvWcjUfUQS4b2", // Enter the Key ID generated from the Dashboard
//             amount: "50000", // Amount is in currency subunits (e.g., 50000 = 500 INR)
//             currency: "INR",
//             name: "Acme Corp", // Your business name
//             description: "Test Transaction",
//             image: "https://example.com/your_logo", // Logo URL
//             order_id: "", // Pass the order ID obtained in response of Step 1
//             callback_url: "https://itsnotjustanumber.com/lp/get-your-lucky-number/thank-you", // Callback URL after payment

//             prefill: {
//                 name: "Gaurav Kumar", // Customer's name
//                 email: "gaurav.kumar@example.com", // Customer's email
//                 contact: "9000090000", // Customer's phone number
//             },

//             notes: {
//                 address: "Razorpay Corporate Office",
//             },

//             theme: {
//                 color: "#8063a0", // Custom theme color
//             },
//         };

//         var rzp1 = new Razorpay(options);

//         // Payment failure handler
//         rzp1.on("payment.failed", function (response) {
//             alert(response.error.code);
//             alert(response.error.description);
//             alert(response.error.source);
//             alert(response.error.step);
//             alert(response.error.reason);
//             alert(response.error.metadata.order_id);
//             alert(response.error.metadata.payment_id);
//         });

//         // Open Razorpay modal
//         rzp1.open();
//     });
// });

const payButtons = document.querySelectorAll(".pay-btn");

payButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Redirect to the Razorpay URL
    window.location.href = "https://rzp.io/rzp/09Birzra";
  });
});

// Handle click for the 'first-right' container
document.querySelector(".first-right").addEventListener("click", function () {
  // Redirect to the URL when 'first-right' is clicked
  window.location.href = "https://rzp.io/rzp/09Birzra";
});

// Handle click for the 'register_mobile' container
document
  .querySelector(".register_mobile")
  .addEventListener("click", function () {
    // Redirect to the same or another URL when 'register_mobile' is clicked
    window.location.href = "https://rzp.io/rzp/09Birzra";
  });
