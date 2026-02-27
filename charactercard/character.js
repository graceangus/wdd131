const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "snortleblat.webp",

    attacked: function () {
        this.health -= 20;

        if (this.health < 0) {
            this.health = 0;
        }

        renderCharacter();

        if (this.health === 0) {
            setTimeout(function () {
                alert("Character died");
            }, 100);
        }
    },

    levelUp: function () {
        this.level += 1;
        renderCharacter();
    }
};

function renderCharacter() {
  document.querySelector("#characterName").textContent = character.name;
  document.querySelector("#characterClass").textContent = character.class;
  document.querySelector("#characterLevel").textContent = character.level;
  document.querySelector("#characterHealth").textContent = character.health;

  document.querySelector("#characterImage").setAttribute("src", character.image);
  document.querySelector("#characterImage").setAttribute("alt", character.name);
}

renderCharacter();

document.querySelector("#attackBtn").addEventListener("click", function () {
    character.attacked();
});

document.querySelector("#levelBtn").addEventListener("click", function () {
    character.levelUp();
});