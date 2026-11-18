/* Creating Footer with copyright */

const create_footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(create_footer);

const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Andrew Mostafania ' + thisYear + " ©";
footer.appendChild(copyright);

/* Create list of Skills */
let skills = ['Javascript', 'HTML', 'CSS', "Github"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}