document.getElementById("certificat-name").addEventListener("input", () => {
    const name = document.getElementById("certificat-name").value;
    history.replaceState("", "", window.location.pathname + (name ? `#${name}` : "")); // prettier-ignore
});

if (document.location.hash && document.location.hash !== "#") {
    document.getElementById("certificat-name").value = decodeURI(
        document.location.hash.slice(1, document.location.hash.length)
    );
    setTimeout(() => {
        (document.documentElement || document.body).scrollTo({
            top: document.getElementById("certificat-blabla").offsetTop,
            behavior: "smooth",
        });
    }, 300);
} else {
    update();
}

document.getElementById("certificat-date").textContent =
    new Date().toLocaleDateString();

// masculin || féminin
var xy = [Math.round(Math.random())];
document.getElementById("ea").textContent = ["e", "a"][xy];
document.getElementById("ee").textContent = ["", "e"][xy];

async function screenshot() {
    return new Promise(async (resolve, reject) => {
        const certificat = document.getElementById("certificat-wrap");
        certificat.classList.add("screenshot");
        setTimeout(() => {
            domtoimage
                .toBlob(certificat, { quality: 0.95 })
                .then(function (blob) {
                    const file = new File(
                        [blob],
                        `Certif_a_LARACHE_${document.getElementById("certificat-name").value}.jpeg`, // prettier-ignore
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
        }, 500);
    });
}

async function download() {
    const file = await screenshot();
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.download = `Certif_a_LARACHE_${document.getElementById("certificat-name").value}.jpeg`; //prettier-ignore
    link.href = fileURL;
    link.click();
}

async function share(event) {
    event.preventDefault();
    if (navigator.canShare) {
        if (navigator.canShare({ files: [new File([""], "")] })) {
            // share with screenshot
            const file = await screenshot();
            navigator
                .share({
                    files: [file],
                    title: `Certificat de l'International Institute of La RACHE de ${
                        document.getElementById("certificat-name").value
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
                    document.getElementById("certificat-name").value
                }`,
                url: document.location.href,
            });
        }
    } else {
        // copy to clipcoard
        const shareBtn = document.getElementById("certificat-actions-share");

        try {
            await navigator.clipboard.writeText(document.location.href);
            shareBtn.innerHTML = "<span>👌</span> Lien copié!";
        } catch (err) {
            shareBtn.innerHTML = "<span>😭</span> Erreur à la copie du lien";
            console.error("Failed to copy: ", err);
        }

        setTimeout(() => {
            shareBtn.innerHTML = "<span>📤</span> Partager";
        }, 1000);
    }
}

function update() {
    document.getElementById("certificat-name").focus();
    document.getElementById("certificat-name").select();
}
