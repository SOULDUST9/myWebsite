const SendMessage = document.getElementById("send-message");
const inputedName = document.getElementById("name");
const inputedMessage = document.getElementById("message");

SendMessage.addEventListener("click", () => {
    const subject = encodeURIComponent("Reaching out to connect");
    window.location.href = `mailto:sjane089@uottawa.ca?subject=${subject}&body=Hello, My name is ${inputedName.value} and I was just contacting you regarding ${inputedMessage.value}`;
});
const ProjectsNames = ["Task Manager", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6"];
const ProjectDesc = [
    "This is the task manager I created is a simple yet effective tool for organizing daily activities. It allows users to add new tasks, mark them as complete, and edit existing entries to keep information up to date. Integrated with a calendar view, it helps users visualize deadlines and plan their schedules more efficiently. With its easy-to-use interface, managing and tracking tasks becomes straightforward and organized.", 
    "Description 2", 
    "Description 3", 
    "Description 4", 
    "Description 5", 
    "Description 6"
];
const ProjectImg = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];

const projectElements = [
  { name: document.getElementById("project1Name"), desc: document.getElementById("project1Desc"), img: document.getElementById("project1Img") },
  { name: document.getElementById("project2Name"), desc: document.getElementById("project2Desc"), img: document.getElementById("project2Img") },
  { name: document.getElementById("project3Name"), desc: document.getElementById("project3Desc"), img: document.getElementById("project3Img") }
];

let position = 0;

function showProjects() {
  for (let i = 0; i < projectElements.length; i++) {
    const index = position + i;
    if (index < ProjectsNames.length) {
      projectElements[i].name.textContent = ProjectsNames[index];
      projectElements[i].desc.textContent = ProjectDesc[index];
      projectElements[i].img.src = ProjectImg[index]; 
    } else {
      projectElements[i].name.textContent = "";
      projectElements[i].desc.textContent = "";
      projectElements[i].img.src = "";
    }
  }
}

document.getElementById("next-projects").addEventListener("click", () => {
  if (position + 3 < ProjectsNames.length) {
    position += 3;
    showProjects();
  }
});

document.getElementById("prev-projects").addEventListener("click", () => {
  position = Math.max(0, position - 3);
  showProjects();
});

showProjects();
