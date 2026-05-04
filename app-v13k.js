
const normalize = (value='') => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[’']/g, '')
  .replace(/[^a-z0-9\s-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const glossary = [
  {term:'Daimoku', category:'Pratica', aliases:['nam myoho renge kyo','recitazione'], simple:'La recitazione di Nam-myoho-renge-kyo.', deep:'È la pratica fondamentale nel Buddismo di Nichiren per far emergere coraggio, saggezza, compassione e trasformare la propria vita.', example:'Quando sei bloccato o scoraggiato, puoi recitare daimoku per ritrovare chiarezza e determinazione.'},
  {term:'Gongyo', category:'Pratica', aliases:['sutra','hoben','juryo'], simple:'La pratica quotidiana che include recitazione e daimoku.', deep:'Nel Buddismo di Nichiren, gongyo comprende la recitazione di parti del Sutra del Loto insieme al daimoku di Nam-myoho-renge-kyo.', example:'Fare gongyo al mattino può aiutarti a partire con una direzione interiore più forte.'},
  {term:'Nam-myoho-renge-kyo', category:'Concetti base', aliases:['legge mistica','mystic law'], simple:'L’espressione della Legge fondamentale della vita.', deep:'Invocare Nam-myoho-renge-kyo significa armonizzare la propria vita con la Legge mistica e attivare il potenziale di Buddità.', example:'Puoi recitarlo per trasformare paura, rabbia, indecisione o sofferenza in energia costruttiva.'},
  {term:'Gohonzon', category:'Concetti base', aliases:['oggetto di culto'], simple:'L’oggetto di culto nella pratica di Nichiren.', deep:'Rappresenta la realtà illuminata della vita e funge da specchio per far emergere la Buddità inerente dentro di te.', example:'Davanti al Gohonzon puoi chiarire la tua intenzione e rafforzare la tua decisione.'},
  {term:'Karma', category:'Concetti base', aliases:['causa effetto'], simple:'La dinamica di cause ed effetti nella vita.', deep:'Non è destino fisso: è l’insieme di tendenze, abitudini, cause passate e presenti che puoi trasformare con fede, pratica e azione.', example:'Ripetere sempre gli stessi errori nelle relazioni può essere un aspetto del karma da trasformare.'},
  {term:'Kosen-rufu', category:'Missione', aliases:['kosen rufu','pace','diffusione'], simple:'La diffusione della pace e della dignità della vita.', deep:'È il movimento per creare una società in cui il rispetto per la dignità della vita diventi reale nelle relazioni, nella cultura e nella comunità.', example:'Incoraggiare una persona a non arrendersi è già un atto di kosen-rufu.'},
  {term:'Rivoluzione umana', category:'Missione', aliases:['cambiamento interiore','human revolution'], simple:'Il profondo cambiamento interiore della persona.', deep:'È la trasformazione del proprio stato vitale: da paura a coraggio, da egoismo a compassione, da passività a responsabilità.', example:'Decidere di affrontare un conflitto con calma invece che con rabbia è rivoluzione umana.'},
  {term:'Dieci mondi', category:'Studio', aliases:['stati vitali'], simple:'Dieci stati vitali che sperimentiamo ogni giorno.', deep:'Inferno, avidità, animalità, collera, umanità, estasi, studio, realizzazione, bodhisattva e Buddità: non sono luoghi ma condizioni interiori dinamiche.', example:'Passare dalla frustrazione alla volontà di aiutare qualcuno è un cambiamento di mondo vitale.'},
  {term:'Buddità', category:'Studio', aliases:['buddhita','buddhahood'], simple:'La condizione di saggezza, coraggio e compassione più elevata.', deep:'Non è separata dalla vita quotidiana: emerge proprio dentro problemi, decisioni e relazioni quando attivi il tuo stato vitale più profondo.', example:'Restare saldo e compassionevole in una situazione difficile è manifestare Buddità.'},
  {term:'Esho funi', category:'Studio', aliases:['inscindibilita individuo ambiente'], simple:'Insparabilità tra vita interiore e ambiente.', deep:'Ciò che cambi dentro di te influenza il modo in cui percepisci, vivi e trasformi l’ambiente.', example:'Quando cambi atteggiamento verso una persona, spesso cambia anche la relazione.'},
  {term:'Bodhisattva', category:'Studio', aliases:['aiutare gli altri'], simple:'Chi cerca la propria felicità aiutando anche gli altri.', deep:'Nel Buddismo di Nichiren il bodhisattva agisce nel mondo reale, tra difficoltà e relazioni, per alleviare la sofferenza.', example:'Ascoltare davvero qualcuno e incoraggiarlo con sincerità è azione da bodhisattva.'}
];

const conceptArticles = [
  {title:'Torre preziosa', category:'Concetti profondi', aliases:['treasure tower','torre dei tesori','many treasures'], summary:'La torre preziosa non indica un edificio esterno ma la nobiltà e la Buddità presenti nella vita di ogni persona.', deep:'Nella spiegazione di Daisaku Ikeda e nella tradizione di Nichiren, la torre preziosa esprime la dignità infinita della vita. Non è qualcosa da cercare fuori da sé: emerge quando una persona si risveglia al proprio valore e a quello degli altri attraverso fede, pratica e azione per la felicità altrui.', practical:'Nella vita quotidiana significa guardare te stesso e gli altri come esseri degni di rispetto, anche quando stanno attraversando limiti, errori o sofferenza.'},
  {title:'Tre veleni', category:'Concetti profondi', aliases:['3 veleni','three poisons','avidita collera stupidita','bramosia collera stupidita'], summary:'I tre veleni sono avidità, collera e stupidità o oscurità. Sono radici interiori della sofferenza.', deep:'Nel Buddismo di Nichiren i tre veleni non indicano sostanze fisiche ma tendenze interiori che avvelenano il modo in cui percepiamo e rispondiamo alla realtà. Avidità significa attaccamento e fame insaziabile; collera significa ostilità, risentimento e aggressività; stupidità significa ignoranza profonda della vera natura della vita, spesso collegata all’oscurità fondamentale.', practical:'Riconoscere i tre veleni nella quotidianità aiuta a non identificarci con essi. Attraverso daimoku, studio e azione compassionevole possiamo trasformarli in saggezza, coraggio e umanità.'},
  {title:'Oscurità fondamentale', category:'Concetti profondi', aliases:['fundamental darkness','ignoranza fondamentale'], summary:'È la tendenza fondamentale a non riconoscere la dignità della propria vita e di quella altrui.', deep:'Nel pensiero di Nichiren l’oscurità fondamentale è la radice profonda che offusca la Buddità e alimenta i tre veleni. Non è una condanna, ma qualcosa che può essere illuminato dalla pratica di Nam-myoho-renge-kyo.', practical:'Quando ti senti chiuso, separato, sfiduciato o ostile, puoi leggerlo come un momento in cui l’oscurità fondamentale è forte. La pratica serve proprio ad aprire uno spazio di luce interiore.'},
  {title:'Cerimonia nell’aria', category:'Concetti profondi', aliases:['ceremony in the air'], summary:'La cerimonia nell’aria rappresenta una prospettiva ampia e universale da cui osservare la vita e il proprio voto.', deep:'Nei commenti di Ikeda, la cerimonia nell’aria invita a sollevarsi sopra paura, confusione e attaccamento per vedere la propria missione con maggiore vastità.', practical:'Quando ti senti schiacciato dagli eventi, puoi recitare e chiederti: “Se guardassi questa situazione dall’alto, con saggezza e coraggio, quale decisione prenderei?”'},
  {title:'Tre prove', category:'Studio', aliases:['three proofs'], summary:'Le tre prove sono prova documentaria, prova teorica e prova concreta.', deep:'Nel Buddismo di Nichiren, un insegnamento va verificato nei testi, nella coerenza interna e nei risultati concreti che produce nella vita delle persone.', practical:'Quando studi o affronti un dubbio, chiediti: è coerente? è fondato? produce valore reale nella vita?'},
  {title:'I dieci fattori', category:'Studio', aliases:['10 fattori','dieci fattori','nyoze'], summary:'I dieci fattori descrivono la realtà dei fenomeni dalla loro apparenza fino alla coerenza dall’inizio alla fine.', deep:'Aspetto, natura, entità, potere, azione, causa interna, relazione, effetto latente, retribuzione e coerenza dall’inizio alla fine mostrano che la vita è dinamica, coerente e trasformabile.', practical:'Aiutano a leggere una situazione non in modo superficiale, ma come una trama di cause, condizioni ed effetti che può essere trasformata.'},
  {title:'Ichinen sanzen', category:'Studio', aliases:['tremila regni in un singolo istante di vita','3000 regni','ichinen-sanzen'], summary:'Ichinen sanzen indica che in un singolo istante di vita sono contenute infinite possibilità di trasformazione.', deep:'Nel Buddismo di Nichiren questo principio mostra che la vita di ogni persona contiene tutti i mondi e tutte le condizioni. La Buddità non è separata dalla vita ordinaria: può emergere proprio nel momento presente.', practical:'Quando reciti daimoku davanti a una difficoltà, non stai fuggendo dal problema: stai cambiando la qualità dell’istante di vita con cui lo affronti.'},
  {title:'Nove coscienze', category:'Studio', aliases:['nona coscienza','coscienza amala','amala','coscienze'], summary:'Le nove coscienze descrivono livelli sempre più profondi della vita, fino alla natura pura della Buddità.', deep:'Oltre alle coscienze sensoriali e mentali, il Buddismo parla di livelli profondi che custodiscono tendenze, karma e memoria vitale. La nona coscienza rappresenta la dimensione più pura e illuminata della vita.', practical:'Recitare Nam-myoho-renge-kyo significa rivolgersi alla dimensione più profonda della propria vita, oltre paure, abitudini e reazioni superficiali.'},
  {title:'Mutua possessione dei dieci mondi', category:'Studio', aliases:['mutua possessione','dieci mondi mutua possessione','possesso reciproco'], summary:'Ogni stato vitale contiene in sé tutti gli altri stati vitali.', deep:'Questo principio significa che anche nell’inferno esiste la possibilità della Buddità e che anche nella gioia può emergere la collera o l’avidità. Gli stati vitali cambiano dinamicamente momento per momento.', practical:'Anche quando ti senti nel punto più basso, la possibilità di risvegliare coraggio e saggezza è già presente dentro quel momento.'},
  {title:'Beneficio visibile e invisibile', category:'Pratica', aliases:['benefici visibili','benefici invisibili','beneficio invisibile','beneficio visibile'], summary:'I benefici della pratica possono manifestarsi come risultati concreti o come trasformazioni interiori profonde.', deep:'Il beneficio visibile riguarda cambiamenti percepibili nella vita quotidiana; il beneficio invisibile riguarda qualità interiori come forza, saggezza, pazienza, fiducia e capacità di non arrendersi. Spesso il beneficio invisibile diventa la base per quello visibile.', practical:'Anche se una situazione esterna non cambia subito, potresti accorgerti di affrontarla con più lucidità e coraggio: questo è già un beneficio reale.'},
  {title:'Fede, pratica e studio', category:'Pratica', aliases:['fede pratica studio','tre pilastri','fede studio pratica'], summary:'Fede, pratica e studio sono tre elementi che si sostengono a vicenda.', deep:'La fede dà direzione, la pratica rende concreta quella direzione e lo studio permette di comprendere più profondamente il senso della pratica. Senza studio la pratica può diventare meccanica; senza pratica lo studio resta astratto.', practical:'Quando reciti, agisci e studi anche poche righe con continuità, costruisci una base più solida per trasformare la tua vita.'},
  {title:'Maestro e discepolo', category:'Missione', aliases:['maestro discepolo','mentor and disciple','ikeda maestro discepolo'], summary:'Il rapporto maestro-discepolo esprime la decisione di portare avanti lo stesso voto per la felicità delle persone.', deep:'Nel Buddismo di Nichiren e nella tradizione della Soka Gakkai, maestro e discepolo indicano continuità di spirito, responsabilità e impegno per kosen-rufu. Il discepolo realizza nella propria vita il voto condiviso con il maestro.', practical:'Quando trasformi la tua sofferenza in incoraggiamento per altri, stai vivendo lo spirito di maestro e discepolo nella vita quotidiana.'}
];

const studyTopics = [
  {title:'Quando sei scoraggiato', text:'Inizia con pochi minuti di daimoku. Non aspettare di sentirti forte per iniziare: spesso la forza emerge proprio dalla pratica.'},
  {title:'Quando non capisci un problema', text:'Recita con la domanda ben chiara in mente, poi scrivi una piccola azione concreta da fare oggi.'},
  {title:'Quando vuoi trasformare il karma', text:'Non cercare solo sollievo. Cerca una trasformazione del tuo modo di pensare, parlare e agire.'},
  {title:'Quando studi un concetto profondo', text:'Cerca sempre il legame con la vita quotidiana: un principio buddista diventa vivo quando cambia il modo in cui affronti una situazione concreta.'},
  {title:'Quando vuoi incoraggiare qualcuno', text:'Parti dalla dignità della persona, non dal problema. Anche una frase sincera può diventare una causa di valore.'}
];

const dailyMessages = [
  'Oggi non cercare la perfezione. Cerca sincerità nella pratica.',
  'Anche pochi minuti di daimoku con decisione possono cambiare la direzione della giornata.',
  'Trasformare il karma inizia quando smetti di vederti come vittima immobile.',
  'La Buddità si manifesta nelle piccole azioni coerenti di oggi.',
  'Recitare è importante; agire dopo la recitazione completa il cambiamento.'
];

const targetedQueries = {
  'tre veleni':'"tre veleni" buddismo Nichiren Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  '3 veleni':'"tre veleni" buddismo Nichiren Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'torre preziosa':'"torre preziosa" Daisaku Ikeda Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'cerimonia nell aria':'"cerimonia nell\'aria" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'oscurita fondamentale':'"oscurità fondamentale" Nichiren Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'gohonzon':'gohonzon Soka Gakkai Italia significato site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'esho funi':'"esho funi" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'dieci mondi':'"dieci mondi" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'i dieci fattori':'"dieci fattori" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'ichinen sanzen':'"ichinen sanzen" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'nove coscienze':'"nove coscienze" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'nona coscienza':'"nona coscienza" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'mutua possessione':'"mutua possessione" "dieci mondi" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'beneficio visibile':'"beneficio visibile" "beneficio invisibile" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'beneficio invisibile':'"beneficio visibile" "beneficio invisibile" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'fede pratica studio':'"fede pratica studio" Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
  'maestro e discepolo':'"maestro e discepolo" Daisaku Ikeda Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org',
};

const views = document.querySelectorAll('.view');
const navBtns = document.querySelectorAll('[data-go]');
const topbar = document.getElementById('topbar');
const dailyMessage = document.getElementById('dailyMessage');
const searchInput = document.getElementById('searchInput');
const dictionaryList = document.getElementById('dictionaryList');
const journalList = document.getElementById('journalList');
const studyCards = document.getElementById('studyCards');
const tagRow = document.getElementById('tagRow');
const searchStatus = document.getElementById('searchStatus');
const extendedSearchBtn = document.getElementById('extendedSearchBtn');
const clearSearchBtn = document.getElementById('clearSearch');
const dailyStudyTitle = document.getElementById('dailyStudyTitle');
const dailyStudySummary = document.getElementById('dailyStudySummary');
const dailyStudyCategory = document.getElementById('dailyStudyCategory');
const dailyStudyReadMore = document.getElementById('dailyStudyReadMore');
const dailyStudySave = document.getElementById('dailyStudySave');
const studyDailyTitle = document.getElementById('studyDailyTitle');
const studyDailySummary = document.getElementById('studyDailySummary');
const studyDailyCategory = document.getElementById('studyDailyCategory');
const studyDailyReadMore = document.getElementById('studyDailyReadMore');
const studyDailySave = document.getElementById('studyDailySave');
const favoriteConceptsList = document.getElementById('favoriteConceptsList');
const favoritePhrasesList = document.getElementById('favoritePhrasesList');
const favoriteGongyoPointsList = document.getElementById('favoriteGongyoPointsList');

const favoriteKey = 'pv5Favorites';
const journalKey = 'pv5Journal';
const intentionKey = 'pv5Intention';
const bellSoundKey = 'pv5BellSound';
const gongyoSpeedKey = 'pv5GongyoSpeed';
const gongyoViewKey = 'pv5GongyoView';
const gongyoScrollKey = 'pv5GongyoScroll';
const bellDurationKey = 'pv5BellDuration';
const daimokuVoiceEnabledKey = 'pv12DaimokuVoiceEnabled';
const gongyoVoiceEnabledKey = 'pv12GongyoVoiceEnabled';
const gongyoListenModeKey = 'pv12GongyoListenMode';
const gongyoBookmarkKey = 'pv12GongyoBookmark';
const evolvedFavoritesKey = 'pv12EvolvedFavorites';

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getFavorites(){ return JSON.parse(localStorage.getItem(favoriteKey) || '[]'); }
function setFavorites(list){ localStorage.setItem(favoriteKey, JSON.stringify(list)); }
function getJournal(){ return JSON.parse(localStorage.getItem(journalKey) || '[]'); }
function setJournal(list){ localStorage.setItem(journalKey, JSON.stringify(list)); }

function getEvolvedFavorites(){
  return JSON.parse(localStorage.getItem(evolvedFavoritesKey) || '{"concepts":[],"phrases":[],"gongyoPoints":[]}');
}
function setEvolvedFavorites(data){ localStorage.setItem(evolvedFavoritesKey, JSON.stringify(data)); }
function makeFavoriteId(value){ return normalize(value || '').slice(0,90); }
function addEvolvedFavorite(type, item){
  const data = getEvolvedFavorites();
  if(!data[type]) data[type] = [];
  const id = item.id || makeFavoriteId(`${item.title || ''} ${item.text || ''} ${item.section || ''} ${item.romaji || ''}`);
  if(data[type].some(x => x.id === id)){
    alert('Elemento già salvato nei preferiti.');
    return;
  }
  data[type].unshift({...item, id, date:new Date().toLocaleString('it-IT')});
  data[type] = data[type].slice(0,80);
  setEvolvedFavorites(data);
  renderEvolvedFavorites();
  alert('Salvato nei preferiti.');
}
function removeEvolvedFavorite(type, id){
  const data = getEvolvedFavorites();
  data[type] = (data[type] || []).filter(item => item.id !== id);
  setEvolvedFavorites(data);
  renderEvolvedFavorites();
}

function addJournalEntry(text, type='Nota'){
  if(!text.trim()) return;
  const entries = getJournal();
  entries.unshift({ text:text.trim(), type, date:new Date().toLocaleString('it-IT') });
  setJournal(entries.slice(0,100));
  renderJournal();
}

function switchView(id){
  views.forEach(v => v.classList.toggle('active', v.id === id));
  document.querySelectorAll('.navbtn').forEach(btn => btn.classList.toggle('active', btn.dataset.go === id));
  document.body.classList.toggle('welcome-active', id === 'welcome');
  topbar?.classList.toggle('home-only-hidden', id !== 'home');
  window.scrollTo({top:0, behavior:'smooth'});
}
navBtns.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.go)));

