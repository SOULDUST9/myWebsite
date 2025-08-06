const SendMessage = document.getElementById("send-message");
const inputedName = document.getElementById("name");
const inputedMessage = document.getElementById("message");

SendMessage.addEventListener("click", () => {
    const subject = encodeURIComponent("Reaching out to connect");
    window.location.href = `mailto:sjane089@uottawa.ca?subject=${subject}&body=Hello, My name is ${inputedName.value} and I was just contacting you regarding ${inputedMessage.value}`;
});
const ProjectsNames = [
  "Task Manager", 
  "Password Creator", 
  "Language Learning Project", 
  "Rentify", 
  "Circuit Analysis Labs",
  "Python Class Assignments", 
  "Digital Systems Labs",
  "Pomodoro Website",
  "Traffic light Simulator",
  "Data Structures and Alogrithms",
  "Mini Arduino Projects Collection",
  "Pong Game"
];

const ProjectDesc = [
  "This is the task manager I created is a simple yet effective tool for organizing daily activities. It allows users to add new tasks, mark them as complete, and edit existing entries to keep information up to date. Integrated with a calendar view, it helps users visualize deadlines and plan their schedules more efficiently. With its easy-to-use interface, managing and tracking tasks becomes straightforward and organized. link: "+"https://souldust9.github.io/Task-Manager/", 
  "This password generator is designed to create strong and secure passwords with high customization. Users can choose a length between 4 and 26 characters, allowing flexibility for different security requirements. The generated passwords include a combination of lowercase letters, uppercase letters, numbers, and special characters, making them highly resistant to common hacking techniques like brute force or dictionary attacks. It’s a simple yet effective tool for improving online account security. link: "+"https://souldust9.github.io/Password-Creator/", 
  "This Project is an ongoing personal initiative aimed at strengthening my programming foundation through hands-on practice. Since June 2025, I have completed various mini-projects and exercises across multiple languages, enhancing both problem-solving and development skills. I have built and styled responsive web pages using HTML, CSS, and JavaScript while reinforcing C++ fundamentals, including syntax, control structures, and object-oriented programming. The project continues to evolve as I plan to explore additional languages and frameworks to broaden my expertise. link: "+"https://github.com/SOULDUST9/LangLearning-", 
  "Rentify was a school group project where I collaborated with a team of four to develop a rental management application from September to December 2024. We successfully delivered a functional MVP that streamlined property listings and tenant management processes. My contributions focused on improving performance and user experience by working on core coding, fixing bugs, and enhancing the UI for smoother navigation and faster load times. Additionally, I was involved in integration, testing, and refinement to ensure stable feature deployment. The project concluded with successful demonstrations and positive feedback, reinforcing the effectiveness of our solution.", 
  "In Circuit Theory and Electronics labs, I worked on building and testing various electrical circuits to understand the behavior of components such as resistors, capacitors, diodes, and transistors. These experiments involved using lab equipment like oscilloscopes, function generators, and multimeters to measure and analyze circuit performance. Through these labs, I gained practical experience in circuit assembly, troubleshooting, and data analysis, reinforcing theoretical concepts and strengthening my understanding of electronic systems.",
  "During my Python Introduction course, I completed several assignments that strengthened my understanding of fundamental programming concepts. These tasks covered essential topics such as working with variables, control structures, and functions, gradually building up to object-oriented programming using classes and objects. I also gained experience with file handling by reading from and writing to text files, allowing me to manage data efficiently within programs. Through these assignments, I practiced problem-solving and learned how to structure clean, maintainable code. This foundational experience provided me with a solid base for tackling more advanced programming challenges in future projects.", 
  "In Digital Systems I, I completed a series of labs focused on designing and implementing digital circuits using Quartus. These labs involved writing hardware description code to configure the Altera DE2-115 FPGA board, enabling me to control and test outputs such as LEDs, switches, and displays. Through this hands-on experience, I developed a solid understanding of digital logic, circuit design, and FPGA programming, building a strong foundation for future work in hardware development and embedded systems.",
  "Created a web-based Pomodoro timer application to help users improve productivity through structured work and break intervals. The site features an intuitive user interface, customizable timer settings, and real-time countdown functionality. Built with HTML, CSS, and JavaScript, the project enhanced my skills in front-end development, DOM manipulation, and responsive design. link: "+"https://souldust9.github.io/Pomodoro-App/",
  "For the Traffic Light Simulator project, I designed and implemented a system that modeled real-world traffic light behavior using UML state machines and Java. The simulator supported multiple traffic modes, including low, moderate, and high traffic conditions, each with distinct timing and transitions. Through this project, I gained experience in event-driven programming, state management, and testing to ensure accurate light sequencing and smooth state transitions.",
  "In the Data Structures and Algorithms course, I completed assignments and projects that focused on implementing and analyzing fundamental data structures such as arrays, linked lists, stacks, queues, trees, and hash tables. I also gained hands-on experience with algorithm design, covering sorting, searching, and recursion techniques while evaluating their time and space complexities. These exercises strengthened my problem-solving skills and deepened my understanding of how efficient data organization and algorithm optimization impact software performance.",
  "Built a series of small-scale Arduino projects to explore embedded systems and hardware programming. These projects included working with sensors, LEDs, motors, and basic communication modules to create interactive circuits. Through these hands-on experiments, I gained experience with microcontroller programming in C/C++, circuit design, and integrating hardware components to achieve functional prototypes.",
  "Developed a simple Pong game using Java to practice object-oriented programming and game development fundamentals. The project implemented core game mechanics such as paddle movement, ball collision detection, and scoring logic. A graphical user interface was created using Java’s built-in libraries, providing an interactive and responsive gameplay experience. This project strengthened my skills in event handling, animation loops, and software design principles."
];

const ProjectImg = [
  "img/project-Images/TaskM.png",
  "img/project-Images/passManger.png", 
  "img/project-Images/image4.png",
  "img/project-Images/fillerImg.png", 
  "img/project-Images/image2.png",  
  "img/project-Images/image3.png",
  "img/project-Images/image5.png",
  "img/project-Images/Pomodoro.png",
  "img/project-Images/Traf.png",
  "img/project-Images/xxx.png",
  "img/project-Images/image6.png",
  "img/project-Images/image7.png"
];

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
