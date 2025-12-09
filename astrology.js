/********************************************
 * CONSTELLATION CONTENT DATA
 ********************************************/
const constellationData = [
    {
        title: "Astral Beginnings: Primordial Chaos",
        subtitle: "THE CHAOTIC, UNFORMED BEGINNING OF THE UNIVERSE",
        body: 
        `Before anything was named, before worlds had order, a pensive pressure lay dormant.
        Then, in sudden bursts, the cosmic blankets gained color: air was texturized and from nothing came everything.
        Yet, the cosmic dance of pastels and ultramarine masked primordial chaos; a world of visual splendor lay shaking on universal tremors.
        The universe was born through tumult and trauma, and the precarious pulchritude wove a deceivingly docile picture.`
    },
    {
        title: "Astral Formation: Infinite Beginnings",
        subtitle: "THE BEGINNINGS OF GALACTIC CONSOLDATION AND EXISTENCE",
        body:
        `The galactic fragments danced in cascading circles, swirling heavy and slow in the ether.
        The swirls were beauty itself; consolidated, focused, and channeled into beings.
        Cerulean icy hunks fused with fragmented shards to produce heavenly spheres of new purpose.
        They were beings of adjacent predecessors in a beautiful borrowing of astral matter.
        From the expansive and restless galati space, the primordial soup of stars clashed into new life, and the new bodies in space yielded continuous cosmic reproduction.
        The vacumm of space was now the mother to millions of free, beautiful objects.`
    },
    {
        title: "Astral Dependency: Our Orbits",
        subtitle: "The Gravity of Personal and Intergalactic Bonds",
        body: `In the black seas of infinite, terrestrial bodies spin in a cosmic chase.
        Newborn and coarse, new bodies take orbit spinning forcefully around their atomic parent.
        In an ellipsed daze, unwilling and unknowing rocky offspring circumvent their massive originators.
        Though a new entity synthesizes through the beautiful chaos of universal tumult, they fall in orbit with their astral godparent: an eternal sentence to destiny and locality.
        Life constantly births, breaks and dissipates in the cosmos, yet at their cosmic beginning, so their cosmic end is decided: false independence even at the infinite scale.`
    },
    {
        title: "Astral Importance: First-Person View",
        subtitle: "The Universal Expansion of the Ego",
        body: `In the cosmic spin, planets lose perspective and enter paths of solitude.
        Seeing passing bodies like fleeting memories, bodies float independently and steadily.
        Through eons of astral glide, the motion yields false truths of galactic activity: each planet is the singularity.
        Watching migrant bodies rotate like clockwork, the planet decides it is the originator and the gravitator of all it sees.
        False conceptions yield misplaced self-importance, and logical missteps cause universal misunderstandings.
        Yet as the celestial cluster watches its children spin around in arrogance and ignorance,
        Those same astral offspring laugh with supremacy watching their puppet orbit around itself just the same.
        A young theorem of inflated importance: each rock is the originator to all it sees. 
        A cosmic battle to understand the least and still believe it the loudest.`
    },
    {
        title: "Astral Awareness: Decentering",
        subtitle: "Realigning Perspective with Reality",
        body: `Through countless eras planets spin righteously, each a false center to a fabricated orbit.
        Yet through the motion, a sole rocky child finds the fallacious facts: an orbit askew, a pattern illogical, a child too large.
        As it wobbles through a mental runway, the planet sees its illogical march and its glitching surroundings.
        It fell from its pillar as its mind abandoned the primal misunderstanding: the self is the first, and the self is the most important.
        Through allowing the previous worlds to collapse and die, the rocky body understood its imperfect place in the imperfect spiral.
        Confidence served as an astronomical bar between ego and reality, and the growth of accepting failure led to a new universe of truth.`
    },
    {
        title: "Astral Demise: Solace & Supernova",
        subtitle: "The beautifully painful process of ego death and restarting",
        body: `Spinning in a new world of fragile perspective, the planet watched this foreign world twinkling around it.
        Watching white shimmers sparkle and dance across a sea of swimming black, beauty emanated from the fluorescent point.
        Yet across the infinite expanse, the star burned, split, plumed and flowed. Explosions of energy and light gutted the astral beauty.
        Still, from that splitting death, only beauty was seen. From painful, immediate death: stunning, eternal beauty.
        As each atom of the universal lighthouse sparked and died, they observed the universe a final time. A dying, final gaze at the world it shone for.
        And at the end, all that it saw was beauty. The death of beauty witnessing beauty in a final act, basking in the privilege of the lightyears it twinkled for.
        The galactic implosion was a finite end in the beautiful expanse, yet the years the planet spent observing the brilliant star would last.
        And all the planet would know was beauty. And all the star would know was beauty. Through the pain of accepting finite life and finite beauty, infinite gratitude spurned.
        The beauty of the final act of a supernova.`
    },
    {
        title: "Astral Peace: Cosmic Tranquility",
        subtitle: "The infinite process of stabilizing after an explosion",
        body: `From a singularity's eruption to a supernova's demise, the universe was perilous, unpredictable, and deceiving.
        Cosmic circles held fallacious appearances and galactic deaths held deceivingly beautiful sequences.
        Still through beautiful death and constructive collision, the ubiverse sparkled and grew through pain and beauty.
        The erratic existence of the delicate new world quietly morphed into beautiful structure.
        Finiteness and unpredictability was no limit, but instead a timeframe in which astral beauty could be seen, absorbed, and known.
        Each planet underwent an ego death and observed cosmic deaths far and near, yet still they spun.
        They orbited. They persisted. They observed. And they remained.
        The primordial soup of the infinite universe was unforgiving, vicious, and deadly.
        Yet without the beautiful explosions of the deceased stars, there would be no light for the living to see the splendor of death with.`

    }
];


