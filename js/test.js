/**
 * Created by Thanh on 3/10/2015.
 */

chrome.tabs.getAllInWindow(null, function(tabs) {
    tabs.forEach(function(tab) {
       myFunction(tab.title,tab.url,tab.icon);
    });
});

function myFunction(tabTitle,tabURL,tabIcon) {
    console.log(tabTitle);

    var newItemLink = document.createElement("a");
    var uList = document.getElementById("links");
    var newItem = document.createElement("li");
    if(tabTitle.length > 20) tabTitle = tabTitle.substring(0,20);

    newItemLink.textContent = tabTitle;
    tabTitle.link(tabURL);
    /*var image = newItemLink.createAttribute("icon");
    image.value = tabIcon;*/
    /*not sure why icon has not shown..
    also tried img src and applying both/either to newItem instead*/

    newItem.appendChild(newItemLink);
    uList.appendChild(newItem);
}





