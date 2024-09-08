function search(){
    let sectionSearch = document.getElementById('results-search');


    let fieldSearch = document.getElementById('field-search').value

    if(!fieldSearch == ""){
        sectionSearch.innerHTML = "<p>Not found. You need to enter the name of the game!</p>"
        return
    }

    fieldSearch = fieldSearch.toLowerCase()

    let results = "";
    let title = "";
    let description = "";
    let link = "";

    for (let dbs of db){
        title = dbs.title.toLowerCase()
        description = dbs.description.toLowerCase()
        link = dbs.link.toLowerCase()

        if(title.includes(fieldSearch) || title.description(fieldSearch) || link.includes(fieldSearch)){
            results += `
            <div class="item-result">
                <h2>
                    ${dbs.title}
                </h2>
                <p class="descrision-meta">${dbs.description}</p>
                <a href=${dbs.link} target="_blank">More informations</a>
             </div> 
        `;
        }  
 
    }
    if (!results) {
        results = "<p>Nada foi encontrado</p>"
    }

    sectionSearch.innerHTML = results;    
}