function renderTags(){
  const categories = [...new Set([...glossary.map(x=>x.category), ...conceptArticles.map(x=>x.category)])];
  tagRow.innerHTML = `<button class="tag active" data-filter="">Tutti</button>` + categories.map(c=>`<button class="tag" data-filter="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');
  tagRow.querySelectorAll('[data-filter]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      tagRow.querySelectorAll('.tag').forEach(t=>t.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.dataset.filter;
      searchInput.value = val;
      renderDictionary(val);
    });
  });
}

const dailyTargetKey = 'pvDailyTarget';

function getDailyTarget(){
  return Number(localStorage.getItem(dailyTargetKey) || 20);
}

function setDailyTarget(value){
  localStorage.setItem(dailyTargetKey, String(value));
}

function scoreMatch(blob, q, aliases=[]){
  const nBlob = normalize(blob);
  const nQ = normalize(q);
  if(!nQ) return 1;
  let score = 0;
  if(nBlob === nQ) score += 200;
  if(nBlob.startsWith(nQ)) score += 120;
  if(nBlob.includes(nQ)) score += 80;
  aliases.forEach(a => {
    const nA = normalize(a);
    if(nA === nQ) score += 180;
    else if(nA.includes(nQ)) score += 90;
  });
  const tokens = nQ.split(' ').filter(Boolean);
  const matchedTokens = tokens.filter(t => nBlob.includes(t) || aliases.some(a => normalize(a).includes(t))).length;
  score += matchedTokens * 22;
  return score;
}

function localSearch(query){
  const q = normalize(query);
  const glossaryMatches = glossary.map(item => ({
    ...item,
    _score: scoreMatch(`${item.term} ${item.category} ${item.simple} ${item.deep} ${item.example}`, q, item.aliases || [])
  })).filter(x => x._score > 0).sort((a,b)=>b._score-a._score || a.term.localeCompare(b.term));

  const conceptMatches = conceptArticles.map(item => ({
    ...item,
    _score: scoreMatch(`${item.title} ${item.category} ${item.summary} ${item.deep} ${item.practical}`, q, item.aliases || [])
  })).filter(x => x._score > 0).sort((a,b)=>b._score-a._score || a.title.localeCompare(b.title));

  return {glossaryMatches, conceptMatches};
}

function makeGlossaryCards(items){
  const favorites = getFavorites();
  return items.map(item => `
    <article class="card">
      <div class="term-title">
        <div>
          <h3>${escapeHtml(item.term)}</h3>
          <div class="term-meta">${escapeHtml(item.category)}</div>
        </div>
        <button class="favorite ${favorites.includes(item.term) ? 'active' : ''}" data-fav="${escapeHtml(item.term)}">${favorites.includes(item.term) ? '★ Salvato' : '☆ Preferito'}</button>
      </div>
      <p><strong>In breve:</strong> ${escapeHtml(item.simple)}</p>
      <p><strong>Approfondimento:</strong> ${escapeHtml(item.deep)}</p>
      <p><strong>Nella vita quotidiana:</strong> ${escapeHtml(item.example)}</p>
    </article>`).join('');
}

function makeConceptCards(items){
  return items.map(item => `
    <article class="card">
      <div class="term-title">
        <div>
          <h3>${escapeHtml(item.title)}</h3>
          <div class="term-meta">${escapeHtml(item.category)}</div>
        </div>
      </div>
      <p><strong>Sintesi:</strong> ${escapeHtml(item.summary)}</p>
      <p><strong>Approfondimento:</strong> ${escapeHtml(item.deep)}</p>
      <p><strong>Nella pratica:</strong> ${escapeHtml(item.practical)}</p>
      <button class="ghost" data-save-concept="${escapeHtml(item.title)}">☆ Salva concetto</button>
    </article>`).join('');
}

function attachFavoriteHandlers(){
  document.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.dataset.fav;
      const list = getFavorites();
      const next = list.includes(term) ? list.filter(t => t !== term) : [...list, term];
      setFavorites(next);
      renderDictionary();
    });
  });
  document.querySelectorAll('[data-save-concept]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.saveConcept;
      const item = conceptArticles.find(x => x.title === title) || glossary.find(x => x.term === title);
      if(!item) return;
      addEvolvedFavorite('concepts', {
        title: item.title || item.term,
        category: item.category || 'Studio',
        text: item.summary || item.simple || '',
        detail: item.deep || '',
        id: `concept-${makeFavoriteId(item.title || item.term)}`
      });
    });
  });
}

function renderDictionary(filter=''){
  const query = (filter || searchInput.value || '').trim();
  const {glossaryMatches, conceptMatches} = localSearch(query);

  const parts = [];
  if (conceptMatches.length) parts.push(makeConceptCards(conceptMatches));
  if (glossaryMatches.length) parts.push(makeGlossaryCards(glossaryMatches));
  dictionaryList.innerHTML = parts.join('') || `<div class="card"><p>Nessun contenuto interno trovato. Premi <strong>Approfondisci</strong> per ottenere link mirati al Buddismo di Nichiren.</p></div>`;

  searchStatus.textContent = query
    ? `${glossaryMatches.length + conceptMatches.length} risultato/i interni trovati in ottica Nichiren.`
    : 'Prova a cercare un termine o un concetto.';

  attachFavoriteHandlers();
}

searchInput?.addEventListener('input', () => renderDictionary());
clearSearchBtn?.addEventListener('click', () => { searchInput.value=''; renderDictionary(); });

function makeExternalLinks(query){
  const normalized = normalize(query);
  const targeted = targetedQueries[normalized] || `${query} buddismo Nichiren Soka Gakkai site:sgi-italia.org OR site:ilnuovorinascimento.org OR site:buddismoesocieta.org`;
  const google = `https://www.google.com/search?q=${encodeURIComponent(targeted)}`;
  const sgiItalia = `https://www.google.com/search?q=${encodeURIComponent(`${query} site:sgi-italia.org`)}`;
  const rinascimento = `https://www.google.com/search?q=${encodeURIComponent(`${query} site:ilnuovorinascimento.org`)}`;
  const buddismoSocieta = `https://www.google.com/search?q=${encodeURIComponent(`${query} site:buddismoesocieta.org`)}`;
  return {google,sgiItalia,rinascimento,buddismoSocieta,targeted};
}

function runExtendedSearch(){
  const query = (searchInput.value || '').trim();
  if(!query){
    searchStatus.textContent = 'Scrivi prima qualcosa da cercare.';
    return;
  }

  const {glossaryMatches, conceptMatches} = localSearch(query);
  const links = makeExternalLinks(query);

  const nuance = conceptMatches.length || glossaryMatches.length
    ? 'Ho trovato contenuti interni e ti propongo anche link esterni filtrati in chiave Nichiren.'
    : 'Non ho trovato abbastanza contenuti interni: ti propongo link esterni filtrati in chiave Nichiren, non generici.';

  const card = `
    <article class="card">
      <div class="term-title">
        <div>
          <h3>Approfondimento esterno mirato</h3>
          <div class="term-meta">Filtro Nichiren-first</div>
        </div>
      </div>
      <p>${escapeHtml(nuance)}</p>
      <p><strong>Ricerca orientata:</strong> ${escapeHtml(links.targeted)}</p>
      <div class="link-row">
        <a class="inline-link" href="${links.google}" target="_blank" rel="noopener noreferrer">↗ Cerca in fonti SGI italiane</a>
        <a class="inline-link" href="${links.sgiItalia}" target="_blank" rel="noopener noreferrer">↗ SGI Italia</a>
        <a class="inline-link" href="${links.rinascimento}" target="_blank" rel="noopener noreferrer">↗ Il Nuovo Rinascimento</a>
        <a class="inline-link" href="${links.buddismoSocieta}" target="_blank" rel="noopener noreferrer">↗ Buddismo e Società</a>
      </div>
      <p class="muted">Esempio: se cerchi “tre veleni”, i link puntano a fonti italiane SGI/Soka Gakkai e non al significato comune di “veleno”.</p>
    </article>`;
  dictionaryList.innerHTML = card + dictionaryList.innerHTML;
  searchStatus.textContent = 'Aggiunti link esterni filtrati sul contesto buddista Nichiren.';
}

extendedSearchBtn?.addEventListener('click', runExtendedSearch);
searchInput?.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){ e.preventDefault(); runExtendedSearch(); }
});


function getDailyStudyItem(){
  const pool = conceptArticles.length ? conceptArticles : glossary.map(x => ({title:x.term, category:x.category, summary:x.simple, deep:x.deep, practical:x.example}));
  const dayIndex = Math.floor(new Date().setHours(0,0,0,0) / 86400000);
  return pool[dayIndex % pool.length];
}
function openStudyItem(item){
  if(!item) return;
  switchView('dictionary');
  if(searchInput){
    searchInput.value = item.title || item.term || '';
    renderDictionary(searchInput.value);
  }
}
function saveDailyStudyItem(){
  const item = getDailyStudyItem();
  addEvolvedFavorite('concepts', {
    title: item.title || item.term,
    category: item.category || 'Studio del giorno',
    text: item.summary || item.simple || '',
    detail: item.deep || '',
    id: `daily-${makeFavoriteId(item.title || item.term)}`
  });
}
function renderDailyStudy(){
  const item = getDailyStudyItem();
  if(!item) return;
  const title = item.title || item.term;
  const category = item.category || 'Studio del giorno';
  const summary = item.summary || item.simple || '';
  if(dailyStudyTitle) dailyStudyTitle.textContent = title;
  if(dailyStudyCategory) dailyStudyCategory.textContent = `Studio del giorno · ${category}`;
  if(dailyStudySummary) dailyStudySummary.textContent = summary;
  if(studyDailyTitle) studyDailyTitle.textContent = title;
  if(studyDailyCategory) studyDailyCategory.textContent = `Studio del giorno · ${category}`;
  if(studyDailySummary) studyDailySummary.textContent = `${summary} ${item.practical ? 'Nella pratica: ' + item.practical : ''}`;
}

function renderStudy(){
  if(!studyCards) return;
  studyCards.innerHTML = studyTopics.map((item, index) => `
    <article class="card">
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
      <button class="ghost" data-save-phrase="${index}">☆ Salva frase</button>
    </article>
  `).join('');
  studyCards.querySelectorAll('[data-save-phrase]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = studyTopics[Number(btn.dataset.savePhrase)];
      if(!item) return;
      addEvolvedFavorite('phrases', {
        title: item.title,
        text: item.text,
        id: `phrase-${makeFavoriteId(item.title + item.text)}`
      });
    });
  });
}

