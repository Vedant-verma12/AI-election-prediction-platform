export const partyData = [
  { name: "BJP", seats: 282, color: "hsl(24, 90%, 52%)", short: "BJP" },
  { name: "INC", seats: 98, color: "hsl(140, 55%, 38%)", short: "INC" },
  { name: "AAP", seats: 32, color: "hsl(195, 80%, 45%)", short: "AAP" },
  { name: "TMC", seats: 28, color: "hsl(280, 50%, 45%)", short: "TMC" },
  { name: "DMK", seats: 24, color: "hsl(0, 75%, 50%)", short: "DMK" },
  { name: "SP", seats: 18, color: "hsl(10, 85%, 48%)", short: "SP" },
  { name: "Others", seats: 61, color: "hsl(220, 10%, 55%)", short: "OTH" },
];

export const historicalData = [
  { year: "2004", BJP: 138, INC: 145, Others: 260 },
  { year: "2009", BJP: 116, INC: 206, Others: 221 },
  { year: "2014", BJP: 282, INC: 44, Others: 217 },
  { year: "2019", BJP: 303, INC: 52, Others: 188 },
  { year: "2024", BJP: 240, INC: 99, Others: 204 },
  { year: "2029*", BJP: 282, INC: 98, Others: 163 },
];

export const sentimentData = [
  { party: "BJP", positive: 48, neutral: 32, negative: 20 },
  { party: "INC", positive: 38, neutral: 30, negative: 32 },
  { party: "AAP", positive: 42, neutral: 28, negative: 30 },
  { party: "TMC", positive: 35, neutral: 35, negative: 30 },
  { party: "DMK", positive: 40, neutral: 33, negative: 27 },
];

export const newsItems = [
  {
    id: 1,
    title: "BJP Consolidates Lead in Northern States",
    description: "Latest polling data shows strong performance across UP, MP, and Rajasthan with improved rural outreach programs.",
    category: "Elections",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=250&fit=crop",
    date: "2026-03-19",
    source: "Election Desk",
  },
  {
    id: 2,
    title: "Congress Alliance Strategy Takes Shape in South",
    description: "INC announces strategic alliances in Karnataka and Kerala ahead of the upcoming elections, signaling a new coalition approach.",
    category: "National",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=400&h=250&fit=crop",
    date: "2026-03-18",
    source: "Political Bureau",
  },
  {
    id: 3,
    title: "Economic Growth Impacts Voter Sentiment",
    description: "GDP growth at 7.2% is reshaping voter preferences in urban constituencies, with development becoming a key electoral issue.",
    category: "Economy",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    date: "2026-03-17",
    source: "Economy Watch",
  },
  {
    id: 4,
    title: "State Elections: Key Battleground Analysis",
    description: "Detailed analysis of swing constituencies in Maharashtra and West Bengal reveals shifting voter demographics and party strategies.",
    category: "State",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&h=250&fit=crop",
    date: "2026-03-16",
    source: "State Desk",
  },
  {
    id: 5,
    title: "Youth Voter Registration Hits Record High",
    description: "Over 28 million new voters between ages 18-25 registered, potentially reshaping electoral dynamics in metropolitan areas.",
    category: "Elections",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=250&fit=crop",
    date: "2026-03-15",
    source: "Voter Analytics",
  },
  {
    id: 6,
    title: "Digital Campaign Spending Surges 340%",
    description: "Political parties are allocating unprecedented budgets to social media and digital advertising, transforming modern campaign strategy.",
    category: "National",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    date: "2026-03-14",
    source: "Tech Politics",
  },
];

export const leaders = [
  { id: 1, name: "Narendra Modi", party: "BJP", constituency: "Varanasi", popularity: 72, role: "Prime Minister", image: "/b336280e-ffe1-4bfb-9b44-50e88578969b.jpg" },
  { id: 2, name: "Rahul Gandhi", party: "INC", constituency: "Rae Bareli", popularity: 45, role: "Leader of Opposition", image: "/da006891-683e-42a4-a9e0-a326cec483bd.jpg" },
  { id: 3, name: "Arvind Kejriwal", party: "AAP", constituency: "New Delhi", popularity: 41, role: "National Convener", image: "/5240dacd-d39d-4697-825e-ba2bcc6dd8d4.jpg" },
  { id: 4, name: "Mamata Banerjee", party: "TMC", constituency: "Bhawanipur", popularity: 48, role: "Chief Minister, WB", image: "/d5177320-40f2-40c8-9a25-95d7c9bf5785.jpg" },
  { id: 5, name: "M.K. Stalin", party: "DMK", constituency: "Kolathur", popularity: 52, role: "Chief Minister, TN", image: "/6afb9a20-c305-40d1-ac0b-9a584b306da2.jpg" },
  { id: 6, name: "Akhilesh Yadav", party: "SP", constituency: "Kannauj", popularity: 38, role: "SP President", image: "/d2e3d096-bcbb-4641-a703-58350e8e9448.jpg" },
  { id: 7, name: "Amit Shah", party: "BJP", constituency: "Gandhinagar", popularity: 58, role: "Home Minister", image: "/3fc6860d-dbf6-4138-8d46-dd93c39314fb.jpg" },
  { id: 8, name: "Yogi Adityanath", party: "BJP", constituency: "Gorakhpur", popularity: 55, role: "Chief Minister, UP", image: "/5a80b237-137d-479a-894b-17b5d3357886.jpg" },
];

export const alliances = [
  { id: "nda", name: "NDA", parties: ["BJP", "JDU", "TDP", "Shiv Sena"], strength: 0.9, seats: 350 },
  { id: "india", name: "I.N.D.I.A.", parties: ["INC", "AAP", "TMC", "DMK", "SP", "JMM"], strength: 0.6, seats: 160 },
  { id: "third", name: "Third Front", parties: ["BSP", "AIMIM", "Others"], strength: 0.3, seats: 33 },
];

export const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir",
];

export const stateConstituencies: Record<string, string[]> = {
  "Uttar Pradesh": ["Varanasi", "Lucknow", "Kanpur", "Agra", "Allahabad", "Gorakhpur", "Rae Bareli", "Amethi"],
  "Maharashtra": ["Mumbai North", "Mumbai South", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad"],
  "Delhi": ["New Delhi", "East Delhi", "South Delhi", "North East Delhi", "North West Delhi", "West Delhi", "Chandni Chowk"],
  "Gujarat": ["Gandhinagar", "Ahmedabad East", "Ahmedabad West", "Surat", "Vadodara", "Rajkot"],
  "Tamil Nadu": ["Chennai North", "Chennai South", "Chennai Central", "Coimbatore", "Madurai", "Kolathur"],
  "West Bengal": ["Kolkata North", "Kolkata South", "Howrah", "Barrackpore", "Jadavpur", "Bhawanipur"],
  "Karnataka": ["Bangalore North", "Bangalore South", "Bangalore Central", "Mysore", "Mangalore", "Hubli"],
};

export const parties = ["BJP", "INC", "AAP", "TMC", "DMK", "SP", "BSP", "JDU", "TDP", "Others"];
