const { exec } = require("child_process");

// Commande pour installer MongoDB Shell (Windows avec Chocolatey)
const command = "choco install mongosh -y"; 

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erreur : ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Erreur : ${stderr}`);
        return;
    }
    console.log(`Résultat : ${stdout}`);
});