function renderEvolvedFavorites(){
  const data = getEvolvedFavorites();
  const renderList = (items, type, empty) => {
    if(!items || !items.length) return `<p class="muted tiny-empty">${empty}</p>`;
    return items.map(item => `
      <article class="mini-fav-card">
        <div class="term-meta">${escapeHtml(item.category || item.section || item.date || '')}</div>
        <strong>${escapeHtml(item.title || item.romaji || 'Preferito')}</strong>
        <p>${escapeHtml(item.text || item.italian || item.detail || '')}</p>
        ${item.romaji ? `<p class="sutra-romaji tiny-romaji">${escapeHtml(item.romaji)}</p>` : ''}
        <button class="ghost tiny-btn" data-delete-fav-type="${type}" data-delete-fav-id="${escapeHtml(item.id)}">Elimina</button>
      </article>`).join('');
  };
  if(favoriteConceptsList) favoriteConceptsList.innerHTML = renderList(data.concepts, 'concepts', 'Nessun concetto salvato.');
  if(favoritePhrasesList) favoritePhrasesList.innerHTML = renderList(data.phrases, 'phrases', 'Nessuna frase salvata.');
  if(favoriteGongyoPointsList) favoriteGongyoPointsList.innerHTML = renderList(data.gongyoPoints, 'gongyoPoints', 'Nessun punto del Gongyo salvato.');
  document.querySelectorAll('[data-delete-fav-type]').forEach(btn => {
    btn.addEventListener('click', () => removeEvolvedFavorite(btn.dataset.deleteFavType, btn.dataset.deleteFavId));
  });
}


function getBenefitsArchive(){
  try { return JSON.parse(localStorage.getItem(benefitsArchiveKey) || '[]'); }
  catch(e){ return []; }
}
function setBenefitsArchive(items){
  localStorage.setItem(benefitsArchiveKey, JSON.stringify(items));
}
function addBenefitArchiveEntry(){
  const intention = (benefitArchiveIntention?.value || '').trim();
  const benefit = (benefitArchiveBenefit?.value || '').trim();
  const difficulty = (benefitArchiveDifficulty?.value || '').trim();
  if(!intention && !benefit && !difficulty){
    alert('Scrivi almeno un’intenzione, un beneficio o una difficoltà trasformata.');
    return;
  }
  const items = getBenefitsArchive();
  items.unshift({
    id: `benefit-${Date.now()}`,
    date: new Date().toLocaleString('it-IT'),
    intention,
    benefit,
    difficulty
  });
  setBenefitsArchive(items.slice(0,200));
  if(benefitArchiveIntention) benefitArchiveIntention.value = '';
  if(benefitArchiveBenefit) benefitArchiveBenefit.value = '';
  if(benefitArchiveDifficulty) benefitArchiveDifficulty.value = '';
  renderBenefitsArchive();
}
function prefillBenefitArchiveFromPractice(){
  if(benefitArchiveIntention && intentionInput) benefitArchiveIntention.value = intentionInput.value || '';
  if(benefitArchiveBenefit && benefitInput) benefitArchiveBenefit.value = benefitInput.value || '';
  switchView('journal');
}
function deleteBenefitArchiveEntry(id){
  setBenefitsArchive(getBenefitsArchive().filter(item => item.id !== id));
  renderBenefitsArchive();
}
function renderBenefitsArchive(){
  if(!benefitsArchiveList) return;
  const query = normalize(benefitSearchInput?.value || '');
  const items = getBenefitsArchive().filter(item => {
    if(!query) return true;
    return normalize(`${item.date} ${item.intention} ${item.benefit} ${item.difficulty}`).includes(query);
  });
  benefitsArchiveList.innerHTML = items.map(item => `
    <article class="card benefit-entry-card">
      <div class="entry-date">${escapeHtml(item.date)}</div>
      ${item.intention ? `<p><strong>Intenzione:</strong> ${escapeHtml(item.intention)}</p>` : ''}
      ${item.benefit ? `<p><strong>Beneficio / intuizione:</strong> ${escapeHtml(item.benefit)}</p>` : ''}
      ${item.difficulty ? `<p><strong>Difficoltà trasformata:</strong> ${escapeHtml(item.difficulty)}</p>` : ''}
      <button class="ghost tiny-btn" data-delete-benefit="${escapeHtml(item.id)}">Elimina</button>
    </article>
  `).join('') || '<div class="card"><p>Nessun beneficio salvato o nessun risultato per la ricerca.</p></div>';
  document.querySelectorAll('[data-delete-benefit]').forEach(btn => {
    btn.addEventListener('click', () => deleteBenefitArchiveEntry(btn.dataset.deleteBenefit));
  });
}

function renderJournal(){
  if(!journalList) return;
  const entries = getJournal();
  journalList.innerHTML = entries.map((entry, index) => `
    <article class="card">
      <div class="entry-date">${escapeHtml(entry.type)} · ${escapeHtml(entry.date)}</div>
      <p>${escapeHtml(entry.text)}</p>
      <button class="ghost" data-delete-entry="${index}">Elimina</button>
    </article>`).join('') || '<div class="card"><p>Ancora nessuna nota salvata.</p></div>';

  document.querySelectorAll('[data-delete-entry]').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = getJournal();
      list.splice(Number(btn.dataset.deleteEntry), 1);
      setJournal(list);
      renderJournal();
    });
  });
}


const intentionInput = document.getElementById('intentionInput');
const benefitInput = document.getElementById('benefitInput');
const savePracticeNote = document.getElementById('savePracticeNote');
const journalText = document.getElementById('journalText');
const saveJournalEntry = document.getElementById('saveJournalEntry');
const timerDisplay = document.getElementById('timerDisplay');
const timerProgress = document.getElementById('timerProgress');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const resetTimerBtn = document.getElementById('resetTimer');
const startImmersiveBtn = document.getElementById('startImmersive');
const immersiveOverlay = document.getElementById('immersiveOverlay');
const closeImmersiveBtn = document.getElementById('closeImmersive');
const immersiveTimer = document.getElementById('immersiveTimer');
const immersiveStartPauseBtn = document.getElementById('immersiveStartPause');
const immersiveBellBtn = document.getElementById('immersiveBell');
const immersiveResetBtn = document.getElementById('immersiveReset');
const immersiveIntention = document.getElementById('immersiveIntention');
const immersiveProgress = document.getElementById('immersiveProgress');
const breathOrb = document.getElementById('breathOrb');
const daimokuAudioEl = document.getElementById('daimokuAudio');
const gongyoAudioEl = document.getElementById('gongyoAudio');
const daimokuAudioToggleBtn = document.getElementById('daimokuAudioToggle');
const gongyoTextModeBtn = document.getElementById('gongyoTextMode');
const gongyoListenModeBtn = document.getElementById('gongyoListenMode');
const gongyoAudioToggleBtn = document.getElementById('gongyoAudioToggle');
const gongyoStopAudioBtn = document.getElementById('gongyoStopAudio');
const gongyoRestartBtn = document.getElementById('gongyoRestartBtn');
const gongyoSaveBookmarkBtn = document.getElementById('gongyoSaveBookmark');
const gongyoResumeBookmarkBtn = document.getElementById('gongyoResumeBookmark');
const gongyoBookmarkInfo = document.getElementById('gongyoBookmarkInfo');
const homeResumeGongyoBtn = document.getElementById('homeResumeGongyo');
const bellTripleBtn = document.getElementById('bellTripleBtn');
const bellLoopBtn = document.getElementById('bellLoopBtn');
const gongyoListenPanel = document.getElementById('gongyoListenPanel');
const morningRoutineBtn = document.getElementById('morningRoutineBtn');
const eveningRoutineBtn = document.getElementById('eveningRoutineBtn');
const routineGongyoPanel = document.getElementById('routineGongyoPanel');
const routineGongyoTitle = document.getElementById('routineGongyoTitle');
const routineGongyoText = document.getElementById('routineGongyoText');
const routineGoDaimokuBtn = document.getElementById('routineGoDaimoku');
const statsBox = document.getElementById('statsBox');
const practiceAssistant = document.getElementById('practiceAssistant');
const assistantHomeCard = document.getElementById('assistantHomeCard');
const homeMoodLabel = document.getElementById('homeMoodLabel');
const homeMoodTitle = document.getElementById('homeMoodTitle');
const assistantDaimokuBtn = document.getElementById('assistantDaimokuBtn');
const assistantStudyBtn = document.getElementById('assistantStudyBtn');
const resetStatsBtn = document.getElementById('resetStatsBtn');
const morningMinutesSelect = document.getElementById('morningMinutesSelect');
const eveningMinutesSelect = document.getElementById('eveningMinutesSelect');
const reminderTimeInput = document.getElementById('reminderTimeInput');
const practiceReminderToggle = document.getElementById('practiceReminderToggle');
const requestNotificationBtn = document.getElementById('requestNotificationBtn');
const daimokuVoiceEnabledToggle = document.getElementById('daimokuVoiceEnabled');
const gongyoVoiceEnabledToggle = document.getElementById('gongyoVoiceEnabled');

const completeSessionBtn = document.getElementById('completeSessionBtn');
const cancelCompleteSessionBtn = document.getElementById('cancelCompleteSessionBtn');
const completeSessionStatus = document.getElementById('completeSessionStatus');
const completeSessionGongyoPanel = document.getElementById('completeSessionGongyoPanel');
const completeSessionGoDaimoku = document.getElementById('completeSessionGoDaimoku');
const completeSessionCancelFromGongyo = document.getElementById('completeSessionCancelFromGongyo');
const completeSessionDaimokuPanel = document.getElementById('completeSessionDaimokuPanel');
const completeSessionDaimokuText = document.getElementById('completeSessionDaimokuText');
const completeSessionStartDaimoku = document.getElementById('completeSessionStartDaimoku');
const completeSessionSkipToPrayers = document.getElementById('completeSessionSkipToPrayers');
const completeSessionPrayersPanel = document.getElementById('completeSessionPrayersPanel');
const completeSessionFinish = document.getElementById('completeSessionFinish');
const completeSessionBackDaimoku = document.getElementById('completeSessionBackDaimoku');

const benefitArchiveIntention = document.getElementById('benefitArchiveIntention');
const benefitArchiveBenefit = document.getElementById('benefitArchiveBenefit');
const benefitArchiveDifficulty = document.getElementById('benefitArchiveDifficulty');
const saveBenefitArchiveBtn = document.getElementById('saveBenefitArchive');
const prefillBenefitArchiveBtn = document.getElementById('prefillBenefitArchive');
const benefitSearchInput = document.getElementById('benefitSearchInput');
const benefitsArchiveList = document.getElementById('benefitsArchiveList');

const daimokuBellIntervalKey = 'pv11DaimokuBellInterval';
const daimokuFinalTripleBellKey = 'pv11DaimokuFinalTripleBell';
const routineMorningMinutesKey = 'pv12MorningRoutineMinutes';
const routineEveningMinutesKey = 'pv12EveningRoutineMinutes';
const activeRoutineKey = 'pv12ActiveRoutine';
const statsKey = 'pv12PracticeStats';
const reminderEnabledKey = 'pv12ReminderEnabled';
const reminderTimeKey = 'pv12ReminderTime';
const completeSessionKey = 'pv12CompleteSession';
const benefitsArchiveKey = 'pv12BenefitsArchive';

let durationSeconds = 10 * 60;
let remainingSeconds = durationSeconds;
let timerInterval = null;
let elapsedSeconds = 0;
let timerFinishing = false;
let daimokuVoiceEnabled = localStorage.getItem(daimokuVoiceEnabledKey) !== '0';
let gongyoVoiceEnabled = localStorage.getItem(gongyoVoiceEnabledKey) !== '0';
let gongyoListenMode = localStorage.getItem(gongyoListenModeKey) === '1';


function getRoutineMinutes(type){
  const key = type === 'morning' ? routineMorningMinutesKey : routineEveningMinutesKey;
  const fallback = type === 'morning' ? 10 : 5;
  const value = Number(localStorage.getItem(key) || fallback);
  return Number.isFinite(value) && value > 0 ? value : fallback;
}


function getStats(){
  try{
    return JSON.parse(localStorage.getItem(statsKey) || '{"minutes":0,"sessions":0,"streak":0,"lastDate":null}');
  }catch(e){
    return {minutes:0,sessions:0,streak:0,lastDate:null};
  }
}
function saveStats(stats){ localStorage.setItem(statsKey, JSON.stringify(stats)); }
function dateOnlyString(date=new Date()){
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}
function daysBetween(a,b){
  const da = new Date(`${a}T00:00:00`);
  const db = new Date(`${b}T00:00:00`);
  return Math.round((db - da) / 86400000);
}

function recordDaimokuSession(minutes){
  const stats = getStats();
  const today = dateOnlyString();
  const minutesToAdd = Math.max(0, Number(minutes || 0));

  if(!stats.daily) stats.daily = {};

  if(stats.lastDate !== today){
    stats.todayMinutes = 0;
  }

  stats.minutes = Number(stats.minutes || 0) + minutesToAdd;
  stats.todayMinutes = Number(stats.todayMinutes || 0) + minutesToAdd;
  stats.daily[today] = Number(stats.daily[today] || 0) + minutesToAdd;
  stats.sessions = Number(stats.sessions || 0) + 1;

  if(stats.lastDate === today){
    stats.streak = Math.max(1, Number(stats.streak || 1));
  }else if(stats.lastDate && daysBetween(stats.lastDate, today) === 1){
    stats.streak = Number(stats.streak || 0) + 1;
  }else{
    stats.streak = 1;
  }

  stats.lastDate = today;

  saveStats(stats);
  renderStats();
  updateDailyBadge();
  renderDaimokuChart();
  renderPracticeAssistant();
}

function renderStats(){
  if(!statsBox) return;
  const s = getStats();

  statsBox.innerHTML = `
    <div class="stat-tile"><span>Minuti totali</span><strong>${Number(s.minutes || 0)}</strong></div>
    <div class="stat-tile"><span>Sessioni</span><strong>${Number(s.sessions || 0)}</strong></div>
    <div class="stat-tile"><span>Streak</span><strong>${Number(s.streak || 0)}</strong></div>
  `;
}

