// Recupera o tema salvo no localStorage, se existir
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    // Se um tema for encontrado no localStorage, aplica-o
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
});

// Função para alternar entre os temas
function toggleTheme() {
    const currentTheme = document.body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
    
    // Remove o tema atual
    document.body.classList.remove(currentTheme);
    
    // Alterna o tema
    const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
    document.body.classList.add(newTheme);

    // Salva a nova escolha de tema no localStorage
    localStorage.setItem("theme", newTheme);
}
