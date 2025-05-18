let yas = Number(prompt("Yaşınız:"));
alert("En son mezun olduğunuz okulu 'ilkokul', 'ortaokul', 'lise' ya da 'üniversite' olarak küçük harflerle yazınız.");
let mezuniyet = prompt("En son mezun olduğunuz okul:");

if (yas >= 18 && (mezuniyet === "lise" || mezuniyet === "üniversite")) {
    alert("Ehliyet alabilirsiniz.");
} else {
    alert("Ehliyet alamazsınız.");
}