function getBenefitsTextForAssistant(){
  try {
    const items = getBenefitsArchive ? getBenefitsArchive() : [];
    return (items || []).slice(0,5).map(item => [item.intention, item.benefit, item.difficulty, item.challenge, item.date].filter(Boolean).join(' ')).join(' ');
  } catch(e) { return ''; }
}
function getRecentJournalTextForAssistant(){
  const journal = getJournal ? getJournal() : [];
  const journalText = (journal || []).slice(0,6).map(entry => entry.text || '').join(' ');
  return normalize(journalText + ' ' + getBenefitsTextForAssistant());
}
function detectAssistantTheme(){
  const text = getRecentJournalTextForAssistant();
  if(!text) return 'none';
  const hasAny = (words) => words.some(w => text.includes(normalize(w)));
  if(hasAny(['ansia','paura','stress','tensione','preoccupazione','angoscia','agitazione'])) return 'emotional';
  if(hasAny(['blocco','bloccato','bloccata','confusione','confuso','confusa','non capisco','incerto','incertezza'])) return 'blocked';
  if(hasAny(['rabbia','arrabbiato','arrabbiata','risentimento','collera','nervoso','nervosa'])) return 'anger';
  if(hasAny(['relazione','famiglia','figlia','conflitto','litigio','collega','partner','rapporto'])) return 'relations';
  if(hasAny(['gratitudine','beneficio','vittoria','risultato','felice','sollievo','grazie'])) return 'gratitude';
  if(hasAny(['studio','dubbio','domanda','comprendere','capire','significato'])) return 'study';
  if(hasAny(['karma','trasformare','difficolta','difficoltà','problema','sofferenza'])) return 'karma';
  return 'neutral';
}
function getStudySuggestionForTheme(theme){
  const suggestions = {
    emotional:{title:'Oscurità fondamentale', reason:'può aiutarti a leggere paura, ansia o tensione come una condizione trasformabile, non come qualcosa che ti definisce.', intention:'trasformare la tensione in chiarezza e coraggio'},
    blocked:{title:'Ichinen sanzen', reason:'è utile quando ti senti bloccato: ricorda che ogni istante contiene possibilità nuove e non sei chiuso nel punto in cui ti trovi.', intention:'aprire una possibilità concreta dentro questo momento'},
    anger:{title:'Tre veleni', reason:'collega rabbia, attaccamento e oscurità a una trasformazione pratica attraverso daimoku e azione consapevole.', intention:'trasformare la rabbia in determinazione e saggezza'},
    relations:{title:'Esho funi', reason:'ti aiuta a guardare le relazioni come uno spazio dove cambiamento interiore e ambiente si influenzano a vicenda.', intention:'creare valore nella relazione partendo dal mio stato vitale'},
    gratitude:{title:'Beneficio visibile e invisibile', reason:'aiuta a riconoscere anche i cambiamenti interiori meno evidenti, non solo i risultati esteriori.', intention:'riconoscere e rafforzare i benefici visibili e invisibili'},
    study:{title:'Fede, pratica e studio', reason:'riporta equilibrio tra comprendere, recitare e agire: lo studio diventa esperienza viva.', intention:'unire comprensione e azione concreta'},
    karma:{title:'Mutua possessione dei dieci mondi', reason:'ricorda che anche dentro la difficoltà esiste già la possibilità di far emergere Buddità.', intention:'trasformare questa difficoltà in crescita'},
    neutral:{title:'Fede, pratica e studio', reason:'è un buon punto di partenza per mantenere la pratica equilibrata e quotidiana.', intention:'rafforzare la continuità della mia pratica'},
    none:{title:'Rivoluzione umana', reason:'inizia da qui: la pratica quotidiana diventa cambiamento reale quando la colleghi a una piccola azione concreta.', intention:'fare un passo concreto nella mia rivoluzione umana'}
  };
  return suggestions[theme] || suggestions.neutral;
}
function findStudyItemByTitle(title){
  const n = normalize(title);
  return conceptArticles.find(item => normalize(item.title) === n) || glossary.find(item => normalize(item.term) === n) || null;
}
function openAssistantStudySuggestion(title){
  const item = findStudyItemByTitle(title);
  switchView('dictionary');
  if(searchInput){
    searchInput.value = item ? (item.title || item.term) : title;
    renderDictionary(searchInput.value);
  }
}
function startAssistantSuggestedDaimoku(intention){
  switchView('practice');
  if(intentionInput){
    intentionInput.value = intention || '';
    localStorage.setItem(intentionKey, intentionInput.value);
    window.setTimeout(() => { try { intentionInput.focus(); } catch(e){} }, 150);
  }
  window.setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
}
function renderPracticeAssistant(){
  if(!practiceAssistant) return;
  const s = getStats();
  const today = dateOnlyString();
  const sessions = Number(s.sessions || 0);
  const streak = Number(s.streak || 0);
  const minutes = Number(s.minutes || 0);
  const lastDate = s.lastDate || null;
  const theme = detectAssistantTheme();
  const suggestion = getStudySuggestionForTheme(theme);
  let message = '';
  if(!lastDate || sessions === 0) message = 'Inizia oggi con pochi minuti di daimoku: non serve molto tempo, serve una decisione chiara.';
  else if(lastDate !== today) message = 'Oggi non hai ancora registrato Daimoku. Anche una sessione breve può rimettere al centro la tua giornata.';
  else message = 'Hai già praticato oggi. Porta questa energia in un’azione concreta, anche piccola.';
  const details = [];
  if(streak >= 2) details.push('🔥 Continua: sei a ' + streak + ' giorni consecutivi.');
  if(minutes > 0) details.push('🧘 Minuti totali di Daimoku: ' + minutes + '.');
  if(sessions > 0) details.push('🔁 Sessioni completate: ' + sessions + '.');
  const studyHtml = '<div class="assistant-study-suggestion"><strong>Studio suggerito: ' + escapeHtml(suggestion.title) + '</strong><br><span>' + escapeHtml(suggestion.reason) + '</span><div class="link-row assistant-actions-row"><button class="secondary" id="assistantOpenSuggestion">Leggi ora</button><button class="ghost" id="assistantUseIntention">Usa come intenzione Daimoku</button></div></div>';
  const moodClass = (!lastDate || sessions === 0 || lastDate !== today) ? 'mood-pending' : (streak >= 2 ? 'mood-streak' : 'mood-today');
  const intenseThemes = ['emotional','blocked','anger','relations','karma'];
  const finalMoodClass = intenseThemes.includes(theme) ? 'mood-intense' : moodClass;
  if(assistantHomeCard){
    assistantHomeCard.classList.remove('mood-neutral','mood-pending','mood-today','mood-streak','mood-intense');
    assistantHomeCard.classList.add(finalMoodClass);
  }
  if(homeMoodLabel){
    homeMoodLabel.textContent = theme === 'none' ? 'Assistente di pratica' : 'Assistente di pratica · suggerimento personalizzato';
  }
  if(homeMoodTitle){
    homeMoodTitle.textContent = (!lastDate || sessions === 0 || lastDate !== today) ? 'Il tuo passo di oggi' : 'Continua la tua pratica';
  }
  practiceAssistant.innerHTML = message + (details.length ? '<br>' + details.join('<br>') : '') + studyHtml;
  document.getElementById('assistantOpenSuggestion')?.addEventListener('click', () => openAssistantStudySuggestion(suggestion.title));
  document.getElementById('assistantUseIntention')?.addEventListener('click', () => startAssistantSuggestedDaimoku(suggestion.intention));
}
function updateRoutinePanel(){
  if(!routineGongyoPanel) return;
  const active = JSON.parse(localStorage.getItem(activeRoutineKey) || 'null');
  routineGongyoPanel.classList.toggle('hidden', !active);
  if(!active) return;
  const label = active.type === 'morning' ? 'Pratica del mattino' : 'Pratica della sera';
  if(routineGongyoTitle) routineGongyoTitle.textContent = label;
  if(routineGongyoText) routineGongyoText.textContent = `Completa il Gongyo, poi passa al Daimoku preimpostato di ${active.minutes} minuti.`;
}
function startRoutine(type){
  const minutes = getRoutineMinutes(type);
  localStorage.setItem(activeRoutineKey, JSON.stringify({type, minutes, startedAt:new Date().toISOString()}));
  updateRoutinePanel();
  switchView('gongyo');
  window.setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
}
function continueRoutineToDaimoku(){
  const active = JSON.parse(localStorage.getItem(activeRoutineKey) || 'null');
  if(!active) return;
  switchView('practice');
  resetTimer(Number(active.minutes || 10) * 60);
  const label = active.type === 'morning' ? 'Routine mattina' : 'Routine sera';
  if(intentionInput && !intentionInput.value.trim()) intentionInput.value = label;
  localStorage.removeItem(activeRoutineKey);
  updateRoutinePanel();
  window.setTimeout(() => startTimer(), 350);
}

function getCompleteSession(){
  try { return JSON.parse(localStorage.getItem(completeSessionKey) || 'null'); }
  catch(e){ return null; }
}
function setCompleteSession(session){
  if(session) localStorage.setItem(completeSessionKey, JSON.stringify(session));
  else localStorage.removeItem(completeSessionKey);
  renderCompleteSession();
}
function startCompleteSession(){
  const minutes = Number(localStorage.getItem(routineMorningMinutesKey) || 10);
  setCompleteSession({step:'gongyo', minutes, startedAt:new Date().toISOString()});
  switchView('gongyo');
  window.setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
}
function cancelCompleteSession(){
  setCompleteSession(null);
  alert('Sessione completa annullata.');
}
function goCompleteSessionDaimoku(){
  const active = getCompleteSession();
  if(!active) return;
  active.step = 'daimoku';
  setCompleteSession(active);
  switchView('practice');
  resetTimer(Number(active.minutes || 10) * 60);
  if(intentionInput && !intentionInput.value.trim()) intentionInput.value = 'Sessione completa';
  window.setTimeout(() => window.scrollTo({top:0, behavior:'smooth'}), 80);
}
function startCompleteSessionDaimoku(){
  const active = getCompleteSession();
  if(active?.step !== 'daimoku') return;
  resetTimer(Number(active.minutes || 10) * 60);
  startTimer();
}
function goCompleteSessionPrayers(){
  const active = getCompleteSession();
  if(!active) return;
  active.step = 'prayers';
  setCompleteSession(active);
  switchView('gongyo');
  window.setTimeout(() => {
    completeSessionPrayersPanel?.scrollIntoView({behavior:'smooth', block:'center'});
  }, 150);
}
function finishCompleteSession(){
  const active = getCompleteSession();
  setCompleteSession(null);
  alert('Sessione completa conclusa. Puoi annotare il beneficio o l’intuizione nell’Archivio benefici.');
  switchView('journal');
}
function renderCompleteSession(){
  const active = getCompleteSession();
  completeSessionStatus?.classList.toggle('hidden', false);
  if(completeSessionStatus){
    completeSessionStatus.textContent = active
      ? `Sessione completa attiva · step: ${active.step === 'gongyo' ? 'Gongyo' : active.step === 'daimoku' ? 'Daimoku' : 'Preghiere silenziose'} · Daimoku ${active.minutes || 10} min`
      : 'Nessuna sessione completa attiva.';
  }
  cancelCompleteSessionBtn?.classList.toggle('hidden', !active);
  completeSessionGongyoPanel?.classList.toggle('hidden', !(active?.step === 'gongyo'));
  completeSessionDaimokuPanel?.classList.toggle('hidden', !(active?.step === 'daimoku'));
  completeSessionPrayersPanel?.classList.toggle('hidden', !(active?.step === 'prayers'));
  if(completeSessionDaimokuText && active?.step === 'daimoku'){
    completeSessionDaimokuText.textContent = `Avvia ${active.minutes || 10} minuti di Daimoku. Al termine passerai alle preghiere silenziose.`;
  }
}

let reminderTimeout = null;
function schedulePracticeReminder(){
  window.clearTimeout(reminderTimeout);
  const enabled = localStorage.getItem(reminderEnabledKey) === '1';
  if(!enabled) return;
  const time = localStorage.getItem(reminderTimeKey) || '08:00';
  const [h,m] = time.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(Number.isFinite(h)?h:8, Number.isFinite(m)?m:0, 0, 0);
  if(target <= now) target.setDate(target.getDate()+1);
  const delay = target - now;
  reminderTimeout = window.setTimeout(async () => {
    if('Notification' in window && Notification.permission === 'granted'){
      try{ new Notification('Pratica Viva', { body:'È il momento della tua pratica quotidiana.' }); }catch(e){}
    }else{
      alert('Promemoria Pratica Viva: è il momento della tua pratica quotidiana.');
    }
    schedulePracticeReminder();
  }, delay);
}
async function requestPracticeNotifications(){
  if(!('Notification' in window)){
    alert('Questo browser non supporta le notifiche.');
    return;
  }
  const result = await Notification.requestPermission();
  alert(result === 'granted' ? 'Notifiche abilitate.' : 'Notifiche non abilitate.');
}
function getDaimokuBellIntervalSeconds(){
  return Number(localStorage.getItem(daimokuBellIntervalKey) || 0) * 60;
}
function shouldPlayFinalTripleBell(){
  return localStorage.getItem(daimokuFinalTripleBellKey) !== '0';
}

function setupAudioElementForBackground(audio){
  if(!audio) return;
  try{
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');
    audio.preload = 'auto';
  }catch(e){}
}

