// app-data.js — seed data and state for PLACEHOLDER DMS

const AppState = {
  currentPage: 'dashboard',
  currentUser: {
    name: 'John Dealer',
    role: 'General Manager',
    initials: 'JD',
    email: 'john@gaautodealer.com',
    dealership: 'GA Auto Dealers LLC'
  },
  dealership: {
    name: 'GA Auto Dealers LLC',
    license: 'GA-DLR-20241134',
    address: '1234 Highway 78, Monroe, GA 30655',
    phone: '(770) 555-0100',
    email: 'admin@gaautodealer.com',
    county: 'Walton'
  }
};

const InventoryData = [
  { stock:'GA-2241', year:2021, make:'Ford',       model:'F-150 XLT 4WD',       vin:'1FTFW1E82MFA12345', miles:44200,  cost:22500, price:29900, days:12,  status:'frontline', color:'Oxford White',   transmission:'Automatic' },
  { stock:'GA-2240', year:2020, make:'Chevrolet',  model:'Equinox LT',          vin:'2GNAXSEV4L6123456', miles:61800,  cost:14200, price:19500, days:18,  status:'frontline', color:'Mosaic Black',   transmission:'Automatic' },
  { stock:'GA-2239', year:2019, make:'Toyota',     model:'Camry SE',            vin:'4T1B11HK8KU123456', miles:78400,  cost:12800, price:16900, days:24,  status:'frontline', color:'Midnight Black', transmission:'Automatic' },
  { stock:'GA-2238', year:2022, make:'RAM',        model:'1500 Big Horn',       vin:'1C6SRFFT2NN123456', miles:28100,  cost:31000, price:38500, days:3,   status:'recon',     color:'Billet Silver',  transmission:'Automatic' },
  { stock:'GA-2237', year:2018, make:'Honda',      model:'Accord Sport',        vin:'1HGCV1F34JA123456', miles:92200,  cost:10400, price:13900, days:45,  status:'frontline', color:'Modern Steel',   transmission:'Automatic' },
  { stock:'GA-2236', year:2020, make:'Jeep',       model:'Grand Cherokee Ltd',  vin:'1C4RJFBG5LC123456', miles:54600,  cost:21000, price:27500, days:67,  status:'frontline', color:'Diamond Black',  transmission:'Automatic' },
  { stock:'GA-2235', year:2019, make:'Nissan',     model:'Altima SV',           vin:'1N4BL4DV6KC123456', miles:69800,  cost:11200, price:14500, days:52,  status:'frontline', color:'Glacier White',  transmission:'CVT' },
  { stock:'GA-2234', year:2021, make:'Hyundai',    model:'Tucson SEL',          vin:'5NMS3CAD2MH123456', miles:38900,  cost:18500, price:23900, days:9,   status:'frontline', color:'Magnetic Force', transmission:'Automatic' },
  { stock:'GA-2233', year:2020, make:'Kia',        model:'Sorento LX',          vin:'5XYPGDA38LG123456', miles:58300,  cost:16100, price:21200, days:31,  status:'frontline', color:'Snow White',     transmission:'Automatic' },
  { stock:'GA-2232', year:2017, make:'Ford',       model:'Escape SE',           vin:'1FMCU9GD5HUD12345', miles:101400, cost:8900,  price:11900, days:88,  status:'frontline', color:'Ruby Red',       transmission:'Automatic' },
  { stock:'GA-2231', year:2022, make:'Toyota',     model:'Tundra SR5',          vin:'5TFDY5F10NX123456', miles:19800,  cost:38200, price:46900, days:7,   status:'recon',     color:'Cement',         transmission:'Automatic' },
  { stock:'GA-2230', year:2019, make:'Chevrolet',  model:'Silverado 1500 LT',   vin:'3GCUYDEDXKG123456', miles:83600,  cost:17800, price:23400, days:14,  status:'frontline', color:'Summit White',   transmission:'Automatic' },
];

