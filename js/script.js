let projects = document.querySelectorAll('.project');

for (let i = 0; i < projects.length; i++) {
    projects[i].onmouseover = function() {
        projects[i].lastElementChild.classList.add('active');
    }

    projects[i].onmouseout = function() {
        projects[i].lastElementChild.classList.remove('active');
    }
}
