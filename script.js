// 1. Function to Switch Tabs
function showSection(sectionId, btn) {
// Remove 'active-content' class from all sections
document.querySelectorAll('.tab-content').forEach(div => {
        div.classList.remove('active-content');
});

// Remove 'active' class from all buttons
document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
});

// Add 'active' classes to the clicked button and target section
document.getElementById(sectionId).classList.add('active-content');
    btn.classList.add('active');
}

// 2. Function to Move Form Data to Q&A
function postToCommunity() {

    // Get values from the form inputs
    const name = document.getElementById('userName').value;
    const message = document.getElementById('userMessage').value;

    // Simple validation: Ensure fields aren't empty
    if (name === "" || message === "") {
        alert("Please enter your Name and Message.");
        return;
    }

// Create a new HTML element for the post
const newPost = document.createElement('div');
newPost.className = 'qa-box'; // Apply the CSS style

// Insert the content
newPost.innerHTML = `<strong>${name} asks:</strong><br>${message}`;

// Get the Q&A container
const container = document.getElementById('qaContainer');

// Add the new post to the TOP of the list (prepend)
container.prepend(newPost);

// Clear the form fields
document.getElementById('feedbackForm').reset();

// Alert the user
alert("Thank you! Your question has been posted to Community Q&A.");

// Automatically switch the tab to "Community Q&A" so they can see it
// We select the 4th button (index 3) which is the Q&A button
const qaButton = document.querySelectorAll('.tab-btn')[3];
    showSection('community', qaButton);
}

// Internal website search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('input[type="search"]');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.toLowerCase().trim();
            
            if (query) {
                // Store search query and redirect to search results page
                sessionStorage.setItem('searchQuery', query);
                window.location.href = 'search-results.html';
            }
        });
    }
});

