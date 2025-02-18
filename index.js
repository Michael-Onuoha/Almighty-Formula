function calculate() {
    let a = parseFloat(document.getElementById("a-input").value);
    let b = parseFloat(document.getElementById("b-input").value);
    let c = parseFloat(document.getElementById("c-input").value);

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

    if (discriminant > 0) {
        // Two real roots
        if (isPerfectSquare(discriminant)) {
            let sqrtD = Math.sqrt(discriminant);
            let x1 = (-b + sqrtD) / (2 * a);
            let x2 = (-b - sqrtD) / (2 * a);
            output1.innerText = `${x1}`;
            output2.innerText = ` ${x2}`;
        } else {
            output1.innerText = `(-${b} + √${discriminant}) / ${2 * a}`;
            output2.innerText = `(-${b} - √${discriminant}) / ${2 * a}`;
        }
    } else if (discriminant === 0) {
        // One real root
        let x = -b / (2 * a);
        output1.innerText = `${x}`;
        output2.innerText = "";
    } else {
        // Complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = `√${-discriminant} / ${2 * a}`;
        output1.innerText = `${realPart} + ${imaginaryPart}i`;
        output2.innerText = ` ${realPart} - ${imaginaryPart}i`;
    }
}
