/* =====================================================================
   Conjugation drill: presente, futuro, pretérito and presente de subjuntivo.
   Regular and irregular verbs are mixed in the same round.
   - Regular verbs are computed from the infinitive (see regForms).
   - Irregular verbs list their forms. `fs` is the irregular future stem
     (tendr-, dir-, …); verbs without `fs` use the infinitive as the future stem.
   - `note` is a short reminder about the stem change, shown in the explanation.
   Add a verb: push one more object to VERBS. Forms are in the order
   yo, tú, él/ella/usted, nosotros, vosotros, ellos/ellas/ustedes.
   ===================================================================== */

const CONJ_TENSES = [
  {k:"pres", es:"Presente",                en:"Present"},
  {k:"fut",  es:"Futuro",                  en:"Future"},
  {k:"pret", es:"Pretérito",               en:"Preterite"},
  {k:"subj", es:"Subjuntivo (presente)",   en:"Present subjunctive"}
];
const CONJ_PERSONS = ["yo","tú","él / ella / usted","nosotros","vosotros","ellos / ellas / ustedes"];

const VERBS = [
  /* regular */
  {inf:"hablar",   en:"to speak"},
  {inf:"comer",    en:"to eat"},
  {inf:"vivir",    en:"to live"},
  {inf:"escribir", en:"to write"},
  {inf:"estudiar", en:"to study"},
  {inf:"trabajar", en:"to work"},
  /* irregular */
  {inf:"ser", en:"to be (identity, traits)", irr:true,
   pres:["soy","eres","es","somos","sois","son"],
   pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],
   subj:["sea","seas","sea","seamos","seáis","sean"]},
  {inf:"estar", en:"to be (location, state)", irr:true,
   pres:["estoy","estás","está","estamos","estáis","están"],
   pret:["estuve","estuviste","estuvo","estuvimos","estuvisteis","estuvieron"],
   subj:["esté","estés","esté","estemos","estéis","estén"]},
  {inf:"ir", en:"to go", irr:true,
   pres:["voy","vas","va","vamos","vais","van"],
   pret:["fui","fuiste","fue","fuimos","fuisteis","fueron"],
   subj:["vaya","vayas","vaya","vayamos","vayáis","vayan"]},
  {inf:"tener", en:"to have", irr:true, fs:"tendr",
   pres:["tengo","tienes","tiene","tenemos","tenéis","tienen"],
   pret:["tuve","tuviste","tuvo","tuvimos","tuvisteis","tuvieron"],
   subj:["tenga","tengas","tenga","tengamos","tengáis","tengan"]},
  {inf:"hacer", en:"to do / make", irr:true, fs:"har",
   pres:["hago","haces","hace","hacemos","hacéis","hacen"],
   pret:["hice","hiciste","hizo","hicimos","hicisteis","hicieron"],
   subj:["haga","hagas","haga","hagamos","hagáis","hagan"]},
  {inf:"decir", en:"to say / tell", irr:true, fs:"dir",
   pres:["digo","dices","dice","decimos","decís","dicen"],
   pret:["dije","dijiste","dijo","dijimos","dijisteis","dijeron"],
   subj:["diga","digas","diga","digamos","digáis","digan"]},
  {inf:"poder", en:"can / to be able", irr:true, fs:"podr",
   pres:["puedo","puedes","puede","podemos","podéis","pueden"],
   pret:["pude","pudiste","pudo","pudimos","pudisteis","pudieron"],
   subj:["pueda","puedas","pueda","podamos","podáis","puedan"],
   note:"o→ue en presente y subjuntivo"},
  {inf:"poner", en:"to put", irr:true, fs:"pondr",
   pres:["pongo","pones","pone","ponemos","ponéis","ponen"],
   pret:["puse","pusiste","puso","pusimos","pusisteis","pusieron"],
   subj:["ponga","pongas","ponga","pongamos","pongáis","pongan"]},
  {inf:"saber", en:"to know (facts)", irr:true, fs:"sabr",
   pres:["sé","sabes","sabe","sabemos","sabéis","saben"],
   pret:["supe","supiste","supo","supimos","supisteis","supieron"],
   subj:["sepa","sepas","sepa","sepamos","sepáis","sepan"]},
  {inf:"salir", en:"to leave / go out", irr:true, fs:"saldr",
   pres:["salgo","sales","sale","salimos","salís","salen"],
   pret:["salí","saliste","salió","salimos","salisteis","salieron"],
   subj:["salga","salgas","salga","salgamos","salgáis","salgan"]},
  {inf:"venir", en:"to come", irr:true, fs:"vendr",
   pres:["vengo","vienes","viene","venimos","venís","vienen"],
   pret:["vine","viniste","vino","vinimos","vinisteis","vinieron"],
   subj:["venga","vengas","venga","vengamos","vengáis","vengan"]},
  {inf:"querer", en:"to want / love", irr:true, fs:"querr",
   pres:["quiero","quieres","quiere","queremos","queréis","quieren"],
   pret:["quise","quisiste","quiso","quisimos","quisisteis","quisieron"],
   subj:["quiera","quieras","quiera","queramos","queráis","quieran"],
   note:"e→ie en presente y subjuntivo"},
  {inf:"ver", en:"to see", irr:true,
   pres:["veo","ves","ve","vemos","veis","ven"],
   pret:["vi","viste","vio","vimos","visteis","vieron"],
   subj:["vea","veas","vea","veamos","veáis","vean"]},
  {inf:"dar", en:"to give", irr:true,
   pres:["doy","das","da","damos","dais","dan"],
   pret:["di","diste","dio","dimos","disteis","dieron"],
   subj:["dé","des","dé","demos","deis","den"]},
  {inf:"traer", en:"to bring", irr:true,
   pres:["traigo","traes","trae","traemos","traéis","traen"],
   pret:["traje","trajiste","trajo","trajimos","trajisteis","trajeron"],
   subj:["traiga","traigas","traiga","traigamos","traigáis","traigan"]},
  {inf:"pensar", en:"to think", irr:true,
   pres:["pienso","piensas","piensa","pensamos","pensáis","piensan"],
   pret:["pensé","pensaste","pensó","pensamos","pensasteis","pensaron"],
   subj:["piense","pienses","piense","pensemos","penséis","piensen"],
   note:"e→ie en presente y subjuntivo"},
  {inf:"volver", en:"to return", irr:true,
   pres:["vuelvo","vuelves","vuelve","volvemos","volvéis","vuelven"],
   pret:["volví","volviste","volvió","volvimos","volvisteis","volvieron"],
   subj:["vuelva","vuelvas","vuelva","volvamos","volváis","vuelvan"],
   note:"o→ue en presente y subjuntivo"},
  {inf:"pedir", en:"to ask for / order", irr:true,
   pres:["pido","pides","pide","pedimos","pedís","piden"],
   pret:["pedí","pediste","pidió","pedimos","pedisteis","pidieron"],
   subj:["pida","pidas","pida","pidamos","pidáis","pidan"],
   note:"e→i en presente, pretérito y subjuntivo"},
  {inf:"dormir", en:"to sleep", irr:true,
   pres:["duermo","duermes","duerme","dormimos","dormís","duermen"],
   pret:["dormí","dormiste","durmió","dormimos","dormisteis","durmieron"],
   subj:["duerma","duermas","duerma","durmamos","durmáis","duerman"],
   note:"o→ue en presente y subjuntivo; o→u en pretérito"}
];

