class Cat{
    constructor(name, species, favFoods, age, photo) {
        this.name = name;
        this.species = species;
        this.favFoods = favFoods;
        this.age = age;
        this.photo = photo;
    }
}

// Wrapper function to use promises with xhr
// I totally wrote this during the exam. Totally. It wasn't at all in project 4 *cough*
let promiseHelper = function (url) {
    let xhr = new XMLHttpRequest();

    return new Promise(function (resolve, reject) {

        xhr.onreadystatechange = function () {
            if(xhr.readyState !== 4) {
                return;
            }

            if (!(xhr.status >= 200 && xhr.status < 300)) {
                reject(`Failed: ${xhr.status} - ${xhr.statusText}`);
            }

            resolve(xhr.response);
        };

        xhr.open("GET", url, true);
        xhr.send();
        return(promiseHelper);
    });
};

let button = document.getElementById('clickIt');
let catsDiv = document.getElementById('cats');
let promisesPromises;
let clickedFlag = false;

button.addEventListener("click", async function () {

    let thisCat;
    if (!clickedFlag) {
        try {
            button.textContent = "Boom.";
            button.style.fontSize = "smaller";

            let title = document.createElement("h1");
            title.textContent = "Catsplosion!";
            catsDiv.appendChild(title);

            promisesPromises = await promiseHelper("./cats.json");

            let catsText = String(promisesPromises);
            let cats = JSON.parse(catsText);

            for (let cat of cats.cats) {
                thisCat = new Cat(cat.name, cat.species, cat.favFoods, cat.age, cat.photo);
                let catDiv = document.createElement("div");

                let catPic = document.createElement("img");
                catPic.src = `${thisCat.photo}`;
                catDiv.appendChild(catPic);

                let catName = document.createElement("h2");
                catName.textContent = thisCat.name;
                catDiv.appendChild(catName);

                let catSpecies = document.createElement("p");
                catSpecies.textContent = `Species: ${thisCat.species}`;
                catDiv.appendChild(catSpecies);

                let favFoodsUL = document.createElement("ul");
                let foodP = document.createElement("p");
                for(let food of thisCat.favFoods){
                    foodP.textContent = "Favourite Food:";
                    let foodLI = document.createElement("li");
                    foodLI.innerHTML = food;
                    favFoodsUL.appendChild(foodLI)
                }
                catDiv.appendChild(foodP);
                catDiv.appendChild(favFoodsUL);

                let catAge = document.createElement("p");
                catSpecies.textContent = `Age: ${thisCat.age}`;
                catDiv.appendChild(catAge);

                catsDiv.appendChild(catDiv);
            }

        } catch (e) {
            console.log(e);
        }

        clickedFlag = true;
    } else {
        button.textContent = "Nope.";
    }
});