let pagina = 1;
let maxPage;
let infiniteScroll; 



const knowHashPage = () => {
    if (infiniteScroll) {
        window.removeEventListener('scroll', infiniteScroll, { passive: false })
        infiniteScroll = undefined;
    }

    if(location.hash.startsWith('#filteredSearch')) {
        pageToFilter()
    } else {
        pageHome()
    }

    if (infiniteScroll) {
        window.addEventListener('scroll', infiniteScroll,  { passive: false })
    }
}

window.addEventListener("DOMContentLoaded", knowHashPage, false)
window.addEventListener('hashchange', knowHashPage, false)
window.addEventListener('scroll', infiniteScroll, false)


filtered.addEventListener('click', () => {
    location.hash = '#filteredSearch'
})

titleHome.addEventListener('click', () => {
   location.hash = '#home'
})


// buttonFilter.addEventListener('click', () => {
//     newFunction() 
// })

// const newFunction = () => {   
//     let valueGender = getValueInputSelectGender.options[getValueInputSelectGender.selectedIndex].text;
//     let valueStatus = getValueInputSelectStatus.options[getValueInputSelectStatus.selectedIndex].text;
//     let valueSpecies= getValueInputSelectSpecies.options[getValueInputSelectSpecies.selectedIndex].text;
//     if (valueGender === 'All') {
//         valueGender = ''
//     } if (valueStatus === 'All') {
//         valueStatus = ''
//     } if (valueSpecies === 'All') {
//         valueSpecies = ''
//     }
//     console.log(valueGender, valueStatus, valueSpecies);
//     // getCharactersRickAndMorty(valueGender, valueStatus, valueSpecies)
// }

const pageToFilter = () => {
    containerAllCards.classList.add('inactive');
    filtered.classList.add('inactive');
    containerFiltered.classList.remove('inactive')
}

const pageHome = () => {
    containerAllCards.classList.remove('inactive');
    filtered.classList.remove('inactive');
    containerFiltered.classList.add('inactive')
    infiniteScroll = getInfiniteScroll;
}



