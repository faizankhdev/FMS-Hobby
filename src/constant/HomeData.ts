import { Button } from "@base-ui/react";



export const images = [
  "/images/homeimages/slideimages/slideimage1.webp",
  "/images/homeimages/slideimages/slideimage2.webp",
  "/images/homeimages/slideimages/slideimage3.webp",
  "/images/homeimages/slideimages/slideimage4.webp",
  "/images/homeimages/slideimages/slideimage5.webp",
];

export const homeCards = [
  {
    id: 1,
    src: "/images/homeimages/cardimages/cardimage1.webp",
    title: "RC Cars & Trucks",
    desc: "Whether you're conquering rough terrain or cruising city streets, we have the perfect RC car for you!",
    position: "md:col-start-1 md:row-start-1",
  },
  {
    id: 2,
    src: "/images/homeimages/cardimages/cardimage2.webp",
    title: "FCX24 Series",
    desc: "The new benchmark for climbing performance in mini RC cars.",
    position: "md:col-start-2 md:row-start-1",
  },
  {
    id: 3,
    src: "/images/homeimages/cardimages/cardimage3.webp",
    title: "New Release",
    desc: "FCX18 II Ford F-100",
    position: "md:col-start-2 md:row-start-2",
  },
  {
    id: 4,
    src: "/images/homeimages/cardimages/cardimage4.webp",
    title: "PART FINDER",
    desc: "Easily locate the parts you need to keep your RC models in top shape.",
    position: "md:col-start-2 md:row-start-3",
  },
];
export const homeVideoCard = {
  src: "/images/homeimages/cardimages/cardvideo1.mp4",
  title: "FCX24M LAND ROVER",
  desc: "Relive the Camel Trophy edition – classic styling and off-road performance!",
  button: "DISCOVER NOW",
};

export const LatestCard = [
  {
    id: 1,
    src: "/images/homeimages/cardimages/latestimage1.webp",
    heading: "New Release",
    para: "FMS FCX18 II Ford F-100 Brushless - More Power, More Fun.",
    Button: "SHOP NOW",
  },
  {
    id: 2,
    src: "/images/homeimages/cardimages/latestimage2.webp",
    heading: "New Release",
    para: "Meet the All-New FCX18 II F-100 — Enjoy Exclusive Early Bird Benefits!",
    Button: "SHOP NOW",
  },
  {
    id: 3,
    src: "/images/homeimages/cardimages/latestimage3.webp",
    heading: "FMS Now in the UK!",
    para: "FMS has officially launched in the UK, offering RC enthusiasts quick local delivery on premium models.",
    Button: "LEARN MORE",
  },
  {
    id: 4,
    src: "/images/homeimages/cardimages/latestimage4.webp",
    heading: "VIP Adventurer",
    para: "UK VIP rewards system is now live. Register today to claim your exclusive coupon!",
    Button: "LEARN MORE",
  },
  {
    id: 5,
    src: "/images/homeimages/cardimages/latestimage5.webp",
    heading: "Play Now, Pay Later!",
    para: "All RC models. Easy payments. More fun, less budget stress.",
    Button: "SHOP NOW",
  },
];

export const homeIcons = [
  {
    id:1,
    src: "/images/homeimages/homeicons/icon1.webp",
    heading: "Who We Are",
    para: "As a leading global RC brand, FMS was established in 2007and has been dedicated to the research, development, andinnovation of RC products for 18 years...",
  },
  {
    id:2,
    src: "/images/homeimages/homeicons/icon2.webp",
    heading: "Perfect Appearance, Excellent Performance",
    para: "FMS strives to replicate real aircraft and vehicles to models to the greatest extent possible, aiming for top-notch detail in the industry...",
  },
  {
    id:3,
    src: "/images/homeimages/homeicons/icon3.webp",
    heading: "Product Innovation",
    para: "FMS has consistently been dedicated to making new attempts with its products, guided by the needs and feedback of customers...",
  },
  {
    id:4,
    src: "/images/homeimages/homeicons/icon4.webp",
    heading: "The Customer Comes First",
    para: "We offer professional pre-sales consultations, after-sales service, 30-day money-back guarantee, 90-day warranty, and comprehensive technical support...",
  },
  {
    id:5,
    src: "/images/homeimages/homeicons/icon5.webp",
    heading: "Social Responsibility",
    para: "FMS has always upheld a sense of social responsibility, actively participating in various charitable activities and social responsibility projects, including donations to...",
  },
];


