// ============================================================
// STORES DATA - Dossani Paradise Management
// id, name, code, type, brand, lat, lng, address
// ============================================================
const stores = [
{id:"BK22027",name:"Burger King Alvord 22027",code:"BK22027",type:"fastfood",brand:"bk",lat:33.3925543,lng:-97.7297886,address:"8417 N.US Hwy 287, Alvord, TX 76225"},
{id:"BK27082",name:"Burger King Alliance/TMS 27082",code:"BK27082",type:"fastfood",brand:"bk",lat:33.0252883,lng:-97.2760128,address:"15933 North Freeway, Fort Worth, TX 76177"},
{id:"BK27083",name:"Burger King Azle 27083",code:"BK27083",type:"fastfood",brand:"bk",lat:32.9103543,lng:-97.5440232,address:"1001 Boyd Road, Azle, TX 76020"},
{id:"BK28626",name:"Burger King Bailey Boswell 28626",code:"BK28626",type:"fastfood",brand:"bk",lat:32.8804702,lng:-97.3928522,address:"4541 W. Bailey Boswell, Fort Worth, TX 76179"},
{id:"BK11460",name:"Burger King Bonham 11460",code:"BK11460",type:"fastfood",brand:"bk",lat:33.5930631,lng:-96.192829,address:"1801 North, TX-121, Bonham, TX 75418"},
{id:"BK26924",name:"Burger King Corinth 26924",code:"BK26924",type:"fastfood",brand:"bk",lat:33.1323896,lng:-97.0414887,address:"8001 S. Interstate 35 E, Corinth, TX 76210"},
{id:"BK23613",name:"Burger King Corsicana 23613",code:"BK23613",type:"fastfood",brand:"bk",lat:32.0869344,lng:-96.5141699,address:"3620 W State Hwy 31, Corsicana, TX, 75110"},
{id:"BK28313",name:"Burger King Cross Roads 28313",code:"BK28313",type:"fastfood",brand:"bk",lat:33.2241299,lng:-96.9820109,address:"11881 US-380, Cross Roads, TX 76227"},
{id:"BK26183",name:"Burger King Denton 26183",code:"BK26183",type:"fastfood",brand:"bk",lat:33.2292022,lng:-97.159802,address:"2215 West University Drive, Denton, TX 76201"},
{id:"BK03675",name:"Burger King Denton 3675",code:"BK03675",type:"fastfood",brand:"bk",lat:33.1869188,lng:-97.1066459,address:"2233 S Loop 288, Denton, TX 76205"},
{id:"BK27028",name:"Burger King Gainesville 27028",code:"BK27028",type:"fastfood",brand:"bk",lat:33.641515,lng:-97.1579193,address:"1711 North I-35, Gainesville, TX 76240"},
{id:"BK20671",name:"Burger King Greenville 20671",code:"BK20671",type:"fastfood",brand:"bk",lat:33.0953616,lng:-96.1072047,address:"7315 I-30 Frontage Rd, Greenville, TX 75402"},
{id:"BK26015",name:"Burger King Hooks 26015",code:"BK26015",type:"fastfood",brand:"bk",lat:33.4674733,lng:-94.2366504,address:"580 Lone Star Dr., Hooks, TX 75561"},
{id:"BK27415",name:"Burger King Kaufman 27415",code:"BK27415",type:"fastfood",brand:"bk",lat:32.6488448,lng:-96.5413512,address:"700 E. Highway 175, Kaufman, TX 75142"},
{id:"BK06460",name:"Burger King McKinney 6460",code:"BK06460",type:"fastfood",brand:"bk",lat:33.2169105,lng:-96.6320383,address:"1700 W. University Dr, McKinney, TX 75069"},
{id:"BK28174",name:"Burger King Melissa 28174",code:"BK28174",type:"fastfood",brand:"bk",lat:33.2834364,lng:-96.56246,address:"2651 Sam Rayburn Hwy, Melissa, TX 75454"},
{id:"BK28312",name:"Burger King Mesquite 28312",code:"BK28312",type:"fastfood",brand:"bk",lat:32.7938775,lng:-96.6116061,address:"2104 N Galloway Ave, Mesquite, TX 75150"},
{id:"BK28514",name:"Burger King Midlothian 28514",code:"BK28514",type:"fastfood",brand:"bk",lat:32.4600926,lng:-96.9959456,address:"2251 FM 663, Midlothian, TX 76065"},
{id:"BK10358",name:"Burger King Nash 10358",code:"BK10358",type:"fastfood",brand:"bk",lat:33.4525178,lng:-94.1301793,address:"1970 N. Kings Hwy, Nash, TX 75569"},
{id:"BK24008",name:"Burger King New Boston 24008",code:"BK24008",type:"fastfood",brand:"bk",lat:33.4763206,lng:-94.4088946,address:"900 N. McCoy Blvd., New Boston, TX 75570"},
{id:"BK02390",name:"Burger King Paris 2390",code:"BK02390",type:"fastfood",brand:"bk",lat:33.660776,lng:-95.5103595,address:"3590 Lamar, Paris, TX 75460"},
{id:"BK04851",name:"Burger King Plano (Coit) 4851",code:"BK04851",type:"fastfood",brand:"bk",lat:33.0284064,lng:-96.7706873,address:"2009 Coit Rd, Plano, TX 75075"},
{id:"BK13192",name:"Burger King Plano (Ohio) 13192",code:"BK13192",type:"fastfood",brand:"bk",lat:33.0978387,lng:-96.7961826,address:"8720 Ohio Dr, Plano, TX 75024"},
{id:"BK27958",name:"Burger King Quinlan 27958",code:"BK27958",type:"fastfood",brand:"bk",lat:32.9054312,lng:-96.1276293,address:"8909 State Highway 34 South, Quinlan, TX 75474"},
{id:"BK24875",name:"Burger King Royse City 24875",code:"BK24875",type:"fastfood",brand:"bk",lat:32.9661228,lng:-96.3390095,address:"440 W. Interstate 30, Royse City, TX 75189"},
{id:"BK27084",name:"Burger King Saginaw 27084",code:"BK27084",type:"fastfood",brand:"bk",lat:32.8681978,lng:-97.341787,address:"6960 N Blue Mound Road, Fort Worth, TX 76131"},
{id:"BK28683",name:"Burger King Sunnyvale 28683",code:"BK28683",type:"fastfood",brand:"bk",lat:32.7832645,lng:-96.5601677,address:"480 US Hwy 80, Sunnyvale, TX 75182"},
{id:"BK25198",name:"Burger King Terrell 25198",code:"BK25198",type:"fastfood",brand:"bk",lat:32.739396,lng:-96.2920632,address:"1204 W. Moore Avenue, Terrell, TX 75160"},
{id:"BK09723",name:"Burger King The Colony 9723",code:"BK09723",type:"fastfood",brand:"bk",lat:33.0674516,lng:-96.8893989,address:"3700 Main St, The Colony, TX 75056"},
{id:"BK23086",name:"Burger King Atlanta 23086",code:"BK23086",type:"fastfood",brand:"bk",lat:33.1178617,lng:-94.181756,address:"299 U.S. 59, Atlanta, TX 75551"},
{id:"SUB22",name:"Subway Texarkana 22411",code:"SUB22",type:"fastfood",brand:"sub",lat:33.4190104,lng:-94.0941756,address:"4103 W, 7th St., Texarkana, TX 75503"},
{id:"PQS01",name:"Paradise QS #01 - Sun Valley",code:"PQS01",type:"cstore",brand:"pqs",lat:32.6795074,lng:-97.2398344,address:"5401 Sun Valley Dr., Fort Worth, TX 76119"},
{id:"PQS02",name:"Paradise QS #02 - Lewisville",code:"PQS02",type:"cstore",brand:"pqs",lat:32.9906715,lng:-96.9780407,address:"521 E. Hwy 121, Lewisville, TX 75057"},
{id:"PQS03",name:"Paradise QS #03 - Grapevine",code:"PQS03",type:"cstore",brand:"pqs",lat:32.9413343,lng:-97.0731222,address:"513 E. Northwest Hwy, Grapevine, TX 76051"},
{id:"PQS04",name:"Paradise QS #04 - Alvord",code:"PQS04",type:"cstore",brand:"pqs",lat:33.3927543,lng:-97.7297886,address:"8417 N. US Hwy 287, Alvord, TX 76225"},
{id:"PQS05",name:"Paradise QS #05 - Hope",code:"PQS05",type:"cstore",brand:"pqs",lat:33.6646746,lng:-93.6003814,address:"901 W. 3rd St., Hope, AR 71801"},
{id:"PQS06",name:"Paradise QS #06 - Nash",code:"PQS06",type:"cstore",brand:"pqs",lat:33.4521178,lng:-94.1301793,address:"1970 N. Kings Hwy, Nash, TX 75569"},
{id:"PQS07",name:"Paradise QS #07 - 7th St",code:"PQS07",type:"cstore",brand:"pqs",lat:33.4184104,lng:-94.0941756,address:"4103 W, 7th St., Texarkana, TX 75501"},
{id:"PQS08",name:"Paradise QS #08 - Ashdown",code:"PQS08",type:"cstore",brand:"pqs",lat:33.6625838,lng:-94.1192361,address:"950 S. Constitution Avenue, Ashdown, AR 71822"},
{id:"PQS09",name:"Paradise QS #09 - New Boston Rd",code:"PQS09",type:"cstore",brand:"pqs",lat:33.4403875,lng:-94.0875947,address:"3400 New Boston Rd., Texarkana, TX 75501"},
{id:"PQS10",name:"Paradise QS #10 - Texas Blvd",code:"PQS10",type:"cstore",brand:"pqs",lat:33.448522,lng:-94.0527795,address:"3300 Texas Blvd, Texarkana, TX 75503"},
{id:"PQS11",name:"Paradise QS #11 - New Boston City",code:"PQS11",type:"cstore",brand:"pqs",lat:33.4757206,lng:-94.4088946,address:"900 N. McCoy Blvd., New Boston, TX 75570"},
{id:"PQS12",name:"Paradise QS #12 - Summerhill",code:"PQS12",type:"cstore",brand:"pqs",lat:33.4630376,lng:-94.0661119,address:"4621 Summerhill Rd., Texarkana, TX 75503"},
{id:"PQS13",name:"Paradise QS #13 - Hooks",code:"PQS13",type:"cstore",brand:"pqs",lat:33.4668733,lng:-94.2366504,address:"580 Lone Star Dr., Hooks, TX 75561"},
{id:"PQS14",name:"Paradise QS #14 - White Settlement",code:"PQS14",type:"cstore",brand:"pqs",lat:32.7589535,lng:-97.4917004,address:"9913 White Settlement Rd., Fort Worth, TX 76108"},
{id:"PQS15",name:"Paradise QS #15 - Pittsburg",code:"PQS15",type:"cstore",brand:"pqs",lat:33.0094559,lng:-94.9644747,address:"635 Mt Pleasant Street, Pittsburg, TX 75686"},
{id:"PQS16",name:"Paradise QS #16 - MT Pleasant",code:"PQS16",type:"cstore",brand:"pqs",lat:33.1772915,lng:-94.9708888,address:"2011 North Jefferson Ave., Mt. Pleasant, TX 75455"},
{id:"7EL01",name:"7-Eleven Riverfront",code:"7EL01",type:"cstore",brand:"711",lat:32.7654016,lng:-96.8034512,address:"1005 S. Riverfront Blvd., Dallas, TX 75207"},
{id:"NASH01",name:"Nashville Store",code:"NASH01",type:"cstore",brand:"nash",lat:33.9450,lng:-93.8400,address:"502 E. Mine, Nashville, AR 71852"},
{id:"CW001",name:"Scarborough Car Wash",code:"CW001",type:"carwash",brand:"cw",lat:32.3741146,lng:-96.8662758,address:"1448 FM 66, Waxahachie, TX 75167"},
{id:"CW002",name:"Scarborough Travel Stop",code:"CW002",type:"cstore",brand:"pqs",lat:32.3782774,lng:-96.7708138,address:"3298 S Interstate Hwy 35 E, Waxahachie, TX 75165"},
];

