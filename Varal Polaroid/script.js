document.getElementById('adicionarFoto').addEventListener('click', function() {
    const fotoInput = document.getElementById('fotoInput');
    const descricaoInput = document.getElementById('descricaoInput');
    const fotosContainer = document.getElementById('fotosContainer');

    if (fotoInput.files.length > 0 && descricaoInput.value.trim() !== '') {
        const fotoFile = fotoInput.files[0];
        const descricao = descricaoInput.value;
        const data = new Date().toLocaleDateString();

        const reader = new FileReader();
        
        reader.onload = function(e) {
            const fotoURL = e.target.result;
            const polaroid = document.createElement('div');
            polaroid.classList.add('polaroid');

            const img = document.createElement('img');
            img.src = fotoURL;
            
            const descricaoElem = document.createElement('div');
            descricaoElem.classList.add('descricao');
            descricaoElem.textContent = descricao;

            const dataElem = document.createElement('div');
            dataElem.classList.add('data');
            dataElem.textContent = data;

            polaroid.appendChild(img);
            polaroid.appendChild(descricaoElem);
            polaroid.appendChild(dataElem);

            fotosContainer.appendChild(polaroid);

            // Limpar campos após adicionar a foto
            fotoInput.value = '';
            descricaoInput.value = '';
        };

        reader.readAsDataURL(fotoFile);
    } else {
        alert('Por favor, selecione uma foto e adicione uma descrição.');
    }
});
