const projectItem_1 = document.getElementById("projectItem-1");
const projectItem_2 = document.getElementById("projectItem-2");
const projectItem_3 = document.getElementById("projectItem-3");

const hiddenProjectItem_1 = document.getElementById("projectHidden-1");
const hiddenProjectItem_2 = document.getElementById("projectHidden-2");
const hiddenProjectItem_3 = document.getElementById("projectHidden-3");

const unhiddenProjectItem_1 = () => {
    hiddenProjectItem_1.style.display = "block";

}

const unhiddenProjectItem_2 = () => {
    hiddenProjectItem_2.style.display = "block";
}

const unhiddenProjectItem_3 = () => {
    hiddenProjectItem_3.style.display = "block";
}

const hiddenProjectItemAgain_1 = () => {
    hiddenProjectItem_1.style.display = "none";
};

const hiddenProjectItemAgain_2 = () => {
    hiddenProjectItem_2.style.display = "none";
};

const hiddenProjectItemAgain_3 = () => {
    hiddenProjectItem_3.style.display = "none";
};

projectItem_1.addEventListener("mouseover", unhiddenProjectItem_1);
projectItem_2.addEventListener("mouseover", unhiddenProjectItem_2);
projectItem_3.addEventListener("mouseover", unhiddenProjectItem_3);

projectItem_1.addEventListener("mouseout", hiddenProjectItemAgain_1);
projectItem_2.addEventListener("mouseout", hiddenProjectItemAgain_2);
projectItem_3.addEventListener("mouseout", hiddenProjectItemAgain_3);
