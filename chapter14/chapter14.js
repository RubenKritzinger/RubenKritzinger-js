var name = "Ruben";

if (name === "Ruben" || name === "Ina" || name === "Johan") {
    if (name === "Ruben") {
        document.write("Hellow Ruben!" + "<br>");
    } else if (name === "Johan") {
        document.write("Hello Johan!" + "<br>");
    } else {
        document.write("Hello Ina");
    }
} else {
    document.write("Hello stranger!" + "<br>");
}

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}