// Search database - add your pages here
// Comprehensive search database - add your pages here
const searchDatabase = [
    {
        title: "Home - Pet Care Hub",
        url: "index.html",
        content: "pet care tips dogs cats rabbits hamsters fish turtles tortoise birds expert advice healthy pets animal care guide veterinary wellness nutrition feeding grooming training behavior health emergency first aid vaccinations"
    },
    {
        title: "Cat Care Guide",
        url: "cat.html",
        content: "cat care feline kitten feeding nutrition diet food wet dry litter box scratching post grooming brushing bathing health vaccination FVRCP rabies FeLV veterinary vet doctor emergency behavior training meow purr play toys exercise lifespan 12-18 years senior adult kitten age weight obesity dental teeth nail clipping ear cleaning eye care fur coat shedding hairball allergies fleas ticks worms parasite indoor outdoor safety toxic plants chocolate onions garlic milk dairy poison symptoms vomiting diarrhea lethargy breathing collar harness carrier travel stress anxiety socialization adoption rescue shelter breed persian siamese maine coon bengal ragdoll british shorthair cost monthly expenses supplies food water bowl"
    },
    {
        title: "Dog Care Guide",
        url: "dog.html",
        content: "dog care canine puppy feeding nutrition diet food kibble wet dry training obedience commands sit stay fetch bark walks exercise running playing health vaccination DHPP distemper parvovirus rabies bordetella veterinary vet doctor emergency grooming bathing brushing shedding nail trim ear cleaning teeth dental behavior socialization aggressive barking biting leash collar harness lifespan 10-13 years senior adult puppy age breed small medium large weight obesity parasites fleas ticks worms heartworm rabies bite safety toxic foods chocolate grapes raisins onions garlic xylitol poison symptoms vomiting diarrhea seizures breathing coughing sneezing limping injury wound bleeding first aid CPR adoption rescue shelter cost monthly expenses supplies toys treats kennel crate house training potty pee poop accidents"
    },
    {
        title: "About Us - Pet Care Hub",
        url: "about.html",
        content: "about pet care hub mission team community feedback contact support email phone address UMT Kuala Nerus Terengganu Malaysia questions help veterinary professionals evidence-based information guides resources free access community driven experience sharing QA ask reply post message get in touch subscribe newsletter"
    },
    {
        title: "Pet Categories - Compare Pets",
        url: "petcategory.html",
        content: "pet categories types animals choose pet compare comparison lifespan cost care level difficulty space needed monthly expenses budget beginner friendly family kids apartment small space low maintenance easy care dog 10-13 years high care medium-large space RM200-500 cat 12-18 years medium care small-medium space RM150-300 fish 5-10 years medium care small space aquarium tank RM100-200 rabbit 8-12 years medium care medium space hutch cage RM100-250 hamster 2-3 years low care small space cage wheel RM50-100 tortoise turtle 50-100 years medium care medium space terrarium RM100-250 bird parrot budgie 10-15 years medium care small-medium cage RM80-200 reptile exotic pet which pet is best for me first pet beginner pet low cost cheap affordable expensive"
    },
    {
        title: "Fish Care Guide",
        url: "fish.html",
        content: "fish care aquarium tank setup water quality pH temperature filter heater plants decoration gravel substrate feeding food pellets flakes frozen live brine shrimp bloodworms algae cleaning maintenance water change weekly testing ammonia nitrite nitrate cycling nitrogen cycle goldfish betta tropical freshwater saltwater marine reef species compatibility aggressive peaceful community tank size gallons liters oxygen aeration pump bubbles disease ich white spot fin rot fungus parasite treatment medication quarantine lifespan 5-10 years breeding fry baby fish lighting photoperiod cost monthly RM100-200"
    },
    {
        title: "Rabbit Care Guide",
        url: "rabbit.html",
        content: "rabbit bunny care feeding diet hay timothy alfalfa pellets vegetables carrots lettuce greens treats housing hutch cage indoor outdoor bedding litter box potty training grooming brushing shedding fur coat nail trim health vaccination veterinary vet spay neuter behavior social bonding pair thumping binky digging chewing toys enrichment exercise hopping running playing lifespan 8-12 years baby kit juvenile adult senior breed size dwarf mini lop rex netherland flemish giant dental teeth malocclusion GI stasis bloating diarrhea fleas mites ear infection myxomatosis RHDV safety toxic plants cost monthly RM100-250"
    },
    {
        title: "Hamster Care Guide",
        url: "hamster.html",
        content: "hamster care feeding diet pellets seeds vegetables treats water bottle housing cage tank aquarium bedding nesting material wheel exercise ball toys tunnel hideout cleaning weekly spot daily health veterinary vet check wet tail diarrhea respiratory infection mites skin disease behavior nocturnal active night sleeping day biting taming handling Syrian dwarf Roborovski Chinese Russian Campbell winter white breed solitary territorial lifespan 2-3 years baby pup juvenile adult geriatric teeth overgrown dental temperature cold draft hibernation cost monthly RM50-100 beginner easy low maintenance small space"
    },
    {
        title: "Tortoise Care Guide",
        url: "tortoise.html",
        content: "tortoise turtle terrapin reptile care feeding diet vegetables leafy greens hay pellets calcium supplement UVB lighting heat lamp basking temperature humidity enclosure terrarium vivarium outdoor indoor substrate soil bedding water dish soaking bathing shell pyramiding metabolic bone disease MBD health hibernation brumation veterinary vet herpetologist behavior slow climbing digging lifespan 50-100 years long-lived species Hermann Greek Russian sulcata leopard red-eared slider box turtle aquatic semi-aquatic land tortoise size growth baby hatchling juvenile adult breeding eggs cost monthly RM100-250 commitment long-term care"
    },
    {
        title: "Search Results",
        url: "search-results.html",
        content: "search results find query looking for pet care information tips guides help support"
    }
];


