const URL_API = `https://rickandmortyapi.com/api/`

const lazyLouder = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const urlImg = entry.target.getAttribute('data-img');
            entry.target.setAttribute('src', urlImg)
        }
    })
})


const creatCards = (container, forEach, clean = true) => {
    if (clean) {
        container.innerHTML = '';
    }
    
    forEach.forEach((card) => {
        //Creamos nodos 
        //Card
        const containerCard = document.createElement('div');
        //front-face
        const frontFace = document.createElement('div')
        const imgCards = document.createElement('img')
        //Back-face
        const backFace = document.createElement('div')
        //Name
        const nameOfCharacter = document.createElement('span')
        const nameOfCharacterText = document.createTextNode(`${card.name}`)
        //Gender
        const genderOfCharacter = document.createElement('span')
        const genderOfCharacterText = document.createTextNode(`${card.gender}`)
        //Status
        const statusOfCharacter = document.createElement('span')
        const statusOfCharacterText = document.createTextNode(`${card.status}`)
        //Specie 
        const specieOfCharacter = document.createElement('span')
        const specieOfCharacterText = document.createTextNode(`${card.species}`)
        //Created
        const createdCharacter = document.createElement('span')
        const createdCharacterText = document.createTextNode(`${card.created}`)
        //Dimension
        const nameDimensionOfCharacter = document.createElement('span')
        const nameDimensionOfCharacterText = document.createTextNode(`${card.location.name}`)
        
        
        //damos clases y atributos
        containerCard.className = 'card'
        backFace.className = 'face back'
        frontFace.classList = 'container__info--cards face front'; 
        imgCards.setAttribute('data-img', card.image)
        imgCards.style = 'min-height: 200px'
        nameOfCharacter.className = 'nameOfCharacter'
        genderOfCharacter.className = 'genderOfCharacter'
        statusOfCharacter.className = 'statusOfCharacter'
        specieOfCharacter.className = 'specieOfCharacter'
        createdCharacter.className = 'createdCharacter'
        nameDimensionOfCharacter.className = 'nameDimensionOfCharacter'

        lazyLouder.observe(imgCards)
        if (card.status === 'Alive') {
            statusOfCharacter.style.background = 'lightgreen'
            statusOfCharacter.style.width = '50px'
            statusOfCharacter.style.margin = '0 auto'
            statusOfCharacter.style.borderRadius = '5px'
        } else if (card.status === 'Dead') {
            statusOfCharacter.style.background = 'red'
            statusOfCharacter.style.width = '50px'
            statusOfCharacter.style.margin = '0 auto'
            statusOfCharacter.style.borderRadius = '5px'
        } else {
            statusOfCharacter.style.background = 'lightyellow'
            statusOfCharacter.style.width = '80px'
            statusOfCharacter.style.margin = '0 auto'
            statusOfCharacter.style.borderRadius = '5px'
        }

        if (card.gender === 'Male') {
            genderOfCharacter.style.background = 'lightblue'
            genderOfCharacter.style.width = '50px'
            genderOfCharacter.style.margin = '6px auto'
            genderOfCharacter.style.borderRadius = '5px'
        } else if (card.gender === 'Female') {
            genderOfCharacter.style.background = 'lightpink'
            genderOfCharacter.style.width = '55px'
            genderOfCharacter.style.margin = '6px auto'
            genderOfCharacter.style.borderRadius = '5px'
        } else {
            genderOfCharacter.style.background = 'lightyellow'
            genderOfCharacter.style.width = '80px'
            genderOfCharacter.style.margin = '6px auto'
            genderOfCharacter.style.borderRadius = '5px'
        }

        if(card.species === 'Human' || card.species === 'Humanoid') {
            specieOfCharacter.style.background = 'violet'
            specieOfCharacter.style.width = '80px'
            specieOfCharacter.style.margin = '6px auto'
            specieOfCharacter.style.borderRadius = '5px'
        } if (card.species === 'Alien' || card.species === 'Disease') {
            specieOfCharacter.style.background = 'green'
            specieOfCharacter.style.width = '60px'
            specieOfCharacter.style.margin = '6px auto'
            specieOfCharacter.style.borderRadius = '5px'
        } if (card.species === 'Animal' || card.species === 'Robot') {
            specieOfCharacter.style.background = '#B2857B'
            specieOfCharacter.style.width = '60px'
            specieOfCharacter.style.margin = '6px auto'
            specieOfCharacter.style.borderRadius = '5px'
        } if (card.species === 'unknown' || card.species === 'Cronenberg') {
            specieOfCharacter.style.background = '#1D95D8'
            specieOfCharacter.style.width = '90px'
            specieOfCharacter.style.margin = '6px auto'
            specieOfCharacter.style.borderRadius = '5px'
        } if (card.species === 'Mythological Creature' || card.species === 'Poopybutthole') {
            specieOfCharacter.style.background = '#D81DC1'
            specieOfCharacter.style.fontSize = '15px'
            specieOfCharacter.style.width = '120px'
            specieOfCharacter.style.margin = '6px auto'
            specieOfCharacter.style.borderRadius = '5px'
        }


        //Hacemos append
        containerCard.appendChild(frontFace)
        containerCard.appendChild(backFace)
        frontFace.appendChild(imgCards)

        
        container.appendChild(containerCard)
        backFace.appendChild(nameOfCharacter)
        backFace.appendChild(genderOfCharacter)
        backFace.appendChild(statusOfCharacter)
        backFace.appendChild(specieOfCharacter)
        backFace.appendChild(createdCharacter)
        backFace.appendChild(nameDimensionOfCharacter)

        nameOfCharacter.appendChild(nameOfCharacterText)
        genderOfCharacter.appendChild(genderOfCharacterText)
        statusOfCharacter.appendChild(statusOfCharacterText)
        specieOfCharacter.appendChild(specieOfCharacterText)
        createdCharacter.appendChild(createdCharacterText)
        nameDimensionOfCharacter.appendChild(nameDimensionOfCharacterText)
    })

}

const getCharactersRickAndMorty = async () => {
    const response = await fetch(`${URL_API}character?page=${pagina}&gender=&status=&species=`)
    const data = await response.json()
    const cards = data.results;
    maxPage = data.info.pages;

    creatCards(containerAllCards, cards, clean = true)
}

const getInfiniteScroll = async () => {
    const { scrollTop, scrollHeight, clientHeight } =
    document.documentElement;

    const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15)
    const pageIsNotMax = pagina < maxPage;

    if (scrollIsBottom && pageIsNotMax) {
        pagina++;
        const response = await fetch(`${URL_API}character?page=${pagina}&gender=&status=&species=`)
        const data = await response.json()
        const cards = data.results;

        
        creatCards(containerAllCards, cards, clean = false)
    }

}

getCharactersRickAndMorty()