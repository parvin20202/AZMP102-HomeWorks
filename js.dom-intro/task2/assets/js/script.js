const section = document.createElement("section");
section.id = "cards";
section.style.backgroundColor = "#E0DBEB";
section.style.padding = "100px 0";

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

const card = document.createElement("div");
card.classList.add("card");
card.style.width = "33%";
card.style.padding = "20px";
card.style.border = "2px solid";
card.style.textAlign = "center";

const icon = document.createElement("i");
icon.classList.add("fa-brands", "fa-twitter", "fa-2x");

const h2 = document.createElement("h2");
h2.textContent = "TWITTER";

const p = document.createElement("p");
p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing.";

const button = document.createElement("button");
button.textContent = "Read More";
button.style.backgroundColor = "#000";
button.style.color = "#fff";
button.style.padding = "10px 50px";
button.style.border = "none";
button.style.borderRadius = "20px";

card.appendChild(icon);
card.appendChild(h2);
card.appendChild(p);
card.appendChild(button);

wrapper.appendChild(card);
section.appendChild(wrapper);

document.body.appendChild(section);

// Muellim qurupda dediniz 1 denesini yazin sonra dersde for usulu ile basa salacam kopyalamagi ona gore 1 denesini yazdim