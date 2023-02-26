
const aTagArray = document.getElementsByClassName('fish');
console.log(aTagArray)

Array.from(aTagArray).forEach((aTag, index) => {
    aTag.addEventListener('click', () => {
        // Your click event code here

        console.log(`Clicked on an <a>${index} tag!`);
        html = "";
        if ((index + 1) == 1) {
            html += `<div class="info">
    <div class="img"><img src="./fishes/bluefaceangel.png" alt=""></div>
    <div class="text">
        <h1>The Blueface Angelfish</h1>
        <p>The Blueface Angelfish is an interesting species to raise, as they change so much throughout their lifetimes. Typically, the young on offer are about one inch long, but can grow to be over one foot as adults.
        </p>
    </div>
</div>`;
        }
        else if ((index + 1) == 2) {
            html = `<div class="info">
    <div class="img"><img src="./fishes/BangaiCardinal.png" alt=""></div>
    <div class="text">
        <h1>Banggai cardinalfish</h1>
        <p>The Banggai cardinalfish (Pterapogon kauderni) is a small tropical cardinalfish in the family Apogonidae. It is the only member of its genus.[2] This attractive fish is popular in the aquarium trade. It is among the relatively few marine fish to have been bred regularly in captivity, but significant numbers are still captured in the wild and it is now an endangered species. </p>
    </div>
</div>`;
        } else if ((index + 1) == 3 || (index + 1) == 10) {
            html = `<div class="info">
    <div class="img"><img src="./fishes/clownfish.png" alt=""></div>
    <div class="text">
        <h1>The Clown Fish</h1>
        <p>Clownfish live at the bottom of shallow seas at depths of 10-50 feet (3-15 m) in sheltered rocky or coral reefs. Their alternative name, anemonefish, reflects the symbiotic relationship these fish form with sea anemones. Clownfish are omnivores and eat a variety of prey items, but feed primarily on zooplankton including copepods, isopods and tunicate larvae. In addition to this, clownfish also eat algae, as well as the uneaten prey items and dead tentacles of their host anemones.</p>
    </div>
</div>`;
        } else if ((index + 1) == 4 || (index + 1) == 7) {
            html = `<div class="info">
    <div class="img"><img src="./fishes/PiccasoTrigger.png" alt=""></div>
    <div class="text">
        <h1>The Piccaso Trigger</h1>
        <p>Just hearing that name is enough to tell you this fish is a work of art. The name refers to the fish’s striking coloration, and perhaps to the bold geometry and prominent eyes that bring to mind Picasso’s grand mural, “Guernica”. However you refer to it, the Picasso triggerfish is a fascinating animal and a joy to watch as it glides above sandy reef flats.</p>
    </div>
</div>`;
        } else if ((index + 1) == 5 || (index + 1) == 8) {
            html = `<div class="info">
    <div class="img"><img src="./fishes/RengalTang.png" alt=""></div>
    <div class="text">
        <h1>The Regal Tang</h1>
        <p>Regal tang fish (Paracanthurus hepatus) are an incredibly popular saltwater aquarium fish species. They are found in the wild along coral reefs and lagoons throughout the Indo-Pacific, so they are just as suited to tropical home aquariums. With their unique ‘royal blue’ color, regal tangs make an attractive addition to marine tanks</p>
    </div>
</div>`;
        } else if ((index + 1) == 6 || (index + 1) == 9) {
            html = `<div class="info">
    <div class="img"><img src="./fishes/yellowTang.png" alt=""></div>
    <div class="text">
        <h1>The Yellow Tang</h1>
        <p>The yellow tang is found in the Indo-Pacific from East Africa to Polynesia, usually living at depths of 15 m (49 ft). It normally lives around coral reefs, but may venture into lagoons and channels. The species reaches a maximum length of 96 cm (38 in) long for males and 78 cm (31 in) long for females.</p>
    </div>
</div>`;
        }

        append = document.getElementById("information");
        console.log(append)
        append.innerHTML = html;
        console.log(append)
        const scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;

    });

});



// let darkmode = document.querySelector('#darkmode');

// darkmode.onclick = () => {
//     if (darkmode.classList.contains('bx-moon')) {
//         darkmode.classList.replace('bx-moon', 'bx-sun');
//         document.body.classList.add('active');
//     } else {
//         darkmode.classList.replace('bx-sun', 'bx-moon');
//         document.body.classList.remove('active');
//     }
// }