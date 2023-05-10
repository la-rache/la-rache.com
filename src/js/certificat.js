document.getElementById("certif-name").addEventListener("input", () => {
    const name = document.getElementById("certif-name").value;
    history.replaceState("", "", window.location.pathname + (name ? `#${name}` : "")); // prettier-ignore
});

if (document.location.hash && document.location.hash !== "#") {
    document.getElementById("certif-name").value = decodeURI(
        document.location.hash.slice(1, document.location.hash.length)
    );
    setTimeout(() => {
        (document.documentElement || document.body).scrollTo({
            top: document.getElementById("certificat-actions").offsetTop,
            behavior: "smooth",
        });
    }, 300);
}

const dateInput = document.querySelector("input[type='date']");
dateInput.valueAsDate = new Date();
dateInput.nextElementSibling.textContent = dateInput.valueAsDate.toLocaleDateString(); //prettier-ignore

// masculin || féminin
var xy = [Math.round(Math.random())];
document.getElementById("ea").textContent = ["e", "a"][xy];
document.getElementById("ee").textContent = ["", "e"][xy];

async function screenshot() {
    return new Promise(async (resolve, reject) => {
        const certificat = document.getElementById("certificat-wrap");
        certificat.classList.add("screenshot");
        domtoimage
            .toBlob(certificat, { quality: 0.95 })
            .then(function (blob) {
                const file = new File(
                    [blob],
                    `Certif_a_LARACHE_${document.getElementById("certif-name").value}.jpeg`, // prettier-ignore
                    { type: "image/jpeg" }
                );

                resolve(file);
            })
            .catch(function (error) {
                console.error("domtoimage", error);
                reject(error);
            })
            .finally(function () {
                certificat.classList.remove("screenshot");
            });
    });
}

async function download() {
    const file = await screenshot();
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.download = `Certif_a_LARACHE_${document.getElementById("certif-name").value}.jpeg`; //prettier-ignore
    link.href = fileURL;
    link.click();
}

async function share(event) {
    if (navigator.canShare) {
        if (navigator.canShare({ files: [new File([""], "")] })) {
            // share with screenshot
            const file = await screenshot();
            navigator
                .share({
                    files: [file],
                    title: `Certificat de l'International Institute of La RACHE de ${
                        document.getElementById("certif-name").value
                    }`,
                    url: document.location.href,
                })
                .then(() => console.log("Share with file was successful."))
                .catch((error) =>
                    console.log("Sharing with file failed", error)
                );
        } else {
            // share without screenshot
            navigator.share({
                title: `Certificat de l'International Institute of La RACHE de ${
                    document.getElementById("certif-name").value
                }`,
                url: document.location.href,
            });
        }
    } else {
        // copy to clipcoard
        event.target.style.width = event.target.offsetWidth + "px";
        try {
            await navigator.clipboard.writeText(document.location.href);
            event.target.innerHTML = "<span>👌</span> Lien copié!";
        } catch (err) {
            event.target.innerHTML =
                "<span>😭</span> Erreur à la copie du lien";
            console.error("Failed to copy: ", err);
        }

        setTimeout(() => {
            event.target.innerHTML =
                "<span>📤</span> Partager au reste du monde";
            event.target.style.width = "auto";
        }, 1000);
    }
}
