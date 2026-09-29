// Member Highlight Data
// stores information that will be displayed in each member's card


const memberData = {

    bangchan: {
        name: "BANG CHAN",
        image: "hl_images/bangchan.jpg",
        performance: "인정하기 싫어 - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=cESg37OFeso"
    },

    leeknow: {
        name: "LEE KNOW",
        image: "hl_images/leeknow.jpg",
        performance: "Love Me or Leave Me - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=8_7Y7PE6oWg"
    },

    changbin: {
        name: "CHANGBIN",
        image: "hl_images/changbin.jpg",
        performance: "Mirror Mirror (Feat. Changbin) - F.HERO x MILLI",
        link: "https://www.youtube.com/watch?v=FZlBKl-spfY"
    },

    hyunjin: {
        name: "HYUNJIN",
        image: "hl_images/hyunjin.jpg",
        performance: "Psycho (Cover) - Music Bank 200626",
        link: "https://www.youtube.com/watch?v=0Y8HdSGRaSs"
    },

    han: {
        name: "HAN",
        image: "hl_images/han.webp",
        performance: "Close - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=6Hynx73Vvjw"
    },

    felix: {
        name: "FELIX",
        image: "hl_images/felix.webp",
        performance: "Unfair - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=Oswujxm2Ag0"
    },

    seungmin: {
        name: "SEUNGMIN",
        image: "hl_images/seungmin.webp",
        performance: "그렇게, 천천히, 우리 (As We Are) - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=kAzmhLHePqU"
    },

    in: {
        name: "I.N",
        image: "hl_images/in.webp",
        performance: "막내온탑 - SKZ-RECORD",
        link: "https://www.youtube.com/watch?v=SjKARrJwqzE"
    }

};

// DOM ELEMENTS

// Selects all member cards in the scrolling carousel
const memberCards = document.querySelectorAll(".member-card");

// Selects the popup and the elements that JavaScript will update
const popup = document.getElementById("memberPU");
const popupImage = document.getElementById("popupImage");
const popupName = document.getElementById("popupName");
const popupPerformance = document.getElementById("popupPerformance");
const performanceLink = document.getElementById("performanceLink");

// Selects the X button used to close the popup
const closePU = document.getElementById("closePU");


// MEMBER CARD CLICK EVENT

memberCards.forEach(function(card) {

    card.addEventListener("click", function() {

        // Reads the data-member value from the clicked card
        const member = card.dataset.member;

        // Uses that value to find the matching member information
        const data = memberData[member];

        // Updates the popup with the selected member's information
        popupName.textContent = data.name;
        popupImage.src = data.image;
        popupPerformance.textContent = data.performance;
        performanceLink.href = data.link;

        // Adds the active class to make the popup visible
        popup.classList.add("active");

    });

});


// POPUP CLOSING EVENTS

// Closes the popup when the X button is clicked
closePU.addEventListener("click", function() {
    popup.classList.remove("active");
});

// Closes the popup when the user clicks outside of the popup card
popup.addEventListener("click", function(event) {

    if (event.target === popup) {
        popup.classList.remove("active");
    }

});

// Closes the popup when the Escape key is pressed
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        popup.classList.remove("active");
    }

});


// BOM - RESPONSIVE WINDOW BEHAVIOUR

// Checks the browser window width and applies the appropriate layout class
function updateLayout() {

    const width = window.innerWidth;

    // Mobile layout
    if (width < 600) {
        document.body.classList.add("mobile-view");
        document.body.classList.remove("tablet-view");
    }

    // Tablet layout
    else if (width < 1000) {
        document.body.classList.add("tablet-view");
        document.body.classList.remove("mobile-view");
    }

    // Desktop layout
    else {
        document.body.classList.remove("mobile-view");
        document.body.classList.remove("tablet-view");
    }
}

// Runs once when the page initially loads
updateLayout();

// BOM resize event - runs updateLayout whenever the browser is resized
window.addEventListener("resize", updateLayout);