function setPracticeMediaSession(type){
  if(!('mediaSession' in navigator)) return;
  const isDaimoku = type === 'daimoku';
  try{
    navigator.mediaSession.metadata = new MediaMetadata({
      title: isDaimoku ? 'Daimoku' : 'Gongyo',
      artist: 'Pratica Viva',
      album: 'Pratica quotidiana',
      artwork: [
        { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
      ]
    });
    navigator.mediaSession.setActionHandler('play', async () => {
      try{ if(isDaimoku) await startDaimokuAudio(); else await toggleGongyoAudio(true); }catch(e){}
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      try{ if(isDaimoku) stopDaimokuAudio(false); else stopGongyoAudio(false); }catch(e){}
    });
    navigator.mediaSession.setActionHandler('stop', () => {
      try{ if(isDaimoku) stopDaimokuAudio(true); else stopGongyoAudio(true); }catch(e){}
    });
  }catch(e){}
}

function updateVoiceButtons(){
  if(daimokuAudioToggleBtn) daimokuAudioToggleBtn.textContent = daimokuVoiceEnabled ? 'Voce daimoku: ON' : 'Voce daimoku: OFF';
  if(gongyoVoiceEnabledToggle) gongyoVoiceEnabledToggle.textContent = gongyoVoiceEnabled ? 'Voce gongyo: ON' : 'Voce gongyo: OFF';
  document.getElementById('gongyo')?.classList.toggle('guided-gongyo', gongyoVoiceEnabled);
  document.getElementById('gongyoGuidedHint')?.classList.toggle('hidden', !gongyoVoiceEnabled);

  // Logica definitiva Gongyo:
  // - Audio Gongyo ON  => scorrimento manuale, niente auto-scroll.
  // - Audio Gongyo OFF => manuale o automatico, con velocità impostata dal cursore.
  if(gongyoVoiceEnabled){
    gongyoScrollMode = 'manual';
    localStorage.setItem(gongyoScrollKey, 'manual');
    if(gongyoRunning) stopGongyoAuto();
  }

  gongyoTextModeBtn?.classList.toggle('active', !gongyoListenMode);
  gongyoListenModeBtn?.classList.toggle('active', gongyoListenMode);
  if(gongyoListenPanel) gongyoListenPanel.classList.toggle('hidden', !gongyoListenMode);
  document.querySelectorAll('.sutra-card, .chant-card').forEach(el => el.classList.toggle('sutra-wrapper-hidden', gongyoListenMode));
  if(gongyoAudioToggleBtn) gongyoAudioToggleBtn.textContent = gongyoAudioEl && !gongyoAudioEl.paused ? '❚❚ Pausa audio' : '▶ Avvia audio';

}
function stopDaimokuAudio(reset=true){
  if(!daimokuAudioEl) return;
  try{
    daimokuAudioEl.pause();
    if(reset) daimokuAudioEl.currentTime = 0;
    if('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  }catch(e){}
}
async function startDaimokuAudio(){
  if(!daimokuAudioEl || !daimokuVoiceEnabled) return;
  try{
    setupAudioElementForBackground(daimokuAudioEl);
    setPracticeMediaSession('daimoku');
    daimokuAudioEl.loop = true;
    if(daimokuAudioEl.paused){ await daimokuAudioEl.play(); }
    if('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  }catch(e){}
}
function stopGongyoAudio(reset=true){
  if(!gongyoAudioEl) return;
  try{
    gongyoAudioEl.pause();
    if(reset) gongyoAudioEl.currentTime = 0;
    if('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  }catch(e){}
  updateVoiceButtons();
}

function getGongyoBookmark(){
  try { return JSON.parse(localStorage.getItem(gongyoBookmarkKey) || 'null'); }
  catch(e){ return null; }
}
function setGongyoBookmark(data){
  localStorage.setItem(gongyoBookmarkKey, JSON.stringify(data));
  updateGongyoBookmarkInfo();
}
function updateGongyoBookmarkInfo(){
  const saved = getGongyoBookmark();
  if(!gongyoBookmarkInfo) return;
  if(!saved){
    gongyoBookmarkInfo.textContent = 'Nessun segnalibro salvato.';
    return;
  }
  const date = saved.date ? ` · ${saved.date}` : '';
  const section = saved.section === 'juryo' ? 'Capitolo 16' : 'Capitolo 2';
  gongyoBookmarkInfo.textContent = `Segnalibro: ${section}${date}`;
}
function currentVisibleSutraSection(){
  const hRect = hobenContainer?.getBoundingClientRect();
  const jRect = juryoContainer?.getBoundingClientRect();
  if(!hRect || !jRect) return 'hoben';
  const hDistance = Math.abs(hRect.top - 170);
  const jDistance = Math.abs(jRect.top - 170);
  return jDistance < hDistance ? 'juryo' : 'hoben';
}
function saveGongyoBookmark(){
  const section = currentVisibleSutraSection();
  const data = {
    section,
    hobenScroll: hobenContainer?.scrollTop || 0,
    juryoScroll: juryoContainer?.scrollTop || 0,
    audioTime: gongyoAudioEl ? gongyoAudioEl.currentTime || 0 : 0,
    date: new Date().toLocaleString('it-IT', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' })
  };
  setGongyoBookmark(data);
  showGongyoStatus('Segnalibro salvato. Potrai riprendere da qui.');
}
function resumeGongyoBookmark(){
  const saved = getGongyoBookmark();
  if(!saved){
    showGongyoStatus('Nessun segnalibro salvato.');
    return;
  }
  stopGongyoAuto();
  switchView('gongyo');
  setTimeout(() => {
    if(hobenContainer) hobenContainer.scrollTop = saved.hobenScroll || 0;
    if(juryoContainer) juryoContainer.scrollTop = saved.juryoScroll || 0;
    const target = saved.section === 'juryo' ? juryoContainer : hobenContainer;
    target?.scrollIntoView({behavior:'smooth', block:'center'});
    if(gongyoAudioEl && typeof saved.audioTime === 'number'){
      try { gongyoAudioEl.currentTime = saved.audioTime; } catch(e){}
    }
    showGongyoStatus('Segnalibro ripristinato. Premi Play se vuoi riprendere l’audio.');
  }, 120);
}

function restartGongyoPractice(){
  stopGongyoAuto();
  stopGongyoAudio(true);
  clearGongyoHighlights();
  activateRepeatNote(false);
  hobenContainer?.scrollTo({top:0, behavior:'smooth'});
  juryoContainer?.scrollTo({top:0, behavior:'smooth'});
  window.scrollTo({top:0, behavior:'smooth'});
  showGongyoStatus('Gongyo riportato all’inizio.');
}
async function toggleGongyoAudio(forcePlay=false){
  if(!gongyoAudioEl || !gongyoVoiceEnabled){ updateVoiceButtons(); return; }
  try{
    setupAudioElementForBackground(gongyoAudioEl);
    setPracticeMediaSession('gongyo');
    if(forcePlay || gongyoAudioEl.paused){
      await gongyoAudioEl.play();
      if('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
    } else {
      gongyoAudioEl.pause();
      if('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
    }
  }catch(e){}
  updateVoiceButtons();
}

function updateTimerDisplay(){
  const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
  const seconds = (remainingSeconds % 60).toString().padStart(2, '0');
  const value = `${minutes}:${seconds}`;
  timerDisplay.textContent = value;
  if(immersiveTimer) immersiveTimer.textContent = value;
  if(immersiveStartPauseBtn) immersiveStartPauseBtn.textContent = timerInterval ? 'Pausa' : 'Avvia';
  if(breathOrb) breathOrb.classList.toggle('paused', !timerInterval);
  const progress = durationSeconds > 0 ? ((durationSeconds - remainingSeconds) / durationSeconds) * 100 : 0;
  if(timerProgress) timerProgress.style.width = `${Math.max(0, Math.min(100, progress))}%`;
  if(immersiveProgress) immersiveProgress.style.setProperty('--pv-progress', `${Math.max(0, Math.min(100, progress))}%`);
}
function resetTimer(newDuration=durationSeconds){
  clearInterval(timerInterval); timerInterval = null;
  stopDaimokuAudio(true);
  durationSeconds = newDuration; remainingSeconds = newDuration; elapsedSeconds = 0; timerFinishing = false; updateTimerDisplay();
}
async function playBellNTimes(times=1, gapMs=1600){
  for(let i=0;i<times;i+=1){
    await playBell();
    if(i < times - 1){
      await new Promise(resolve => setTimeout(resolve, gapMs));
    }
  }
}
async function finishDaimokuSession(){
  if(timerFinishing) return;
  timerFinishing = true;
  clearInterval(timerInterval); timerInterval = null;
  stopDaimokuAudio(true);
  remainingSeconds = 0; updateTimerDisplay();
  if(shouldPlayFinalTripleBell()){
    await new Promise(resolve => setTimeout(resolve, 1000));
    await playBellNTimes(3, 1700);
  }
  const minutesDone = Math.max(1, Math.round(elapsedSeconds / 60));
  recordDaimokuSession(minutesDone);
  const activeCompleteSession = getCompleteSession();
  timerFinishing = false;
  if(activeCompleteSession?.step === 'daimoku'){
    showDaimokuCompletionMessage('Daimoku della sessione completa concluso', 'Ora passa alle preghiere silenziose.');
    goCompleteSessionPrayers();
  } else {
    showDaimokuCompletionMessage('Sessione completata', 'Hai creato una causa di valore. Se vuoi, annota ora ciò che hai percepito.');
  }
}

function showDaimokuCompletionMessage(title='Sessione completata', text='Hai completato la tua pratica.') {
  const intention = (intentionInput?.value || '').trim();
  const message = intention ? text + '<br><br><strong>Intenzione:</strong> ' + escapeHtml(intention) : text;
  let overlay = document.getElementById('completionOverlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id = 'completionOverlay';
    overlay.className = 'completion-overlay hidden';
    overlay.innerHTML = '<div class="completion-card"><div class="completion-mark">✦</div><h3 id="completionTitle"></h3><p id="completionText"></p><div class="actions compact-actions completion-actions"><button id="completionJournalBtn" class="secondary">Annota nel diario</button><button id="completionCloseBtn" class="ghost">Chiudi</button></div></div>';
    document.body.appendChild(overlay);
    overlay.querySelector('#completionCloseBtn')?.addEventListener('click', () => overlay.classList.add('hidden'));
    overlay.querySelector('#completionJournalBtn')?.addEventListener('click', () => {
      overlay.classList.add('hidden');
      switchView('journal');
    });
  }
  overlay.querySelector('#completionTitle').textContent = title;
  overlay.querySelector('#completionText').innerHTML = message;
  overlay.classList.remove('hidden');
}
function tickTimer(){
  remainingSeconds -= 1;
  elapsedSeconds += 1;
  const bellEvery = getDaimokuBellIntervalSeconds();
  if(bellEvery > 0 && remainingSeconds > 0 && elapsedSeconds > 0 && elapsedSeconds % bellEvery === 0){
    playBell();
  }
  if(remainingSeconds <= 0){
    finishDaimokuSession();
    return;
  }
  updateTimerDisplay();
}
function triggerDaimokuStartFeedback(){
  try{ if(navigator.vibrate) navigator.vibrate(35); }catch(e){}
  timerDisplay?.classList.add('timer-start-glow');
  document.querySelector('.practice-card')?.classList.add('practice-start-glow');
  window.setTimeout(() => {
    timerDisplay?.classList.remove('timer-start-glow');
    document.querySelector('.practice-card')?.classList.remove('practice-start-glow');
  }, 1200);
}
function startTimer(){
  if(timerInterval || timerFinishing) return;
  localStorage.setItem(intentionKey, intentionInput?.value || '');
  timerInterval = setInterval(tickTimer, 1000);
  triggerDaimokuStartFeedback();
  startDaimokuAudio();
  updateTimerDisplay();
}
function pauseTimer(){ 
  clearInterval(timerInterval); 
  timerInterval = null; 
  stopDaimokuAudio(false); 

  // 👉 NUOVO: salva se hai fatto almeno 1 minuto
  if(elapsedSeconds >= 60){
    const minutesDone = Math.round(elapsedSeconds / 60);
    recordDaimokuSession(minutesDone);
    elapsedSeconds = 0; // evita doppio conteggio
  }

  updateTimerDisplay(); 
}
function openImmersive(){
  if(immersiveIntention){
    const value = (intentionInput?.value || '').trim();
    immersiveIntention.textContent = value ? `Intenzione: ${value}` : 'Scegli un’intenzione semplice, poi resta presente nella recitazione.';
  }
  immersiveOverlay?.classList.remove('hidden');
  document.body.style.overflow='hidden';
  updateTimerDisplay();
}
function closeImmersive(){ immersiveOverlay?.classList.add('hidden'); document.body.style.overflow=''; }

document.querySelectorAll('.preset').forEach(btn => {
  btn.addEventListener('click', ()=> resetTimer(Number(btn.dataset.minutes || 10) * 60));
});
startTimerBtn?.addEventListener('click', startTimer);
pauseTimerBtn?.addEventListener('click', pauseTimer);
resetTimerBtn?.addEventListener('click', ()=> resetTimer(durationSeconds));
startImmersiveBtn?.addEventListener('click', ()=>{ openImmersive(); startTimer(); });
immersiveStartPauseBtn?.addEventListener('click', ()=>{ if(timerInterval) pauseTimer(); else startTimer(); });
immersiveBellBtn?.addEventListener('click', () => playBell());
immersiveResetBtn?.addEventListener('click', ()=> resetTimer(durationSeconds));
closeImmersiveBtn?.addEventListener('click', closeImmersive);
daimokuAudioToggleBtn?.addEventListener('click', ()=>{
  daimokuVoiceEnabled = !daimokuVoiceEnabled;
  localStorage.setItem(daimokuVoiceEnabledKey, daimokuVoiceEnabled ? '1' : '0');
  if(!daimokuVoiceEnabled) stopDaimokuAudio(false); else if(timerInterval) startDaimokuAudio();
  updateVoiceButtons();
});

savePracticeNote?.addEventListener('click', ()=>{
  const intention = intentionInput.value.trim();
  const note = benefitInput.value.trim();
  if(!intention && !note) return;
  const text = [intention ? `Intenzione: ${intention}` : '', note ? `Dopo la pratica: ${note}` : ''].filter(Boolean).join('\n\n');
  addJournalEntry(text, 'Pratica');
  benefitInput.value = '';
});
saveJournalEntry?.addEventListener('click', ()=>{
  if(!journalText.value.trim()) return;
  addJournalEntry(journalText.value, 'Nota');
  journalText.value = '';
});

function initDailyMessage(){
  if(dailyMessage) dailyMessage.textContent = dailyMessages[new Date().getDate() % dailyMessages.length];
}

function initInstallPrompt(){
  const installBtn = document.getElementById('installBtn');
  const helpInstallBtn = document.getElementById('helpInstallBtn');
  const openInstallTips = document.getElementById('openInstallTips');
  const closeInstallTips = document.getElementById('closeInstallTips');
  const dialog = document.getElementById('installDialog');
  let deferredPrompt = null;

  const openTips = () => dialog?.showModal();
  helpInstallBtn?.addEventListener('click', openTips);
  openInstallTips?.addEventListener('click', openTips);
  closeInstallTips?.addEventListener('click', ()=> dialog?.close());

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn?.classList.remove('hidden');
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    installBtn?.classList.add('hidden');
  });

  installBtn?.addEventListener('click', async () => {
    if(!deferredPrompt){ openTips(); return; }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.classList.add('hidden');
  });
}

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

const hobenLines = [['Myo Ho Ren Ge Kyo','Il Dharma Meraviglioso del Sutra del Loto'],['Ho ben pon Dai ni.','Mezzi abili, Capitolo 2'],['Ni ji Se son.','Allora l’Onorato dal Mondo emerse serenamente'],['Ju san mai an jo ni ki.','dal samadhi e disse a Shariputra:'],['Go Shari hotsu. Sho But chi e.','La Saggezza dei Buddha è profonda e incommensurabile.'],['Jin jin muryo. Go chi e mon.','La porta che vi conduce è difficile da comprendere e difficile da varcare.'],['Nan ge nan nyu. Is sai sho mon.','La loro saggezza non può essere compresa da alcun shravaka'],['Hyaku shi Butsu. Sho fu no chi.','o pratyekabuddha,'],['Sho i sha ga.','poiché i Buddha del presente'],['Butsu zo shin gon. Hyaku sen','hanno seguito molte centinaia di migliaia'],['Man noku. Mu shu sho Butsu.','di miliardi di Buddha passati e praticato'],['jin Gyo sho Butsu.','gli insegnamenti infiniti di quei Buddha con coraggio'],['Mu ryo do ho.','e strenuamente,'],['Yu myo sho jin.','finché hanno realizzato il Dharma profondo'],['Myo sho fu mon.','che non hai mai udito prima'],['Jo ju jin jin. Mi zo u ho.','ed esposto il Dharma'],['Zui gi sho setsu.','secondo le capacità degli esseri viventi'],['I shu nan ge.','in modi così vari che il vero scopo dei loro insegnamenti è difficile da comprendere.'],['Shari Hotsu. Go ju jo But chi rai.','Shariputra! Da quando sono diventato un Buddha, ho'],['Shu ju in nen. Shu ju hi yu.','esposto vari insegnamenti per mezzo di diverse'],['Ko en gon kyo. Mu shu ho ben.','storie, parabole e similitudini. Ho guidato tutti gli esseri viventi'],['In do shu jo.','per mezzo di innumerevoli espedienti'],['Ryo ri sho ja ku.','al fine di salvarli dai molteplici attaccamenti.'],['Sho i sha ga. Nyo rai','Poiché il Tathagata possiede'],['ho ben. Chi ken hara mitsu.','mezzi abili e perfezione della visione profonda.'],['Kai i gu soku.','È pienamente dotato di tutto ciò.'],['Shari hotsu. Nyo rai chi ken.','Shariputra! La Visione Profonda dei Tathagata è profonda e vasta.'],['Ko dai jin non.','Essi rivolgono tutte le loro capacità'],['Mu ryo. Mu ge. Riki. Mu sho i.','verso gli infiniti esseri viventi: eloquenza senza ostacoli,'],['Zen jo. Ge datsu. San mai.','poteri mistici, assenza di paura, concentrazione meditativa,'],['Jin nyu mu sai.','emancipazione e samadhi.'],['Jo ju is sai. Mi zo u ho.','Essi sono entrati profondamente nell’infinito'],['Shari Hotsu. Nyo rai','e hanno ottenuto il Dharma mai udito prima.'],['No shu ju fun betsu.','I Tathagata sanno distinguere'],['Gyo ses sho ho','diversi insegnamenti'],['Gon ji nyu nan.','ed esporli con parole abili e gentili,'],['Ek ka shu shin.','rallegrando il cuore degli esseri viventi.'],['Shari hotsu. Shu yo gon shi.','Shariputra! In breve,'],['Mu ryo mu hen. Mi zo u ho.','i Buddha hanno realizzato insegnamenti infiniti'],['Bus shitsu jo ju. Shi Shari hotsu.','e senza precedenti. Shariputra, non dirò altro'],['Fu shu bu setsu. Sho i sha ga.','perché il Dharma realizzato dai Buddha'],['Bus sho jo ju. Dai ichi ke u. Nan','è la verità suprema, rara da udire e difficile da comprendere.'],['Ge shi ho. Yui Butsu yo Butsu.','Solo i Buddha comprendono pienamente'],['Nai no ku jin. Sho ho jis-so.','la vera entità di tutti i fenomeni'],['Sho i sho ho Nyo ze so.','nell’aspetto,'],['Nyo ze sho.','nella natura,'],['Nyo ze tai.','nell’entità,'],['Nyo ze riki.','nel potere,'],['Nyo ze sa.','nell’azione,'],['Nyo ze in.','nella causa primaria,'],['Nyo ze en.','nella causa esterna,'],['Nyo ze ka.','nell’effetto,'],['Nyo ze ho.','nella retribuzione'],['Nyo ze hon matsu ku kyo to.','e nella coerenza dall’inizio alla fine.']];
const juryoLines = [['Myo Ho Ren Ge Kyo.','Il Dharma Meraviglioso del Sutra del Loto'],['Nyo rai ju ryo hon. Dai ju roku.','La Durata della Vita del Tathagata, Capitolo 16'],['Ji ga toku Butsu rai.','Sono passate molte centinaia di migliaia'],['Sho kyo sho kos shu.','di miliardi di trilioni'],['Mu ryo hayku sen man.','di asamkhya di kalpa'],['Oku sai aso gi.','da quando sono diventato il Buddha.'],['Jo sep po kyo ke.','Per tutti questi innumerevoli kalpa passati ho sempre'],['Mu shu oku shu jo.','esposto il Dharma a molte'],['Ryo nyu o Butsu do.','migliaia di milioni di esseri viventi'],['Ni rai Mu ryo ko.','al fine di condurli sul Sentiero della Buddità.'],['I do shu jo ko.','Al fine di salvare gli esseri oscurati'],['Ho ben gen ne han.','faccio mostra del mio Nirvana come espediente.'],['Ni jitsu fu metsu do.','In realtà io non morirò mai.'],['Jo ju shi sep po.','Io vivo sempre qui ed espongo il Dharma.'],['Ga jo ju o shi.','Sebbene io viva sempre qui,'],['I sho jin zu riki.','agli occhi degli esseri oscurati'],['Ryo ten do shu jo.','scompaio'],['Sui gon ni fu ken.','grazie ai miei poteri sovrannaturali.'],['Shu ken ga metsu do.','Quando essi credono che sia morto'],['Ko ku yo sha ri.','e fanno offerte alle mie reliquie,'],['Gen kai e ren bo.','mostrando adorazione e ammirazione;'],['Ni sho katsu go shin.','diventando devoti, retti e gentili,'],['Shu jo ki shin buku.','sviluppando il desiderio di vedermi'],['Shichi jiki I nyu nan.','con tutto il loro cuore,'],['Is shin yoku ken Butsu.','a costo delle loro stesse vite,'],['Fu ji shaku shin myo.','appaio di nuovo sul Monte dell’Aquila Sacra'],['Ji ga gyu shu so.','insieme al mio Sangha,'],['Ku shutsu Ryo ju sen.','e dico loro:'],['Ga ji go shu jo.','Io dimoro sempre qui,'],['Jo zai shi fu metsu.','non morirò mai.'],['I ho ben riki ko.','Faccio mostra della mia estinzione come un abile mezzo,'],['Gen u metsu fu metsu.','sebbene io non muoia mai.'],['Yo koku u shu jo.','Espongo il Dharma Supremo'],['Ku gyo shin gyo sha.','anche agli esseri viventi di altri mondi'],['Ga bu o hi chu.','quando mostrano rispetto, fede'],['I setsu mu jo ho.','e desiderano vedermi.'],['Nyo to fu mon shi.','Non avendo mai udito ciò'],['Tan ni ga metsu do.','voi credete che io muoia.'],['Ga ken sho shu jo.','Io vedo gli esseri oscurati annegare'],['Motsu zai o ku kai.','in un oceano di sofferenza.'],['Ko fu i gen shin.','In quel momento scompaio dalla loro vista'],['Ryo go sho katsu go.','e li induco a sviluppare il desiderio di vedermi.'],['In go shin ren bo.','Quando essi mi adorano'],['Nai shutsu I sep po.','mi manifesto ed espongo loro il Dharma.'],['Jin zu riki nyo ze.','Faccio tutto questo grazie ai miei poteri sovrannaturali.'],['O a so gi ko.','Io vivo sul Monte dell’Aquila Sacra'],['Jo zai Ryo ju sen.','e anche in altri luoghi'],['Gyu yo sho ju sho.','da asamkhya kalpa.'],['Shu jo ken ko jin.','Le persone oscurate pensano,'],['Dai ka sho sho ji.','“Questo mondo è divorato da un grande fuoco.”'],['Ga shi do an non.','In realtà, questo mio mondo è in pace.'],['Ten nin jo ju man.','Pieno di dei ed esseri umani.'],['On rin sho do kaku.','Giardini, foreste e palazzi sono adorni'],['Shu ju ho sho gon.','di molti tesori.'],['Ho ju ta ke ka.','Gli alberi ingioiellati hanno molti'],['Shu jo sho yu raku.','fiori e frutti; gli esseri viventi sono felici;'],['Sho ten kyaku ten ku.','e gli dei suonano tamburi celesti'],['Jo sa shu gi gaku.','creando varie melodie,'],['U man da ra ke.','facendo piovere fiori di mandarava'],['San Butsu gyu dai shu.','sulla grande assemblea e me.'],['Ga jo do fu ki.','Questa mia terra pura è indistruttibile,'],['Ni shu ken sho jin.','eppure le persone oscurate pensano'],['U fu sho ku no.','che questo sia un luogo pieno di dolore e paura.'],['Nyo ze shitsu ju man.','A causa del loro karma negativo'],['Ze sho zai shu jo.','questi esseri oscurati non saranno in grado'],['I aku go in nen.','di udire neppure i nomi dei Tre Gioielli'],['Ka a so gi ko.','per molti asamkhya kalpa.'],['Fu mon san bo myo.','A coloro che hanno accumulato merito'],['Sho u shu ku doku.','e che sono retti e gentili'],['Nyu wa shichi jiki sha.','e che sanno vedermi qui'],['Sok kai ken ga shin.','esporre il Dharma'],['Zai shi ni sep po.','dico:'],['Waku ji i shi shu.','“La durata della mia vita è incommensurabile.”'],['Setsu Butsu ju mu ryo.','A coloro che mi vedono dopo un lungo tempo, dico,'],['Ku nai ken Bus sha.','“È difficile vedere un Buddha.”'],['I setsu Butsu nan chi.','Posso fare tutto questo'],['Ga chi riki nyo ze.','grazie al potere della mia saggezza.'],['E ko sho mu ryo.','La luce della mia saggezza non conosce limiti.'],['Ju myo mu shu ko.','La durata della mia vita è di incommensurabili kalpa,'],['Ku shu go sho toku.','ottenuta con ere di pratiche.'],['Nyo to u chi sha.','Tutti voi che avete saggezza!'],['Mot to shi sho gi.','Non abbiate dubbi!'],['To dan ryo yo jin.','Eliminate i vostri dubbi, non abbiatene più!'],['Butsu go jip pu ko.','Le mie parole sono verità, non falsità!'],['Nyo I zen ho ben.','Il medico che, come espediente, inviò un messaggero'],['I ji o shi ko.','ad annunciare ai figli oscurati la propria morte'],['Jitsu zai ni gon shi.','al fine di curarli, non fu accusato'],['Mu no sek ko mo.','di falsità, sebbene fosse in vita.'],['Ga yaku i se bu.','Allo stesso modo, io sono il padre del mondo.'],['Ku sho ku gen sha.','Io sono il salvatore di tutti gli esseri viventi dalla sofferenza.'],['I bon bu ten do.','A causa delle loro oscurazioni'],['Jitsu zai ni gon metsu.','dico agli esseri che morirò, sebbene non lo faccia.'],['I jo ken ga ko.','Se mi vedessero sempre,'],['Ni sho kyo shi shin.','diventerebbero arroganti e immorali,'],['Ho itsu jaku go yoku.','attaccandosi ai cinque desideri,'],['Da o aku do chu.','così fortemente da cadere nelle regioni del male.'],['Ga jo chi shu jo.','Io so chi pratica la Via e chi no.'],['Gyo do fu gyo do.','Per cui, espongo vari insegnamenti'],['Zui o sho ka do.','a tutti gli esseri viventi'],['I setsu shu ju ho.','in accordo alle loro capacità.'],['Mai ji sa ze nen.','Il mio pensiero costante è:'],['I ga ryo shu jo.','Come posso permettere a tutti gli esseri viventi'],['Toku nyu mu jo do.','di entrare nel Sentiero Supremo'],['Soku jo ju Bus shin.','e diventare velocemente dei Buddha?']];
const silentPrayers = [
  {title:'Prima preghiera', subtitle:'Gratitudine per il Gohonzon', body:['Esprimo profonda devozione e sincera gratitudine per il Gohonzon di Nam-myoho-renge-kyo, l’essenza del Sutra del Loto.','Esprimo profonda devozione e sincera gratitudine per Nichiren Daishonin, il Budda originale dell’Ultimo giorno della Legge.','Esprimo profonda devozione e sincera gratitudine per Nikko Shonin.'], note:'Recitare tre volte Nam-myoho-renge-kyo.'},
  {title:'Seconda preghiera', subtitle:'Gratitudine per i tre presidenti', body:['Esprimo profonda gratitudine per i tre presidenti della Soka Gakkai - Tsunesaburo Makiguchi, primo presidente; Josei Toda, secondo presidente; Daisaku Ikeda, terzo presidente - eterni maestri di kosen-rufu, per la loro totale dedizione alla propagazione della Legge.'], note:'Recitare tre volte Nam-myoho-renge-kyo.'},
  {title:'Terza preghiera', subtitle:'Dedicata a kosen-rufu nel mondo, alle preghiere personali e ai defunti', body:['Prego per la realizzazione del grande voto di kosen-rufu in tutto il mondo e per l’eterno sviluppo della Soka Gakkai.','Prego per compiere la mia rivoluzione umana, trasformare il mio karma e realizzare i miei desideri (esprimere le preghiere personali).','Prego per tutti i defunti, in particolare per i propri cari.','Prego per la pace nel mondo e per la felicità di tutti gli esseri viventi.'], note:'Suonare ripetutamente la campana mentre si ricordano i propri cari. Poi recitare tre volte Nam-myoho-renge-kyo. Suonare la campana e concludere recitando tre volte Nam-myoho-renge-kyo.'}
];


const hobenContainer = document.getElementById('hobenContainer');
const juryoContainer = document.getElementById('juryoContainer');
const silentPrayersContainer = document.getElementById('silentPrayers');
const gongyoTranslationPanel = document.getElementById('gongyoTranslationPanel');
const gongyoTranslationContent = document.getElementById('gongyoTranslationContent');
const closeGongyoTranslationBtn = document.getElementById('closeGongyoTranslation');
const bellBtn = document.getElementById('bellBtn');
const previewBellBtn = document.getElementById('previewBell');
const bellSoundSelect = document.getElementById('bellSoundSelect');
const bellDurationSelect = document.getElementById('bellDurationSelect');
const gongyoSpeedSelect = document.getElementById('gongyoSpeedSelect');
const toggleAutoScrollBtn = document.getElementById('toggleAutoScroll');
const viewRomajiItalianoBtn = document.getElementById('viewRomajiItaliano');
const viewItalianoBtn = document.getElementById('viewItaliano');
const viewRomajiBtn = document.getElementById('viewRomaji');
const scrollManualBtn = document.getElementById('scrollManual');
const scrollAutoBtn = document.getElementById('scrollAuto');
const scrollSpeedInput = document.getElementById('scrollSpeed');
const daimokuBellIntervalSelect = document.getElementById('daimokuBellIntervalSelect');
const daimokuFinalTripleBellToggle = document.getElementById('daimokuFinalTripleBell');
let gongyoViewMode = localStorage.getItem(gongyoViewKey) || 'dual';
if(gongyoViewMode === 'it') { gongyoViewMode = 'dual'; localStorage.setItem(gongyoViewKey, 'dual'); }
let gongyoScrollMode = localStorage.getItem(gongyoScrollKey) || 'manual';
let bellSound = localStorage.getItem(bellSoundKey) || 'profonda';
let bellDuration = Number(localStorage.getItem(bellDurationKey) || 2800);
let gongyoRunToken = 0;
let gongyoRunning = false;
let gongyoPaused = false;
let gongyoSequence = [];
let gongyoSequenceIndex = 0;
let gongyoActiveSection = null;
let gongyoPausedSection = null;

const HOBEN_REPEAT_START = hobenLines.findIndex(([romaji]) => normalize(romaji).startsWith('sho i sho ho nyo ze so'));
const HOBEN_REPEAT_TIMES = 3;
const GONGYO_LINE_MS = {1: 2600, 2: 2200, 3: 1850, 4: 1500, 5: 1200, 6: 950};


const gongyoPageImages = {
  hoben: [
    'assets/gongyo/c2-1.png',
    'assets/gongyo/c2-2.png',
    'assets/gongyo/c2-3.png',
    'assets/gongyo/c2-4.png',
    'assets/gongyo/c2-5.png'
  ],
  juryo: [
    'assets/gongyo/c16-01.png',
    'assets/gongyo/c16-02.png',
    'assets/gongyo/c16-03.png',
    'assets/gongyo/c16-04.png',
    'assets/gongyo/c16-05.png',
    'assets/gongyo/c16-06.png',
    'assets/gongyo/c16-07.png',
    'assets/gongyo/c16-08.png',
    'assets/gongyo/c16-09.png',
    'assets/gongyo/c16-10.png',
    'assets/gongyo/c16-11.png',
    'assets/gongyo/c16-12.png'
  ]
};


const gongyoTranslationPages = {
  hoben: [
    'assets/gongyo/trad/trad2-1.png',
    'assets/gongyo/trad/trad2-2.png',
    'assets/gongyo/trad/trad2-3.png'
  ],
  juryo: [
    'assets/gongyo/trad/trad16-1.png',
    'assets/gongyo/trad/trad16-2.png',
    'assets/gongyo/trad/trad16-3.png',
    'assets/gongyo/trad/trad16-4.png',
    'assets/gongyo/trad/trad16-5.png'
  ]
};

function renderTranslationPages(title, pages){
  return `
    <article class="translation-card">
      <h4>${escapeHtml(title)}</h4>
      ${pages.map((src, idx) => `
        <div class="gongyo-page-image-wrap">
          <img class="gongyo-page-image translation-page-image" src="${src}" alt="${escapeHtml(title)} pagina ${idx + 1}" loading="lazy">
        </div>
      `).join('')}
    </article>
  `;
}

function renderGongyoTranslation(){
  if(!gongyoTranslationContent) return;
  gongyoTranslationContent.innerHTML =
    renderTranslationPages('Capitolo 2 · Espedienti (Hōben)', gongyoTranslationPages.hoben) +
    renderTranslationPages('Capitolo 16 · Durata della vita del Tathagata (Juryō)', gongyoTranslationPages.juryo);
}

function toggleGongyoTranslation(force){
  if(!gongyoTranslationPanel) return;
  const show = typeof force === 'boolean' ? force : gongyoTranslationPanel.classList.contains('hidden');
  gongyoTranslationPanel.classList.toggle('hidden', !show);
  if(show){
    renderGongyoTranslation();
    gongyoTranslationPanel.scrollIntoView({behavior:'smooth', block:'start'});
  }
}

function renderGongyoPageImages(sectionName, container){
  const pages = gongyoPageImages[sectionName] || [];
  container.classList.add('gongyo-image-mode');
  container.innerHTML = pages.map((src, idx) => `
    <div class="gongyo-page-image-wrap">
      <img class="gongyo-page-image" src="${src}" alt="${sectionName === 'hoben' ? 'Capitolo 2' : 'Capitolo 16'} pagina ${idx + 1}" loading="eager">
    </div>
  `).join('');
}

function renderSutraLines(lines, container, sectionName){
  if(!container) return;
  container.classList.remove('gongyo-image-mode');

  if(gongyoViewMode === 'dual'){
    renderGongyoPageImages(sectionName, container);
    return;
  }

  container.innerHTML = lines.map(([romaji, italian], idx) => `
    <div class="sutra-line" data-line-index="${idx}" data-section="${sectionName}">
      <button class="save-gongyo-point" type="button" title="Salva questo punto" data-save-gongyo="${sectionName}:${idx}">☆</button>
      <div class="sutra-romaji">${escapeHtml(romaji)}</div>
    </div>`).join('') + (sectionName === 'hoben' ? `<div class="repeat-note">Ripetere 3 volte da <strong>Sho i sho ho. Nio ze so...</strong> fino alla fine.</div>` : '');
}
function renderSilentPrayers(){
  silentPrayersContainer.innerHTML = silentPrayers.map((prayer, index) => `
    <article class="card prayer-card">
      <div class="term-meta">Preghiera ${index+1}</div>
      <h4>${escapeHtml(prayer.title)}</h4>
      <div class="pill">${escapeHtml(prayer.subtitle)}</div>
      ${prayer.body.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
      <p class="prayer-note">${escapeHtml(prayer.note)}</p>
      ${index === 2 ? '<button class="secondary prayer-bell">🔔 Suona campana</button>' : ''}
    </article>`).join('');
  document.querySelectorAll('.prayer-bell').forEach(btn => btn.addEventListener('click', () => playBell()));
}
function updateGongyoButtons(){
  viewRomajiItalianoBtn?.classList.toggle('active', gongyoViewMode==='dual');
  viewItalianoBtn?.classList.toggle('active', !gongyoTranslationPanel?.classList.contains('hidden'));
  viewRomajiBtn?.classList.toggle('active', gongyoViewMode==='romaji');
  scrollManualBtn?.classList.toggle('active', gongyoScrollMode==='manual');
  scrollAutoBtn?.classList.toggle('active', gongyoScrollMode==='auto');

  document.querySelectorAll('[data-stop-scroll]').forEach(btn => {
    const section = btn.dataset.section || 'all';
    if(gongyoVoiceEnabled){
      btn.textContent = '↕ Scorri manualmente';
      btn.classList.remove('active');
      btn.classList.remove('paused');
    } else if(gongyoRunning && gongyoActiveSection === section){
      btn.textContent = '⏸ Pausa scorrimento';
      btn.classList.add('active');
      btn.classList.remove('paused');
    } else if(gongyoPaused && gongyoPausedSection === section){
      btn.textContent = '▶ Riprendi scorrimento';
      btn.classList.add('paused');
      btn.classList.remove('active');
    } else {
      btn.textContent = '▶ Avvia scorrimento';
      btn.classList.remove('active');
      btn.classList.remove('paused');
    }
  });
}
function attachGongyoPointHandlers(){
  document.querySelectorAll('[data-save-gongyo]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const [section, idxText] = btn.dataset.saveGongyo.split(':');
      const idx = Number(idxText);
      const lines = section === 'hoben' ? hobenLines : juryoLines;
      const pair = lines[idx];
      if(!pair) return;
      addEvolvedFavorite('gongyoPoints', {
        title: section === 'hoben' ? 'Capitolo 2 · Espedienti' : 'Capitolo 16 · Durata della vita del Tathagata',
        section,
        index: idx,
        romaji: pair[0],
        italian: pair[1],
        text: pair[1],
        id: `gongyo-${section}-${idx}`
      });
    });
  });
}

function renderGongyo(){
  renderSutraLines(hobenLines, hobenContainer, 'hoben');
  renderSutraLines(juryoLines, juryoContainer, 'juryo');
  renderSilentPrayers();
  attachGongyoPointHandlers();
  updateGongyoButtons();
  updateVoiceButtons();
  updateGongyoBookmarkInfo();
}

function syncSpeedControls(value){
  const v = String(value || 3);
  if(scrollSpeedInput) scrollSpeedInput.value = v;
  if(gongyoSpeedSelect) gongyoSpeedSelect.value = v;
  localStorage.setItem(gongyoSpeedKey, v);
}
function currentScrollSpeed(){ return Number(gongyoSpeedSelect?.value || scrollSpeedInput?.value || localStorage.getItem(gongyoSpeedKey) || 3); }
function currentLineDuration(){ return GONGYO_LINE_MS[currentScrollSpeed()] || GONGYO_LINE_MS[3]; }

const bellMap = {
  'profonda': document.getElementById('bell-profonda'),
  'tempio': document.getElementById('bell-tempio'),
  'luminosa': document.getElementById('bell-luminosa'),
  'morbida': document.getElementById('bell-morbida'),
};
function stopAllBells(){ Object.values(bellMap).forEach(a => { if(a){ a.pause(); a.currentTime = 0; } }); }
async function playBell(){
  const audio = bellMap[bellSound] || bellMap.profonda;
  if(!audio) return;
  try{
    stopAllBells();
    audio.currentTime = 0;
    const playResult = audio.play();
    if (playResult && typeof playResult.catch === 'function') {
      await playResult.catch(() => { throw new Error('play-failed'); });
    }
    const duration = Number(bellDuration) || 2800;
    window.clearTimeout(playBell._stopTimer);
    playBell._stopTimer = window.setTimeout(() => {
      try{ audio.pause(); audio.currentTime = 0; }catch(e){}
    }, duration);
  }catch{
    alert('Il suono della campana non è disponibile su questo dispositivo/browser. Tocca di nuovo il pulsante oppure riapri la pagina.');
  }
}
let bellLoopTimer = null;
function updateBellLoopButton(){
  if(bellLoopBtn) bellLoopBtn.textContent = bellLoopTimer ? '■ Ferma campana continua' : '🔁 Campana continua';
}
function stopBellLoop(){
  if(bellLoopTimer){
    clearInterval(bellLoopTimer);
    bellLoopTimer = null;
    updateBellLoopButton();
  }
}
function toggleBellLoop(){
  if(bellLoopTimer){ stopBellLoop(); return; }
  playBell();
  bellLoopTimer = setInterval(() => playBell(), Math.max(2200, Number(bellDuration || 2800) + 900));
  updateBellLoopButton();
}
function clearGongyoHighlights(){
  document.querySelectorAll('.sutra-line.current-line').forEach(el => el.classList.remove('current-line'));
  document.querySelectorAll('.repeat-note.active').forEach(el => el.classList.remove('active'));
}
function focusSutraLine(container, index){
  const line = container?.querySelector(`[data-line-index="${index}"]`);
  if(!line) return;
  clearGongyoHighlights();
  line.classList.add('current-line');
  line.scrollIntoView({behavior:'smooth', block:'center'});
}
function activateRepeatNote(active=true){
  const note = hobenContainer?.querySelector('.repeat-note');
  if(note) note.classList.toggle('active', active);
}
function stopGongyoAuto(clearHighlight=true){
  gongyoRunToken += 1;
  gongyoRunning = false;
  gongyoPaused = false;
  gongyoActiveSection = null;
  gongyoPausedSection = null;
  gongyoSequence = [];
  gongyoSequenceIndex = 0;
  gongyoActiveSection = null;
  gongyoPausedSection = null;
  if(clearHighlight){
    clearGongyoHighlights();
    activateRepeatNote(false);
  }
  showGongyoStatus('Gongyo fermato.');
  updateGongyoButtons();
}

function pauseGongyoAuto(){
  if(!gongyoRunning) return;
  gongyoRunToken += 1;
  gongyoRunning = false;
  gongyoPaused = true;
  gongyoPausedSection = gongyoActiveSection;
  gongyoScrollMode = 'manual';
  localStorage.setItem(gongyoScrollKey, 'manual');
  showGongyoStatus('Scorrimento in pausa. Premi “Riprendi scorrimento” per continuare da qui.');
  updateGongyoButtons();
}

function buildGongyoSequence(section='all'){
  const sequence = [];
  const finalIndex = hobenLines.length - 1;

  if(section === 'hoben' || section === 'all'){
    if(HOBEN_REPEAT_START > 0){
      for(let i=0; i < HOBEN_REPEAT_START; i += 1){
        sequence.push({type:'line', section:'hoben', index:i});
      }
    }
    sequence.push({type:'repeatNote', active:true});
    for(let repeat=0; repeat < HOBEN_REPEAT_TIMES; repeat += 1){
      for(let i=HOBEN_REPEAT_START; i <= finalIndex; i += 1){
        sequence.push({type:'line', section:'hoben', index:i});
      }
      sequence.push({type:'wait', ms: repeat < HOBEN_REPEAT_TIMES - 1 ? 700 : 1200});
    }
    sequence.push({type:'repeatNote', active:false});
  }

  if(section === 'all'){
    sequence.push({type:'status', message:'Pausa tra Capitolo 2 e Capitolo 16...'});
    sequence.push({type:'wait', ms:2500});
    sequence.push({type:'status', message:'Scorrimento Capitolo 16 avviato.'});
  }

  if(section === 'juryo' || section === 'all'){
    for(let i=0; i < juryoLines.length; i += 1){
      sequence.push({type:'line', section:'juryo', index:i});
    }
  }
  return sequence;
}

async function runGongyoSequence(token){
  while(gongyoSequenceIndex < gongyoSequence.length){
    if(token !== gongyoRunToken) return false;
    const step = gongyoSequence[gongyoSequenceIndex];
    if(step.type === 'line'){
      const container = step.section === 'hoben' ? hobenContainer : juryoContainer;
      focusSutraLine(container, step.index);
      await wait(currentLineDuration());
      if(token !== gongyoRunToken) return false;
      gongyoSequenceIndex += 1;
      continue;
    }
    if(step.type === 'wait'){
      await wait(step.ms);
      if(token !== gongyoRunToken) return false;
      gongyoSequenceIndex += 1;
      continue;
    }
    if(step.type === 'repeatNote'){
      activateRepeatNote(!!step.active);
      gongyoSequenceIndex += 1;
      continue;
    }
    if(step.type === 'status'){
      showGongyoStatus(step.message);
      gongyoSequenceIndex += 1;
      continue;
    }
    gongyoSequenceIndex += 1;
  }
  return true;
}

function toggleAutoScrollFromChapter(section='all'){
  if(gongyoVoiceEnabled){
    gongyoScrollMode = 'manual';
    localStorage.setItem(gongyoScrollKey, 'manual');
    stopGongyoAuto();
    updateGongyoButtons();
    updateVoiceButtons();
    showGongyoStatus('Con audio Gongyo attivo, lo scorrimento resta manuale.');
    return;
  }

  if(gongyoRunning && gongyoActiveSection === section){
    pauseGongyoAuto();
    updateVoiceButtons();
    return;
  }

  gongyoScrollMode = 'auto';
  localStorage.setItem(gongyoScrollKey, 'auto');
  updateGongyoButtons();
  updateVoiceButtons();
  startGongyoAuto(section);
}
async function startGongyoAuto(section='all'){
  if(gongyoViewMode === 'dual'){
    gongyoViewMode = 'romaji';
    localStorage.setItem(gongyoViewKey, 'romaji');
    renderGongyo();
    showGongyoStatus('Per lo scorrimento automatico passo alla vista Solo romaji. La vista con ideogrammi resta manuale.');
  }
  if(gongyoVoiceEnabled){
    gongyoScrollMode = 'manual';
    localStorage.setItem(gongyoScrollKey, 'manual');
    updateGongyoButtons();
    showGongyoStatus('Con audio Gongyo attivo, lo scorrimento resta manuale. Usa “Avvia audio” e scorri il testo a mano.');
    return;
  }

  if(!gongyoPaused || gongyoPausedSection !== section){
    stopGongyoAuto();
    gongyoSequence = buildGongyoSequence(section);
    gongyoSequenceIndex = 0;
    if(section === 'hoben' || section === 'all') hobenContainer?.scrollTo({top:0, behavior:'smooth'});
    if(section === 'juryo' || section === 'all') juryoContainer?.scrollTo({top:0, behavior:'smooth'});
    clearGongyoHighlights();
    activateRepeatNote(false);
  }

  gongyoRunning = true;
  gongyoPaused = false;
  gongyoActiveSection = section;
  gongyoPausedSection = null;
  gongyoScrollMode = 'auto';
  localStorage.setItem(gongyoScrollKey, gongyoScrollMode);
  gongyoListenMode = false;
  localStorage.setItem(gongyoListenModeKey, '0');
  updateGongyoButtons();
  updateVoiceButtons();

  const token = ++gongyoRunToken;
  const sectionLabel = section === 'hoben' ? 'Capitolo 2' : (section === 'juryo' ? 'Capitolo 16' : 'Gongyo completo');
  showGongyoStatus(gongyoSequenceIndex > 0 ? `Scorrimento ripreso in ${sectionLabel}.` : `Scorrimento automatico avviato: ${sectionLabel}.`);

  const completed = await runGongyoSequence(token);
  if(!completed || token !== gongyoRunToken){
    updateGongyoButtons();
    return;
  }

  gongyoRunning = false;
  gongyoPaused = false;
  gongyoSequence = [];
  gongyoSequenceIndex = 0;
  clearGongyoHighlights();
  activateRepeatNote(false);
  showGongyoStatus('Gongyo completato.');
  updateGongyoButtons();
}

function showGongyoStatus(message){
  let el = document.getElementById('gongyoStatus');
  if(!el){
    const master = document.querySelector('.gongyo-master');
    if(master){
      el = document.createElement('div');
      el.id = 'gongyoStatus';
      el.className = 'muted';
      el.style.marginTop = '12px';
      el.style.padding = '10px 12px';
      el.style.borderRadius = '12px';
      el.style.background = 'rgba(255,255,255,.08)';
      master.appendChild(el);
    }
  }
  if(el) el.textContent = message;
}

function wait(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }
async function runSection(container, startIndex, endIndex, token){
  for(let idx = startIndex; idx <= endIndex; idx += 1){
    if(token !== gongyoRunToken) return false;
    focusSutraLine(container, idx);
    await wait(currentLineDuration());
  }
  return token === gongyoRunToken;
}
async function runHobenSequence(token){
  const finalIndex = hobenLines.length - 1;
  if(HOBEN_REPEAT_START > 0){
    const ok = await runSection(hobenContainer, 0, HOBEN_REPEAT_START - 1, token);
    if(!ok) return false;
  }
  activateRepeatNote(true);
  for(let repeat = 0; repeat < HOBEN_REPEAT_TIMES; repeat += 1){
    const ok = await runSection(hobenContainer, HOBEN_REPEAT_START, finalIndex, token);
    if(!ok) return false;
    await wait(repeat < HOBEN_REPEAT_TIMES - 1 ? 700 : 1200);
  }
  activateRepeatNote(false);
  return true;
}
async function runJuryoSequence(token){
  juryoContainer?.scrollTo({top:0, behavior:'smooth'});
  await wait(500);
  return runSection(juryoContainer, 0, juryoLines.length - 1, token);
}
function initSettings(){
  if(bellSoundSelect) bellSoundSelect.value = bellSound;
  if(bellDurationSelect) bellDurationSelect.value = String(bellDuration);
  if(daimokuBellIntervalSelect) daimokuBellIntervalSelect.value = localStorage.getItem(daimokuBellIntervalKey) || '0';
  if(daimokuFinalTripleBellToggle) daimokuFinalTripleBellToggle.checked = shouldPlayFinalTripleBell();
  if(morningMinutesSelect) morningMinutesSelect.value = String(getRoutineMinutes('morning'));
  if(eveningMinutesSelect) eveningMinutesSelect.value = String(getRoutineMinutes('evening'));
  if(reminderTimeInput) reminderTimeInput.value = localStorage.getItem(reminderTimeKey) || '08:00';
  if(practiceReminderToggle) practiceReminderToggle.checked = localStorage.getItem(reminderEnabledKey) === '1';
  syncSpeedControls(localStorage.getItem(gongyoSpeedKey) || 3);
  bellSoundSelect?.addEventListener('change', ()=>{ bellSound = bellSoundSelect.value; localStorage.setItem(bellSoundKey, bellSound); });
  bellDurationSelect?.addEventListener('change', ()=>{ bellDuration = Number(bellDurationSelect.value || 2800); localStorage.setItem(bellDurationKey, String(bellDuration)); });
  daimokuBellIntervalSelect?.addEventListener('change', ()=> localStorage.setItem(daimokuBellIntervalKey, daimokuBellIntervalSelect.value || '0'));
  daimokuFinalTripleBellToggle?.addEventListener('change', ()=> localStorage.setItem(daimokuFinalTripleBellKey, daimokuFinalTripleBellToggle.checked ? '1' : '0'));
  morningMinutesSelect?.addEventListener('change', ()=> localStorage.setItem(routineMorningMinutesKey, morningMinutesSelect.value || '10'));
  eveningMinutesSelect?.addEventListener('change', ()=> localStorage.setItem(routineEveningMinutesKey, eveningMinutesSelect.value || '5'));
  reminderTimeInput?.addEventListener('change', ()=>{ localStorage.setItem(reminderTimeKey, reminderTimeInput.value || '08:00'); schedulePracticeReminder(); });
  practiceReminderToggle?.addEventListener('change', ()=>{ localStorage.setItem(reminderEnabledKey, practiceReminderToggle.checked ? '1' : '0'); schedulePracticeReminder(); });
  requestNotificationBtn?.addEventListener('click', requestPracticeNotifications);
  gongyoVoiceEnabledToggle?.addEventListener('click', ()=>{
    gongyoVoiceEnabled = !gongyoVoiceEnabled;
    localStorage.setItem(gongyoVoiceEnabledKey, gongyoVoiceEnabled ? '1' : '0');
    if(gongyoVoiceEnabled){
      gongyoScrollMode = 'manual';
      localStorage.setItem(gongyoScrollKey, 'manual');
      stopGongyoAuto();
      showGongyoStatus('Audio Gongyo attivo: scorrimento manuale.');
    } else {
      stopGongyoAudio(false);
      showGongyoStatus('Audio Gongyo disattivato: puoi usare lo scorrimento automatico.');
    }
    updateGongyoButtons();
    updateVoiceButtons();
  });
  gongyoSpeedSelect?.addEventListener('change', ()=> syncSpeedControls(gongyoSpeedSelect.value));
  scrollSpeedInput?.addEventListener('input', ()=> syncSpeedControls(scrollSpeedInput.value));
  previewBellBtn?.addEventListener('click', () => playBell());
}

viewRomajiItalianoBtn?.addEventListener('click', ()=>{ gongyoViewMode='dual'; localStorage.setItem(gongyoViewKey, gongyoViewMode); renderGongyo(); });
viewRomajiBtn?.addEventListener('click', ()=>{ gongyoViewMode='romaji'; localStorage.setItem(gongyoViewKey, gongyoViewMode); renderGongyo(); });
viewItalianoBtn?.addEventListener('click', ()=> toggleGongyoTranslation());
closeGongyoTranslationBtn?.addEventListener('click', ()=> toggleGongyoTranslation(false));
document.querySelectorAll('[data-stop-scroll]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleAutoScrollFromChapter(btn.dataset.section || 'all');
  });
});
scrollManualBtn?.addEventListener('click', (e)=>{ e.preventDefault(); gongyoScrollMode='manual'; localStorage.setItem(gongyoScrollKey, gongyoScrollMode); stopGongyoAuto(); updateGongyoButtons(); updateVoiceButtons(); showGongyoStatus('Scorrimento manuale attivo.'); });
scrollAutoBtn?.addEventListener('click', (e)=>{
  e.preventDefault();
  if(gongyoVoiceEnabled){
    gongyoScrollMode='manual';
    localStorage.setItem(gongyoScrollKey, 'manual');
    stopGongyoAuto();
    updateGongyoButtons();
    updateVoiceButtons();
    showGongyoStatus('Con audio Gongyo attivo, lo scorrimento è manuale. Disattiva Voce Gongyo in questa schermata per usare l’automatico.');
    return;
  }
  if(gongyoRunning){
    pauseGongyoAuto();
    updateVoiceButtons();
    return;
  }
  gongyoScrollMode='auto';
  localStorage.setItem(gongyoScrollKey, gongyoScrollMode);
  updateGongyoButtons();
  updateVoiceButtons();
  startGongyoAuto('all');
});
gongyoTextModeBtn?.addEventListener('click', ()=>{ gongyoListenMode = false; localStorage.setItem(gongyoListenModeKey, '0'); updateVoiceButtons(); });
gongyoListenModeBtn?.addEventListener('click', ()=>{ gongyoListenMode = true; localStorage.setItem(gongyoListenModeKey, '1'); updateVoiceButtons(); });
gongyoAudioToggleBtn?.addEventListener('click', ()=> toggleGongyoAudio());
gongyoStopAudioBtn?.addEventListener('click', ()=> stopGongyoAudio(true));
gongyoAudioEl?.addEventListener('ended', ()=> updateVoiceButtons());
bellBtn?.addEventListener('click', () => playBell());
bellTripleBtn?.addEventListener('click', () => playBellNTimes(3, 1700));
bellLoopBtn?.addEventListener('click', () => toggleBellLoop());
gongyoRestartBtn?.addEventListener('click', () => restartGongyoPractice());
gongyoSaveBookmarkBtn?.addEventListener('click', () => saveGongyoBookmark());
gongyoResumeBookmarkBtn?.addEventListener('click', () => resumeGongyoBookmark());
homeResumeGongyoBtn?.addEventListener('click', () => resumeGongyoBookmark());
morningRoutineBtn?.addEventListener('click', () => startRoutine('morning'));
eveningRoutineBtn?.addEventListener('click', () => startRoutine('evening'));
routineGoDaimokuBtn?.addEventListener('click', () => continueRoutineToDaimoku());
resetStatsBtn?.addEventListener('click', () => {
  if(confirm('Azzerare le statistiche di pratica?')){
    localStorage.removeItem(statsKey);
    renderStats();
    updateDailyBadge();
    renderPracticeAssistant();
  }
});
completeSessionBtn?.addEventListener('click', startCompleteSession);
cancelCompleteSessionBtn?.addEventListener('click', cancelCompleteSession);
completeSessionGoDaimoku?.addEventListener('click', goCompleteSessionDaimoku);
completeSessionCancelFromGongyo?.addEventListener('click', cancelCompleteSession);
completeSessionStartDaimoku?.addEventListener('click', startCompleteSessionDaimoku);
completeSessionSkipToPrayers?.addEventListener('click', goCompleteSessionPrayers);
completeSessionFinish?.addEventListener('click', finishCompleteSession);
completeSessionBackDaimoku?.addEventListener('click', goCompleteSessionDaimoku);
saveBenefitArchiveBtn?.addEventListener('click', addBenefitArchiveEntry);
prefillBenefitArchiveBtn?.addEventListener('click', prefillBenefitArchiveFromPractice);
benefitSearchInput?.addEventListener('input', renderBenefitsArchive);
dailyStudyReadMore?.addEventListener('click', () => openStudyItem(getDailyStudyItem()));
studyDailyReadMore?.addEventListener('click', () => openStudyItem(getDailyStudyItem()));
dailyStudySave?.addEventListener('click', saveDailyStudyItem);
studyDailySave?.addEventListener('click', saveDailyStudyItem);
assistantDaimokuBtn?.addEventListener('click', () => switchView('practice'));
assistantStudyBtn?.addEventListener('click', () => switchView('study'));
document.addEventListener('visibilitychange', ()=> {
  if(document.hidden) {
    // Non fermare Daimoku/Gongyo quando lo schermo va in standby: lasciamo al sistema/Media Session la gestione audio.
    stopGongyoAuto();
    stopBellLoop();
  }
});

function updateDailyBadge(){
  const stats = getStats();
  const todayMinutes = stats.todayMinutes || 0; // ⚠️ IMPORTANTE

  const target = getDailyTarget();

  const percent = Math.min(100, Math.round((todayMinutes / target) * 100));

  const text = document.getElementById('dailyPracticeText');
  const bar = document.getElementById('dailyPracticeProgress');

  if(text) text.textContent = `${todayMinutes}/${target} min`;
  if(bar) bar.style.width = percent + '%';
}

let daimokuChartInstance = null;

function getChartRange(){
  const select = document.getElementById('daimokuChartRange');
  return Number(select?.value || 7);
}

function getDailyChartData(days){
  const stats = getStats();
  const daily = stats.daily || {};
  const data = [];

  for(let i = days - 1; i >= 0; i--){
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = dateOnlyString(d);

    data.push({
      label: d.toLocaleDateString('it-IT', { day:'2-digit', month:'2-digit' }),
      minutes: Number(daily[key] || 0)
    });
  }

  return data;
}

function renderDaimokuChart(){
  const canvas = document.getElementById('daimokuPracticeChart');
  if(!canvas || typeof Chart === 'undefined') return;

  const days = getChartRange();
  const data = getDailyChartData(days);

  if(daimokuChartInstance){
    daimokuChartInstance.destroy();
  }

  daimokuChartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels: data.map(x => x.label),
      datasets: [{
        label: 'Minuti Daimoku',
        data: data.map(x => x.minutes),
        tension: 0.35,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 }
        }
      }
    }
  });
}

