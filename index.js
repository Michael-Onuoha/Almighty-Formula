function calculate() {
    let a = parseFloat(document.getElementById("a-input").value);
    let b = parseFloat(document.getElementById("b-input").value);
    let c = parseFloat(document.getElementById("c-input").value);
    let notification = document.getElementById("notification");
    let output1 = document.getElementById("output1");
    let output2 = document.getElementById("output2");

    // Check for invalid input
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Please enter valid numbers.");
        return;
    }

    // If a = 0, it's not a quadratic equation
    if (a === 0) {
        alert("This is not a quadratic equation."); 
        return;
    }

    let discriminant = b * b - 4 * a * c;

    function isPerfectSquare(n) {
        return Number.isInteger(Math.sqrt(n));
    }
    function formatFraction(numerator, denominator) {
        return `<div style="display: inline-block; text-align: center;">
                    <span style="border-bottom: 2px solid; display: block;">${numerator}</span>
                    <span>${denominator}</span>
                </div>`;
    }
    
    if (discriminant > 0) {
        // Two real roots
        if (isPerfectSquare(discriminant)) {
            let sqrtD = Math.sqrt(discriminant);
            let x1 = (-b + sqrtD) / (2 * a);
            let x2 = (-b - sqrtD) / (2 * a);
            output1.innerHTML = `${x1}`;
            output2.innerHTML = `${x2}`;
            notification.innerHTML = "This is a perfect square 👍";
            notification.style.backgroundColor = "green";
            notification.classList.add("show")
            setTimeout(() => {
                notification.classList.remove("show")
                console.log("Now executing after 2 seconds!");
            }, 2000);
         
        } else {
            output1.innerHTML = `${formatFraction(`-${b} + √${discriminant}`, 2 * a)}`;
            output2.innerHTML = `${formatFraction(`-${b} - √${discriminant}`, 2 * a)}`;
        }
    } else if (discriminant === 0) {
        // One real root
        let x = -b / (2 * a);
        output1.innerHTML = `${x}`;
        output2.innerHTML = "";
    } else {
       notification.innerHTML = "Discriminant (√(b² - 4ac)) is Negative, No Real Roots 😔";
       notification.classList.add("show")
       setTimeout(() => {
        notification.classList.remove("show")
        console.log("Now executing after 2 seconds!");
    }, 2000);
       output1.innerHTML = ``;
       output2.innerHTML = "";
    }
    
}