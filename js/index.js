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


const messageForm = document.querySelector('[name="leave_message"]');
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.usersName.value;
    console.log(name);
    const email = e.target.usersEmail.value;
    console.log(email);
    const message = e.target.usersMessage.value;
    console.log(message);

    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
                            <span>${message}</span>`

    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = "button";
    removeButton.addEventListener('click', (e) => {
        let entry = removeButton.parentNode;
        entry.remove();
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
})


// Fetch API to fetch repository data from my github

fetch('https://api.github.com/users/rhyfe/repos')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let repositories = data;
        console.log(repositories);
        if (repositories.length === 0) {
            throw new Error('Repository list is empty');
        }

        // display repositories in list below

        const projectSection = document.querySelector('#Projects');
        const projectList = projectSection.querySelector('ul');
        for (let i = 0; i< repositories.length; i++) {
            let project = document.createElement('li');
            project.innerHTML = repositories[i].name;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error(error);
    });


