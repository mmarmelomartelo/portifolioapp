const container = document.querySelector(".container")
const projects = [
  { name: "My Resume", image: "images/cv-image3.png", link:"https://marceloresume.herokuapp.com/" },
  { name: "GitHub", image: "images/GitHub-Mark-120px-plus.png", link:"https://github.com/mmarmelomartelo" },
  { name: "HTML, CSS, JavaScript", image: "images/cup-of_tea_wide.jpg", link:"https://mmarmelomartelo.github.io/" },
  { name: "D.I.Y Projects", image: "images/DIY.png", link: "https://github.com/mmarmelomartelo/NO_dataLog_GUI/blob/master/README.md#no-datalog-gui" },
  { name: "GUI in Tkinter", image: "images/tkintergui.png", link:"https://github.com/mmarmelomartelo/GUI_to_do_List_Python#to-do-list-in-python-graphical-user-interface" },
  { name: "FlashCard in Django", image: "images/djflashcardgame.jpg", link:"https://mathflashcard.herokuapp.com/" },
  { name: "Educative Software", image: "images/educational_software.png", link:"https://mmarmelomartelo.github.io/vascular_reactivity/" },
  { name: "To-Do List Stilyzed", image: "images/todolist.png" },
  { name: "PubMed", image: "images/PubMed.jpg", link:"https://www.ncbi.nlm.nih.gov/pubmed/?term=montenegro+mf+and+not+spain"  },
]

const showProjects = () => {
    let output = ""
    projects.forEach(
      ({ name, image, link }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="${link}">Check it</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showProjects)