// ============================================================
// USER PROFILE
// ============================================================
function resolveRuntimeProfile(authUser, dbUser = {}, opts = {}) {
const email = String(dbUser?.email || authUser?.email || '').trim().toLowerCase();
const name = dbUser?.name || authUser?.displayName || (email ? email.split('@')[0] : 'Unknown');
const storesRaw = dbUser?.stores;
const stores = storesRaw === 'all' || (Array.isArray(storesRaw) && storesRaw.length === 1 && storesRaw[0] === 'all')
? 'all'
: Array.isArray(storesRaw)
? storesRaw
: (typeof storesRaw === 'string' && storesRaw ? [storesRaw] : []);
return {
uid: authUser?.uid || dbUser?.uid || '',
email,
name,
role: normalizeRole(dbUser?.role || ''),
stores,
title: dbUser?.title || dbUser?.role || '',
_profileSource: 'firebase'
};
}

// ============================================================
// APP.JS - Main Application Logic
// ============================================================

// ============================================================
// FIREBASE CONFIG
// ============================================================
const firebaseConfig = {
apiKey: "AIzaSyDf0W5a8UPpuZbo873nWfed6VvNExL4BjM",
authDomain: "dossani-paradise-rm-tracker.firebaseapp.com",
databaseURL: "https://dossani-paradise-rm-tracker-default-rtdb.firebaseio.com",
projectId: "dossani-paradise-rm-tracker",
storageBucket: "dossani-paradise-rm-tracker.firebasestorage.app",
messagingSenderId: "328034984226",
appId: "1:328034984226:web:2b2ddb58d935bec201857b"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage();

// LOGO URLS
const BRAND_LOGOS = {
bk: 'logos/bk-logo.png',
sub: 'logos/subway-logo.png',
pqs: 'logos/pqs-logo.png',
'711': 'logos/711-logo.png',
cw: 'logos/cw-logo.png',
nash: 'logos/pqs-logo.png',
dpm: 'logos/dpm-icon.png'
};

// ============================================================
// APP STATE
// ============================================================
let currentUser = null;
let selectedStore = null;
let selectedCategory = null;
let selectedLocation = null;
let selectedPriority = null;
let uploadedPhotos = [];
let currentTickets = [];
let currentFilter = 'all';
let activeTicketListener = null;
let vendorList = [];
let desktopStoreData = [];
let dslShowAll = false;
let currentScreenId = 'storeSelection';
let selectedStoreSummaryCounts = { open: 0, total: 0 };
let selectedStoreSummaryListenerRef = null;
let selectedStoreSummaryListenerCallback = null;
let adminSummaryListenerRef = null;
let adminSummaryListenerCallback = null;
const SUMMARY_LAYOUT_RULES = {
adminSummary: {
roles: new Set(['Overwatch', 'Viewer', 'Admin', 'Director']),
screens: new Set(['storeSelection','allTicketsScreen','coachLanding','coachStoreView'])
},
selectedStoreSummary: {
screensByRole: {
Overwatch: new Set(['storeSelection', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen']),
Viewer:    new Set(['storeSelection', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen']),
Admin:     new Set(['storeSelection', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen']),
Director:  new Set(['coachLanding', 'coachStoreView', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen']),
Manager:   new Set(['managerLanding', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen']),
'Area Coach': new Set(['coachStoreView', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen'])
}
}
};
const TICKET_STATUS_CONFIG = {
unassigned: { order: 0, label: 'Unassigned', isActive: true, colorClass: 'unassigned', allowedTransitions: ['assigned', 'dispatched', 'inprogress', 'waiting', 'resolved', 'closed'] },
assigned: { order: 1, label: 'Assigned', isActive: true, colorClass: 'assigned', allowedTransitions: ['dispatched', 'inprogress', 'waiting', 'resolved', 'closed'] },
dispatched: { order: 2, label: 'Dispatched', isActive: true, colorClass: 'dispatched', allowedTransitions: ['inprogress', 'waiting', 'resolved', 'closed'] },
waiting: { order: 3, label: 'Waiting', isActive: true, colorClass: 'waiting', allowedTransitions: ['inprogress', 'resolved', 'closed'] },
inprogress: { order: 4, label: 'In Progress', isActive: true, colorClass: 'inprogress', allowedTransitions: ['waiting', 'resolved', 'closed'] },
resolved: { order: 5, label: 'Resolved', isActive: false, colorClass: 'resolved', allowedTransitions: ['closed'] },
closed: { order: 6, label: 'Closed', isActive: false, colorClass: 'closed', allowedTransitions: [] }
};
const STATUS_ORDER = Object.keys(TICKET_STATUS_CONFIG).sort((a, b) => TICKET_STATUS_CONFIG[a].order - TICKET_STATUS_CONFIG[b].order);
const PRIORITY_ORDER = { emergency: 0, urgent: 1, routine: 2 };
const WAITING_REASONS = { parts: 'Waiting on Parts', vendor: 'Waiting on Vendor', approval: 'Waiting on Approval', other: 'Waiting on Other' };

function syncStatusFilterUIFromConfig() {
const statusButtonsHtml = STATUS_ORDER.map(status =>
`<button class="filter-chip" data-filter="${status}" onclick="filterTickets('${status}', this)">${getStatusLabel(status)}</button>`
).join('');
['ticketFilters', 'compactTicketFilters'].forEach((id, idx) => {
const el = document.getElementById(id);
if (!el) return;
const allLabel = idx === 0 ? 'All' : 'All';
el.innerHTML = `<button class="filter-chip active" data-filter="all" onclick="filterTickets('all', this)">${allLabel}</button>${statusButtonsHtml}`;
});
const statusSelect = document.getElementById('atFilterStatus');
if (statusSelect) {
statusSelect.innerHTML = `<option value="all">All Statuses</option>${STATUS_ORDER.map(status => `<option value="${status}">${getStatusLabel(status)}</option>`).join('')}`;
}
}
syncStatusFilterUIFromConfig();

auth.onAuthStateChanged(async (user) => {
if (user) {
console.log('Signed in:', user.email);
await loadUserData(user);
} else if (auth.isSignInWithEmailLink(window.location.href)) {
handleEmailLinkSignIn();
} else if (window.localStorage.getItem('kioskMode') === '1') {
activateKioskMode();
} else {
showLoginScreen();
}
});

async function sendSignInLink() {
const email = document.getElementById('loginEmail').value.trim().toLowerCase();
if (!email) { showError('Enter your email address.'); return; }
if (email === 'viewer@dossaniparadise.com') {
activateKioskMode();
return;
}
if (!email.endsWith('@dossaniparadise.com') && email !== 'scroadmart@att.net') {
showError('Only @dossaniparadise.com emails are allowed.');
return;
}
const btn = document.getElementById('sendLinkBtn');
btn.innerHTML = '<span class="spinner"></span>';
btn.disabled = true;
try {
await auth.sendSignInLinkToEmail(email, { url: window.location.href, handleCodeInApp: true });
window.localStorage.setItem('emailForSignIn', email);
document.getElementById('loginForm').classList.add('hidden');
document.getElementById('emailSentMessage').classList.remove('hidden');
document.getElementById('sentToEmail').textContent = email;
} catch (err) {
console.error('Send link error:', err);
showError(err.code === 'auth/invalid-email' ? 'Invalid email.' : 'Failed to send. Try again.');
} finally {
btn.innerHTML = 'Send Sign-In Link';
btn.disabled = false;
}
}

function activateKioskMode() {
window.localStorage.setItem('kioskMode', '1');
currentUser = {
uid: 'kiosk-viewer',
email: 'viewer@dossaniparadise.com',
name: 'Viewer',
role: 'Viewer',
title: 'Kiosk View',
stores: 'all',
status: 'active'
};
if (auth.currentUser) {
showAppScreen();
} else {
auth.signInAnonymously().catch(() => {}).finally(() => showAppScreen());
}
}

document.getElementById('loginEmail').addEventListener('keydown', (e) => {
if (e.key === 'Enter') sendSignInLink();
});

async function handleEmailLinkSignIn() {
let email = window.localStorage.getItem('emailForSignIn');
if (!email) email = window.prompt('Confirm your email:');
if (!email) { showLoginScreen(); return; }
try {
await auth.signInWithEmailLink(email, window.location.href);
window.localStorage.removeItem('emailForSignIn');
window.history.replaceState({}, document.title, window.location.pathname);
} catch (err) {
console.error('Link sign-in error:', err);
const msgs = {
'auth/invalid-action-code': 'This link has expired or was already used. Request a new one.',
'auth/invalid-email': 'Invalid email. Try again.',
'auth/user-disabled': 'Account disabled. Contact IT.'
};
showError(msgs[err.code] || 'Sign-in failed: ' + err.message);
window.history.replaceState({}, document.title, window.location.pathname);
showLoginScreen();
}
}

function resendEmail() {
document.getElementById('emailSentMessage').classList.add('hidden');
document.getElementById('loginForm').classList.remove('hidden');
}

async function loadUserData(user) {
try {
const snap = await db.ref(`users/${user.uid}`).once('value');
let data = snap.val();
if (!data) {
const emailKey = user.email.toLowerCase().replace(/\./g, ',');
const preSnap = await db.ref(`preApproved/${emailKey}`).once('value');
const preData = preSnap.val();
if (preData) {
data = {
name: preData.name,
email: user.email,
role: preData.role,
title: preData.title || preData.role,
stores: preData.stores,
status: 'active',
activatedAt: firebase.database.ServerValue.TIMESTAMP
};
await db.ref(`users/${user.uid}`).set(data);
await db.ref(`preApproved/${emailKey}`).remove();
} else {
try {
await db.ref(`pending/${user.uid}`).set({ email: user.email, requestedAt: firebase.database.ServerValue.TIMESTAMP });
showError('Your account is pending approval.');
} catch (e) {
console.warn('Could not write pending entry:', e);
showError('Account not set up yet.');
}
auth.signOut();
return;
}
}
currentUser = resolveRuntimeProfile(user, data);
showAppScreen();
} catch (err) {
console.error('Load user error:', err);
showError('Failed to load account.');
}
}

function logout() {
window.localStorage.removeItem('kioskMode');
document.body.classList.remove('kiosk');
currentUser = null;
if (activeTicketListener) { activeTicketListener(); activeTicketListener = null; }
if (notifyListenerRef && notifyListenerCallback) { notifyListenerRef.off('value', notifyListenerCallback); notifyListenerRef = null; notifyListenerCallback = null; }
notifyTickets = [];
detachSelectedStoreSummaryListener();
if (adminSummaryListenerRef && adminSummaryListenerCallback) { adminSummaryListenerRef.off('value', adminSummaryListenerCallback); adminSummaryListenerRef = null; adminSummaryListenerCallback = null; }
auth.signOut();
}

function showLoginScreen() {
document.getElementById('loginScreen').style.display = 'flex';
document.getElementById('appContainer').style.display = 'none';
}

function getViewportHints() {
const width = window.innerWidth || document.documentElement.clientWidth || 0;
const height = window.innerHeight || document.documentElement.clientHeight || 0;
const touchCapable = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
return { width, height, touchCapable, isMobile: width <= 767, isTablet: width >= 768 && width <= 1099, isDesktop: width >= 1100 };
}

function isAdminDesktopExperience() {
if (!currentUser) return false;
const profile = getExperienceProfile(currentUser.role);
return profile === 'admin-desktop' || profile === 'director-desktop';
}

function applyExperienceClass(role, viewport = getViewportHints()) {
const profile = getExperienceProfile(role, viewport);
const expClass = `exp-${profile}`;
document.body.classList.forEach(c => { if (c.startsWith('exp-')) document.body.classList.remove(c); });
document.body.classList.add(expClass);
return expClass;
}

function getExperienceProfile(role, viewport = getViewportHints()) {
const normalizedRole = normalizeRole(role || 'Manager').toLowerCase();
let device = 'desktop';
if (viewport.isMobile) device = 'mobile';
else if (viewport.isTablet || (viewport.touchCapable && viewport.width < 1200)) device = 'tablet';
const rolePrefixRaw = (normalizedRole === 'area coach' || normalizedRole === 'director coach') ? 'manager' : (normalizedRole === 'overwatch' ? 'admin' : normalizedRole);
const rolePrefix = rolePrefixRaw.replace(/\s+/g, '-');
return `${rolePrefix}-${device}`;
}

function routeToProfileLanding() {
const role = getEffectiveUserRole(currentUser);
if (role === 'Overwatch' || role === 'Viewer') {
showScreen('storeSelection');
setTimeout(() => selectBrand('all'), 100);
return;
}
if (role === 'Admin') { showScreen('coachLanding'); initCoachLanding(); return; }
if (role === 'Technician') { showScreen('techDashboard'); initTechDashboard(); return; }
if (role === 'Manager') {
const mgrStoresRaw = currentUser.stores;
const mgrCandidates = Array.isArray(mgrStoresRaw) ? mgrStoresRaw : (mgrStoresRaw ? [mgrStoresRaw] : []);
let mgrStore = null;
for (const token of mgrCandidates) {
if (!token) continue;
mgrStore = stores.find(s => s.code === token || s.id === token || s.name === token);
if (mgrStore) break;
}
if (mgrStore) { selectedStore = mgrStore; renderManagerLandingHeader(); }
else { selectedStore = null; renderManagerLandingHeader(); }
refreshSelectedStoreSummaryCounts();
showScreen('managerLanding');
return;
}
showScreen('coachLanding'); initCoachLanding();
}

function initCoachLanding() {
updateCoachStoresHeading();
const myStores = getAccessibleStores();
const grid = document.getElementById('coachStoreGrid');
const ticketListEl = document.getElementById('coachLandingTicketsList');
const ticketTitleEl = document.getElementById('coachLandingTicketsTitle');
if (ticketListEl) ticketListEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text-muted)"><span class="spinner spinner-dark"></span> Loading...</div>';
const codes = myStores.map(s => s.code);
const brandLabels = { fastfood: 'Burger King', cstore: 'C-Store', carwash: 'Car Wash' };
fetchTicketCounts(codes, () => {
grid.innerHTML = myStores.sort((a, b) => { const ca = (allTicketCounts[a.code] || {}).open || 0; const cb = (allTicketCounts[b.code] || {}).open || 0; return cb - ca || a.name.localeCompare(b.name); })
.map(s => {
const tc = allTicketCounts[s.code] || { open: 0 };
const shortName = s.name.replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS ');
const hasIssues = tc.open > 0;
return '<div class="coach-store-btn" onclick="coachSelectStore(\'' + s.id + '\')">' + '<div class="csb-name">' + escHtml(shortName) + '</div>' + '<div class="csb-brand">' + (brandLabels[s.type] || s.type) + '</div>' + (hasIssues ? '<div class="csb-tickets has-issues">' + tc.open + ' ' + (tc.open === 1 ? 'issue' : 'issues') + '</div>' : '<div class="csb-tickets no-issues">✓ No issues</div>') + '</div>';
}).join('');
});
if (!ticketListEl) return;
getTicketsCached(function(allT) {
const scoped = allT.filter(function(t) { return codes.includes(t.storeCode) && isActiveStatus(t.status); });
allTicketsData = scoped.slice();
if (ticketTitleEl) { const name = (currentUser?.name || '').split(' ')[0] || 'Coach'; const total = scoped.length; ticketTitleEl.textContent = total > 0 ? `Open Tickets (${total})` : 'Open Tickets'; }
if (scoped.length === 0) { ticketListEl.innerHTML = '<div style="padding:30px;text-align:center;font-size:14px;color:var(--text-muted)">🎉 No open tickets across your stores!</div>'; return; }
const byStore = {}; scoped.forEach(t => { (byStore[t.storeCode] ||= []).push(t); });
const storeOrder = myStores.filter(s => byStore[s.code]).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
const priRank = { emergency: 0, urgent: 1, routine: 2 }; const statusRank = s => (TICKET_STATUS_CONFIG[normalizeTicketStatus(s)]?.order ?? 99);
let html = '';
storeOrder.forEach(s => {
const storeTickets = (byStore[s.code] || []).sort((a, b) => (priRank[a.priority] ?? 2) - (priRank[b.priority] ?? 2) || statusRank(a.status) - statusRank(b.status) || (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0));
const shortName = (s.name || '').replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS ');
html += `<div class="slv-store"><div class="slv-store-name">${escHtml(shortName)} <span style="font-size:12px;font-weight:400;color:var(--text-muted)">(${storeTickets.length} open)</span></div>`;
storeTickets.forEach(t => {
const prBadge = {routine:'<span class="priority-word p-routine">Routine</span>',urgent:'<span class="priority-word p-urgent">Urgent</span>',emergency:'<span class="priority-word p-emergency">Emergency</span>'}[t.priority] || '';
const displayName = getAssigneeDisplayName(t); const photoCount = Array.isArray(t.photos) ? t.photos.length : 0;
html += `<div class="slv-ticket" onclick="openTicketFromAllByKey('${esc(t._key || t.id)}')">${prBadge}<span class="slv-desc">${escHtml((t.description || '').substring(0, 80))}</span><span class="slv-right-group">${displayName ? `<span class="slv-assignee-name">${escHtml(displayName)}</span>` : ''}<span class="ticket-status-badge status-${getStatusColorClass(t.status)}" style="font-size:11px;padding:2px 8px">${getStatusLabel(t.status)}</span>${photoCount ? `<span class="slv-photo-count">📷 ${photoCount}</span>` : ''}</span></div>`;
});
html += '</div>';
});
ticketListEl.innerHTML = html;
});
}

function sanitizeDisplayName(name) { return String(name || '').replace(/[<>]/g, '').replace(/\s+/g, ' ').trim(); }
function getCoachStoresHeadingText() { const role = getEffectiveUserRole(); const displayName = sanitizeDisplayName(currentUser?.name); const firstName = displayName ? displayName.split(' ')[0] : ''; if ((role === 'Area Coach' || role === 'Director' || role === 'Admin') && firstName) return `${firstName}'s Stores`; return 'My Stores'; }

function showCoachOpenTickets() {
if (!currentUser) return;
const effRole = getEffectiveUserRole(currentUser);
if (effRole === 'Manager' || effRole === 'Technician') return;
showScreen('coachOpenTicketsScreen');
const titleEl = document.getElementById('coachOpenTicketsTitle');
if (titleEl) { const name = (currentUser.name || '').trim() || 'Coach'; titleEl.textContent = `Tickets open for ${name}'s Stores`; }
const listEl = document.getElementById('coachOpenTicketsList');
if (listEl) listEl.innerHTML = '<div style="text-align:center;padding:30px;color:var(--text-muted)"><span class="spinner spinner-dark"></span> Loading open tickets...</div>';
const myStores = getAccessibleStores();
const codes = myStores.map(s => s.code);
getTicketsCached(function(allT) {
const scoped = allT.filter(function(t) { return codes.includes(t.storeCode) && isActiveStatus(t.status); });
allTicketsData = scoped.slice();
if (!listEl) return;
if (scoped.length === 0) { listEl.innerHTML = '<div style="padding:40px;text-align:center;font-size:15px;color:var(--text-muted)">🎉 No open tickets across your stores!</div>'; return; }
const byStore = {}; scoped.forEach(t => { (byStore[t.storeCode] ||= []).push(t); });
const storeOrder = myStores.filter(s => byStore[s.code]).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
const priRank = { emergency: 0, urgent: 1, routine: 2 }; const statusRank = s => (TICKET_STATUS_CONFIG[normalizeTicketStatus(s)]?.order ?? 99);
let html = '';
storeOrder.forEach(s => {
const storeTickets = byStore[s.code] || [];
storeTickets.sort((a, b) => (priRank[a.priority] ?? 2) - (priRank[b.priority] ?? 2) || statusRank(a.status) - statusRank(b.status) || (b.updatedAt || b.createdAt || 0) - (a.updatedAt || a.createdAt || 0));
const shortName = (s.name || '').replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS ');
html += `<div class="slv-store"><div class="slv-store-name">${escHtml(shortName)} <span style="font-size:12px;font-weight:400;color:var(--text-muted)">(${storeTickets.length} open)</span></div>`;
storeTickets.forEach(t => {
const prBadge = {routine:'<span class="priority-word p-routine">Routine</span>',urgent:'<span class="priority-word p-urgent">Urgent</span>',emergency:'<span class="priority-word p-emergency">Emergency</span>'}[t.priority] || '';
const displayName = getAssigneeDisplayName(t); const photoCount = Array.isArray(t.photos) ? t.photos.length : 0;
const statusCls = getStatusColorClass(t.status); const statusLabel = getStatusLabel(t.status);
html += `<div class="slv-ticket" onclick="openTicketFromAllByKey('${esc(t._key || t.id)}')">${prBadge}<span class="slv-desc">${escHtml((t.description || '').substring(0, 80))}</span><span class="slv-right-group">${displayName ? `<span class="slv-assignee-name">${escHtml(displayName)}</span>` : ''}<span class="ticket-status-badge status-${statusCls}" style="font-size:11px;padding:2px 8px">${statusLabel}</span>${photoCount ? `<span class="slv-photo-count">📷 ${photoCount}</span>` : ''}</span></div>`;
});
html += '</div>';
});
listEl.innerHTML = html;
});
}

function updateCoachStoresHeading() { const heading = document.getElementById('coachStoresHeading'); if (!heading) return; heading.textContent = getCoachStoresHeadingText(); }
function coachSelectStore(storeId) { const store = stores.find(s => s.id === storeId); if (!store) return; selectedStore = store; refreshSelectedStoreSummaryCounts(); document.getElementById('coachSelectedStoreName').textContent = store.name; showScreen('coachStoreView'); }

function applyRoleScopedControls(user, { impersonating = false } = {}) {
const adminBtn = document.getElementById('adminBtn');
const vendorBtn = document.getElementById('vendorBtn');
const viewAsBtn = document.getElementById('viewAsBtn');
const returnViewAsBtn = document.getElementById('returnViewAsBtn');
const canAccessAdmin = !!(user && canAccessAdminPanel(user));
const canAccessVendors = !!(user && canManageVendors(user));
const isImpersonating = !!(impersonating || realUser);
const canUseViewAs = !!(user && isItsupportUser(user) && !isImpersonating);
const canReturnToProfile = !!realUser;
adminBtn?.classList.toggle('hidden', !canAccessAdmin);
vendorBtn?.classList.toggle('hidden', !canAccessVendors);
viewAsBtn?.classList.toggle('hidden', !canUseViewAs);
returnViewAsBtn?.classList.toggle('hidden', !canReturnToProfile);
}

function applyHeaderIdentity(user, { impersonating = false } = {}) {
const isImpersonating = !!(impersonating || realUser);
const initials = (user?.name || '').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
document.getElementById('userAvatar').textContent = isViewerKiosk(user) ? '👁' : (initials || '?');
document.getElementById('userName').textContent = isViewerKiosk(user) ? 'Kiosk Display' : (user?.name || 'Unknown User');
document.getElementById('impersonationIndicator')?.classList.toggle('hidden', !isImpersonating);
if (isImpersonating) { document.getElementById('userRole').innerHTML = getRoleTitle(user) + ' <span style="font-size:10px;color:var(--accent);font-weight:700">(viewing as)</span>'; }
else if (isViewerKiosk(user)) { document.getElementById('userRole').textContent = '👁 View Only'; }
else { document.getElementById('userRole').textContent = getRoleTitle(user); }
}

function applyHeaderControlVisibility(user, opts = {}) { applyRoleScopedControls(user, opts); }
function updateHeaderIdentity(user, opts = {}) { applyHeaderIdentity(user, opts); }

function updateAllLocationsVisibility(user) {
const role = getEffectiveUserRole(user);
const showAllLocations = !!(user && (role === 'Overwatch' || role === 'Viewer' || role === 'Admin' || role === 'Director' || user.stores === 'all'));
document.getElementById('brandPill-all')?.classList.toggle('hidden', !showAllLocations);
document.querySelectorAll('.admin-only-opt').forEach(el => el.classList.toggle('hidden', !showAllLocations));
}

function showAppScreen() {
document.getElementById('loginScreen').style.display = 'none';
document.getElementById('appContainer').style.display = 'flex';
applyExperienceClass(currentUser.role);
if (isItsupportUser(currentUser)) document.body.classList.remove('no-map');
else document.body.classList.add('no-map');
if (isViewerKiosk(currentUser)) document.body.classList.add('kiosk');
else document.body.classList.remove('kiosk');
applyHeaderIdentity(currentUser, { impersonating: !!realUser });
applyRoleScopedControls(currentUser, { impersonating: !!realUser });
if (canAccessAdminPanel(currentUser)) watchPendingUsers();
selectedStore = null; refreshSelectedStoreSummaryCounts();
updateAllLocationsVisibility(currentUser);
db.ref('config/notifyRouting').once('value', snap => { notifyRouting = snap.val() || {}; initNotificationCenter(); });
if (window.innerWidth >= 1100 && isMultiStoreUser()) {
const userStoreList = currentUser.stores === 'all' ? stores : stores.filter(s => { const us = Array.isArray(currentUser.stores) ? currentUser.stores : [currentUser.stores]; return us.includes(s.code); });
const types = [...new Set(userStoreList.map(s => s.type))];
if (types.length === 1) setTimeout(() => selectBrand(types[0]), 100);
else if (currentUser.role === 'Admin' || currentUser.role === 'Overwatch' || currentUser.role === 'Viewer' || currentUser.role === 'Technician') setTimeout(() => selectBrand('all'), 100);
}
loadVendors(); loadTechUsers(); subscribeAdminSummary(); startGlobalPolling();
routeToProfileLanding(); updateLayoutVisibility(currentScreenId);
}

function showError(msg) { const el = document.getElementById('loginError'); el.textContent = msg; el.classList.remove('hidden'); setTimeout(() => el.classList.add('hidden'), 8000); }
function canShowSelectedStoreSummary(role, screenId) { const roleRules = SUMMARY_LAYOUT_RULES.selectedStoreSummary.screensByRole[role]; return !!(roleRules && roleRules.has(screenId)); }

function updateLayoutVisibility(screenId = currentScreenId) {
currentScreenId = screenId;
const role = currentUser?.role;
const showAdminSummary = !!(role && SUMMARY_LAYOUT_RULES.adminSummary.roles.has(role) && SUMMARY_LAYOUT_RULES.adminSummary.screens.has(screenId));
document.getElementById('adminSummary')?.classList.toggle('hidden', !showAdminSummary);
const showSummaryDock = !!(role && canShowSelectedStoreSummary(role, screenId));
document.getElementById('selectedStoreSummaryDock')?.classList.toggle('hidden', !showSummaryDock);
renderSelectedStoreSummary();
}

function renderManagerLandingHeader() {
const nameEl = document.getElementById('mgrStoreName'); const addrEl = document.getElementById('mgrStoreAddress');
if (!nameEl) return;
if (selectedStore) { nameEl.textContent = selectedStore.name || ''; if (addrEl) addrEl.textContent = selectedStore.address || ''; }
else { const raw = (currentUser && currentUser.stores) ? currentUser.stores : ''; const token = Array.isArray(raw) ? (raw[0] || '') : (raw || ''); nameEl.textContent = token ? String(token) : ''; if (addrEl) addrEl.textContent = ''; }
}

function showScreen(screenId) {
['managerLanding', 'coachLanding', 'coachStoreView', 'coachOpenTicketsScreen', 'techDashboard', 'adminSummary', 'storeSelection', 'newIssueScreen', 'existingIssuesScreen', 'allTicketsScreen', 'adminScreen'].forEach(id => { document.getElementById(id).classList.toggle('hidden', id !== screenId); });
updateLayoutVisibility(screenId);
if (screenId === 'managerLanding') renderManagerLandingHeader();
}

function goBack() {
resetNewIssueForm();
if (activeTicketListener) { activeTicketListener(); activeTicketListener = null; }
const effRole = getEffectiveUserRole(currentUser);
if (effRole === 'Technician') { showScreen('techDashboard'); loadTechJobs(); return; }
if (effRole === 'Manager') { showScreen('managerLanding'); return; }
if (effRole === 'Overwatch' || effRole === 'Viewer' || effRole === 'Area Coach' || effRole === 'Director' || effRole === 'Admin') {
if (effRole === 'Overwatch' || effRole === 'Viewer') { showScreen('storeSelection'); setTimeout(() => selectBrand('all'), 100); return; }
if (currentScreenId === 'allTicketsScreen') teardownAllTicketsListener();
if (currentScreenId === 'coachOpenTicketsScreen') { showScreen('coachLanding'); initCoachLanding(); return; }
if (selectedStore) { showScreen('coachStoreView'); return; }
showScreen('coachLanding'); initCoachLanding(); return;
}
showScreen('storeSelection');
}

function detachSelectedStoreSummaryListener() {
if (selectedStoreSummaryListenerRef && selectedStoreSummaryListenerCallback) selectedStoreSummaryListenerRef.off('value', selectedStoreSummaryListenerCallback);
selectedStoreSummaryListenerRef = null; selectedStoreSummaryListenerCallback = null;
}

function refreshSelectedStoreSummaryCounts() {
detachSelectedStoreSummaryListener();
selectedStoreSummaryCounts = { open: 0, total: 0 };
const role = currentUser?.role;
if (!selectedStore?.code || !SUMMARY_LAYOUT_RULES.selectedStoreSummary.screensByRole[role]) { renderSelectedStoreSummary(); return; }
selectedStoreSummaryListenerRef = db.ref('tickets').orderByChild('storeCode').equalTo(getStoreCode(selectedStore));
selectedStoreSummaryListenerCallback = snap => {
let open = 0; let total = 0;
const effRole = getEffectiveUserRole(currentUser);
snap.forEach(child => { total++; const status = normalizeTicketStatus(child.val()?.status || ''); if (effRole === 'Admin' || effRole === 'Director') { if (status === 'unassigned') open++; } else { if (status !== 'closed') open++; } });
selectedStoreSummaryCounts = { open, total }; renderSelectedStoreSummary();
};
selectedStoreSummaryListenerRef.on('value', selectedStoreSummaryListenerCallback);
}

function renderSelectedStoreSummary() {
const summaryCard = document.getElementById('selectedStoreSummary'); const summaryName = document.getElementById('selectedStoreSummaryName');
const summaryAddress = document.getElementById('selectedStoreSummaryAddress'); const summaryOpen = document.getElementById('selectedStoreSummaryOpen');
const summaryTotal = document.getElementById('selectedStoreSummaryTotal');
const shouldShow = canShowSelectedStoreSummary(currentUser?.role, currentScreenId);
if (!summaryCard || !summaryName || !summaryAddress || !summaryOpen || !summaryTotal) return;
if (!shouldShow || !selectedStore) { summaryCard.classList.add('hidden'); summaryName.textContent = ''; summaryAddress.textContent = ''; summaryOpen.textContent = '0 open'; summaryTotal.textContent = '0 total'; return; }
summaryName.textContent = selectedStore.name || getStoreCode(selectedStore) || 'Selected Store';
summaryAddress.textContent = selectedStore.address || 'Address unavailable';
const effRole = getEffectiveUserRole(currentUser);
summaryOpen.textContent = effRole === 'Admin' || effRole === 'Director' ? `${selectedStoreSummaryCounts.open || 0} unassigned` : `${selectedStoreSummaryCounts.open || 0} open`;
summaryTotal.textContent = `${selectedStoreSummaryCounts.total || 0} total`;
summaryCard.classList.remove('hidden');
}

function filterStores() {
const type = document.getElementById('storeType').value;
const sel = document.getElementById('storeSelect');
sel.innerHTML = '<option value="">Choose store...</option>';
document.getElementById('actionButtons').classList.add('hidden');
selectedStore = null; refreshSelectedStoreSummaryCounts();
if (!type) return;
let filtered = stores.filter(s => s.type === type);
filtered = scopeStoresToUser(filtered);
filtered.sort((a, b) => a.name.localeCompare(b.name));
filtered.forEach(s => { const opt = document.createElement('option'); opt.value = s.id; opt.textContent = s.name; sel.appendChild(opt); });
}

function selectStore() {
const id = document.getElementById('storeSelect').value;
if (!id) { document.getElementById('actionButtons').classList.add('hidden'); selectedStore = null; refreshSelectedStoreSummaryCounts(); return; }
selectedStore = stores.find(s => s.id === id);
document.getElementById('actionButtons').classList.remove('hidden'); refreshSelectedStoreSummaryCounts();
}

let overviewMap = null; let mapMarkers = []; let allTicketCounts = {};

function isMultiStoreUser() { return currentUser && (currentUser.role === 'Overwatch' || currentUser.role === 'Viewer' || currentUser.role === 'Admin' || currentUser.role === 'Director' || currentUser.role === 'Area Coach' || currentUser.role === 'Technician'); }

function selectBrand(type) {
document.getElementById('storeType').value = type;
document.querySelectorAll('.brand-pill').forEach(b => b.classList.remove('active'));
const pill = document.getElementById('brandPill-' + type); if (pill) pill.classList.add('active');
filterStores();
if (currentMapView === 'list') renderStoreListView();
}

const _origFilterStores = filterStores;
filterStores = function() {
_origFilterStores();
const type = document.getElementById('storeType').value;
document.querySelectorAll('.brand-pill').forEach(b => b.classList.remove('active'));
if (type) { const pill = document.getElementById('brandPill-' + type); if (pill) pill.classList.add('active'); }
const mapEl = document.getElementById('mapOverview');
if (type && isMultiStoreUser()) { mapEl.classList.remove('hidden'); loadMapOverview(type); } else { mapEl.classList.add('hidden'); }
if (type === 'all') { const storeSelect = document.getElementById('storeSelect'); const allStores = getAccessibleStores(); storeSelect.innerHTML = '<option value="">Choose store...</option>' + allStores.map(s => '<option value="' + s.id + '">' + s.name + '</option>').join(''); }
};

function loadMapOverview(type) {
let filtered = type === 'all' ? [...stores] : stores.filter(s => s.type === type);
filtered = scopeStoresToUser(filtered);
const typeLabels = { all: 'All Locations', fastfood: 'Fast Food Stores', cstore: 'C-Stores', carwash: 'Car Washes' };
document.getElementById('mapTitle').textContent = typeLabels[type] || 'Stores';
if (!overviewMap) {
overviewMap = L.map('overviewMap', { zoomControl: true, attributionControl: false }).setView([33.0, -96.5], 7);
const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
currentTileLayer = L.tileLayer(isDark ? DARK_TILES : LIGHT_TILES, { maxZoom: 18 }).addTo(overviewMap);
setTimeout(() => overviewMap.invalidateSize(), 100);
} else { overviewMap.invalidateSize(); }
mapMarkers.forEach(m => overviewMap.removeLayer(m)); mapMarkers = [];
const codes = filtered.map(s => s.code);
fetchTicketCounts(codes, () => {
const bounds = [];
filtered.forEach(s => {
if (!s.lat || !s.lng) return;
const counts = allTicketCounts[s.code] || { open: 0, total: 0, score: 0, hasEmergency: false };
const color = counts.open === 0 ? '#059669' : (counts.hasEmergency || counts.score >= 3) ? '#dc2626' : '#d97706';
const size = counts.open === 0 ? 10 : (counts.hasEmergency || counts.score >= 3) ? 16 : 13;
const icon = L.divIcon({ className: '', html: '<div style="width:'+size+'px;height:'+size+'px;border-radius:50%;background:'+color+';border:2px solid rgba(255,255,255,0.3);box-shadow:0 0 8px '+color+'55;'+(counts.open > 0 ? 'display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#000;' : '')+'">'+( counts.open > 0 ? counts.open : '')+'</div>', iconSize: [size, size], iconAnchor: [size/2, size/2] });
const marker = L.marker([s.lat, s.lng], { icon: icon }).addTo(overviewMap);
const shortName = s.name.replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS ');
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.address);
marker.bindPopup(`<div class="map-popup"><div class="mp-name">${shortName}</div><div class="mp-addr" onclick="window.open('${mapsUrl}','_blank')">${s.address}</div><div class="mp-stats"><div class="mp-stat"><strong style="color:${counts.open > 0 ? '#f87171' : '#34d399'}">${counts.open}</strong>unassigned</div><div class="mp-stat"><strong>${counts.total}</strong>total</div></div><div class="mp-btns"><button class="mp-btn" onclick="mapSelectStore('${s.id}','tickets')">View Tickets</button><button class="mp-btn" onclick="mapSelectStore('${s.id}','new')">Report Issue</button></div></div>`, { maxWidth: 260, closeButton: false });
mapMarkers.push(marker); bounds.push([s.lat, s.lng]);
});
if (bounds.length) overviewMap.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 });
let totalUnassigned = 0, totalAll = 0, storesWithActive = 0;
codes.forEach(c => { const ct = allTicketCounts[c] || { open: 0, unassigned: 0, total: 0 }; totalUnassigned += (ct.unassigned || 0); totalAll += ct.total; if ((ct.open || 0) > 0) storesWithActive++; });
const issueColor = storesWithActive > 0 ? '#dc2626' : '#059669'; const unassignColor = totalUnassigned > 0 ? '#dc2626' : '#059669';
document.getElementById('mapStatsBar').innerHTML = '<div class="mstat mstat-clickable" onclick="setMapView(&quot;map&quot;);selectBrand(document.getElementById(&quot;storeType&quot;).value||&quot;all&quot;)" title="View map"><strong>' + filtered.length + '</strong>stores</div>' + '<div class="mstat mstat-clickable" onclick="setMapView(&quot;list&quot;)" title="View store list"><strong style="color:' + issueColor + '">' + storesWithActive + '</strong>' + (storesWithActive === 1 ? 'store with issues' : 'stores with issues') + '</div>' + '<div class="mstat mstat-clickable" onclick="showAllTickets(&quot;unassigned&quot;)" title="View unassigned tickets"><strong style="color:' + unassignColor + '">' + totalUnassigned + '</strong>need assignment</div>' + '<div class="mstat mstat-clickable" onclick="showAllTickets(&quot;all&quot;)" title="View all tickets"><strong>' + totalAll + '</strong>total tickets</div>';
const dsl = document.getElementById('desktopStoreList');
if (dsl && window.innerWidth >= 1100) {
desktopStoreData = filtered.map(s => ({ ...s, counts: allTicketCounts[s.code] || { open: 0, total: 0 } })); renderDesktopStoreList(); dsl.style.display = '';
}
lastFilteredStores = filtered;
});
}

function fetchTicketCounts(codes, callback) {
getTicketsCached(function(allT) {
allTicketCounts = {};
codes.forEach(function(c) { allTicketCounts[c] = { open: 0, unassigned: 0, total: 0, score: 0, hasEmergency: false }; });
allT.forEach(function(t) {
if (!codes.includes(t.storeCode)) return;
if (!allTicketCounts[t.storeCode]) allTicketCounts[t.storeCode] = { open: 0, unassigned: 0, total: 0, score: 0, hasEmergency: false };
allTicketCounts[t.storeCode].total++;
if (isActiveStatus(t.status)) { allTicketCounts[t.storeCode].open++; if (normalizeTicketStatus(t.status) === 'unassigned') allTicketCounts[t.storeCode].unassigned++; if (t.priority === 'emergency') { allTicketCounts[t.storeCode].score += 3; allTicketCounts[t.storeCode].hasEmergency = true; } else if (t.priority === 'urgent') allTicketCounts[t.storeCode].score += 2; else allTicketCounts[t.storeCode].score += 1; }
});
callback();
});
}

function mapSelectStore(storeId, action) {
const store = stores.find(s => s.id === storeId); if (!store) return;
selectedStore = store; refreshSelectedStoreSummaryCounts();
document.getElementById('storeSelect').value = storeId; document.getElementById('actionButtons').classList.remove('hidden');
if (overviewMap) overviewMap.closePopup();
if (action === 'tickets') showExistingIssuesScreen(); else showNewIssueScreen();
}

function renderDesktopStoreList() {
const dsl = document.getElementById('desktopStoreList');
if (!dsl) return;
const withIssues = desktopStoreData.filter(s => s.counts.open > 0);
const displayList = dslShowAll ? desktopStoreData : withIssues;
let html = `<div class="dsl-header"><span>${displayList.length} store${displayList.length !== 1 ? 's' : ''}</span><div class="dsl-toggle"><button class="${dslShowAll ? '' : 'active'}" onclick="dslShowAll=false;renderDesktopStoreList()">With Issues</button><button class="${dslShowAll ? 'active' : ''}" onclick="dslShowAll=true;renderDesktopStoreList()">All</button></div></div>`;
if (displayList.length === 0) html += '<div style="padding:12px;text-align:center;font-size:13px;color:var(--text-muted)">🎉 No unassigned issues!</div>';
else { displayList.forEach(s => { const shortName = s.name.replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS '); const badgeCls = s.counts.open > 0 ? 'has-issues' : 'no-issues'; const isSelected = selectedStore && getStoreCode(selectedStore) === s.code; html += `<div class="store-list-item ${isSelected ? 'active' : ''}" onclick="desktopSelectStore('${s.id}')"><span class="sli-name">${shortName}</span><span class="sli-badge ${badgeCls}">${s.counts.open} ${s.counts.open === 1 ? 'issue' : 'issues'}</span></div>`; }); }
dsl.innerHTML = html;
}

function desktopSelectStore(storeId) {
const store = stores.find(s => s.id === storeId); if (!store) return;
selectedStore = store; refreshSelectedStoreSummaryCounts();
document.getElementById('storeSelect').value = storeId; document.getElementById('actionButtons').classList.remove('hidden');
document.querySelectorAll('.store-list-item').forEach(el => el.classList.remove('active'));
if (event && event.currentTarget) event.currentTarget.classList.add('active');
if (overviewMap && store.lat && store.lng) {
overviewMap.flyTo([store.lat, store.lng], 13, { duration: 0.5 });
mapMarkers.forEach(m => { const ll = m.getLatLng(); if (Math.abs(ll.lat - store.lat) < 0.001 && Math.abs(ll.lng - store.lng) < 0.001) m.openPopup(); });
}
}

let currentMapView = localStorage.getItem('mapViewPref') || 'map'; let lastFilteredStores = [];
function setMapView(view) {
currentMapView = view; localStorage.setItem('mapViewPref', view);
document.querySelectorAll('#mapViewToggle button').forEach(b => b.classList.remove('active'));
document.querySelector(`#mapViewToggle button[onclick="setMapView('${view}')"]`).classList.add('active');
const mapEl = document.getElementById('overviewMap'); const listEl = document.getElementById('storeListView');
const legend = document.querySelector('.map-legend');
if (view === 'list') { mapEl.style.display = 'none'; listEl.style.display = ''; if (legend) { legend.style.visibility = 'hidden'; legend.style.pointerEvents = 'none'; } renderStoreListView(); }
else { mapEl.style.display = ''; listEl.style.display = 'none'; if (legend) { legend.style.visibility = ''; legend.style.pointerEvents = ''; } if (overviewMap) setTimeout(() => overviewMap.invalidateSize(), 100); }
}

function renderStoreListView() {
const listEl = document.getElementById('storeListView');
if (!lastFilteredStores.length) { listEl.innerHTML = '<div class="empty-state">Select a store type first</div>'; return; }
getTicketsCached(function(allT) {
const storesWithTickets = lastFilteredStores.filter(s => { return allT.some(t => t.storeCode === s.code && isActiveStatus(t.status)); });
if (storesWithTickets.length === 0) { listEl.innerHTML = '<div style="padding:40px;text-align:center;font-size:15px;color:var(--text-muted)">🎉 No unassigned tickets across these stores!</div>'; return; }
let html = '';
storesWithTickets.forEach(s => {
const storeTickets = allT.filter(t => t.storeCode === s.code && isActiveStatus(t.status));
const shortName = s.name.replace(/^Burger King /, 'BK ').replace(/^Paradise QS /, 'PQS ');
storeTickets.sort((a,b) => { const p = {emergency:0,urgent:1,routine:2}; return (p[a.priority]||2) - (p[b.priority]||2); });
html += `<div class="slv-store"><div class="slv-store-name">${shortName} <span style="font-size:12px;font-weight:400;color:var(--text-muted)">(${storeTickets.length} open)</span></div>`;
storeTickets.forEach(t => {
const prBadge = {routine:'<span class="priority-word p-routine">Routine</span>',urgent:'<span class="priority-word p-urgent">Urgent</span>',emergency:'<span class="priority-word p-emergency">Emergency</span>'}[t.priority] || '';
const displayName = getAssigneeDisplayName(t); const photoCount = Array.isArray(t.photos) ? t.photos.length : 0;
const statusCls = getStatusColorClass(t.status); const statusLabel = getStatusLabel(t.status);
html += `<div class="slv-ticket" onclick="listViewOpenTicket('${t._key}')">${prBadge}<span class="slv-desc">${escHtml(t.description || '').substring(0,80)}</span><span class="slv-right-group">${displayName ? `<span class="slv-assignee-name">${escHtml(displayName)}</span>` : ''}<span class="ticket-status-badge status-${statusCls}" style="font-size:11px;padding:2px 8px">${statusLabel}</span>${photoCount ? `<span class="slv-photo-count">📷 ${photoCount}</span>` : ''}</span>${renderInlineAssignControls(t, 'slv')}</div>`;
});
html += '</div>';
});
listEl.innerHTML = html;
});
}

function listViewOpenTicket(key) {
db.ref('tickets/' + key).once('value', snap => { const t = snap.val(); if (!t) return; t._key = key; currentTickets = [t]; openTicketDetail(key); });
}

const _origGoBack = goBack;
goBack = function() { _origGoBack(); if (window.innerWidth >= 1100 && overviewMap) setTimeout(() => overviewMap.invalidateSize(), 200); };
window.addEventListener('resize', () => { if (overviewMap) setTimeout(() => overviewMap.invalidateSize(), 200); if (currentUser) applyExperienceClass(currentUser.role); });

let pendingListener = null; let pendingUsers = {};
function watchPendingUsers() {
if (pendingListener) return;
pendingListener = db.ref('pending').on('value', snap => {
pendingUsers = snap.val() || {};
const count = Object.keys(pendingUsers).length;
const badge = document.getElementById('pendingBadge');
if (count > 0) { badge.textContent = count; badge.classList.remove('hidden'); } else { badge.classList.add('hidden'); }
if (!document.getElementById('adminScreen').classList.contains('hidden')) renderPendingUsers();
});
}

function showAdminPanel() {
if (!canAccessAdminPanel()) { showToast('Only Admins can access user controls', 'error'); return; }
showScreen('adminScreen'); renderPendingUsers(); loadActiveUsers(); loadNotifyRouting(); renderAddUserForm();
}
function goBackFromAdmin() { routeToProfileLanding(); }

function renderPendingUsers() {
const container = document.getElementById('pendingList');
const entries = Object.entries(pendingUsers);
const count = entries.length;
document.getElementById('pendingCount').textContent = count > 0 ? `(${count})` : '';
if (count === 0) { container.innerHTML = '<div class="empty-state">No pending users</div>'; return; }
container.innerHTML = entries.map(([uid, p]) => {
const email = (p.email || '').toLowerCase();
const guessedName = email.split('@')[0].replace(/\./g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const guessedRole = 'Manager';
const guessedStores = [];
const timeStr = p.requestedAt ? new Date(p.requestedAt).toLocaleString() : 'Unknown';
const storeCheckboxes = stores.map(s => `<label class="store-cb"><input type="checkbox" class="pstore-${uid}" value="${s.code}" ${guessedStores.includes(s.code) ? 'checked' : ''}> ${s.name.length > 22 ? s.name.substring(0,22)+'...' : s.name}</label>`).join('');
return `<div class="pending-card" id="pending-${uid}"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pending-email">${esc(p.email || 'Unknown')}</div></div><div class="pending-time">Requested: ${timeStr}</div><div class="pending-form"><input type="text" class="form-input" placeholder="Full name" id="pname-${uid}" value="${esc(guessedName)}"><select class="form-select" id="prole-${uid}"><option value="Overwatch" ${guessedRole === 'Overwatch' ? 'selected' : ''}>Overwatch</option><option value="Admin" ${guessedRole === 'Admin' ? 'selected' : ''}>Admin</option><option value="Director" ${guessedRole === 'Director' ? 'selected' : ''}>Director</option><option value="Area Coach" ${guessedRole === 'Area Coach' ? 'selected' : ''}>Area Coach</option><option value="Manager" ${guessedRole === 'Manager' ? 'selected' : ''}>Manager</option><option value="Technician" ${guessedRole === 'Technician' ? 'selected' : ''}>Technician</option></select><div class="full"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><label class="form-label" style="margin:0">Store Access</label><button class="btn btn-ghost" style="font-size:11px;padding:2px 8px" onclick="togglePendingStores('${uid}')">All / None</button></div><div class="store-cb-grid">${storeCheckboxes}</div></div></div><div class="pending-actions"><button class="btn btn-primary" onclick="approveUser('${uid}')">Approve</button><button class="btn btn-secondary" onclick="denyUser('${uid}')">Deny</button></div></div>`;
}).join('');
}

function togglePendingStores(uid) { const cbs = document.querySelectorAll(`.pstore-${uid}`); const allChecked = [...cbs].every(cb => cb.checked); cbs.forEach(cb => cb.checked = !allChecked); }
async function approveUser(uid) {
const name = document.getElementById(`pname-${uid}`).value.trim(); const role = document.getElementById(`prole-${uid}`).value;
const selectedStores = [...document.querySelectorAll(`.pstore-${uid}:checked`)].map(cb => cb.value);
if (!name) { showToast('Enter a name', 'error'); return; }
let storeVal;
if (role === 'Admin' || role === 'Overwatch') storeVal = 'all';
else if (selectedStores.length === 0) { showToast('Select at least one store', 'error'); return; }
else if (selectedStores.length === 1 && role === 'Manager') storeVal = selectedStores[0];
else storeVal = selectedStores;
try { await db.ref(`users/${uid}`).set({ name: name, role: role, stores: storeVal, email: pendingUsers[uid]?.email || '', approvedAt: firebase.database.ServerValue.TIMESTAMP, approvedBy: currentUser.email }); await db.ref(`pending/${uid}`).remove(); showToast(`${name} approved as ${role}`, 'success'); }
catch (err) { console.error('Approve error:', err); showToast('Failed to approve: ' + err.message, 'error'); }
}
async function denyUser(uid) {
if (!confirm('Deny this user? They will need to request access again.')) return;
try { await db.ref(`pending/${uid}`).remove(); showToast('User denied', 'success'); }
catch (err) { showToast('Failed: ' + err.message, 'error'); }
}

async function loadActiveUsers() {
const container = document.getElementById('activeUsersList');
try {
const snap = await db.ref('users').once('value'); const users = snap.val() || {}; const entries = Object.entries(users);
document.getElementById('activeCount').textContent = `(${entries.length})`;
if (entries.length === 0) { container.innerHTML = '<div class="empty-state">No active users</div>'; return; }
container.innerHTML = entries.map(([uid, u]) => {
const initials = (u.name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
const roleClass = u.role === 'Overwatch' ? 'overwatch' : u.role === 'Admin' ? 'admin' : u.role === 'Director' ? 'director' : u.role === 'Area Coach' ? 'areacoach' : u.role === 'Technician' ? 'technician' : 'manager';
const storeStr = u.stores === 'all' ? 'All stores' : Array.isArray(u.stores) ? u.stores.length + ' stores' : u.stores || 'None';
return `<div class="user-row"><div class="user-row-avatar">${initials}</div><div class="user-row-info"><div class="user-row-name">${esc(u.name || 'Unknown')}</div><div class="user-row-email">${esc(u.email || uid)} · ${storeStr}</div></div><span class="user-row-role ${roleClass}">${u.role || 'Manager'}</span><div class="user-row-actions"><button onclick="editUser('${uid}')">Edit</button><button class="del" onclick="removeUser('${uid}','${esc(u.name || '')}')">Remove</button></div></div>`;
}).join('');
} catch (err) { container.innerHTML = '<div class="empty-state">Error loading users</div>'; }
}

function editUser(uid) {
db.ref(`users/${uid}`).once('value', snap => {
const u = snap.val(); if (!u) return;
const storeCheckboxes = stores.map(s => { const checked = u.stores === 'all' ? true : Array.isArray(u.stores) ? u.stores.includes(s.code) : u.stores === s.code; return `<label class="store-cb"><input type="checkbox" class="edit-store-cb" value="${s.code}" ${checked ? 'checked' : ''}> ${s.name.length > 22 ? s.name.substring(0,22)+'...' : s.name}</label>`; }).join('');
const overlay = document.createElement('div'); overlay.className = 'admin-modal'; overlay.id = 'editUserModal'; overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
overlay.innerHTML = `<div class="modal-card"><h3>Edit User</h3><div class="form-group"><label class="form-label">Name</label><input class="form-input" id="editName" value="${esc(u.name || '')}"></div><div class="form-group"><label class="form-label">Email</label><input class="form-input" value="${esc(u.email || uid)}" disabled style="opacity:.5"></div><div class="form-group"><label class="form-label">Role</label><select class="form-select" id="editRole"><option value="Manager" ${u.role === 'Manager' ? 'selected' : ''}>Manager</option><option value="Area Coach" ${u.role === 'Area Coach' ? 'selected' : ''}>Area Coach</option><option value="Director" ${u.role === 'Director' ? 'selected' : ''}>Director</option><option value="Admin" ${u.role === 'Admin' ? 'selected' : ''}>Admin</option><option value="Overwatch" ${u.role === 'Overwatch' ? 'selected' : ''}>Overwatch</option><option value="Technician" ${u.role === 'Technician' ? 'selected' : ''}>Technician</option></select></div><div class="form-group"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><label class="form-label" style="margin:0">Store Access</label><button class="btn btn-ghost" style="font-size:11px;padding:2px 8px" onclick="toggleEditStores()">All / None</button></div><div class="store-cb-grid">${storeCheckboxes}</div></div><div class="modal-actions"><button class="btn btn-primary" onclick="saveEditUser('${uid}')">Save</button><button class="btn btn-secondary" onclick="document.getElementById('editUserModal').remove()">Cancel</button></div></div>`;
document.body.appendChild(overlay);
});
}
function toggleEditStores() { const cbs = document.querySelectorAll('.edit-store-cb'); const allChecked = [...cbs].every(cb => cb.checked); cbs.forEach(cb => cb.checked = !allChecked); }
async function saveEditUser(uid) {
const name = document.getElementById('editName').value.trim(); const role = document.getElementById('editRole').value;
const selected = [...document.querySelectorAll('.edit-store-cb:checked')].map(cb => cb.value);
if (!name) { showToast('Name required', 'error'); return; }
let storeVal;
if (role === 'Admin' || role === 'Overwatch') storeVal = 'all';
else if (selected.length === 0) { showToast('Select at least one store', 'error'); return; }
else if (selected.length === 1 && role === 'Manager') storeVal = selected[0];
else storeVal = selected;
try { await db.ref(`users/${uid}`).update({ name, role, stores: storeVal }); document.getElementById('editUserModal').remove(); showToast('User updated', 'success'); loadActiveUsers(); }
catch (err) { showToast('Error: ' + err.message, 'error'); }
}
async function removeUser(uid, name) {
if (!confirm(`Remove ${name || 'this user'}?`)) return;
try { await db.ref(`users/${uid}`).remove(); showToast('User removed', 'success'); loadActiveUsers(); }
catch (err) { showToast('Error: ' + err.message, 'error'); }
}

function renderAddUserForm() {
const catsEl = document.getElementById('newUserCats'); const allCats = ['plumbing', 'equipment', 'it', 'structural', 'safety', 'other'];
catsEl.innerHTML = allCats.map(cat => `<label style="display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--bg)"><input type="checkbox" class="new-user-cat" value="${cat}"> ${capitalize(cat)}</label>`).join('');
const storesEl = document.getElementById('newUserStores');
storesEl.innerHTML = stores.map(s => `<label class="store-cb"><input type="checkbox" class="new-user-store" value="${s.code}"> ${s.name.length > 22 ? s.name.substring(0,22)+'...' : s.name}</label>`).join('');
}
let allNewUserStoresSelected = false;
function toggleAllNewUserStores() { allNewUserStoresSelected = !allNewUserStoresSelected; document.querySelectorAll('.new-user-store').forEach(cb => cb.checked = allNewUserStoresSelected); }
async function addNewUser() {
const name = document.getElementById('newUserName').value.trim(); const email = document.getElementById('newUserEmail').value.trim().toLowerCase();
const role = document.getElementById('newUserRole').value;
if (!name) { toast('Enter a name', 'error'); return; }
if (!email || !email.includes('@')) { toast('Enter a valid email', 'error'); return; }
if (!role) { toast('Select a role', 'error'); return; }
const selectedStores = [...document.querySelectorAll('.new-user-store:checked')].map(cb => cb.value);
const selectedCats = [...document.querySelectorAll('.new-user-cat:checked')].map(cb => cb.value);
if (selectedStores.length === 0 && role !== 'Admin') { toast('Select at least one store', 'error'); return; }
let storesVal;
if (role === 'Admin' || role === 'Overwatch') storesVal = 'all';
else if (selectedStores.length === 1) storesVal = selectedStores[0];
else storesVal = selectedStores;
const userData = { name: name, email: email, role: role, stores: storesVal, status: 'active', addedAt: firebase.database.ServerValue.TIMESTAMP, addedBy: currentUser.email };
try {
const emailKey = email.replace(/\./g, ','); await db.ref(`preApproved/${emailKey}`).set(userData);
if (selectedCats.length > 0) { const routingSnap = await db.ref('config/notifyRouting').once('value'); const routing = routingSnap.val() || {}; for (const cat of selectedCats) { if (!routing[cat]) routing[cat] = []; if (!routing[cat].includes(email)) routing[cat].push(email); } await db.ref('config/notifyRouting').set(routing); notifyRouting = routing; }
toast(`User ${name} added successfully`, 'success');
document.getElementById('newUserName').value = ''; document.getElementById('newUserEmail').value = ''; document.getElementById('newUserRole').value = '';
document.querySelectorAll('.new-user-store').forEach(cb => cb.checked = false); document.querySelectorAll('.new-user-cat').forEach(cb => cb.checked = false); allNewUserStoresSelected = false;
} catch (err) { toast('Error: ' + err.message, 'error'); }
}

async function scanOldNodes() {
const btn = document.getElementById('scanBtn'); btn.textContent = 'Scanning...'; btn.disabled = true;
const oldNodes = ['issues', 'stores', 'cameras']; const container = document.getElementById('cleanupNodes'); const found = [];
for (const node of oldNodes) { try { const snap = await db.ref(node).once('value'); if (snap.exists()) found.push({ node, count: snap.numChildren() }); } catch (e) {} }
if (found.length === 0) container.innerHTML = '<div style="color:var(--text-muted);font-size:13px;padding:8px 0">✓ Database is clean. No old data found.</div>';
else container.innerHTML = found.map(f => `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--border-light);border-radius:8px;margin-bottom:6px"><div><strong style="font-size:13px">/${f.node}</strong><span style="font-size:12px;color:var(--text-muted);margin-left:8px">${f.count} entries</span></div><button class="btn btn-secondary" style="font-size:11px;padding:4px 10px" onclick="deleteNode('${f.node}')">Delete</button></div>`).join('');
btn.textContent = 'Scan again'; btn.disabled = false;
}
async function deleteNode(node) { if (!confirm(`Delete /${node}?`)) return; try { await db.ref(node).remove(); showToast(`/${node} deleted`, 'success'); scanOldNodes(); } catch (err) { showToast('Error: ' + err.message, 'error'); } }

const CATEGORIES = ['plumbing','equipment','it','structural','safety','other'];
const CAT_LABELS = {plumbing:'Plumbing',equipment:'Equipment',it:'IT',structural:'Structural',safety:'Safety',other:'Other'};
function catLabel(cat) { return CAT_LABELS[String(cat||'').toLowerCase()] || capitalize(cat || ''); }
let notifyRouting = {};
function loadNotifyRouting() { db.ref('config/notifyRouting').once('value', snap => { notifyRouting = snap.val() || {}; renderNotifyGrid(); }); }
function renderNotifyGrid() {
const container = document.getElementById('notifyGrid');
container.innerHTML = CATEGORIES.map(cat => {
const emails = notifyRouting[cat] || ['','',''];
return `<div style="margin-bottom:10px;padding:10px 12px;background:var(--border-light);border-radius:8px"><div style="font-size:12px;font-weight:700;margin-bottom:6px;color:var(--text-mid)">${CAT_LABELS[cat]}</div><div style="display:flex;gap:6px;flex-wrap:wrap"><input class="form-input" style="flex:1;min-width:160px;font-size:12px;padding:5px 8px" placeholder="Email 1" id="nr-${cat}-0" value="${esc(emails[0]||'')}"><input class="form-input" style="flex:1;min-width:160px;font-size:12px;padding:5px 8px" placeholder="Email 2" id="nr-${cat}-1" value="${esc(emails[1]||'')}"><input class="form-input" style="flex:1;min-width:160px;font-size:12px;padding:5px 8px" placeholder="Email 3" id="nr-${cat}-2" value="${esc(emails[2]||'')}"></div></div>`;
}).join('');
}
async function saveNotifyRouting() {
const routing = {}; CATEGORIES.forEach(cat => { const emails = [0,1,2].map(i => document.getElementById(`nr-${cat}-${i}`).value.trim().toLowerCase()).filter(Boolean); if (emails.length) routing[cat] = emails; });
try { await db.ref('config/notifyRouting').set(routing); notifyRouting = routing; showToast('Notification routing saved', 'success'); }
catch (err) { showToast('Error: ' + err.message, 'error'); }
}

async function loadVendors() {
const snap = await db.ref('config/vendors').once('value'); vendorList = []; snap.forEach(child => { vendorList.push({ id: child.key, ...child.val() }); }); renderVendorRows(); populateAssignDropdown(); renderVendorCatCheckboxes(); renderVendorManagerRows();
}
function renderVendorRows() {
const container = document.getElementById('vendorRows'); if (!container) return;
if (vendorList.length === 0) { container.innerHTML = '<div class="empty-state" style="font-size:13px">No vendors added yet</div>'; return; }
container.innerHTML = vendorList.map(v => { const cats = (v.categories || []).map(capitalize).join(', '); const contactBits = []; if (v.phone) contactBits.push('📞 ' + escHtml(v.phone)); if (v.email) contactBits.push('✉️ ' + escHtml(v.email)); const contact = contactBits.length ? (' • ' + contactBits.join(' • ')) : ''; return `<div class="vendor-row"><span class="vendor-name">${escHtml(v.name)}</span><span class="vendor-meta">${escHtml(cats || 'No categories')}${contact}</span><button class="btn btn-ghost btn-sm" onclick="openVendorEdit('${v.id}')">Edit</button><button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="removeVendor('${v.id}')">Remove</button></div>`; }).join('');
}
async function openVendorEdit(vendorId) {
const v = vendorList.find(x => x.id === vendorId); if (!v) return;
const canEdit = await checkVendorEditPermission(); if (!canEdit) { showToast("You don't have permission to edit vendors", 'error'); return; }
const overlay = document.createElement('div'); overlay.className = 'confirm-overlay';
overlay.innerHTML = `<div class="confirm-box" style="max-width:520px;text-align:left"><h4 style="text-align:center">Edit vendor contact</h4><div style="margin-top:12px"><label class="form-label" style="margin-top:10px">Vendor</label><div class="form-input" style="background:var(--border-light);border-color:var(--border)">${escHtml(v.name)}</div><label class="form-label" style="margin-top:10px">Phone (recommended)</label><input class="form-input" id="editVendorPhone" placeholder="Phone number" value="${escAttr(v.phone || '')}"><label class="form-label" style="margin-top:10px">Email (recommended)</label><input class="form-input" id="editVendorEmail" placeholder="Email" value="${escAttr(v.email || '')}"></div><div class="confirm-btns" style="margin-top:14px;justify-content:flex-end"><button class="btn btn-secondary" id="vendorEditCancel">Cancel</button><button class="btn btn-primary" id="vendorEditSave">Save</button></div></div>`;
document.body.appendChild(overlay);
overlay.querySelector('#vendorEditCancel').onclick = () => overlay.remove();
overlay.querySelector('#vendorEditSave').onclick = async () => {
const phone = (overlay.querySelector('#editVendorPhone')?.value || '').trim(); const email = (overlay.querySelector('#editVendorEmail')?.value || '').trim();
if (!phone || !email) { const proceed = await showVendorContactConfirm({ missingPhone: !phone, missingEmail: !email }); if (!proceed) return; }
try { await db.ref('config/vendors/' + vendorId).update({ phone: phone || '', email: email || '' }); v.phone = phone || ''; v.email = email || ''; renderVendorRows(); showToast('Vendor updated', 'success'); overlay.remove(); } catch (err) { console.error(err); showToast('Could not update vendor', 'error'); }
};
}
function renderVendorCatCheckboxes() { const container = document.getElementById('newVendorCats'); if (!container) return; const cats = ['all','plumbing','equipment','it','structural','safety','other']; container.innerHTML = cats.map(c => `<label class="store-cb" style="border:1px solid var(--border);border-radius:6px;padding:2px 6px"><input type="checkbox" class="vendor-cat-cb" value="${c}"> ${catLabel(c)}</label>`).join(''); }
async function addVendor() { const name = document.getElementById('newVendorName').value.trim(); const cats = [...document.querySelectorAll('.vendor-cat-cb:checked')].map(c => c.value); if (!name) { showToast('Enter vendor name', 'error'); return; } const canEdit = await checkVendorEditPermission(); if (!canEdit) { showToast('You don\'t have permission to edit vendors', 'error'); return; } try { const newVendorRef = db.ref('config/vendors').push(); await newVendorRef.set({ name, categories: cats }); vendorList.push({ id: newVendorRef.key, name, categories: cats }); document.getElementById('newVendorName').value = ''; document.querySelectorAll('.vendor-cat-cb').forEach(c => c.checked = false); renderVendorRows(); renderVendorManagerRows(); populateAssignDropdown(); refreshAssignmentDropdowns(); showToast('Vendor added', 'success'); } catch (err) { showToast('Error: ' + err.message, 'error'); } }
async function removeVendor(id) { if (!confirm('Remove this vendor?')) return; const canEdit = await checkVendorEditPermission(); if (!canEdit) { showToast('No permission', 'error'); return; } try { await db.ref('config/vendors/' + id).remove(); showToast('Vendor removed', 'success'); loadVendors(); } catch (err) { showToast('Error: ' + err.message, 'error'); } }
function showVendorManager() { if (!canManageVendors()) { showToast('Only admin/director/IT support can manage vendors', 'error'); return; } document.getElementById('vendorManagerModal')?.remove(); const overlay = document.createElement('div'); overlay.className = 'admin-modal'; overlay.id = 'vendorManagerModal'; overlay.style.zIndex = '220'; overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); }; overlay.innerHTML = `<div class="modal-card vendor-manager-modal" style="max-width:760px"><h3>🏢 Approved Vendors</h3><p style="font-size:13px;color:var(--text-mid);margin-bottom:10px">Add or remove vendors used in assignment dropdowns.</p><div style="display:grid;grid-template-columns:1fr;gap:10px;margin-bottom:10px"><input class="form-input vendor-modal-input" id="vmName" placeholder="Vendor name"></div><div id="vmCats" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px"></div><div style="display:flex;gap:8px;justify-content:flex-end;margin-bottom:10px"><button class="btn btn-primary" onclick="addVendorFromManager()">Add Vendor</button></div><div id="vmRows" style="max-height:300px;overflow:auto;border:1px solid var(--border);border-radius:8px;padding:8px"></div><div class="modal-actions" style="margin-top:10px"><button class="btn btn-secondary" onclick="document.getElementById('vendorManagerModal')?.remove()">Close</button></div></div>`; document.body.appendChild(overlay); renderVendorManagerCatCheckboxes(); renderVendorManagerRows(); }
function renderVendorManagerCatCheckboxes() { const container = document.getElementById('vmCats'); if (!container) return; const cats = ['all','plumbing','equipment','it','structural','safety','other']; container.innerHTML = cats.map(c => `<label class="store-cb" style="border:1px solid var(--border);border-radius:6px;padding:2px 6px"><input type="checkbox" class="vm-cat-cb" value="${c}"> ${catLabel(c)}</label>`).join(''); }
function renderVendorManagerRows() { const container = document.getElementById('vmRows'); if (!container) return; if (!vendorList.length) { container.innerHTML = '<div class="empty-state" style="font-size:13px">No approved vendors yet</div>'; return; } container.innerHTML = vendorList.map(v => `<div class="vendor-row"><span class="vendor-name">${escHtml(v.name)}</span><span class="vendor-meta">${(v.categories || []).map(capitalize).join(', ')}</span><button class="btn btn-ghost" style="font-size:11px;color:var(--danger)" onclick="removeVendorFromManager('${v.id}')">Delete</button></div>`).join(''); }
async function addVendorFromManager() { const name = (document.getElementById('vmName')?.value || '').trim(); const cats = [...document.querySelectorAll('.vm-cat-cb:checked')].map(c => c.value); if (!name) { showToast('Enter vendor name', 'error'); return; } const canEdit = await checkVendorEditPermission(); if (!canEdit) { showToast('No permission', 'error'); return; } try { const newVendorRef = db.ref('config/vendors').push(); await newVendorRef.set({ name, categories: cats }); vendorList.push({ id: newVendorRef.key, name, categories: cats }); renderVendorRows(); renderVendorManagerRows(); populateAssignDropdown(); refreshAssignmentDropdowns(); showToast('Vendor added', 'success'); document.getElementById('vmName').value = ''; document.querySelectorAll('.vm-cat-cb').forEach(c => c.checked = false); } catch (err) { showToast('Error: ' + err.message, 'error'); } }
function refreshAssignmentDropdowns() { if (!document.getElementById('allTicketsScreen').classList.contains('hidden')) filterAllTickets(); if (currentMapView === 'list') renderStoreListView(); }
async function removeVendorFromManager(id) { if (!confirm('Delete this vendor from approved list?')) return; await removeVendor(id); }
async function checkVendorEditPermission() { if (canManageVendors(currentUser)) return true; const snap = await db.ref('config/vendorEditors').once('value'); const editors = snap.val() || []; return editors.includes(currentUser.email); }

let techUserCache = [];
async function loadTechUsers() { try { const snap = await db.ref('users').once('value'); techUserCache = []; snap.forEach(child => { const u = child.val(); if (u && normalizeRole(u.role) === 'Technician') techUserCache.push({ uid: child.key, email: u.email || '', name: u.name || u.email || 'Technician' }); }); } catch(e) { console.warn('loadTechUsers failed:', e); } }

function populateAssignDropdown() { const sel = document.getElementById('assignTo'); if (!sel) return; sel.innerHTML = '<option value="">Unassigned</option>'; if (techUserCache.length) { sel.innerHTML += '<optgroup label="Repair Technicians">'; techUserCache.forEach(t => { sel.innerHTML += `<option value="tech:${t.email}">🔧 ${escHtml(t.name)}</option>`; }); sel.innerHTML += '</optgroup>'; } if (vendorList.length) { sel.innerHTML += '<optgroup label="Third-Party Vendors">'; vendorList.forEach(v => { sel.innerHTML += `<option value="vendor:${v.name}">🏢 ${escHtml(v.name)}</option>`; }); sel.innerHTML += '</optgroup>'; } if (canManageVendors()) sel.innerHTML += '<optgroup label="Vendor Tools"><option value="__edit_vendors__" class="vendor-manage-option">🛠 Edit Vendors</option></optgroup>'; sel.onchange = () => handleVendorManagerSelection(sel); }

function getAssignmentOptionsHtml() { let html = '<option value="">Assign to...</option>'; if (techUserCache.length) { html += '<optgroup label="Repair Technicians">'; techUserCache.forEach(t => { html += `<option value="tech:${t.email}">🔧 ${escHtml(t.name)}</option>`; }); html += '</optgroup>'; } if (vendorList.length) { html += '<optgroup label="Approved Vendors">'; vendorList.forEach(v => { html += `<option value="vendor:${escHtml(v.name)}">🏢 ${escHtml(v.name)}</option>`; }); html += '</optgroup>'; } if (canManageVendors()) html += '<optgroup label="Vendor Tools"><option value="__edit_vendors__" class="vendor-manage-option">🛠 Edit Vendors</option></optgroup>'; return html; }

function handleVendorManagerSelection(selectEl) { if (!selectEl || selectEl.value !== '__edit_vendors__') return false; if (!canManageVendors()) { toast('Only admin/director/IT support can manage vendors', 'error'); selectEl.value = ''; return true; } showVendorManager(); setTimeout(() => { selectEl.value = ''; }, 0); return true; }

function renderInlineAssignControls(ticket, contextPrefix = 'inline') { if (!canAssignTickets()) return ''; const status = normalizeTicketStatus(ticket.status); if (status === 'closed') return ''; const ticketKey = ticket._key || ticket.id || ''; const assigneeLabel = String(ticket.assignedTo || '').trim(); if (status === 'unassigned') { const safeKey = String(ticketKey).replace(/[^a-zA-Z0-9_-]/g, '_'); const selectId = `${contextPrefix}Assign_${safeKey}`; return `<div class="inline-assign-row" onclick="event.stopPropagation()"><div class="inline-assign-left"><div class="inline-assign-label">${'Assign to'}</div><select id="${selectId}" class="form-select form-select-sm inline-assign-select" onchange="event.stopPropagation();handleVendorManagerSelection(this)"><option value="">${'Select…'}</option>${getAssignmentOptionsHtml()}</select></div><div class="inline-assign-right"><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();assignTicketFromSelect('${escAttr(ticketKey)}','${selectId}')">${'Assign'}</button></div></div>`; } if (status === 'assigned' && assigneeLabel && ticket.assigneeType !== 'tech') { const dispName = getAssigneeDisplayName(ticket) || escHtml(assigneeLabel); return `<div class="inline-assigned-row" onclick="event.stopPropagation()"><div class="inline-dispatch-row"><div class="inline-dispatch-q">Contacted <b>${escHtml(dispName)}</b> already?</div><div class="inline-dispatch-btns"><button class="btn btn-primary btn-sm" onclick="event.stopPropagation();markAssignedContactedYes('${escAttr(ticketKey)}')">Yes</button><button class="btn btn-outline-secondary btn-sm" onclick="event.stopPropagation();markAssignedContactedNo('${escAttr(ticketKey)}')">No</button><button class="btn btn-outline-danger btn-sm" onclick="event.stopPropagation();unassignTicket('${escAttr(ticketKey)}')">Unassign</button></div></div></div>`; } return ''; }

function renderModalAssignmentBlock(ticket, key) { if (!canAssignTickets()) return ''; const status = normalizeTicketStatus(ticket.status); const assignee = String(ticket.assignedTo || '').trim(); if (assignee && status !== 'unassigned') { return `<div style="margin-top:10px"><label class="form-label" style="font-size:12px">${'Assigned to'}</label><div style="display:flex;gap:8px;align-items:center"><div class="form-input" style="flex:1;min-height:36px;display:flex;align-items:center;background:var(--card);border:1px solid var(--border);border-radius:10px;padding:8px 10px;overflow:hidden"><span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700">${escHtml(assignee)}</span></div><button class="btn btn-danger btn-sm" style="white-space:nowrap" onclick="event.stopPropagation();unassignTicket('${key}')">${'Unassign'}</button></div></div>`; } const safeKey = String(key).replace(/[^a-zA-Z0-9_-]/g, '_'); const selectId = `modalAssign_${safeKey}`; return `<div style="margin-top:10px"><label class="form-label" style="font-size:12px">${'Assign'}</label><div style="display:flex;gap:8px;align-items:center"><select class="form-select form-select--modal-compact" id="${selectId}" style="flex:1">${getAssignmentOptionsHtml()}</select><button class="btn btn-primary btn-sm" style="white-space:nowrap" onclick="event.stopPropagation();quickAssignTicket('${key}','${selectId}')">${'Assign'}</button></div></div>`; }

async function markAssignedContactedYes(ticketKey) { if (!ticketKey) return; if (!canAssignTickets()) { toast('You do not have assignment permissions', 'error'); return; } try { const snap = await db.ref(`tickets/${ticketKey}`).once('value'); const t = snap.val(); if (!t) return; const oldStatus = normalizeTicketStatus(t.status); if (oldStatus !== 'assigned') return; if (t.assigneeType === 'tech') return; const actSnap = await db.ref(`tickets/${ticketKey}/activity`).once('value'); const activity = actSnap.val() || []; activity.push({ action:'status', by: currentUser.name, byEmail: currentUser.email, oldStatus:'assigned', newStatus:'dispatched', note:'Vendor contacted', timestamp: Date.now() }); await db.ref().update({ [`tickets/${ticketKey}/status`]: 'dispatched', [`tickets/${ticketKey}/updatedAt`]: firebase.database.ServerValue.TIMESTAMP, [`tickets/${ticketKey}/activity`]: activity }); syncAfterTicketMutation(ticketKey, { status:'dispatched', updatedAt: Date.now(), activity }); toast('Moved to Dispatched', 'success'); filterAllTickets(); } catch (err) { toast('Unable to update: ' + err.message, 'error'); } }

async function markAssignedContactedNo(ticketKey) { if (!ticketKey) return; if (!canAssignTickets()) { toast('You do not have assignment permissions', 'error'); return; } const tCheck = allTicketsData.find(x => x._key === ticketKey || x.id === ticketKey) || currentTickets.find(x => x._key === ticketKey || x.id === ticketKey); if (tCheck && tCheck.assigneeType === 'tech') return; const t = tCheck; if (!t) return; const label = String(t.assignedTo || '').trim() || 'the technician'; const want = await confirmBox('Do you want the sample email?', 'We can generate a ready-to-copy email.', { okText: 'Yes, show me', cancelText: 'No' }); if (want) openAssignEmailComposer({ ...t, _key: ticketKey }, label); }

function buildAssignEmailDraft(ticket, partyLabel) { const lines = [`Hello ${partyLabel},`, '', `Please find details below for a job we need done at ${ticket.storeName || ticket.storeCode || 'the location'}.`, '', 'Job Details:', `- Ticket ID: ${ticket.id || ticket._key || ''}`, `- Location: ${ticket.storeName || ticket.storeCode || ''}`, `- Priority: ${capitalize(ticket.priority || 'routine')}`, `- Category: ${catLabel(ticket.category)}${ticket.location ? ' / ' + capitalize(ticket.location) : ''}`, `- Description: ${ticket.description || ''}`, ticket.contactName ? `- On-site Contact: ${ticket.contactName}${ticket.contactPhone ? ' (' + ticket.contactPhone + ')' : ''}` : '', '', 'Please reply to confirm receipt and your availability.', '', 'Thank you.'].filter(Boolean); return lines.join('\n'); }

function openAssignEmailComposer(ticket, partyLabel) { const overlay = document.createElement('div'); overlay.className = 'confirm-overlay'; const draft = buildAssignEmailDraft(ticket, partyLabel); const hasPhotos = Array.isArray(ticket.photos) && ticket.photos.length > 0; const photoStripHtml = hasPhotos ? `<div style="margin-top:12px"><p style="text-align:left;font-size:12px