// Perform search
        function performSearch(query) {
            const results = searchDatabase.filter(page => {
                return page.title.toLowerCase().includes(query) || 
                       page.content.toLowerCase().includes(query);
            });
            return results;
        }

// Display results
function displayResults() {
    const query = sessionStorage.getItem('searchQuery');
    const queryDisplay = document.getElementById('search-query');
    const resultsContainer = document.getElementById('results-container');
            
    if (query) {
        queryDisplay.textContent = `"${query}"`;
        const results = performSearch(query.toLowerCase());
                
    if (results.length > 0) {
        results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'search-result-item';
        resultDiv.innerHTML = `
        <h2 class="result-title">${result.title}</h2>
        <p class="result-snippet">Relevant content found on this page</p>
        <a href="${result.url}" class="result-link">Visit Page →</a>
        `;
        resultsContainer.appendChild(resultDiv);
    });
    } else {
        resultsContainer.innerHTML = '<div class="no-results">No results found. Try different keywords.</div>';
    }
}
}
// Run search on page load
        displayResults();




// 1. Function to Switch Tabs
function showSection(sectionId, btn) {
    document.querySelectorAll('.tab-content').forEach(div => {
        div.classList.remove('active-content');
    });
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active-content');
    btn.classList.add('active');
}

// 2. Function to Move Form Data to Q&A
function postToCommunity() {
    const name = document.getElementById('userName').value;
    const message = document.getElementById('userMessage').value;
    
    if (!name || !message) {
        alert("Please enter your Name and Message.");
        return;
    }
    
    // Create a unique ID for this post
    const postId = 'post-' + Date.now();
    
    // Create the main post container
    const newPost = document.createElement('div');
    newPost.className = 'qa-box';
    newPost.id = postId;
    newPost.innerHTML = `
        <div class="main-post">
            <strong>${name} asks:</strong><br>${message}
        </div>
        <div class="replies-container" id="replies-${postId}">
            <!-- Replies will appear here -->
        </div>
        <div class="reply-form">
            <input type="text" placeholder="Your name" class="reply-name" style="width: 30%; padding: 8px; margin-right: 10px; border-radius: 15px; border: 1px solid #FFE5D4;">
            <input type="text" placeholder="Write a reply..." class="reply-text" style="width: 50%; padding: 8px; margin-right: 10px; border-radius: 15px; border: 1px solid #FFE5D4;">
            <button onclick="addReply('${postId}')" style="background: var(--primary-orange); color: white; padding: 8px 15px; border: none; border-radius: 15px; cursor: pointer; font-weight: 600;">Reply</button>
        </div>
    `;
    
    const container = document.getElementById('qaContainer');
    container.insertBefore(newPost, container.children[1]);
    
    document.getElementById('feedbackForm').reset();
    alert("Thank you! Your question has been posted to Community Q&A.");
    
    const qaButton = document.querySelectorAll('.tab-btn')[3];
    showSection('community', qaButton);
}

// 3. Function to Add Reply to a Post
function addReply(postId) {
    const post = document.getElementById(postId);
    const nameInput = post.querySelector('.reply-name');
    const textInput = post.querySelector('.reply-text');
    
    const replyName = nameInput.value.trim();
    const replyText = textInput.value.trim();
    
    if (!replyName || !replyText) {
        alert("Please enter your name and reply message.");
        return;
    }

    // Create reply element
    const replyDiv = document.createElement('div');
    replyDiv.className = 'reply-item';
    replyDiv.innerHTML = `
        <strong style="color: #6B4423;">↳ ${replyName} replied:</strong>
        <span style="color: #666; margin-left: 10px;">${replyText}</span>
    `;
    
    // Add reply to the replies container
    const repliesContainer = post.querySelector('.replies-container');
    repliesContainer.appendChild(replyDiv);
    
    // Clear input fields
    nameInput.value = '';
    textInput.value = '';
    
    // Optional: Show success message
    alert("Your reply has been posted!");
}
