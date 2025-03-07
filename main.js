async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        document.getElementById('catFact').innerText = data.fact;
    } catch (error) {
        console.error('Kļūda iegūstot faktu:', error);
    }
}