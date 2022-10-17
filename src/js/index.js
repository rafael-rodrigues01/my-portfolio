const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) =>{
    tab.addEventListener("click", () =>{

        if(tab.classList.contains("selected")){
            return;
        }
        
        selectTab(tab);
        showTabInfo(tab);
    });
});

function selectTab(tab){
    const selectedTab = document.querySelector(".tab.selected");
    selectedTab.classList.remove("selected");
    tab.classList.add("selected");
}

function showTabInfo(tab){
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    const tabInfoElementId = `information-${tab.id}`

    const informationToBeShown = document.getElementById(tabInfoElementId);
    informationToBeShown.classList.add("selected");
}