const DealsData = [
  { id:'D-2341', customer:'Marcus Thompson',  vehicle:'2021 Ford F-150 XLT',    type:'Finance', salePrice:29900, cost:22500, frontGross:7400, backGross:1895, status:'funded',   date:'2026-05-29', salesperson:'Kevin S.' },
  { id:'D-2340', customer:'Sarah Livingston', vehicle:'2019 Toyota Camry SE',   type:'BHPH',    salePrice:16900, cost:12800, frontGross:4100, backGross:695,  status:'funded',   date:'2026-05-28', salesperson:'Brenda T.' },
  { id:'D-2339', customer:'David Reynolds',   vehicle:'2020 Chevy Equinox LT',  type:'Cash',    salePrice:19500, cost:14200, frontGross:2800, backGross:0,    status:'etrsent',  date:'2026-05-28', salesperson:'Mike D.' },
  { id:'D-2338', customer:'Angela Morrison',  vehicle:'2022 RAM 1500 Big Horn',  type:'Finance', salePrice:38500, cost:31000, frontGross:5400, backGross:1895, status:'pending',  date:'2026-05-27', salesperson:'Kevin S.' },
  { id:'D-2337', customer:'James Wallace',    vehicle:'2018 Honda Accord Sport', type:'Cash',    salePrice:13900, cost:10400, frontGross:1900, backGross:0,    status:'funded',   date:'2026-05-26', salesperson:'Lisa R.' },
  { id:'D-2336', customer:'Tanya Brooks',     vehicle:'2021 Hyundai Tucson SEL', type:'Finance', salePrice:23900, cost:18500, frontGross:3800, backGross:1395, status:'funded',   date:'2026-05-24', salesperson:'Brenda T.' },
  { id:'D-2335', customer:'Robert Atkins',    vehicle:'2020 Kia Sorento LX',    type:'Finance', salePrice:21200, cost:16100, frontGross:3500, backGross:1200, status:'funded',   date:'2026-05-22', salesperson:'Kevin S.' },
];

const LeadsData = [
  { id:'L-901', name:'Jennifer Kim',      phone:'(770) 555-0181', source:'Website',  interest:'SUV under $20k',     stage:'new',       time:'2h ago',    score:82 },
  { id:'L-902', name:'Robert Atkins',     phone:'(770) 555-0192', source:'Walk-in',  interest:'Truck, 4WD',         stage:'new',       time:'today',     score:71 },
  { id:'L-903', name:'Tasha Monroe',      phone:'(678) 555-0143', source:'Facebook', interest:'2020+ Sedan',        stage:'new',       time:'1d ago',    score:68 },
  { id:'L-904', name:'Marcus Thompson',   phone:'(770) 555-0142', source:'Referral', interest:'2021 F-150 XLT',     stage:'contacted', time:'appt 3pm',  score:95 },
  { id:'L-905', name:'Dana Byrd',         phone:'(404) 555-0177', source:'Website',  interest:'2019 Equinox',       stage:'contacted', time:'yesterday', score:74 },
  { id:'L-906', name:'Carlos Vega',       phone:'(770) 555-0166', source:'Walk-in',  interest:'2020 RAM 1500',      stage:'showroom',  time:'now',       score:88 },
  { id:'L-907', name:'Angela Morrison',   phone:'(678) 555-0155', source:'Referral', interest:'2022 Silverado',     stage:'showroom',  time:'now',       score:91 },
  { id:'L-908', name:'Sarah Livingston',  phone:'(770) 555-0134', source:'Website',  interest:'2019 Camry SE',      stage:'fi',        time:'2h ago',    score:79 },
  { id:'L-909', name:'David Reynolds',    phone:'(770) 555-0123', source:'Walk-in',  interest:'2020 Equinox LT',    stage:'sold',      time:'today',     score:100 },
  { id:'L-910', name:'James Wallace',     phone:'(678) 555-0112', source:'Referral', interest:'2018 Accord Sport',  stage:'sold',      time:'yesterday', score:100 },
];

