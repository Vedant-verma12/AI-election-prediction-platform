export interface StateInfo {
  id: string;
  name: string;
  type: "State" | "Union Territory";
  rulingParty: string;
  partyAbbr: string;
  chiefMinister: string;
  seats: number;
  predicted: string;
  capital: string;
}

export const partyColors: Record<string, { fill: string; label: string; hsl: string }> = {
  BJP:   { fill: "hsl(24, 90%, 52%)",  label: "Bharatiya Janata Party",       hsl: "var(--party-bjp)" },
  INC:   { fill: "hsl(140, 55%, 38%)", label: "Indian National Congress",      hsl: "var(--party-inc)" },
  AAP:   { fill: "hsl(195, 80%, 45%)", label: "Aam Aadmi Party",              hsl: "var(--party-aap)" },
  TMC:   { fill: "hsl(280, 50%, 45%)", label: "All India Trinamool Congress",  hsl: "var(--party-tmc)" },
  DMK:   { fill: "hsl(0, 75%, 50%)",   label: "Dravida Munnetra Kazhagam",    hsl: "var(--party-dmk)" },
  BJD:   { fill: "hsl(160, 60%, 40%)", label: "Biju Janata Dal",              hsl: "160 60% 40%" },
  YSRCP: { fill: "hsl(210, 70%, 45%)", label: "YSR Congress Party",           hsl: "210 70% 45%" },
  BRS:   { fill: "hsl(340, 65%, 50%)", label: "Bharat Rashtra Samithi",       hsl: "340 65% 50%" },
  CPM:   { fill: "hsl(0, 85%, 40%)",   label: "Communist Party (Marxist)",    hsl: "0 85% 40%" },
  JDU:   { fill: "hsl(45, 80%, 50%)",  label: "Janata Dal (United)",          hsl: "45 80% 50%" },
  NDPP:  { fill: "hsl(30, 60%, 50%)",  label: "NDPP",                         hsl: "30 60% 50%" },
  MNF:   { fill: "hsl(200, 55%, 50%)", label: "Mizo National Front",          hsl: "200 55% 50%" },
  NPP:   { fill: "hsl(170, 50%, 45%)", label: "National People's Party",      hsl: "170 50% 45%" },
  SDF:   { fill: "hsl(120, 50%, 45%)", label: "Sikkim Democratic Front",      hsl: "120 50% 45%" },
  SKM:   { fill: "hsl(20, 70%, 50%)",  label: "Sikkim Krantikari Morcha",     hsl: "20 70% 50%" },
  NDA:   { fill: "hsl(24, 85%, 55%)",  label: "NDA Alliance",                 hsl: "24 85% 55%" },
  INDIA: { fill: "hsl(140, 50%, 42%)", label: "I.N.D.I.A. Alliance",          hsl: "140 50% 42%" },
  JMM:   { fill: "hsl(80, 60%, 40%)",  label: "Jharkhand Mukti Morcha",       hsl: "80 60% 40%" },
  NONE:  { fill: "hsl(220, 10%, 65%)", label: "President's Rule / Other",     hsl: "220 10% 65%" },
};

