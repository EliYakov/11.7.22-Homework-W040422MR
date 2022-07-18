const Ball = window.document.getElementById("ball");
console.dir(Ball);

Ball.style.backgroundColor = "red";
Ball.style.height = "200px";
Ball.style.width = "200px";
Ball.style.border = "solid";
Ball.style.borderRadius = "50%";
Ball.style.backgroundImage = "linear-gradient(red, white)";

const Ul = window.document.getElementById("ul");
console.dir(Ul);

Ul.innerHTML =
  "<ul><li>Eli Yakov</li><li>24</li><li>Pardes-Hanna-Karkur</li><li>Champ</li></ul>";

const carProfile = {
  title: "Toyota",
  Price: "200,000 $",
  Km: " Km 100,403",
  Year: 2014,
};

const car = window.document.getElementById("card");
console.dir(car);

car.innerHTML =
  `<div id="card" class="card" style="width: 18rem">
<img src=" https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_960_720.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">` +
  carProfile.title +
  `</h5>
  <p class="card-text">
    This brand is ` +
  carProfile.title +
  ` that was made in ` +
  carProfile.Year +
  `
  </p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">` +
  carProfile.Price +
  `</li>
  <li class="list-group-item">` +
  carProfile.Km +
  `</li>
  <li class="list-group-item">` +
  carProfile.Year +
  `</li>
</ul>`;

const redColor = window.document.getElementById("hello");
console.dir(redColor);
redColor.className = "bg-danger";
redColor.width = "100%";