function initApp(){
  setupAudioElementForBackground(daimokuAudioEl);
  setupAudioElementForBackground(gongyoAudioEl);
  renderGongyo();
  initSettings();
  initDailyMessage();
  renderTags();
  renderDictionary();
  renderStudy();
  renderDailyStudy();
  renderEvolvedFavorites();
  renderJournal();
  updateGongyoBookmarkInfo();
  renderStats();
  updateDailyBadge();
  renderDaimokuChart();
  document.getElementById('daimokuChartRange')?.addEventListener('change', renderDaimokuChart);
  renderPracticeAssistant();
  updateRoutinePanel();
  renderCompleteSession();
  renderBenefitsArchive();
  schedulePracticeReminder();
  initInstallPrompt();
  if(intentionInput) intentionInput.value = localStorage.getItem(intentionKey) || '';
  updateTimerDisplay();
  updateVoiceButtons();
  const current = document.querySelector('.view.active')?.id || 'home';
  switchView(current);
const targetInput = document.getElementById('dailyDaimokuTarget');

if(targetInput){
  targetInput.value = getDailyTarget();

  targetInput.addEventListener('change', () => {
    const value = Number(targetInput.value);
    if(value > 0){
      setDailyTarget(value);
      updateDailyBadge();
    }
  });
}

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once:true });
} else {
  initApp();
}

document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeImmersive(); });