const BHPHData = [
  { id:'BH-101', customer:'Carlos Vega',     vehicle:'2018 Chevy Malibu',   payment:280, freq:'weekly',    nextDue:'2026-06-01', balance:7840,  status:'current',  daysLate:0  },
  { id:'BH-102', customer:'Tonya Hicks',     vehicle:'2017 Ford Fusion',    payment:240, freq:'bi-weekly', nextDue:'2026-05-24', balance:5200,  status:'late',     daysLate:7  },
  { id:'BH-103', customer:'Jerome Barnes',   vehicle:'2016 Nissan Altima',  payment:195, freq:'bi-weekly', nextDue:'2026-06-03', balance:3910,  status:'current',  daysLate:0  },
  { id:'BH-104', customer:'Maria Gonzalez',  vehicle:'2019 Hyundai Elantra',payment:310, freq:'monthly',   nextDue:'2026-05-15', balance:9100,  status:'late',     daysLate:22 },
  { id:'BH-105', customer:'Devon Williams',  vehicle:'2020 Nissan Sentra',  payment:265, freq:'bi-weekly', nextDue:'2026-05-31', balance:11400, status:'due',      daysLate:0  },
  { id:'BH-106', customer:'Patricia Moore',  vehicle:'2017 Toyota Corolla', payment:225, freq:'bi-weekly', nextDue:'2026-06-05', balance:4320,  status:'current',  daysLate:0  },
  { id:'BH-107', customer:'Larry Thompson',  vehicle:'2018 Honda Civic',    payment:210, freq:'weekly',    nextDue:'2026-06-02', balance:6100,  status:'current',  daysLate:0  },
  { id:'BH-108', customer:'Tamika Scott',    vehicle:'2016 Ford Focus',     payment:180, freq:'bi-weekly', nextDue:'2026-05-20', balance:2800,  status:'late',     daysLate:11 },
];

const ETRData = [
  { id:'ETR-441', customer:'David Reynolds',   vehicle:'2020 Chevy Equinox', vin:'2GNAXSEV4L6123456', county:'Walton',   tavt:741,  submitted:'Today 2:05 PM',  status:'pending'  },
  { id:'ETR-440', customer:'Marcus Thompson',  vehicle:'2021 Ford F-150',    vin:'1FTFW1E82MFA12345', county:'Gwinnett', tavt:1137, submitted:'Yesterday',       status:'approved' },
  { id:'ETR-439', customer:'Sarah Livingston', vehicle:'2019 Toyota Camry',  vin:'4T1B11HK8KU123456', county:'Walton',   tavt:642,  submitted:'May 27',          status:'approved' },
  { id:'ETR-438', customer:'James Wallace',    vehicle:'2018 Honda Accord',  vin:'1HGCV1F34JA123456', county:'Newton',   tavt:528,  submitted:'May 26',          status:'rejected' },
  { id:'ETR-437', customer:'Angela Morrison',  vehicle:'2022 RAM 1500',      vin:'1C6SRFFT2NN123456', county:'Walton',   tavt:1463, submitted:'May 25',          status:'approved' },
  { id:'ETR-436', customer:'Tanya Brooks',     vehicle:'2021 Hyundai Tucson',vin:'5NMS3CAD2MH123456', county:'Walton',   tavt:906,  submitted:'May 24',          status:'approved' },
];

const ReportData = {
  salesByRep: [
    { name:'Kevin S.',  units:8, front:22400, back:7200 },
    { name:'Brenda T.', units:7, front:18900, back:6100 },
    { name:'Mike D.',   units:5, front:11800, back:4900 },
    { name:'Lisa R.',   units:3, front:8100,  back:3200 },
  ],
  leadSources: [
    { source:'Website / Organic', count:14, pct:41 },
    { source:'Facebook / Social', count:9,  pct:26 },
    { source:'Walk-in',           count:7,  pct:21 },
    { source:'Referral',          count:4,  pct:12 },
  ],
  monthly: [
    { month:'Dec', units:14, gross:38200 },
    { month:'Jan', units:17, gross:44100 },
    { month:'Feb', units:15, gross:41800 },
    { month:'Mar', units:19, gross:52400 },
    { month:'Apr', units:21, gross:54900 },
    { month:'May', units:23, gross:61400 },
  ]
};

