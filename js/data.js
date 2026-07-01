const EcoData = {
  destinations: [
    {
      id: "valmiki",
      name: "Valmiki Tiger Reserve",
      location: "West Champaran District",
      shortDesc: "Bihar's only Tiger Reserve, nestled in the foothills of the Himalayas along the Gandak river, boasting lush Sal forests and diverse wildlife.",
      longDesc: "Valmiki Tiger Reserve forms the easternmost limit of the Himalayan terai forests in India. It is home to majestic Royal Bengal Tigers, Indian leopards, one-horned rhinoceroses, Indian bison (gaur), and over 250 species of birds. The reserve offers rich eco-trails, jungle safaris, and serene river rafting opportunities.",
      image: "https://images.unsplash.com/photo-1615959189197-48400ad77f5c?auto=format&fit=crop&q=80&w=800", // Forest/Tiger-like setting
      rating: 4.8,
      facts: {
        area: "900+ sq km",
        bestSeason: "November to March",
        keyWildlife: "Bengal Tiger, Leopard, Gaur, Sloth Bear",
        entryFee: "₹150 (Indians) / ₹1000 (Foreigners)"
      },
      adventureTags: ["Jungle Safari", "Kauleshwar Jhula", "Gandak Rafting", "Someshwar Peak Trek", "Bheriyari Watchtower"],
      coordinates: { x: 120, y: 80 }, // for custom SVG map relative position
      howToReach: {
        air: "Patna Airport (305 km), Gorakhpur Airport (125 km), or Kushinagar Airport (100 km).",
        rail: "Nearest stations are Bagaha (45 km for Valmikinagar), Harinagar (20 km for Gobardhana), and Narkatiaganj (25 km for Manguraha).",
        road: "Patna-Muzaffarpur-Bettiah (210 km) / Bettiah-Valmikinagar (105 km) / Bettiah-Gobardhana (70 km) / Bettiah-Manguraha (65 km) / Gorakhpur-Valmikinagar (125 km)."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Bettiah HQ Office", contact: "6207283609" },
        { role: "Valmikinagar Range Officer", contact: "9162219095" },
        { role: "Manguraha Range Officer", contact: "6205671631 / 9973909350" },
        { role: "Gobardhana Range Officer", contact: "9733093351" }
      ],
      accommodations: [
        { location: "Valmikinagar", rooms: "04 Suites, 06 Bamboo Huts, 04 AC Deluxe Rooms, 12 Valmiki Vihar Hotel Rooms, 40 Dormitory Beds" },
        { location: "Manguraha", rooms: "02 Suites, 02 AC Stay Houses, 04 AC Tourist Huts, 06 Tent Huts, 02 Kotraha Eco-Huts" },
        { location: "Gobardhana", rooms: "04 Tharu AC Suites, 01 Tree Hut, 02 Tourist Huts" }
      ]
    },
    {
      id: "rajgir",
      name: "Rajgir Nature Safari & Glass Bridge",
      location: "Nalanda District",
      shortDesc: "A state-of-the-art wildlife safari featuring a high-altitude Glass Skywalk, suspension bridge, and open jeep safaris inside pristine hills.",
      longDesc: "Surrounded by five scenic hills, Rajgir Nature Safari is a landmark eco-tourism hub. It features the famous 85-foot long Glass Skywalk suspended over a deep valley, a thrilling zip-line, archery, cycling tracks, and an open zoo safari where lions, tigers, and bears roam in natural habitats.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800", // Glass bridge/mountain bridge vibe
      rating: 4.9,
      facts: {
        area: "191 hectares",
        bestSeason: "October to April",
        keyWildlife: "Asiatic Lion, Royal Bengal Tiger, Spotted Deer",
        entryFee: "₹250 per person"
      },
      adventureTags: ["Glass Skywalk", "Zip-lining", "Jungle Safari", "Sky Cycling"],
      coordinates: { x: 340, y: 350 },
      howToReach: {
        air: "Patna Airport (100 km) or Gaya International Airport (80 km).",
        rail: "Rajgir Railway Station (RGD) connects directly to Patna and New Delhi.",
        road: "Four-lane highways link Rajgir to Patna (100 km), Nalanda (15 km), and Gaya (75 km). State transport runs regularly."
      }
    },
    {
      id: "kakolat",
      name: "Kakolat Waterfall",
      location: "Nawada District",
      shortDesc: "Bihar's most famous natural waterfall, cascading down 160 feet into a cool, crystal-clear pool surrounded by dense forest.",
      longDesc: "Kakolat Waterfall is a popular summer retreat, steeped in local mythology. Legend says a mythological king was cursed to become a python and lived at these falls, receiving salvation by bathing here. The water is mineral-rich and maintains a cold temperature year-round, ideal for a refreshing swim.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800", // Beautiful forest waterfall
      rating: 4.7,
      facts: {
        height: "160 feet",
        bestSeason: "June to October (Monsoon beauty)",
        keyWildlife: "Hill Myna, Flying Squirrels, Langurs",
        entryFee: "₹20 per person"
      },
      adventureTags: ["Waterfall Bathing", "Nature Photography", "Hill Trekking"],
      coordinates: { x: 380, y: 390 },
      howToReach: {
        air: "Jay Prakash Narayan Airport, Patna (125 km) or Gaya Airport (110 km).",
        rail: "Nawada Railway Station (NWD) is 30 km away, connected to Gaya, Patna, and Kiul junctions.",
        road: "Located off NH-31 (Ranchi-Patna Highway), 30 km from Nawada city. Local taxis and auto-rickshaws operate from Nawada."
      }
    },
    {
      id: "bhimbandh",
      name: "Bhimbandh Wildlife Sanctuary",
      location: "Munger District",
      shortDesc: "Famed for its geothermal hot springs, dense bamboo forests, and historical stone-age sites nestled inside the Kharagpur hills.",
      longDesc: "Bhimbandh Sanctuary is legendary for its natural hot springs (Rishi Kund, Bhim Kund) that maintain a constant warm temperature of 52°C to 65°C. The landscape comprises dense dry-deciduous forests and rich bamboo clumps, supporting rich wildlife and providing scenic trails for travelers.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800", // Hot spring/forest stream vibe
      rating: 4.6,
      facts: {
        area: "681 sq km",
        bestSeason: "October to April",
        keyWildlife: "Sloth Bear, Leopard, Barking Deer",
        entryFee: "₹50 per person"
      },
      adventureTags: ["Hot Springs", "Caving", "Forest Walking", "Birding"],
      coordinates: { x: 490, y: 340 },
      howToReach: {
        air: "Jay Prakash Narayan Airport, Patna (160 km).",
        rail: "Jamui Railway Station (20 km) or Munger Junction (55 km) on the main Eastern Railway line.",
        road: "Reachable via Munger (55 km) or Jamui (20 km). Cabs and local autos ply regular motorable forest routes."
      }
    },
    {
      id: "vikramshila",
      name: "Vikramshila Dolphin Sanctuary",
      location: "Bhagalpur District",
      shortDesc: "Asia's only protected habitat for the endangered Gangetic Dolphins, stretching along 50 km of the majestic Ganges River.",
      longDesc: "Established to protect the blind Gangetic Dolphin (Susu), this river sanctuary offers a rare chance to see these mammals surface for air. The sanctuary is also a major migratory bird corridor, hosting thousands of wetland birds like the Greater Adjutant Stork and Indian Skimmer during winters.",
      image: "https://images.unsplash.com/photo-1570473541596-23797500c501?auto=format&fit=crop&q=80&w=800", // River dolphin/water view
      rating: 4.5,
      facts: {
        length: "50 km of Ganges",
        bestSeason: "October to June",
        keyWildlife: "Gangetic Dolphin, Smooth Otter, Gharial",
        entryFee: "₹100 (Boat Charter extra)"
      },
      adventureTags: ["Dolphin Safari", "River Boating", "Sunset Cruise", "Bird Spotting"],
      coordinates: { x: 560, y: 320 },
      howToReach: {
        air: "Bagdogra Airport, West Bengal (200 km) or Patna Airport (235 km).",
        rail: "Bhagalpur Junction (BGP) is the closest major railhead, well-connected to Patna, Kolkata, and Delhi.",
        road: "Accessed via NH-80. Regular private and state-run bus lines operate from Patna (230 km) and Munger (65 km)."
      }
    },
    {
      id: "kaimur",
      name: "Kaimur Wildlife Sanctuary",
      location: "Kaimur District",
      shortDesc: "Bihar's largest sanctuary, characterized by spectacular sandstone gorges, ancient rock paintings, and cascading waterfalls.",
      longDesc: "Spanning the Kaimur hills, this sanctuary features incredible terrains with deep gorges like Telhar Kund and Karkat Waterfall. It contains rock paintings dating back to the neolithic era, along with diverse wildlife such as nilgai, leopards, wild boars, and chitals.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", // Forest gorges/Kaimur look
      rating: 4.7,
      facts: {
        area: "1342 sq km",
        bestSeason: "October to March",
        keyWildlife: "Leopard, Nilgai, Chinkara, Four-horned Antelope",
        entryFee: "₹50 per person"
      },
      adventureTags: ["Gorge Trekking", "Telhar Kund Fall", "Karkatgarh Eco Park", "Mundeshwari Park", "Karamchat Nauka Vihar"],
      coordinates: { x: 100, y: 410 },
      howToReach: {
        air: "Lal Bahadur Shastri Airport, Varanasi (117 km) or Jay Prakash Narayan Airport, Patna (203 km).",
        rail: "Bhabua Road Station (BBU) in Mohania is 16 km away from Bhabua city headquarters.",
        road: "Direct road access from Varanasi (95 km) & Bhabua. Distances from Bhabua: Maa Mundeshwari Eco Park (12 km), Telhar Kund (31 km), Karkatgarh Waterfall (42 km), Karamchat Nauka Vihar (34 km), Jagdahwa Dam (20 km), Adhaura (77 km)."
      },
      bookingNotice: "Currently, online booking is not available for the Kaimur Forest Division. For tour bookings, lodging permissions, and inquiries, please contact the Kaimur Forest Division officers directly:",
      helplines: [
        { role: "Telhar Kund / Karamchat (Manoj Kumar, Range Officer)", contact: "8544055700" },
        { role: "Telhar Kund Waterfall (Vivek Kumar, Forester)", contact: "8789577417" },
        { role: "Maa Mundeshwari Eco Park (Vineet Kumar, Forester)", contact: "7870107210" },
        { role: "Karamchat Nauka Vihar (Dipu Kumar, Forester)", contact: "9110154035" },
        { role: "Karkatgarh Eco Park & Fall (Arvind K. Dubey, Range Officer)", contact: "9546725276" },
        { role: "Jagdahwa Dam Circuit (Gaurav Kumar, Forester)", contact: "8252839299" },
        { role: "Banjari / Khogh Adhaura (Sahil Anand, Range Officer)", contact: "8770863468" }
      ]
    },
    {
      id: "pant",
      name: "Pant (Rajgir) Wildlife Sanctuary",
      location: "Nalanda District",
      shortDesc: "A serene woodland sanctuary covering five historical hills, vital for protecting rare medicinal plants and birds.",
      longDesc: "Interlinked with the historical heritage of Rajgir, the Pant Wildlife Sanctuary is home to diverse fauna and flora, including the famous blue bulls, langurs, and highly prized Ayurvedic herbs. The terrain is rocky yet heavily forested, making it a beautiful pilgrimage-meets-nature destination.",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800", // Nature path
      rating: 4.5,
      facts: {
        area: "35 sq km",
        bestSeason: "November to March",
        keyWildlife: "Blue Bull (Nilgai), Jungle Cat, Golden Jackal",
        entryFee: "₹30 per person"
      },
      adventureTags: ["Medicinal Plant Tours", "Historical Hikes", "Eco-walks"],
      coordinates: { x: 320, y: 370 },
      howToReach: {
        air: "Patna Airport (100 km).",
        rail: "Rajgir Railway Station (RGD) is 3 km away, which links to Patna, Bihar Sharif, and New Delhi.",
        road: "Direct road access from Nalanda (12 km), Patna (98 km), and Gaya (70 km). Local e-rickshaws and cabs are abundant."
      }
    },
    {
      id: "gautam_buddha",
      name: "Gautam Buddha Wildlife Sanctuary",
      location: "Gaya District",
      shortDesc: "A dry-deciduous forest reserve adjacent to the holy city of Bodh Gaya, where Lord Buddha attained enlightenment.",
      longDesc: "Located on the border of Bihar and Jharkhand, this sanctuary protects a rich belt of sal, teak, and bamboo forests. Originally a private hunting reserve, it now offers shelter to leopards, tigers, sloth bears, and spotted deer, providing a spiritual connection to nature for Bodh Gaya pilgrims.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800", // Forest light/spiritual nature
      rating: 4.6,
      facts: {
        area: "259 sq km",
        bestSeason: "November to April",
        keyWildlife: "Sloth Bear, Chital, Barking Deer",
        entryFee: "₹50 per person"
      },
      adventureTags: ["Forest Safaris", "Spiritual Walks", "Night Camping"],
      coordinates: { x: 260, y: 440 },
      howToReach: {
        air: "Gaya Airport (25 km) or Jay Prakash Narayan Airport in Patna (120 km).",
        rail: "Gaya Junction (GAYA) is 20 km away, a major station on the grand chord railway line.",
        road: "Located close to NH-2 (Grand Trunk Road). Continuous taxi and auto services operate from Gaya and Bodh Gaya."
      }
    }
  ],

  stays: [
    {
      id: "stay_valmiki_cottage",
      name: "Valmiki Tiger Den Resort",
      category: "Forest Cottages",
      location: "Valmiki Nagar",
      rating: 4.8,
      price: 4500,
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=800", // Cottage in woods
      amenities: ["AC Rooms", "Guided Safari", "River-view Dining", "Local Folk Shows", "Wi-Fi"]
    },
    {
      id: "stay_rajgir_tree",
      name: "Venu Vana Canopy Tree Houses",
      category: "Tree Houses",
      location: "Rajgir Hills",
      rating: 4.9,
      price: 7500,
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800", // Tree house
      amenities: ["360° Hill Views", "Luxury Wood Bath", "Private Deck", "Organic Cafe", "Telescope Star Gazing"]
    },
    {
      id: "stay_kakolat_camp",
      name: "Kakolat Foothills Eco Camp",
      category: "Camping Tents",
      location: "Kakolat Falls",
      rating: 4.7,
      price: 2800,
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800", // Tent camp
      amenities: ["Luxury Tents", "Bonfire Dinners", "Guided Trekking", "Waterfall Access", "Outdoor Shower"]
    },
    {
      id: "stay_bhimbandh_lodge",
      name: "Kharagpur Hills Govt Eco Lodge",
      category: "Government Lodges",
      location: "Bhimbandh Springs",
      rating: 4.4,
      price: 2200,
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", // Lodge style
      amenities: ["Hot Spring Pools", "In-house Kitchen", "Spacious Lawns", "24/7 Ranger Security", "Parking"]
    }
  ],

  wildlife: [
    {
      id: "tiger",
      name: "Royal Bengal Tiger",
      scientific: "Panthera tigris",
      fact: "The apex predator of Valmiki Tiger Reserve. Their population in Bihar has shown a significant positive rise due to tight conservation practices.",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "dolphin",
      name: "Gangetic River Dolphin",
      scientific: "Platanista gangetica",
      fact: "Declared the National Aquatic Animal of India. Locally known as 'Susu', they are completely blind and use echolocation to navigate.",
      image: "https://images.unsplash.com/photo-1570473541596-23797500c501?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "bear",
      name: "Sloth Bear",
      scientific: "Melursus ursinus",
      fact: "Highly active in the Bhimbandh and Gautam Buddha sanctuaries. They love feeding on termites and honey from dry deciduous forests.",
      image: "https://images.unsplash.com/photo-1603517454228-2f190e2908f5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "leopard",
      name: "Indian Leopard",
      scientific: "Panthera pardus fusca",
      fact: "Extremely agile climbers inhabiting Rajgir Nature Safari and Kaimur's rocky canyons. Highly elusive and active during nights.",
      image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "peacock",
      name: "Indian Peafowl",
      scientific: "Pavo cristatus",
      fact: "Abundant across all sanctuaries, especially in Rajgir. Their grand courtship dances are a major highlight during the onset of Monsoons.",
      image: "https://images.unsplash.com/photo-1520638029055-e9871fe4333e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "hornbill",
      name: "Great Hornbill",
      scientific: "Buceros bicornis",
      fact: "Can be seen in the canopy of Valmiki Tiger Reserve. They play an indispensable role in forest seed dispersal and plant regeneration.",
      image: "https://images.unsplash.com/photo-1591821096437-40f75612d5d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "elephant",
      name: "Asian Elephant",
      scientific: "Elephas maximus",
      fact: "Frequently migrate through corridors connecting Valmiki to Nepal's Chitwan Park. Symbol of wisdom and majestic forest guardians.",
      image: "https://images.unsplash.com/photo-1581850518616-bcb8077ab133?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "butterfly",
      name: "Common Baron Butterfly",
      scientific: "Euthalia aconthea",
      fact: "Found in mango orchards and dense sanctuaries of Bihar. Known for their perfect camouflage, blending seamlessly into green leaves.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
    }
  ],

  packages: [
    {
      id: "pkg_weekend",
      name: "Weekend Wilderness Escape",
      duration: "2 Days / 1 Night",
      price: 3999,
      features: ["Jungle Safari", "Eco-resort stay", "Guided Nature Walk", "All Meals included"],
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pkg_family",
      name: "Heritage & Wildlife Family Tour",
      duration: "4 Days / 3 Nights",
      price: 8999,
      features: ["Glass Bridge Access", "Open Zoo Safari", "Resort Stay", "Dolphin Sightseeing", "Family Buffet"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pkg_bird",
      name: "Birding & Wetlands Tour",
      duration: "3 Days / 2 Nights",
      price: 6499,
      features: ["Vikramshila River Boat", "Valmiki Swamp Trek", "Binoculars Provided", "Ornithologist Guide"],
      image: "https://images.unsplash.com/photo-1591821096437-40f75612d5d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pkg_photo",
      name: "Wildlife & Landscape Photography Safari",
      duration: "5 Days / 4 Nights",
      price: 11999,
      features: ["Exclusive Jeep Hires", "Sunrise Gorge Shoots", "Night Sky Camping", "Pro Photography Mentor"],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pkg_adventure",
      name: "Kaimur Hills Adventure Trek",
      duration: "3 Days / 2 Nights",
      price: 5499,
      features: ["Gorge Climbing", "Caving at Gupteshwar", "Wilderness Tents", "Local Adventure Guides"],
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "pkg_luxury",
      name: "Eco-Luxury Royal Retreat",
      duration: "4 Days / 3 Nights",
      price: 18999,
      features: ["Luxury Treehouse Suite", "Private Helicopter/Luxury SUV Transfer", "VIP Safaris", "Spa & Wellness Session"],
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800"
    }
  ],

  blogs: [
    {
      id: "blog_1",
      title: "Saving the Susu: Gangetic Dolphins of Bhagalpur",
      category: "Conservation",
      date: "June 12, 2026",
      excerpt: "Deep dive into the community-led conservation projects that are helping save Bihar's majestic aquatic ambassador in the River Ganges.",
      image: "https://images.unsplash.com/photo-1570473541596-23797500c501?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "blog_2",
      title: "The Ultimate Guide to Valmiki Tiger Reserve",
      category: "Travel Guides",
      date: "May 28, 2026",
      excerpt: "Planning your first jungle vacation to Bihar? Read our comprehensive trail guide, lodging reviews, and safari schedule tips.",
      image: "https://images.unsplash.com/photo-1615959189197-48400ad77f5c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "blog_3",
      title: "Chasing Waterfalls: Finding Solitude at Kakolat",
      category: "Nature",
      date: "April 15, 2026",
      excerpt: "Explore the ancient legends, mineral-rich cold waters, and lush wilderness surrounding Bihar's favorite cascading waterfall.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    }
  ]
};

// Expose globally for browser
window.EcoData = EcoData;
