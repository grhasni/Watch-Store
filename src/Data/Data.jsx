const watchData = [
  {
    id: 1,
    title: "Fossil Gen 6",
    description:
      "Smart watch with Wear OS by Google, heart rate monitoring, and activity tracking",
    price: 299,
    category: "Smart",
    imageUrl:
      "https://fossil.scene7.com/is/image/FossilPartners/FTW4061_main?$sfcc_fos_large$",
  },
  {
    id: 2,
    title: "Casio G-Shock DW5600",
    description:
      "Rugged watch with shock resistance, 200M water resistance and backlight",
    price: 69,
    category: "Boys",
    imageUrl:
      "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/G/GW/GWM/gwm5610-1/assets/GWM5610-1_Seq3.png.transform/main-visual-pc/image.png",
  },
  {
    id: 3,
    title: "Apple Watch Series 8",
    description:
      "Advanced health features, crash detection, temperature sensor and sleep tracking",
    price: 399,
    category: "Smart",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-45-alum-midnight-nc-8s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
  },
  {
    id: 4,
    title: "Daniel Wellington Classic Petite",
    description: "Minimalist design with rose gold case and mesh strap",
    price: 189,
    category: "Girls",
    imageUrl:
      "https://www.danielwellington.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/d/w/dw00100219_classic_petite_rose_gold_36mm_1.png",
  },
  {
    id: 5,
    title: "Omega Speedmaster Moonwatch",
    description:
      "Legendary chronograph worn on the moon, manual-winding movement",
    price: 6400,
    category: "Antique",
    imageUrl:
      "https://www.omegawatches.com/media/catalog/product/cache/2d3e0a0c0a0c0a0c0a0c0a0c0a0c0a0c/3/1/311.30.42.30.01.005_1.png",
  },
  {
    id: 6,
    title: "Timex Weekender",
    description:
      "Casual everyday watch with interchangeable straps and Indiglo night-light",
    price: 45,
    category: "Boys",
    imageUrl: "https://www.timex.com/cdn/shop/products/TW2T30700_a.jpg",
  },
  {
    id: 7,
    title: "Michael Kors Access Gen 6",
    description:
      "Stylish smartwatch with stainless steel bracelet and touchscreen display",
    price: 350,
    category: "Girls",
    imageUrl:
      "https://www.michaelkors.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0c0a1c0c/images/hi-res/MKT5049.jpg",
  },
  {
    id: 8,
    title: "Rolex Datejust 1970",
    description:
      "Vintage automatic watch with date function and jubilee bracelet",
    price: 8500,
    category: "Antique",
    imageUrl:
      "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126233-0039.png",
  },
  {
    id: 9,
    title: "Fitbit Versa 4",
    description:
      "Fitness focused smartwatch with GPS, heart rate tracking and 6-day battery life",
    price: 229,
    category: "Smart",
    imageUrl:
      "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/versa-4/versa-4-black.png",
  },
  {
    id: 10,
    title: "Kate Spade Scallop",
    description:
      "Fashion-forward smartwatch with feminine design and customizable faces",
    price: 275,
    category: "Girls",
    imageUrl:
      "https://www.katespade.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-kate-spade-master/default/dw0c0a1c0c/images/hi-res/KSWU0001.jpg",
  },
  {
    id: 11,
    title: "Seiko 5 Sports",
    description:
      "Automatic movement with day-date display and 100m water resistance",
    price: 220,
    category: "Boys",
    imageUrl:
      "https://www.seikowatches.com/global-en/products/5sports/srpd55k1",
  },
  {
    id: 12,
    title: "Patek Philippe Calatrava 1950",
    description:
      "Classic vintage dress watch with manual winding movement and leather strap",
    price: 12500,
    category: "Antique",
    imageUrl: "https://www.patek.com/en/collection/calatrava/5119G-001",
  },
  {
    id: 13,
    title: "Samsung Galaxy Watch 5 Pro",
    description:
      "Titanium build with sapphire crystal, advanced GPS tracking and 80-hour battery life",
    price: 449,
    category: "Smart",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/p6pim/uk/2208/gallery/uk-galaxy-watch5-pro-r920-sm-r920fzkabtu-thumb-533400803",
  },
  {
    id: 14,
    title: "Citizen Eco-Drive Promaster",
    description:
      "Solar-powered dive watch with 200m water resistance and SuperLuminova indicators",
    price: 350,
    category: "Boys",
    imageUrl:
      "https://www.citizenwatch.com/dw/image/v2/BFKK_PRD/on/demandware.static/-/Sites-citizen_US-Library/default/dw60568ee3/images/product/BN0151-09L_fullsize.png",
  },
  {
    id: 15,
    title: "Olivia Burton 3D Daisy",
    description:
      "Floral embellished dial with vegan leather strap and rose gold case",
    price: 125,
    category: "Girls",
    imageUrl:
      "https://www.oliviaburton.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-olivia-burton-master/default/dw0c0a1c0c/images/hi-res/OB16SS50.jpg",
  },
  {
    id: 16,
    title: "Longines Heritage 1945",
    description:
      "Vintage-inspired watch with brushed copper dial and aged leather strap",
    price: 2000,
    category: "Antique",
    imageUrl:
      "https://www.longines.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/l/3/l3.774.4.50.2_1.png",
  },
  {
    id: 17,
    title: "Garmin Epix Gen 2",
    description:
      "Premium multisport watch with AMOLED display and advanced mapping features",
    price: 899,
    category: "Smart",
    imageUrl: "https://www.garmin.com/en-US/p/739123",
  },
  {
    id: 18,
    title: "Nixon Time Teller",
    description:
      "Minimalist design with stainless steel case and 3-hand Japanese quartz movement",
    price: 100,
    category: "Boys",
    imageUrl: "https://www.nixon.com/cdn/shop/products/A045-1000-view1.png",
  },
  {
    id: 19,
    title: "Tag Heuer Monaco 1979",
    description:
      "Iconic square case chronograph with perforated leather strap and blue dial",
    price: 6350,
    category: "Antique",
    imageUrl:
      "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw40582954/TAG_Heuer_Monaco/CAW211P.FC6356/CAW211P.FC6356_1000.png",
  },
  {
    id: 20,
    title: "Fossil Gen 6 Hybrid",
    description:
      "Combines traditional watch look with smart features and 2-week battery life",
    price: 229,
    category: "Smart",
    imageUrl:
      "https://fossil.scene7.com/is/image/FossilPartners/FTW4061_main?$sfcc_fos_large$",
  },
  {
    id: 21,
    title: "Anne Klein Diamond Accent",
    description:
      "Elegant bracelet watch with diamond markers and mother-of-pearl dial",
    price: 85,
    category: "Girls",
    imageUrl:
      "https://www.anneklein.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-anne-klein-master/default/dw0c0a1c0c/images/hi-res/AKAK0001.jpg",
  },
  {
    id: 22,
    title: "Timex Marlin Automatic",
    description:
      "Modern reissue of 1960s classic with stainless steel mesh band",
    price: 249,
    category: "Boys",
    imageUrl: "https://www.timex.com/cdn/shop/products/TW2T22700_a.jpg",
  },
  {
    id: 23,
    title: "Hamilton Ventura 1957",
    description:
      "Iconic triangular case as worn by Elvis Presley with black leather strap",
    price: 995,
    category: "Antique",
    imageUrl:
      "https://www.hamiltonwatch.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/h/3/h38425541_1.png",
  },
  {
    id: 24,
    title: "Skagen Signatur",
    description:
      "Ultra-thin minimalist design with mesh band and genuine crystal markers",
    price: 125,
    category: "Girls",
    imageUrl:
      "https://fossil.scene7.com/is/image/FossilPartners/SKW2715_main?$sfcc_fos_large$",
  },
  {
    id: 25,
    title: "Amazfit GTR 4",
    description:
      "Advanced sports tracking with dual-band GPS and 14-day battery life",
    price: 199,
    category: "Smart",
    imageUrl:
      "https://www.amazfit.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/a/m/amazfit-gtr-4_1.png",
  },
  {
    id: 26,
    title: "Bulova Accutron Spaceview 1960",
    description:
      "Revolutionary tuning fork movement with exposed dial and green accents",
    price: 4000,
    category: "Antique",
    imageUrl:
      "https://www.bulova.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/b/u/bulova-accutron-spaceview-1960_1.png",
  },
  {
    id: 27,
    title: "Casio Pro Trek PRG-240",
    description:
      "Outdoor watch with altimeter, barometer, compass and solar power",
    price: 250,
    category: "Boys",
    imageUrl:
      "https://www.casio.com/content/dam/casio/product-info/locales/us/en/timepiece/product/watch/P/R/PROTREK/prg240-1/assets/PRG240-1_Seq3.png.transform/main-visual-pc/image.png",
  },
  {
    id: 28,
    title: "Guess Crystal Accent",
    description:
      "Glitzy fashion watch with rhinestone bezel and stainless steel bracelet",
    price: 150,
    category: "Girls",
    imageUrl:
      "https://www.guess.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-guess-master/default/dw0c0a1c0c/images/hi-res/GUESS0001.jpg",
  },
  {
    id: 29,
    title: "Withings ScanWatch",
    description:
      "Hybrid smartwatch with ECG, SpO2 measurements and 30-day battery",
    price: 279,
    category: "Smart",
    imageUrl:
      "https://www.withings.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/s/c/scanwatch_1.png",
  },
  {
    id: 30,
    title: "Timex Q Reissue 1978",
    description:
      "Faithful recreation of iconic 70s design with woven stainless steel bracelet",
    price: 179,
    category: "Antique",
    imageUrl: "https://www.timex.com/cdn/shop/products/TW2T80700_a.jpg",
  },
  {
    id: 31,
    title: "Movado Bold",
    description: "Contemporary take on iconic Museum dial with ion-plated case",
    price: 450,
    category: "Boys",
    imageUrl:
      "https://www.movado.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw73a13dfa/images/products/3600537.png",
  },
  {
    id: 32,
    title: "Ted Baker Hettie",
    description:
      "Elegant floral pattern dial with bow detail and leather strap",
    price: 155,
    category: "Girls",
    imageUrl:
      "https://www.tedbaker.com/dw/image/v2/AAWT_PRD/on/demandware.static/-/Sites-ted-baker-master/default/dw0c0a1c0c/images/hi-res/TB0001.jpg",
  },
];

export default watchData;
