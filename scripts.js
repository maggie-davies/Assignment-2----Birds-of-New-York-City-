// Bird data
    const birds = {
      grackle: {
        title: "Common Grackle",
        fact: "The Common Grackle is one of the spring's first migrators, arriving in the city as early as February. Grackles can be seen in forested areas or near bodies of water.  Keep an eye out for their glossy dark feathers and blue-sheened head. Spotting one of these birds will let you know that the spring migration has started!"
      },
       warbler: {
        title: "Blackburnian Warbler",
        fact: "Warblers migrate by night and rest (and eat) during the day. These small birds typically begin migrating in April. Often perching near the tops of trees, warblers can be recognized by their vibrant colors and birdsong. Over 36 species of warbler pass through the city each year.  A group of warblers can be called a bouquet, a fall, a wrench, or a confusion of warblers!"
      },
      woodcock: {
        title: "American Woodcock",
        fact: "American Woodcocks are famous for their hip-shaking dance moves that quickly attract a crowd.  Migrating when snow is still on the ground, woodcocks are visible in the city as early as February. Male American Woodcocks have been spotted in Bryant Park this spring, earning them a feature in the New York Times!"
      }
    };

function showInfo(birdKey) {
      // Look up the bird data
      const bird = birds[birdKey];
  
  // Put the data into the info panel
      document.getElementById('info-title').textContent = bird.title;
      document.getElementById('info-fact').textContent = bird.fact;
  
  // Make the info panel visible
      document.getElementById('info-panel').style.display = 'block';
  
  // Remove the 'selected' class from all albums
      const allBirds = document.querySelectorAll('.bird');
      allBirds.forEach(function(el) {
        
 el.classList.remove('selected');
      });
  
  // Add 'selected' to the clicked album
  
   event.currentTarget.classList.add('selected');
    }