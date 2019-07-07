import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    let people = [
      {
        "name": "Adam Schwaninger",
        "image": "/assets/images/adam.jpg",
        "shows": [
          {
            "title": "The Curious Creations of Christine McConnell",
            "poster": "/assets/posters/the_curious_creations_of_christine_mcconnell.jpg",
            "review": "Instagram model-turned-cardboard-actress teams up with roadkilled muppets to bake and sew gothic kitchen creations that are aspirational at best and impossible at worst.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80201868",
          },
          {
            "title": "Spirit: Riding Free",
            "poster": "/assets/posters/spirit_riding_free.jpg",
            "review": "Late to the party reboot of the Dreamworks movie about an animated horse and the not-very-accurate-maybe-wild-west family who adopts him. The theme song totally mashes up with the Pitbull/Ke$ha song Timber.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80115432",
          },
          {
            "title": "Strike Back",
            "poster": "/assets/posters/strike_back.jpg",
            "review": "Schlocky but moderately high budget action show guest-starring tons of Game of Thrones actors as villains. Recommended if you enjoy Call of Duty multiplayer or Ghost Recon: Wildlands.",
            "provider": "amazon",
            "link": "https://www.amazon.com/Strike-Back-Season-1/dp/B008U4S6AE/ref=tmm_aiv_swatch_0?_encoding=UTF8&qid=&sr=",
          },
          {
            "title": "Banshee",
            "poster": "/assets/posters/banshee.jpg",
            "review": "Thief fresh out of prison ends up masquerading as a small Amish town's sheriff when the actual sheriff is killed. Promises and mostly delivers on at least one brutal, inventive fist fight every episode. If you crossed Road House with Witness.",
            "provider": "amazon",
            "link": "https://www.amazon.com/Pilot/dp/B00E3WNJ0Y/ref=sr_1_1?s=instant-video&ie=UTF8&qid=1540512470&sr=1-1&keywords=banshee",
          },
          {
            "title": "Ash vs Evil Dead",
            "poster": "/assets/posters/ash_vs_evil_dead.jpg",
            "review": "Sam Raimi gets Bruce Campbell to reprise his role as Ash Williams for the last time. Remarkably consistent in its shlocky B-movie gore, bad jokes and intentional throwback misogyny. Bonus: Lucy Lawless.",
            "provider": "amazon",
            "link": "https://www.amazon.com/gp/video/detail/B0184MMEYU/ref=atv_dp_season_select_atf",
          },
          {
            "title": "Black Mirror",
            "poster": "/assets/posters/black_mirror.jpg",
            "review": "Bryan, you forgot to mention Black Mirror.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/70264888",
          },
          {
            "title": "Westworld",
            "poster": "/assets/posters/westworld.jpg",
            "review": "Forgot robot cowgirls too.",
            "provider": "hbo",
            "link": "https://play.hbonow.com/series/urn:hbo:series:GV7xwpQNK8MJfPwEAAAG",
          },
          {
            "title": "DONT FORGET TO ADD ADAM's MARVEL STUFF",
            "poster": "/assets/posters/the_curious_creations_of_christine_mcconnell.jpg",
            "review": "Late to the party reboot of the Dreamworks movie about an animated horse and the not-very-accurate-maybe-wild-west family who adopts him. The theme song totally mashes up with the Pitbull/Ke$ha song Timber.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80201868",
          },

        ]
      },
      {
        "name": "Tyler Semanski",
        "image": "/assets/images/tyler.jpg",
        "shows": [
          {
            "title": "Sneaky Pete",
            "poster": "/assets/posters/sneaky_pete.jpg",
            "review": "It held a 100% on rotten tomatoes. However, I just checked and looks like its down to 97%.",
            "provider": "amazon",
            "link": "https://www.amazon.com/Sneaky-Pete-Season-1/dp/B01347V50Y",
          },

        ]
      },
      {
        "name": "Spencer DeMetrick",
        "image": "/assets/images/spencer.jpg",
        "shows": [
          {
            "title": "The Haunting of Hill House",
            "poster": "/assets/posters/haunting_of_hill_house.jpg",
            "review": "Netflix original just released in time for Halloween.  Great production value and a lot creepier than I was expecting.  Fun Fact: The little kid from E.T. is in it.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80189221",
          },
          {
            "title": "Jack Ryan",
            "poster": "/assets/posters/jack_ryan.jpg",
            "review": "Amazon original based on characters created by Maryland's own Tom Clancy.  Typical CIA thriller/action/drama but with a bigger budget than most.  Jim from The Office has been working out.  Biggest flaw: They go out for crabs in one episode and the crabs they are eating are dungeness instead of blue crabs... DO YOUR RESEARCH AMAZON!",
            "provider": "amazon",
            "link": "https://www.amazon.com/Season-1-Official-Trailer/dp/B073RQKC9N/ref=sr_1_1?s=instant-video&ie=UTF8&qid=1540512943&sr=1-1&keywords=jack+ryan",
          },
          {
            "title": "Vikings",
            "poster": "/assets/posters/vikings.jpg",
            "review": "History channel original about leather clad Viking legend Ragnar and his sons.  Apparently it is extremely inaccurate but still entertaining.  I had low expectations when I first started watching because it is the History channel, but the budget and production increases every season.  Very violent and acting is hit or miss, but sets and costumes, while not realistic, are pretty impressive.",
            "provider": "amazon",
            "link": "https://www.amazon.com/Rites-of-Passage/dp/B00BLCHYKU/ref=sr_1_1?s=movies-tv&ie=UTF8&qid=1540512903&sr=1-1&keywords=vikings&refinements=p_n_format_browse-bin%3A2650306011",
          },
          {
            "title": "Fargo",
            "poster": "/assets/posters/fargo.jpg",
            "review": "FX original program and one of my favorite shows of all time.  Each season is a different story set in or around Fargo revolving around someone who gets in over their heads in the criminal underworld resulting in tense drama and dark humor.  Production is great, and cast/writing is fantastic.  Some very strange things happen in this show which makes them more like folk tales than realistic crime stories.  Some of the best TV villains of all time.",
            "provider": "hulu",
            "link": "https://www.hulu.com/series/fargo-203cda1b-7919-40fb-ab36-1e45b3ed2a50",
          },
          {
            "title": "Chef's Table",
            "poster": "/assets/posters/chefs_table.jpg",
            "review": "Netflix original docu-series about some of the world's more renowned chefs.  Beautiful camera work, interesting stories, great music but a little pretentious at times.  If you like food related TV and have not seen this, you are missing out.  I recommend the Francis Mallmann episode because he is one of my favorite chefs, and also the Nancy Silverton episode because she has dedicated her life to bread....bread.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80007945",
          },

        ]
      },
      {
        "name": "Chris Williams",
        "image": "/assets/images/chris.jpg",
        "shows": [
          {
            "title": "Monty Python's Flying Circus",
            "poster": "/assets/posters/flying_circus.jpg",
            "review": "Flying Circus and Life of Brian both became available on Netflix recently. These display absurdist comedy at its best.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/70213238",
          },
          {
            "title": "Life of Brian",
            "poster": "/assets/posters/life_of_brian.jpg",
            "review": "Flying Circus and Life of Brian both became available on Netflix recently. These display absurdist comedy at its best.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/699257",
          },
          {
            "title": "Big Mouth",
            "poster": "/assets/posters/big_mouth.jpg",
            "review": "Puberty perfectly distilled with a killer voice cast.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/80117038",
          },
          {
            "title": "Bojack Horseman",
            "poster": "/assets/posters/bojack_horseman.jpg",
            "review": "Sad and funny 'Hollywoo' stories centered around an alcoholic, has-been, 80's family show star.",
            "provider": "netflix",
            "link": "https://www.netflix.com/title/70300800",
          },
          {
            "title": "The Expanse",
            "poster": "/assets/posters/the_expanse.jpg",
            "review": "Crazy space mystery and war with even crazier inter-season hair cuts.",
            "provider": "amazon",
            "link": "https://www.amazon.com/The-Expanse-Season-1/dp/B018BZ3SCM",
          },
          {
            "title": "Gravity Falls",
            "poster": "/assets/posters/gravity_falls.jpg",
            "review": "Forest mysteries with Great Uncle (Grunkle) Stan.",
            "provider": "hulu",
            "link": "https://www.hulu.com/series/gravity-falls-5d931e25-bd29-46f2-9baf-b5a0b4c001f8",
          },


        ]
      },
      {
        "name": "Kristen Shaab",
        "image": "/assets/images/kristen.jpg",
        "shows": [
          {
            "title": "Ray Donovan",
            "poster": "/assets/posters/ray_donovan.jpg",
            "review": "!",
            "provider": "amazon",
            "link": "https://www.amazon.com/Ray-Donovan-Season-1/dp/B00K6NER4G",
          },

        ]
      },

    ]

    return people;
  },

  setupController: function(controller, model) {
    if (model) {
      this.controller.set('model', model);
      this.transitionTo('home');
    }
  }
})