export const instagramImages = [
  "/images/homeimages/instagramimages/image1.webp",
  "/images/homeimages/instagramimages/image2.webp",
  "/images/homeimages/instagramimages/image3.webp",
  "/images/homeimages/instagramimages/image4.webp",
  "/images/homeimages/instagramimages/image5.webp",
  "/images/homeimages/instagramimages/image6.webp",
  "/images/homeimages/instagramimages/image7.webp",
  "/images/homeimages/instagramimages/image8.webp",
];


export type InstagramPost = {
  type: "video" | "image";
  src: string;
  date: string;
  title: string;
  description: string;
  challenge?: string;
  challengeText?: string;
  link?: string;
  hashtags: string;
};

export const instagramPosts: InstagramPost[] = [
  {
    type: "video",
    src: "/images/instagramvideos/video1.mp4",
    date: "30 September 2026",
    title: "What Happens When You Put Tracks on the FCX18 II F-100? 👀🚜",
    description: "Here is a quick and satisfying installation guide for the BATRAZZI All-Terrain Track Set.",
    challenge: "Swapping out the standard wheels for these tracks gives the FCX18 II a whole new way to tackle snow, mud, and rough terrain.",
    challengeText: "When would you swap your wheels for tracks? 👀👇",
    hashtags: "#fmsmodel #fmshobby #boxfunfms #fcx18ii #fordf100 #f100 #rccrawler #rctruck #scalebuilders #batrazzi #trackset #rcupgrade",
  },
  {
    type: "video",
    src: "/images/instagramvideos/video2.mp4",
    date: "2026/9/18",
    title: "Has the brand-new brushless F-100 already parked in your garage yet?📦🔥",
    description: "Check out how a simple unboxing can turn into a fun story! We want to see how your new FCX18 II Ford F-100 Brushless joins the family.",
    challenge: "🏆 Join the #BOXFUNFMS Challenge today! Show off your storytelling skills, share your unique build or trail runs, and win your share of cash prizes!",
    link: "🔗 Learn more & enter here: [https://www.fmshobby.com/pages/boxfunfms-challenge]",
    hashtags: "#fmsmodel #fmshobby #boxfunfms #fcx18ii #fordf100 #f100 #rccrawler #rctruck #scalebuilders #communitychallenge",
  },
  {
    type: "video",
    src: "/images/instagramvideos/video3.mp4",
    date: "2026/9/14",
    title: "How to install the Differential Upgrade on FCX18 II! 🛠️⚙️",
    description: "Here’s a full teardown and assembly of the Official FMS Differential Upgrade for the FCX18 II platform.",
    challenge: "💡 PRO TIP: This kit comes as loose internal parts for those who love hands-on DIY building. ",
    challengeText: "If you prefer an effortless, plug-and-play install, we highly recommend grabbing the complete pre-assembled differential assembly directly on our store! 🔧✨",
    hashtags: "#fmsmodel #boxfunfms #fcx18ii #fmsf100 #fmsrc #scalecrawler #rcmechanics #rcengineering #rctruck #scalebuilders #tinytrucknation #customrc #rcscale",
  },
  {
    type: "video",
    src: "/images/instagramvideos/video4.mp4",
    date: "2026/09/14",
    title: "The Brushless F-100 is LIVE! ⚡⏳",
    description: "⚡ 1312 Brushless Outrunner Power Stealth Matte Black Licensed Ford Body 🧲 Instant Magnetic Wire-Free Lighting LCG Straight Axle & 2-Speed Gearbox",
    challenge: "First batch: Only 500 units available worldwide. Don't miss out!",
    link: "🛒 Shop now：[https://www.fmshobby.uk/products/fms-1-18-fcx18-ii-ford-f-100-rtr-brushless-199mm-wheelbase]",
    hashtags: "#fmsmodel #boxfunfms #fcx18ii #fmsf100 #fordf100 #brushlessrc #rccrawler #scalerc #tinytrucks #limiteddrop #rchobby",
  },
  {
    type: "video",
   src: "/images/instagramvideos/video5.mp4",
    date: "2026/08/21",
    title: "The first FCX18 II model, the Ford F-100, is officially released! ",
    description: "The FMS FCX18 II Ford F-100 brings iconic classic truck styling, new FCX18 II performance, and endless customization options to your collection.",
    challenge: "Enjoy these exclusive early bird deals on our official store until September 21st: • Early Bird Price (Save $10): Get the F-100 for only $179.95 (regularly $189.99). • Body Swap Bundle (Save $24.99): Add an extra FCX18 II 199mm body assembly to the same cart and get a special discount. • Free Gift Set: Every F-100 includes a free scale surfboard and a livery-matched fridge magnet. • Official Store Exclusive: The retro Green & White livery option is sold exclusively on the official FMS website.",
    link: "Don't miss the launch deals. Order your F-100 today: 👉 https://www.fmshobby.uk/products/fms-1-18-fcx18ii-ford-f-100-rtr-brushed-199mm-wheelbase",
    hashtags: "#fmsmodel #fmshobby #fcx18ii #fordf100 #f100 #newrelease #rccrawler #rctruck #scalebuilders #smallscalerc #fordnation #comingson",
  },
  {
    type: "video",
    src: "/images/instagramvideos/video6.mp4",
    date: "2026/08/20",
    title: "How many different body colors of the FCX18 II F-100 did you spot in the video? ",
    description: "The new FCX18 II series features an innovative magnetic body-mount system for effortless, screw-free shell swaps in seconds.  ",
    challenge: "The FCX18 II platform will offer two specialized chassis wheelbases, and all future FCX18 II body shells will be directly compatible and interchangeable on these two chassis options.",
    challengeText: "Just two chassis are all it takes to enjoy the entire FCX18 II lineup—swap different body shells whenever and however you like.",
    hashtags: "#fmsmodel #FMSHobby #FCX18II #FordF100 #F100 #rccrawler #scalebuilders #magneticmount #comingsoon #smallscalerc",
  },
  {
    type: "video",
    src: "/images/instagramvideos/video7.mp4",
    date: "2026/08/19",
    title: "How many rigs did you spot in this clip? And can you name every single one of them? 🧐🏁",
    description: "The upcoming FCX18 II platform is engineered with an innovative magnetic quick-release design, letting you swap your favorite body shells on the same wheelbase in seconds. Changing the look of your rig has never been this fast or effortless.",
    challenge: "Stay tuned for our upcoming FCX18 II.",
    hashtags: "#fmsmodel #fmshobby #fcx18 #fcx18ii #newrelease #guessthecar #rctrending #scalebuilders #comingsoon #teaser #satisfyingvideo #magneticmount #customrc",
  },
  {
    type: "image",
    src: "/images/instagramvideos/image1.webp",
    date: "2026/07/04",
    title: "🚨 FMS UK EXCLUSIVE: THE ULTIMATE SUMMER BOGO IS LIVE! 🚨",
    description: "For a limited time, when you buy our flagship 1/10 FCX10 Toyota LC80 for just £399.99, you can choose any of our premium 1/18 scale crawlers (worth up to £189.99) for absolutely FREE! 🚙💨",
    challenge: "⏳ Limited stock available. Don't wait until your favorite model is gone!",
    link: "🛒Check out and get ready for double the adventure: [https://www.fmshobby.uk/collections/fcx10-series]",
    hashtags: "#FMSmodel #FMSUK #RCcrawler #BOGOsale #LC80 #rccars #trailrig",
  },
];