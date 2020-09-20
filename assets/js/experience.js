// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title:"Society of Automotive Engineers India ",
    cardImage: "assets/images/experience-page/sae.png",
    description:
      "Aero NSS Team Captain of SAE ADC 2020",
  },
  {
    title:"Institution of Engineers (India)",
    cardImage: "assets/images/experience-page/ie.png",
    description:
      "Acted as Student Convener,General Secretary & Student Representative",
  },
  {
    title: " Aeromodelling and Arial Robotics Club" ,
    cardImage: "assets/images/experience-page/aarc.jpg",
    description:
      "Co- founder of this college club and Vice President",
  },
  {
    title: "iEDC NSSCE",
    cardImage: "assets/images/experience-page/edc.png",
    description:
      "IoT Lab Head for period of 2020-2021",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `
      <div class="card" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h3 class="title">${title}</h3>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Project Excecutive, Intern",
    cardImage: "assets/images/experience-page/YOLO.png",
    place: "Youth Online Learning Opportunities",
    time: "(September 2020-present)",
    desp: "<li>Project Excecutive of Project My Pincode. </li> <li>Social Media For Social Change</li>"
  },
  {
    title: "Project Team Lead, Intern",
    cardImage: "assets/images/experience-page/YOLO.png",
    place: "Youth Online Learning Opportunities",
    time: "(May,2020-September 2020)",
    desp: "<li>I have worked in social community projects. </li> <li>I have managed lots of intern, Also guided them.</li> <li>Worked in recruitment team.</li> <li>Attended Lots of Online training section of Management Skills.</li> <li>I have interacted people from All over India .</li>",
  },
  {
    title: "Reasearch and Development,Intern",
    cardImage: "assets/images/experience-page/Hound.png",
    place: "Hound Electric Pvt. Ltd",
    time: "(April,2020 - 15 Days)",
    desp: "<li> Reasearched Autonomous Electric Vehicle</li> <li>Static requirement their Possiblity in Roads</li> <li>Costs and Marketing.</li>",
  },
  {
    title: "Robotics and Embedded system Intern",
    cardImage: "assets/images/experience-page/Infox.png",
    place: "INFOX TECHNOLOGIES",
    time: "(July 19- 15 Days)",
    desp:"<li>Worked on for Image Encryption and Image Forgery Detection.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
