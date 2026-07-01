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
      id: "someshwar_peak",
      name: "Someshwar Peak Trek",
      location: "West Champaran District (VTR)",
      shortDesc: "The highest peak of Bihar situated at a height of 2884 feet, offering a scenic 14 km trek to an ancient border temple.",
      longDesc: "Someshwar Peak is the highest point in Bihar, offering panoramic views of the snow-clad Himalayas. The 14 km trek from the base camp winds through pristine valleys and dense Sal forests. At the summit sits a temple dedicated to Lord Someshwar and Goddess Kali right on the international Indo-Nepal border.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      rating: 4.9,
      facts: {
        altitude: "2,884 feet",
        trekDistance: "14 km (One Way)",
        bestSeason: "November to February",
        entryFee: "₹50 (Registration required)"
      },
      adventureTags: ["Mountain Trekking", "Border View", "Pilgrimage Hikes", "Forest Trails"],
      coordinates: { x: 140, y: 70 },
      howToReach: {
        air: "Gorakhpur Airport (135 km) or Patna Airport (315 km).",
        rail: "Narkatiaganj Railway Station is 35 km away from the trek base.",
        road: "Buses and cabs ply from Bettiah (95 km) to the base camp at Raghia/Gobardhana."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Gobardhana Range Helpline", contact: "9733093351" }
      ]
    },
    {
      id: "bhikhna_thori",
      name: "Bhikhna Thori Spot",
      location: "West Champaran District (VTR)",
      shortDesc: "Historically the resting place for Buddhist monks, now a famous mountain picnic spot along the clear Pandai River.",
      longDesc: "Bhikhna Thori is nestled in the foothills of the Himalayas, bordering Nepal. It was historically a resting spot (thaur) for travelling Buddhist monks. King George V rested here during his historical tour. Today, it is a scenic picnic spot where visitors can see round, colorful pebbles on the Pandai riverbed.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      rating: 4.6,
      facts: {
        majorAttraction: "Pandai River Bed & Pebbles",
        history: "Buddhist Monk Retreat",
        bestSeason: "October to March",
        entryFee: "Free"
      },
      adventureTags: ["Riverside Walks", "Picnics", "Nature Photography", "Birdwatching"],
      coordinates: { x: 155, y: 75 },
      howToReach: {
        air: "Patna Airport (320 km) or Gorakhpur Airport (150 km).",
        rail: "Harinagar Station is 20 km away, or Narkatiaganj Station is 28 km away.",
        road: "Directly accessible via forest roads from Bettiah (75 km) or Narkatiaganj."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Bettiah HQ Office", contact: "6207283609" }
      ]
    },
    {
      id: "manguraha_trail",
      name: "Manguraha Nature Trail",
      location: "West Champaran District (VTR)",
      shortDesc: "A dense 5 km jungle trek winding past rivers and range offices with a wildlife awareness center.",
      longDesc: "The Manguraha Nature Trail takes eco-tourists through 5 km of pristine forest. The trail runs via the Pandai River, SSB Border Checkpost, to the Manguraha Range Office where detailed statues of tigers, bears, leopards, and elephants have been installed to educate visitors. It is an amazing trail for spotting forest birds and tracks of wild carnivores.",
      image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      facts: {
        trailLength: "5 km",
        wildlifeStatues: "Tiger, Bear, Leopard, Monkey",
        bestSeason: "November to March",
        entryFee: "₹50 per person"
      },
      adventureTags: ["Jungle Trekking", "Wildlife Exhibits", "Nature Trails", "Birding"],
      coordinates: { x: 130, y: 90 },
      howToReach: {
        air: "Gorakhpur Airport (140 km) or Patna Airport (300 km).",
        rail: "Narkatiaganj Railway Station is 25 km from the Manguraha Range Office.",
        road: "Buses and private cabs run from Bettiah (65 km) and Narkatiaganj (25 km)."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Manguraha Range Officer", contact: "6205671631" },
        { role: "Manguraha Help Desk", contact: "9973909350" }
      ],
      accommodations: [
        { location: "Manguraha Camp", rooms: "02 Suites, 02 AC Stay Houses, 04 AC Tourist Huts, 06 Tent Huts, 02 Kotraha Eco-Huts" }
      ]
    },
    {
      id: "kauleshwar_jhula",
      name: "Kauleshwar Jhula",
      location: "West Champaran District (VTR)",
      shortDesc: "An exciting hanging bridge suspended amid tall jungle trees, combined with exciting Gandak rafting.",
      longDesc: "Kauleshwar Jhula is a majestic suspension bridge built high in the canopy of Valmiki Nagar forest, offering a thrilling walk above the ground. Nearby, the Gandak riverfront offers white-water river rafting along the dense forest boundary, providing sightings of gharials, dolphins, and turtles.",
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      facts: {
        bridgeType: "Canopy Suspension Bridge",
        waterActivities: "River Rafting, Boat Safari",
        bestSeason: "November to March",
        entryFee: "₹100 (Rafting Extra)"
      },
      adventureTags: ["Suspension Bridge", "River Rafting", "Gandak Safari", "Treehouse Canopy"],
      coordinates: { x: 110, y: 85 },
      howToReach: {
        air: "Gorakhpur Airport (125 km) or Patna Airport (305 km).",
        rail: "Bagaha Station is 45 km away, with local transport available to Valmikinagar.",
        road: "Drive via NH-727. Bettiah is 105 km away and Gorakhpur is 125 km away."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Valmikinagar Range Office", contact: "9162219095" }
      ]
    },
    {
      id: "bheriyari_grassland",
      name: "Bheriyari Watchtower & Grassland",
      location: "West Champaran District (VTR)",
      shortDesc: "A wooden watchtower overlooking massive grasslands, perfect for watching herds of deer and bison.",
      longDesc: "The Bheriyari Grassland is a wide, open clearing inside Valmiki Sanctuary. A tall wooden watchtower built here allows visitors to observe herds of spotted deer, wild boar, nilgai, and gaur grazing in their natural habitat, especially during the early mornings and late afternoons.",
      image: "https://images.unsplash.com/photo-1603517454228-2f190e2908f5?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
      facts: {
        watchtowerMaterial: "Local Sal Timber",
        mainSightings: "Spotted Deer, Gaur, Wild Boar",
        bestSeason: "November to March",
        entryFee: "Included in reserve entry"
      },
      adventureTags: ["Wildlife Watching", "Watchtower Views", "Grassland Safaris", "Birding"],
      coordinates: { x: 125, y: 75 },
      howToReach: {
        air: "Patna Airport (275 km) or Gorakhpur Airport (125 km).",
        rail: "Valmiki Nagar Road station is 15 km away, or Bagaha is 35 km away.",
        road: "Drive through forest routes from Bettiah (80 km) or Valmikinagar."
      },
      officialWebsite: "www.valmikitigerreserve.com",
      helplines: [
        { role: "Bettiah HQ Office", contact: "6207283609" }
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
      id: "telhar_kund",
      name: "Telhar Kund Waterfall",
      location: "Kaimur District",
      shortDesc: "A stunning waterfall plunging into a deep, emerald-green pool surrounded by rocky canyons.",
      longDesc: "Telhar Kund is one of the most beautiful waterfalls in the Kaimur hills. The water cascades down a rocky gorge into an emerald pool. It is surrounded by lush green cliffs and rocky formations, making it a hotspot for nature photography and trekking. Currently, online booking is not available.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
      rating: 4.8,
      facts: {
        height: "80 meters approx",
        coordinates: "24°51'2.32\"N, 83°43'10.45\"E",
        distanceFromBhabua: "31 km",
        bestSeason: "July to December"
      },
      adventureTags: ["Waterfall Trekking", "Gorge View", "Canyon Hiking", "Nature Photography"],
      coordinates: { x: 95, y: 405 },
      howToReach: {
        air: "Lal Bahadur Shastri Airport, Varanasi (128 km).",
        rail: "Bhabua Road Station (BBU) is 47 km away.",
        road: "Accessible via ghat roads from Bhabua (31 km). Standard cabs and private vehicles are recommended."
      },
      bookingNotice: "Currently, online booking is not available for Telhar Kund. For permissions and inquiries, please contact the local Range Officer directly:",
      helplines: [
        { role: "Manoj Kumar, Range Officer", contact: "8544055700" },
        { role: "Vivek Kumar, Forester", contact: "8789577417" },
        { role: "Jyotish Kumar, Forest Guard", contact: "6204154731" }
      ]
    },
    {
      id: "karkatgarh",
      name: "Karkatgarh Crocodile Sanctuary",
      location: "Kaimur District",
      shortDesc: "A historic waterfall on the Karmanasa River featuring a natural crocodile breeding habitat.",
      longDesc: "Karkatgarh Waterfall is situated on the Karmanasa River. It was historically a hunting spot for Mughal rulers and British officials. Today, it is a protected eco-park featuring a suspension bridge, zip-lining, and a natural habitat where Mugger crocodiles can be spotted sunbathing on the riverbanks.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      rating: 4.6,
      facts: {
        river: "Karmanasa",
        coordinates: "24°55'11.75\"N, 83°21'50.33\"E",
        distanceFromBhabua: "42 km",
        keySpecies: "Mugger Crocodile, Migratory Birds"
      },
      adventureTags: ["Crocodile Spotting", "Suspension Bridge", "Zip-lining", "Water Safaris"],
      coordinates: { x: 80, y: 420 },
      howToReach: {
        air: "Lal Bahadur Shastri Airport, Varanasi (95 km).",
        rail: "Bhabua Road Station (BBU) is 58 km away.",
        road: "Accessed from Bhabua city (42 km) or Varanasi (95 km) via motorable forest routes."
      },
      bookingNotice: "Currently, online booking is not available for Karkatgarh Eco Park. For details, please contact the Range Officer:",
      helplines: [
        { role: "Arvind K. Dubey, Range Officer", contact: "9546725276" },
        { role: "Arvind K. Sah, Forester", contact: "7764957782" },
        { role: "Chandan Kumar, Forest Guard", contact: "9693821781" }
      ]
    },
    {
      id: "karamchat",
      name: "Karamchat Nauka Vihar",
      location: "Kaimur District",
      shortDesc: "A pristine boating reservoir nestled in the foothills of Kaimur hills, ideal for birdwatching.",
      longDesc: "Karamchat Nauka Vihar is centered around the Karamchat Dam reservoir. The water body is surrounded by the dry deciduous forests of Kaimur. It is a fantastic spot for motor boating, speed boating, and viewing migratory ducks and cranes during winters.",
      image: "https://images.unsplash.com/photo-1570473541596-23797500c501?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
      facts: {
        waterBody: "Karamchat Dam Reservoir",
        coordinates: "25.037585°N, 83.604754°E",
        distanceFromBhabua: "34 km",
        bestSeason: "October to March"
      },
      adventureTags: ["Motor Boating", "Sunset Cruise", "Birdwatching", "Dam Fishing"],
      coordinates: { x: 110, y: 395 },
      howToReach: {
        air: "Varanasi Airport (135 km) or Patna Airport (215 km).",
        rail: "Bhabua Road Station (BBU) is 50 km away.",
        road: "Drive 34 km from Bhabua city headquarters via motorable roads."
      },
      bookingNotice: "Currently, online booking is not available for Karamchat Nauka Vihar. For boating permissions, contact the Range Office:",
      helplines: [
        { role: "Manoj Kumar, Range Officer", contact: "8544055700" },
        { role: "Dipu Kumar, Forester", contact: "9110154035" },
        { role: "Pawan Kumar, Forest Guard", contact: "9142060710" }
      ]
    },
    {
      id: "mundeshwari_park",
      name: "Maa Mundeshwari Wildlife Eco Park",
      location: "Kaimur District",
      shortDesc: "An ecological park built at the base of the sacred Mundeshwari Temple hill, featuring green lawns and walkways.",
      longDesc: "Located at the base of the Mundeshwari Hill (home to India's oldest functional temple), this eco-park provides beautiful walking trails, manicured gardens, children's swings, and seating benches. It serves as a green oasis for pilgrims visiting the heritage site.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      facts: {
        nearbyHeritage: "Mundeshwari Temple (Ancient)",
        coordinates: "24°58'56.10\"N, 83°34'12.87\"E",
        distanceFromBhabua: "12 km",
        bestSeason: "October to April"
      },
      adventureTags: ["Gardening Walks", "Historic Pilgrimage", "Family Picnic", "Eco-trails"],
      coordinates: { x: 105, y: 425 },
      howToReach: {
        air: "Varanasi Airport (117 km) or Patna Airport (215 km).",
        rail: "Bhabua Road Station (BBU) is 28 km away.",
        road: "Located just 12 km from Bhabua city, connected by smooth two-lane roads."
      },
      bookingNotice: "Currently, online booking is not available for Maa Mundeshwari Eco Park. Contact details:",
      helplines: [
        { role: "Manoj Kumar, Range Officer", contact: "8544055700" },
        { role: "Vineet Kumar, Forester", contact: "7870107210" },
        { role: "Bikram K. Sharma, Forest Guard", contact: "8292219148" }
      ]
    },
    {
      id: "jagdahwa_dam",
      name: "Jagdahwa Dam Circuit",
      location: "Kaimur District",
      shortDesc: "A peaceful reservoir circuit bordered by forest, attracting migratory waterbirds.",
      longDesc: "Jagdahwa Dam is a scenic irrigation reservoir bordered by dense forest. The nature circuit around it is highly favored by hikers and cycling enthusiasts. During winters, it becomes home to a large variety of migratory wetland birds, offering a peaceful birdwatching experience.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
      rating: 4.5,
      facts: {
        waterBody: "Jagdahwa Dam",
        coordinates: "24.565974°N, 83.670799°E",
        distanceFromBhabua: "20 km",
        bestSeason: "November to March"
      },
      adventureTags: ["Cycling Trails", "Birdwatching", "Dam Walks", "Nature Photography"],
      coordinates: { x: 115, y: 430 },
      howToReach: {
        air: "Varanasi Airport (137 km).",
        rail: "Bhabua Road Station (BBU) is 36 km away.",
        road: "Located 20 km from Bhabua headquarters, accessible via local road networks."
      },
      bookingNotice: "Currently, online booking is not available for Jagdahwa Dam Nature Circuit. Contact details:",
      helplines: [
        { role: "Arvind K. Dubey, Range Officer", contact: "9546725276" },
        { role: "Gaurav Kumar, Forester", contact: "8252839299" },
        { role: "Santosh Kumar, Forest Guard", contact: "6206922902" }
      ]
    },
    {
      id: "adhaura_hills",
      name: "Adhaura Hills (Banjari)",
      location: "Kaimur District",
      shortDesc: "A high-altitude hill station forest block featuring caves, waterfalls, and ancient rock paintings.",
      longDesc: "Adhaura is situated on the Kaimur plateau at an altitude of 2000 feet. Banjari and Khogh are dense forest zones inside this block, famous for prehistoric caves, ancient rock art, and waterfalls like Telhar Kund. It is a fantastic escape for adventure campers and hikers.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
      rating: 4.7,
      facts: {
        elevation: "2,000 feet above sea level",
        coordinates: "24.980241°N, 83.489648°E",
        distanceFromBhabua: "77 km",
        attractions: "Caves, Waterfalls, Rock Art"
      },
      adventureTags: ["Hill Camping", "Cave Exploration", "Plateau Hiking", "Prehistoric Art"],
      coordinates: { x: 90, y: 440 },
      howToReach: {
        air: "Varanasi Airport (194 km) or Patna Airport (280 km).",
        rail: "Bhabua Road Station (BBU) is 93 km away via hill roads."
        road: "Drive 77 km from Bhabua city up the winding Adhaura ghat highway. Cabs are recommended."
      },
      bookingNotice: "Currently, online booking is not available for Adhaura forest area. Contact details:",
      helplines: [
        { role: "Sahil Anand, Range Officer", contact: "8770863468" },
        { role: "Vijay Prakash, Forester", contact: "7549567302" },
        { role: "Vivek Kumar, Forest Guard", contact: "9304337572" }
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