const AIResponses = {
  aged: `Based on your inventory, here are the units over 60 days:\n\n• GA-2236 — 2020 Jeep Grand Cherokee (67 days, $27,500)\n• GA-2235 — 2019 Nissan Altima (52 days, $14,500)\n• GA-2232 — 2017 Ford Escape SE (88 days, $11,900)\n\nRecommendation: Drop GA-2232 to $10,900 immediately — it's been on the lot almost 3 months. Price reductions of 5–8% on GA-2236 and GA-2235 should move them this week. Combined floor plan cost is approximately $580/month.`,
  deal: `Here's your deal structure:\n\nVehicle: $25,000\nDown payment: -$2,000\nTax (7%): +$1,610\nAmount financed: $24,610\n\nAt 14% APR / 48 months:\n→ Monthly payment: $675/mo\n→ Total interest paid: $7,790\n\nAlternatives:\n• 60 months → $573/mo (+$1,190 more interest)\n• 36 months → $841/mo (-$2,800 less interest)\n\nIf they're payment-sensitive, 60 months gets them under $600/mo.`,
  leads: `You have 7 leads that need follow-up:\n\n1. Jennifer Kim — 26 hours, no contact (website)\n2. Robert Atkins — walk-in yesterday, no follow-up\n3. Tasha Monroe — 36 hours since Facebook inquiry\n4. Dana Byrd — called once, no second attempt\n\nPriority: Jennifer and Tasha have high lead scores (82 and 68). Website leads that go uncontacted for 24+ hours drop close rate by 40%. Recommend sending the 3-day SMS template now.`,
  best: `Your best grossing deal this month:\n\nAngela Morrison — 2022 RAM 1500 Big Horn\n• Front-end gross: $5,400\n• Back-end: $1,895 (GAP $500 + warranty $600 + other $795)\n• Total gross: $7,295\n\nSold by Kevin S. — his 3rd deal over $6k this month. Kevin's average deal gross is $3,700, which is 38% above team average.`,
  bhph: `Current BHPH status:\n\n• 38 total active accounts\n• Portfolio balance: $284,100\n• 6 accounts overdue:\n  — Maria Gonzalez: 22 days late ($620 owed) ⚠ PRIORITY\n  — Tonya Hicks: 7 days late ($280 owed)\n  — Tamika Scott: 11 days late ($360 owed)\n  — 3 others: 1-4 days late\n\nMaria Gonzalez is highest risk. Manual call recommended today before repo referral threshold (30 days).`,
  conversion: `Lead conversion rate this month: 31%\n(34 total leads → 10.5 avg deals)\n\nBy source:\n• Referral: 75% conversion ⭐ best\n• Walk-in: 57% conversion\n• Website: 43% conversion\n• Facebook: 22% conversion ← underperforming\n\nFacebook leads are closing at half the rate of other sources. Recommend faster response time (under 5 min vs current avg 47 min). That alone could add 2–3 deals/month.`,
  pricing: `Pricing analysis for your current inventory:\n\nOverpriced vs market:\n• GA-2236 Jeep Grand Cherokee: $27,500 vs $25,200 avg market → drop $2,000\n• GA-2237 Honda Accord: $13,900 vs $12,800 avg market → slightly high\n\nUnderpriced (opportunity):\n• GA-2241 Ford F-150: $29,900 vs $32,100 avg market → room to raise $1,500\n• GA-2238 RAM 1500: $38,500 vs $40,200 avg market → could raise $1,000\n\nQuick wins available: ~$2,500 in additional gross if you reprice the F-150 and RAM.`
};
