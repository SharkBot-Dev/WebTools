async function headerInner() {
    await fetch("/header.html").then(async (resp) => {
        document.getElementById("header").innerHTML = await resp.text();
    });
}

headerInner();