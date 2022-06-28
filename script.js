const data = [
    { title: "Nadpis 1", description: "Toto je odstavec prvního řádku komponenty accordion" },
    { title: "Nadpis 2", description: "Toto je odstavec druhého řádku komponenty accordion" },
    { title: "Nadpis 3", description: "Toto je odstavec třetího řádku komponenty accordion" }];

//title jako buttony
//na onclick se objevi description, je tam hidden nebo se tam vytvori na click?
//asi spis vytvorim div kde bude button a hidden p??
//nebo muzu udelat classu accordion a v ty ctor kterej udela html nebude to moc slozity?

function Loaded() {
    data.forEach(item => {
        let btn = document.createElement("button");
        btn.innerText = item.title;
        btn.setAttribute("onclick", "ShowDesc(this)")
        document.body.appendChild(btn);
    })
}

function ShowDesc(btn){


}
