const nameElement = document.getElementById("certificat-name");

nameElement.addEventListener("input", () => {
    const name = nameElement.value;
    history.replaceState("", "", window.location.pathname + (name ? `#${name}` : "")); // prettier-ignore
});

if (document.location.hash && document.location.hash !== "#") {
    nameElement.value = decodeURI(
        document.location.hash.slice(1, document.location.hash.length)
    );
} else {
    // nameElement.focus();
}

document.getElementById("certificat-date").textContent =
    new Date().toLocaleDateString();

// prettier-ignore
if (!!navigator.canShare && navigator.canShare({ title: "test", url: document.location.href })) { 
  document.getElementById("certificat-actions-copy").remove();
} else {
    document.getElementById("certificat-actions-share").remove();
}

// stagiaire : masculin || féminin
var xy = [Math.round(Math.random())];
document.getElementById("ea").textContent = ["e", "a"][xy];
document.getElementById("ee").textContent = ["", "e"][xy];

function submitCertif(event) {
    event.preventDefault();

    if (document.getElementById("certificat-actions-share")) {
        share();
    } else {
        download();
    }
}

async function screenshot() {
    return new Promise(async (resolve, reject) => {
        const certificat = document.getElementById("certificat-wrap");
        certificat.classList.add("screenshot");
        setTimeout(() => {
            domtoimage
                .toBlob(certificat, {
                    height: certificat.offsetHeight * 2,
                    width: certificat.offsetWidth * 2,
                    style: {
                        transform: "scale(2)",
                        transformOrigin: "top left",
                        width: certificat.offsetWidth + "px",
                        height: certificat.offsetHeight + "px",
                    },
                })
                .then(function (blob) {
                    const file = new File(
                        [blob],
                        `Certif_a_LARACHE_${nameElement.value}.png`, // prettier-ignore
                        { type: "image/png" }
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
    link.download = file.name;
    link.href = fileURL;
    link.click();
}

async function copy() {
    const copyBtn = document.getElementById("certificat-actions-copy");

    try {
        await navigator.clipboard.writeText(document.location.href);
        copyBtn.innerHTML = "<span>👌</span> Lien copié!";
    } catch (err) {
        copyBtn.innerHTML = "<span>😭</span> Erreur à la copie du lien";
        console.error("Failed to copy: ", err);
    }

    setTimeout(() => {
        copyBtn.innerHTML = "<span>🔗</span> Copier le lien";
    }, 1000);
}

async function copyImg() {
    const copyBtn = document.getElementById("certificat-actions-copy-img");

    try {
        const file = await screenshot();
        const data = [new ClipboardItem({ [file.type]: file })];
        await navigator.clipboard.write(data);
        copyBtn.innerHTML = "<span>👌</span> Certif copié!";
    } catch (err) {
        copyBtn.innerHTML = "<span>😭</span> Erreur à la copie du certif";
        console.error("Failed to copy: ", err);
    }

    setTimeout(() => {
        copyBtn.innerHTML = "<span>📸</span> Copier le certificat";
    }, 1000);
}

async function share() {
    if (navigator.canShare({ files: [new File([""], "")] })) {
        // share with screenshot
        const file = await screenshot();
        navigator
            .share({
                files: [file],
                title: `Certificat de l'International Institute of La RACHE de ${nameElement.value}`,
                url: document.location.href,
            })
            .then(() => console.log("Share with file was successful."))
            .catch((error) => console.log("Sharing with file failed", error));
    } else {
        // share without screenshot
        navigator.share({
            title: `Certificat de l'International Institute of La RACHE de ${nameElement.value}`,
            url: document.location.href,
        });
    }
}

function resetName() {
    nameElement.value = "";
    nameElement.dispatchEvent(new Event("input"));
    nameElement.focus();
}