/* Regular forms, built from the infinitive */
function regForms(inf,k){
  const stem=inf.slice(0,-2), ar=/ar$/.test(inf);
  if(k==="fut") return ["é","ás","á","emos","éis","án"].map(e=>inf+e);
  if(k==="pres") return (ar?["o","as","a","amos","áis","an"]:/er$/.test(inf)?["o","es","e","emos","éis","en"]:["o","es","e","imos","ís","en"]).map(e=>stem+e);
  if(k==="pret") return (ar?["é","aste","ó","amos","asteis","aron"]:["í","iste","ió","imos","isteis","ieron"]).map(e=>stem+e);
  return (ar?["e","es","e","emos","éis","en"]:["a","as","a","amos","áis","an"]).map(e=>stem+e); // subj
}
/* The forms of verb v in tense k (6 forms) */
function conjForms(v,k){
  if(k==="fut") return ["é","ás","á","emos","éis","án"].map(e=>(v.fs||v.inf)+e);
  return v[k]||regForms(v.inf,k);
}
/* A regularized form (what a student might write), if it is a real word-shaped error */
function regularized(v,k,i){
  if(!v.irr) return null;
  const f=regForms(v.inf,k)[i];
  return f&&f.length>=4?f:null;
}

function conjQs(n){
  const pool=[];
  VERBS.forEach(v=>CONJ_TENSES.forEach(t=>{
    const f=conjForms(v,t.k);
    CONJ_PERSONS.forEach((p,i)=>pool.push({v,t,i,f}));
  }));
  return pickN(pool,n).map(conjQ);
}
function conjQ({v,t,i,f}){
  const correct=f[i];
  const reg=regularized(v,t.k,i);
  const sameTense=f.filter((_,j)=>j!==i);
  const otherTenses=CONJ_TENSES.filter(x=>x.k!==t.k).map(x=>conjForms(v,x.k)[i]);
  const cand=[reg,...shuffle(sameTense),...otherTenses].filter(x=>x&&x!==correct);
  const ds=uniq(cand,3);
  const q=`${L(t.es,t.en)} · <b>${CONJ_PERSONS[i]}</b> + <b>${v.inf}</b> <span class="muted small">(${v.en})</span>`;
  let e;
  if(t.k==="fut"&&v.fs) e=L(`Futuro con raíz irregular: <b>${v.fs}</b>- + terminación → <b>${correct}</b>.`,`Irregular future stem: <b>${v.fs}</b>- + ending → <b>${correct}</b>.`);
  else if(v.irr) e=L(`<b>${v.inf}</b> es irregular en este tiempo: <b>${correct}</b>.`,`<b>${v.inf}</b> is irregular in this tense: <b>${correct}</b>.`);
  else e=L(`Verbo regular: raíz + terminación → <b>${correct}</b>.`,`Regular verb: stem + ending → <b>${correct}</b>.`);
  if(v.note&&t.k!=="fut") e+=" "+v.note+".";
  return mc(q,[correct,...ds],e,"conj");
}
