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



titleHome.addEventListener('click', () => {
   location.hash = '#home'
})


const pageHome = () => {
    containerAllCards.classList.remove('inactive');
    // filtered.classList.remove('inactive');
    containerFiltered.classList.add('inactive')
    infiniteScroll = getInfiniteScroll;
}



