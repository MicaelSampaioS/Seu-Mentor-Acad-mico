function pesquisar (){
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
   
    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (campoPesquisa == "") {
        section.innerHTML = "<p>:( Ahhh... Nenhum resultado foi encontrado!</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    console.log(campoPesquisa);

    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";
    for (let dado of dados)
        
        if (dado.título.includes(campoPesquisa) || dado.descrição.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){

        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.título}</a>
        </h2>
        <p class="descricao-meta">${dado.descrição}</p>
        <a href=${dado.link} target="_blank">Saiba mais</a>
    </div>
    `;
    }
    
    if (!resultados) {
        resultados = "Não existem resultados para esta busca!"
    }
    section.innerHTML = resultados
}