export const statesData: StateInfo[] = [
  // --- States ---
  { id: "IN-AP", name: "Andhra Pradesh",     type: "State", rulingParty: "TDP-BJP Alliance",  partyAbbr: "NDA",   chiefMinister: "N. Chandrababu Naidu", seats: 25, predicted: "NDA",   capital: "Amaravati" },
  { id: "IN-AR", name: "Arunachal Pradesh",  type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Pema Khandu",           seats: 2,  predicted: "BJP",   capital: "Itanagar" },
  { id: "IN-AS", name: "Assam",              type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Himanta Biswa Sarma",   seats: 14, predicted: "BJP",   capital: "Dispur" },
  { id: "IN-BR", name: "Bihar",              type: "State", rulingParty: "NDA",                partyAbbr: "NDA",   chiefMinister: "Nitish Kumar",          seats: 40, predicted: "NDA",   capital: "Patna" },
  { id: "IN-CT", name: "Chhattisgarh",       type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Vishnu Deo Sai",        seats: 11, predicted: "BJP",   capital: "Raipur" },
  { id: "IN-GA", name: "Goa",                type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Pramod Sawant",         seats: 2,  predicted: "BJP",   capital: "Panaji" },
  { id: "IN-GJ", name: "Gujarat",            type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Bhupendra Patel",       seats: 26, predicted: "BJP",   capital: "Gandhinagar" },
  { id: "IN-HR", name: "Haryana",            type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Nayab Singh Saini",     seats: 10, predicted: "BJP",   capital: "Chandigarh" },
  { id: "IN-HP", name: "Himachal Pradesh",   type: "State", rulingParty: "INC",                partyAbbr: "INC",   chiefMinister: "Sukhvinder Singh Sukhu",seats: 4,  predicted: "INC",   capital: "Shimla" },
  { id: "IN-JH", name: "Jharkhand",          type: "State", rulingParty: "JMM-INC Alliance",   partyAbbr: "JMM",   chiefMinister: "Hemant Soren",          seats: 14, predicted: "INDIA", capital: "Ranchi" },
  { id: "IN-KA", name: "Karnataka",          type: "State", rulingParty: "INC",                partyAbbr: "INC",   chiefMinister: "Siddaramaiah",          seats: 28, predicted: "INC",   capital: "Bengaluru" },
  { id: "IN-KL", name: "Kerala",             type: "State", rulingParty: "CPM (LDF)",          partyAbbr: "CPM",   chiefMinister: "Pinarayi Vijayan",      seats: 20, predicted: "CPM",   capital: "Thiruvananthapuram" },
  { id: "IN-MP", name: "Madhya Pradesh",     type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Mohan Yadav",           seats: 29, predicted: "BJP",   capital: "Bhopal" },
  { id: "IN-MH", name: "Maharashtra",        type: "State", rulingParty: "Mahayuti (NDA)",     partyAbbr: "NDA",   chiefMinister: "Devendra Fadnavis",     seats: 48, predicted: "NDA",   capital: "Mumbai" },
  { id: "IN-MN", name: "Manipur",            type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "N. Biren Singh",        seats: 2,  predicted: "BJP",   capital: "Imphal" },
  { id: "IN-ML", name: "Meghalaya",          type: "State", rulingParty: "NPP-BJP",            partyAbbr: "NPP",   chiefMinister: "Conrad Sangma",         seats: 2,  predicted: "NDA",   capital: "Shillong" },
  { id: "IN-MZ", name: "Mizoram",            type: "State", rulingParty: "ZPM",                partyAbbr: "NONE",  chiefMinister: "Lalduhoma",             seats: 1,  predicted: "NONE", capital: "Aizawl" },
  { id: "IN-NL", name: "Nagaland",           type: "State", rulingParty: "NDPP-BJP",           partyAbbr: "NDPP",  chiefMinister: "Neiphiu Rio",           seats: 1,  predicted: "NDA",   capital: "Kohima" },
  { id: "IN-OR", name: "Odisha",             type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Mohan Charan Majhi",    seats: 21, predicted: "BJP",   capital: "Bhubaneswar" },
  { id: "IN-PB", name: "Punjab",             type: "State", rulingParty: "AAP",                partyAbbr: "AAP",   chiefMinister: "Bhagwant Mann",         seats: 13, predicted: "AAP",   capital: "Chandigarh" },
  { id: "IN-RJ", name: "Rajasthan",          type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Bhajan Lal Sharma",     seats: 25, predicted: "BJP",   capital: "Jaipur" },
  { id: "IN-SK", name: "Sikkim",             type: "State", rulingParty: "SKM",                partyAbbr: "SKM",   chiefMinister: "Prem Singh Tamang",     seats: 1,  predicted: "SKM",   capital: "Gangtok" },
  { id: "IN-TN", name: "Tamil Nadu",         type: "State", rulingParty: "DMK",                partyAbbr: "DMK",   chiefMinister: "M.K. Stalin",           seats: 39, predicted: "DMK",   capital: "Chennai" },
  { id: "IN-TG", name: "Telangana",          type: "State", rulingParty: "INC",                partyAbbr: "INC",   chiefMinister: "A. Revanth Reddy",      seats: 17, predicted: "INC",   capital: "Hyderabad" },
  { id: "IN-TR", name: "Tripura",            type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Manik Saha",            seats: 2,  predicted: "BJP",   capital: "Agartala" },
  { id: "IN-UP", name: "Uttar Pradesh",      type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Yogi Adityanath",       seats: 80, predicted: "BJP",   capital: "Lucknow" },
  { id: "IN-UT", name: "Uttarakhand",        type: "State", rulingParty: "BJP",                partyAbbr: "BJP",   chiefMinister: "Pushkar Singh Dhami",   seats: 5,  predicted: "BJP",   capital: "Dehradun" },
  { id: "IN-WB", name: "West Bengal",        type: "State", rulingParty: "TMC",                partyAbbr: "TMC",   chiefMinister: "Mamata Banerjee",       seats: 42, predicted: "TMC",   capital: "Kolkata" },

  // --- Union Territories ---
  { id: "IN-AN", name: "Andaman & Nicobar",  type: "Union Territory", rulingParty: "BJP (Central)", partyAbbr: "BJP",  chiefMinister: "Lt. Gov. D.K. Joshi",    seats: 1, predicted: "BJP",  capital: "Port Blair" },
  { id: "IN-CH", name: "Chandigarh",         type: "Union Territory", rulingParty: "BJP (Central)", partyAbbr: "BJP",  chiefMinister: "Administrator",          seats: 1, predicted: "BJP",  capital: "Chandigarh" },
  { id: "IN-DN", name: "Dadra & Nagar Haveli", type: "Union Territory", rulingParty: "BJP (Central)", partyAbbr: "BJP", chiefMinister: "Administrator",         seats: 1, predicted: "BJP",  capital: "Silvassa" },
  { id: "IN-DD", name: "Daman & Diu",        type: "Union Territory", rulingParty: "BJP (Central)", partyAbbr: "BJP",  chiefMinister: "Administrator",          seats: 1, predicted: "BJP",  capital: "Daman" },
  { id: "IN-DL", name: "Delhi",              type: "Union Territory", rulingParty: "AAP",           partyAbbr: "AAP",  chiefMinister: "Atishi Marlena",         seats: 7, predicted: "AAP",  capital: "New Delhi" },
  { id: "IN-JK", name: "Jammu & Kashmir",    type: "Union Territory", rulingParty: "INC-NC Alliance", partyAbbr: "INC", chiefMinister: "Omar Abdullah",          seats: 5, predicted: "INC",  capital: "Srinagar" },
  { id: "IN-LD", name: "Lakshadweep",        type: "Union Territory", rulingParty: "BJP (Central)", partyAbbr: "BJP",  chiefMinister: "Administrator",          seats: 1, predicted: "BJP",  capital: "Kavaratti" },
  { id: "IN-PY", name: "Puducherry",         type: "Union Territory", rulingParty: "NDA",           partyAbbr: "NDA",  chiefMinister: "N. Rangasamy",           seats: 1, predicted: "NDA",  capital: "Puducherry" },
];

// Map from stateId -> StateInfo for quick lookup
export const statesMap = new Map(statesData.map(s => [s.id, s]));