/********************************************
 * 1. BACKGROUND VIDEO LOOP
 ********************************************/

const vid = document.getElementById("bg-video");
vid.currentTime = 0;

vid.addEventListener("timeupdate", () => {
    if (vid.currentTime > 9) {
        vid.currentTime = 0;
    }
});


/********************************************
 * 2. INTRO → EXIT ANIMATION
 ********************************************/

document.getElementById("start-btn").addEventListener("click", () => {

    const wrapper = document.getElementById("intro-wrapper");
    wrapper.classList.add("unclickable");

    const title = document.querySelector("#intro-header h1");
    const subtitle = document.querySelector("#intro-header h2");
    const button = document.getElementById("start-btn");

    // Animate out
    title.classList.add("zoom-out-up");
    subtitle.classList.add("zoom-out-down");
    button.classList.add("fade-out-scale");

    // Fade wrapper
    wrapper.classList.add("intro-wrapper-hide");

    // Remove intro + show constellation
    setTimeout(() => {
        wrapper.remove();
        document.getElementById("constellation-screen").style.display = "block";
        generateConstellation();
    }, 2400);
});



/********************************************
 * 3. CONSTELLATION GENERATION
 ********************************************/

function generateConstellation() {

    const svg = document.getElementById("constellation");

    // zigzag y positions (percentage of height)
    const heights = [20, 40, 15, 50, 25, 35, 10];
    const nodeCount = heights.length;

    // 90% width container → get actual width
    const wrapper = document.getElementById("constellation-wrapper");
    const screenWidth = wrapper.offsetWidth;

    let nodes = [];
    let lines = [];

    // --- Generate nodes & lines ---
    for (let i = 0; i < nodeCount; i++) {

        let x = (screenWidth / (nodeCount - 1)) * i;
        let y = (heights[i] / 100) * (window.innerHeight * 0.20);

        // Node
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 5);          // smaller node
        circle.setAttribute("class", "node");

        svg.appendChild(circle);
        nodes.push(circle);

        // Line to previous
        if (i > 0) {
            let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", nodes[i - 1].getAttribute("cx"));
            line.setAttribute("y1", nodes[i - 1].getAttribute("cy"));
            line.setAttribute("x2", x);
            line.setAttribute("y2", y);
            line.setAttribute("class", "line");

            svg.appendChild(line);
            lines.push(line);
        }
    }


    /********************************************
     * 4. STAGGERED FADE-IN ANIMATION
     ********************************************/

    nodes.forEach((node, idx) => {
        setTimeout(() => {
            node.classList.add("node-appear");
        }, idx * 250);  // each node appears 0.25s after previous
    });

    lines.forEach((line, idx) => {
        setTimeout(() => {
            line.classList.add("line-appear");
        }, idx * 250 + 150); // lines appear slightly after nodes
    });


    /********************************************
     * 5. ACTIVE NODE HIGHLIGHT
     ********************************************/

    let activeIndex = 0;

    function updateActiveNode() {
        nodes.forEach((node, i) => {
            node.classList.remove("active-node");
            if (i === activeIndex) node.classList.add("active-node");
        });
    }

    updateActiveNode();

    /********************************************
     * UPDATE TEXT PANEL
     ********************************************/
    function updatePanel() {
        const panel = document.getElementById("info-panel");

        panel.classList.add("panel-fade-out");

        setTimeout(() => {
            const data = constellationData[activeIndex];

            document.getElementById("info-title").textContent = data.title;
            document.getElementById("info-subtitle").textContent = data.subtitle;
            document.getElementById("info-body").textContent = data.body;

            panel.classList.remove("panel-fade-out");
            panel.classList.add("panel-fade-in");

            setTimeout(() => {
                panel.classList.remove("panel-fade-in");
            }, 500);
        }, 300);
    }

    updatePanel(); // initial content

    /********************************************
     * 6. NEXT / PREVIOUS BUTTONS
     ********************************************/

    const leftBtn = document.getElementById("arrow-left");
    const rightBtn = document.getElementById("arrow-right");

    leftBtn.addEventListener("click", () => {
        activeIndex = (activeIndex - 1 + nodes.length) % nodes.length;
        updateActiveNode();
        updatePanel();
    });

    rightBtn.addEventListener("click", () => {
        activeIndex = (activeIndex + 1) % nodes.length;
        updateActiveNode();
        updatePanel();
    });
}

