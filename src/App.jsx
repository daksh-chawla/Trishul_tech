import { useState } from 'react';
import portrait from './assets/portrait.webp';
const PORTRAIT = portrait;
const DEPTS={Water:'Drinking Water Department',Roads:'Public Works Department',Power:'UPCL / Energy Department',Health:'Health & Family Welfare',Other:'District Administration'};
const NAV=[['home','Home'],['assistant','Citizen Assistant'],['intel','AI Intelligence'],['dash','Grievance Dashboard'],['about','About Project']];
const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
const Demo=()=><span className="text-[11px] bg-gold/20 text-[#7a5a14] px-2 py-0.5 rounded-full">Demonstration data</span>;
const Head=({t,s})=><div className="mb-8"><h2 className="font-display text-3xl md:text-4xl font-extrabold text-char">{t}</h2><p className="mt-2 text-char/70 max-w-2xl">{s}</p><div className="mt-3 h-1 w-20 rounded bg-gradient-to-r from-bhagwa to-gold"/></div>;

function Nav(){const [o,setO]=useState(false);return(
<header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b-2 border-saffron/60 shadow-sm"><div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<button onClick={()=>go('home')} className="font-display font-extrabold text-xl text-bhagwa">PAHAD PULSE <span className="text-char">1905</span></button>
<nav className="hidden md:flex gap-1">{NAV.map(([i,l])=><button key={i} onClick={()=>go(i)} className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-saffron/10 hover:text-bhagwa border-b-2 border-transparent hover:border-saffron">{l}</button>)}</nav>
<button className="md:hidden p-2" aria-label="Menu" onClick={()=>setO(!o)}>☰</button></div>
{o&&<div className="md:hidden bg-white border-t px-4 py-2">{NAV.map(([i,l])=><button key={i} onClick={()=>{setO(false);go(i)}} className="block w-full text-left py-3 border-b border-saffron/10">{l}</button>)}</div>}</header>)}

function Hero(){const [img,setImg]=useState(PORTRAIT);const [cut,setCut]=useState(false);
const load=e=>{const f=e.target.files[0];if(!f)return;setCut(f.type==='image/png'||f.type==='image/webp');const r=new FileReader();r.onload=()=>setImg(r.result);r.readAsDataURL(f)};
return(<section id="home" className="relative overflow-hidden bg-gradient-to-br from-cream via-[#FFE7CC] to-bright/60">
<svg className="absolute bottom-0 left-0 w-full h-44 opacity-40" viewBox="0 0 800 160" preserveAspectRatio="none"><path d="M0 160V100l60-50 50 40 70-80 70 70 60-40 80 90 60-60 70 60 90-70 80 50 70-30v140z" fill="#E85D04" opacity=".5"/><path d="M0 160V120l90-50 60 50 100-70 90 80 90-60 80 70 100-60 100 60 90-40v110z" fill="#D4A64A" opacity=".5"/></svg>
<div className="relative max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
<div><p className="inline-block text-xs bg-white/80 border border-saffron/40 rounded-full px-3 py-1 mb-5">Developed as a student innovation prototype for PRAYAS 2026.</p>
<h1 className="font-display font-extrabold text-5xl md:text-6xl text-bhagwa leading-tight">PAHAD PULSE 1905</h1>
<p className="mt-4 font-display text-xl md:text-2xl font-semibold">From individual complaints to collective solutions.</p>
<p className="mt-3 text-char/75 max-w-md">An AI-powered grievance intelligence and citizen accessibility platform for Uttarakhand.</p>
<div className="mt-7 flex flex-wrap gap-3"><button onClick={()=>go('intel')} className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-bhagwa to-saffron shadow-lg hover:shadow-xl transition">Explore Platform</button>
<button onClick={()=>go('assistant')} className="px-6 py-3 rounded-xl font-semibold glass text-bhagwa hover:bg-white transition">Experience AI Assistant</button></div></div>
<div className="relative mx-auto w-full max-w-sm">
<svg className="absolute -inset-6 w-[calc(100%+3rem)] h-[calc(100%+3rem)] opacity-30" viewBox="0 0 400 300"><path d="M60 140l50-40 70-30 80 20 60 10 50 40-20 60-60 40-70 20-60-30-60 10z" fill="none" stroke="#E85D04" strokeWidth="2" strokeDasharray="5 4"/></svg>
<div className={img&&cut?"relative rounded-t-[999px] rounded-b-[28px] p-2 bg-gradient-to-t from-saffron/70 via-gold/40 to-transparent shadow-[0_0_60px_rgba(255,121,0,.45)]":"relative rounded-[28px] p-2 bg-gradient-to-br from-gold via-saffron to-bhagwa shadow-[0_0_60px_rgba(255,121,0,.45)]"}><div className={img&&cut?"aspect-[4/5] flex items-end justify-center":"rounded-[22px] overflow-hidden bg-cream aspect-[4/5] flex items-center justify-center"}>
{img?<img src={img} alt="Shri Pushkar Singh Dhami, Chief Minister of Uttarakhand" className={cut?"max-h-full w-auto object-contain drop-shadow-[0_14px_22px_rgba(36,36,36,.4)]":"w-full h-full object-cover"}/>:
<div className="p-6 text-center text-sm text-char/70"><div className="text-5xl mb-2">🏔️</div>Official portrait slot<br/>Use the official photograph. A transparent PNG cutout displays without a frame.<label className="mt-4 inline-block px-4 py-2 rounded-lg bg-bhagwa text-white cursor-pointer font-semibold">Add official portrait<input type="file" accept="image/*" className="sr-only" onChange={load}/></label></div>}</div></div>
<div className="mt-4 text-center"><p className="font-display font-bold">Shri Pushkar Singh Dhami</p><label className="text-xs underline text-bhagwa cursor-pointer mr-3">Replace photo<input type="file" accept="image/*" className="sr-only" onChange={load}/></label>{img&&<button onClick={()=>setCut(!cut)} className="text-xs underline text-bhagwa my-1">{cut?'Switch to framed photo':'Switch to cutout style'}</button>}<p className="text-sm text-char/70">Chief Minister of Uttarakhand</p><p className="text-[11px] mt-1 text-char/55">Photograph for contextual identification only. This project is not endorsed by him or the Government.</p></div></div></div></section>)}

const classify=t=>{const s=t.toLowerCase();
if(/paani|pani|water|jal|नल|पानी|पाणी/.test(s))return['Drinking Water','Water','High'];
if(/sadak|road|सड़क|bhu.?skhalan|landslide|pul|bridge/.test(s))return['Road Damage','Roads','High'];
if(/bijli|light|electric|बिजली|current/.test(s))return['Electricity','Power','Medium'];
if(/doctor|hospital|aspatal|health|दवा|अस्पताल|swasthya/.test(s))return['Healthcare Access','Health','High'];
return['General Grievance','Other','Normal']};
const SAMPLES={Hindi:'Mere gaon mein chaar din se paani nahi aa raha.',English:'The road to our village has been damaged by a landslide for two weeks.',Kumaoni:'Hamar gaonma char din hun pani nai aa raiy.',Garhwali:'Hamaru gaon mein char din se pani nee aaondu.'};
const LC={Hindi:'hi-IN',English:'en-IN',Kumaoni:'hi-IN',Garhwali:'hi-IN'};
function Assistant({onSubmit}){const [lang,setLang]=useState('Hindi');const [txt,setTxt]=useState(SAMPLES.Hindi);const [res,setRes]=useState(null);const [busy,setBusy]=useState(false);const [rec,setRec]=useState(false);const [loc,setLoc]=useState('Demonstration Village');const [done,setDone]=useState(null);const [msg,setMsg]=useState('');
const analyse=()=>{if(!txt.trim()){setMsg('Enter or speak a complaint first.');return}setMsg('');setDone(null);setBusy(true);setRes(null);setTimeout(()=>{const [c,d,p]=classify(txt);setRes({c,d,p});setBusy(false)},1100)};
const mic=()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){setMsg('Voice input is not supported in this browser. Please type your complaint.');return}
try{const r=new SR();r.lang=LC[lang];r.onresult=e=>setTxt(e.results[0][0].transcript);r.onend=()=>setRec(false);r.onerror=()=>{setRec(false);setMsg('Microphone unavailable. Please type your complaint.')};setRec(true);r.start()}catch(e){setRec(false)}};
const confirm=()=>{const id='PP-DEMO-'+Math.floor(1000+Math.random()*9000);onSubmit(res);setDone(id);setRes(null);setTxt('')};
return(<section id="assistant" className="max-w-6xl mx-auto px-4 py-16"><Head t="Citizen Voice Assistant" s="Speak or type in your own language. The assistant structures the complaint and suggests a department. Simulated AI: no live CM Helpline 1905 connection."/>
<div className="grid lg:grid-cols-2 gap-6"><div className="glass rounded-3xl p-6">
<div className="flex flex-wrap gap-2 mb-4">{Object.keys(SAMPLES).map(l=><button key={l} onClick={()=>{setLang(l);setTxt(SAMPLES[l]);setRes(null);setDone(null)}} className={"px-4 py-1.5 rounded-full text-sm font-medium "+(lang===l?'bg-bhagwa text-white':'bg-white text-bhagwa border border-saffron/40')}>{l}</button>)}</div>
<label className="text-sm font-medium">Your complaint ({lang})</label>
<textarea value={txt} onChange={e=>setTxt(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-saffron/30 p-3 bg-white/90"/>
<label className="text-sm font-medium mt-3 block">Village or town</label>
<input value={loc} onChange={e=>setLoc(e.target.value)} className="mt-1 w-full rounded-xl border border-saffron/30 p-2 bg-white/90"/>
<div className="mt-4 flex gap-3"><button onClick={mic} className={"px-4 py-3 rounded-xl border border-saffron/50 font-semibold "+(rec?'bg-red-100 text-red-700':'bg-white text-bhagwa')}>{rec?'● Listening…':'🎤 Speak'}</button>
<button onClick={analyse} className="flex-1 px-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-bhagwa to-saffron">Analyse complaint</button></div>
{msg&&<p role="alert" className="mt-3 text-sm text-red-700">{msg}</p>}</div>
<div className="glass rounded-3xl p-6 min-h-[260px]">
{busy&&<p className="animate-pulse text-bhagwa font-medium">Analysing complaint…</p>}
{!busy&&!res&&!done&&<p className="text-char/60">The structured complaint will appear here after you select Analyse complaint.</p>}
{done&&<div className="text-center py-8"><div className="text-4xl">✅</div><p className="font-display text-xl font-bold mt-2">Complaint recorded in the demo</p><p className="mt-1">Reference: <b>{done}</b></p><p className="text-sm text-char/60 mt-2">Added to the demonstration dashboard below. Nothing was sent to any government system.</p></div>}
{res&&<div><div className="grid grid-cols-2 gap-3 text-sm"><div className="bg-white/80 rounded-xl p-3"><p className="text-char/60">Original ({lang})</p><p className="mt-1">{txt}</p></div>
<div className="bg-gradient-to-br from-saffron/15 to-gold/20 rounded-xl p-3 space-y-1"><p className="text-char/60">Structured</p><p><b>Category:</b> {res.c}</p><p><b>Location:</b> {loc||'Not given'}</p><p><b>Priority:</b> {res.p}</p><p><b>Department:</b> {DEPTS[res.d]}</p></div></div>
<p className="mt-3 text-sm text-char/70">Please check the details. If they look right, confirm to submit.</p>
<div className="mt-3 flex gap-3"><button onClick={confirm} className="flex-1 py-3 rounded-xl bg-bhagwa text-white font-semibold">Confirm and submit</button><button onClick={()=>setRes(null)} className="px-4 py-3 rounded-xl border border-saffron/50">Edit</button></div></div>}
</div></div></section>)}

const CL=[['Water Supply',27,'#E85D04'],['Road Damage',18,'#FF9E36'],['Electricity',12,'#D4A64A'],['Healthcare Access',9,'#242424']];
function Intel({extra}){const data=CL.map(([n,v,c])=>[n,v+(extra[n]||0),c]);const tot=data.reduce((a,d)=>a+d[1],0);const [sel,setSel]=useState(null);let acc=0;
return(<section id="intel" className="bg-white/60 py-16"><div className="max-w-6xl mx-auto px-4"><Head t="AI Grievance Intelligence" s="Many separate complaints, one underlying cause. Clustering shows where a single fix serves many citizens."/><Demo/>
<div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">{data.map(([n,v,c])=><button key={n} onClick={()=>setSel(n)} className={"text-left glass rounded-2xl p-4 border-l-4 "+(sel===n?'ring-2 ring-bhagwa':'')} style={{borderLeftColor:c}}><p className="text-3xl font-display font-extrabold" style={{color:c}}>{v}</p><p className="text-sm">{n}</p></button>)}</div>
<div className="mt-6 grid md:grid-cols-2 gap-6"><div className="glass rounded-3xl p-6"><p className="font-semibold mb-3">Complaints by cluster</p>{data.map(([n,v,c])=><div key={n} className="mb-3"><div className="flex justify-between text-sm"><span>{n}</span><span>{v}</span></div><div className="h-3 rounded bg-saffron/10"><div className="h-3 rounded transition-all duration-700" style={{width:(v/Math.max(...data.map(d=>d[1])))*100+'%',background:c}}/></div></div>)}</div>
<div className="glass rounded-3xl p-6 flex items-center gap-6"><svg viewBox="0 0 42 42" className="w-40 h-40 -rotate-90">{data.map(([n,v,c])=>{const f=v/tot*100;const el=<circle key={n} cx="21" cy="21" r="15.9" fill="none" stroke={c} strokeWidth={sel===n?7:5} strokeDasharray={f+' '+(100-f)} strokeDashoffset={-acc}/>;acc+=f;return el})}</svg>
<div className="text-sm">{sel?<><p className="font-display text-xl font-bold">{sel}</p><p className="text-char/70 mt-1">AI grouped these reports as one recurring issue, so one coordinated response can resolve them together.</p></>:<p className="text-char/70">Select a card to focus a cluster. Total: {tot} demo complaints.</p>}</div></div></div></div></section>)}

const D={Dehradun:[105,125,'Water','Drinking water pressure','Water, Roads',14],Uttarkashi:[150,50,'Roads','Landslide-blocked roads','Roads, Power',11],Chamoli:[215,70,'Roads','Highway closures','Roads, Health',16],Tehri:[150,100,'Water','Intermittent supply','Water, Power',9],Rudraprayag:[190,105,'Roads','Link-road damage','Roads',7],'Pauri Garhwal':[175,150,'Health','Distance to doctors','Health, Water',13],Bageshwar:[265,110,'Power','Frequent power cuts','Power, Roads',6],Almora:[290,140,'Water','Spring sources drying','Water',12],Pithoragarh:[335,100,'Health','Remote clinic staffing','Health, Roads',10],Nainital:[270,185,'Power','Voltage fluctuation','Power, Water',8]};
function MapSec(){const [d,setD]=useState('Chamoli');const x=D[d];return(<section id="map" className="max-w-6xl mx-auto px-4 py-16"><Head t="Uttarakhand Grievance Map" s="Select a district marker to see its recurring problem clusters."/><Demo/>
<div className="mt-5 grid md:grid-cols-5 gap-6"><div className="md:col-span-3 glass rounded-3xl p-3"><svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="Stylised map of Uttarakhand">
<path d="M70 125l45-50 60-35 60 5 50 25 70-15 25 40-15 45-35 35-35 45-70 15-55-25-45-10-30-40z" fill="#FFE7CC" stroke="#E85D04" strokeWidth="2"/>
{Object.entries(D).map(([n,v])=><g key={n} tabIndex="0" role="button" aria-label={n} className="cursor-pointer" onClick={()=>setD(n)} onKeyDown={e=>e.key==='Enter'&&setD(n)}><circle className="mk" cx={v[0]} cy={v[1]} r="8" fill="#FF7900"/><circle cx={v[0]} cy={v[1]} r={4+v[5]/4} fill={d===n?'#E85D04':'#FF9E36'} stroke="#fff" strokeWidth="1.5"/><text x={v[0]} y={v[1]-12} fontSize="8" textAnchor="middle" fill="#242424" fontWeight={d===n?700:400}>{n}</text></g>)}</svg></div>
<div className="md:col-span-2 glass rounded-3xl p-6"><h3 className="font-display text-2xl font-bold text-bhagwa">{d}</h3>
<dl className="mt-3 space-y-2 text-sm"><div><dt className="text-char/60">Complaint categories</dt><dd>{x[4]}</dd></div><div><dt className="text-char/60">Related complaints</dt><dd className="text-2xl font-bold">{x[5]}</dd></div><div><dt className="text-char/60">Recurring problem</dt><dd>{x[3]}</dd></div><div><dt className="text-char/60">Responsible department</dt><dd>{DEPTS[x[2]]}</dd></div></dl></div></div></section>)}

function Dash({n,newN}){const [f,setF]=useState('All');const base={Water:30,Roads:21,Power:14,Health:11,Other:6};const dep=Object.keys(base).map(k=>[k,base[k]+(newN[k]||0)]);const shown=f==='All'?dep:dep.filter(d=>d[0]===f);const tot=shown.reduce((a,d)=>a+d[1],0);const res=Math.round(tot*.58),pen=tot-res;
return(<section id="dash" className="bg-white/60 py-16"><div className="max-w-6xl mx-auto px-4"><Head t="Administrative Dashboard" s="A simple officer view: what is pending, what is recurring and what citizens say."/><Demo/>
<div className="mt-4 flex flex-wrap gap-2">{['All',...Object.keys(base)].map(k=><button key={k} onClick={()=>setF(k)} className={"px-3 py-1.5 rounded-full text-sm "+(f===k?'bg-bhagwa text-white':'bg-white border border-saffron/40 text-bhagwa')}>{k==='All'?'All departments':DEPTS[k]}</button>)}</div>
<div className="mt-5 grid grid-cols-2 md:grid-cols-5 gap-4">{[['Total complaints',tot],['Pending',pen],['Resolved',res],['Recurring clusters',f==='All'?4:1],['Citizen satisfaction',Math.round(res*.8/Math.max(res,1)*100)+'%']].map(([l,v])=><div key={l} className="glass rounded-2xl p-4"><p className="text-2xl font-display font-extrabold text-bhagwa">{v}</p><p className="text-xs text-char/70">{l}</p></div>)}</div>
<div className="mt-6 glass rounded-3xl p-6"><p className="font-semibold mb-3">Department-wise distribution</p><div className="flex items-end gap-4 h-44">{shown.map(([k,v])=><div key={k} className="flex-1 flex flex-col items-center justify-end h-full"><span className="text-sm font-semibold">{v}</span><div className="w-full rounded-t-lg bg-gradient-to-t from-bhagwa to-bright transition-all duration-700" style={{height:v/70*100+'%'}}/><span className="text-xs mt-1 text-center">{k}</span></div>)}</div></div></div></section>)}

function Verify({onFlag,flags}){const [neg,setNeg]=useState(0);const [last,setLast]=useState('');
const ans=a=>{setLast(a);if(a!=='yes'){const n=neg+1;setNeg(n);if(n===3)onFlag()}};
return(<section id="verify" className="max-w-6xl mx-auto px-4 py-16"><Head t="Resolution Verification" s="An officer marked the complaint below as resolved. The citizen has the final say."/>
<div className="grid md:grid-cols-2 gap-6"><div className="glass rounded-3xl p-6"><p className="text-sm text-char/60">Complaint PP-DEMO-0412 · Drinking Water · Marked resolved by officer</p><p className="font-display text-xl font-bold mt-3">Has your problem actually been resolved?</p>
<div className="mt-4 grid gap-2">{[['yes','Yes, resolved'],['no','No, still facing the problem'],['review','Request further review']].map(([k,l])=><button key={k} onClick={()=>ans(k)} className="text-left px-4 py-3 rounded-xl bg-white border border-saffron/40 hover:bg-saffron/10 font-medium">{l}</button>)}</div>
{last&&<p role="status" className="mt-3 text-sm">{last==='yes'?'Thank you. The complaint stays closed.':'Feedback recorded. The complaint is reopened for review.'}</p>}</div>
<div className="glass rounded-3xl p-6"><p className="font-semibold">Escalation rule (demo)</p><p className="text-sm text-char/70 mt-1">Three negative responses on one complaint flag it for administrative attention.</p>
<div className="mt-4 h-3 rounded bg-saffron/10"><div className="h-3 rounded bg-bhagwa transition-all" style={{width:Math.min(neg,3)/3*100+'%'}}/></div><p className="text-sm mt-2">Negative responses: {neg} / 3</p>
{flags>0&&<div role="alert" className="mt-4 p-4 rounded-xl bg-red-50 border border-red-300 text-red-800 font-medium">⚠ Flagged for administrative attention: residents report the issue is not fixed.</div>}
{neg>0&&<button onClick={()=>{setNeg(0);setLast('')}} className="mt-4 text-sm underline text-bhagwa">Reset demo</button>}</div></div></section>)}

function About(){return(<section id="about" className="bg-white/60 py-16"><div className="max-w-6xl mx-auto px-4"><Head t="About the Project" s="Built to make CM Helpline 1905 simpler, smarter and more accessible."/>
<div className="grid md:grid-cols-3 gap-5">{[['The friction','Citizens describe the same problem separately, in different words and languages, and rarely learn whether it was truly fixed.'],['The concept','Voice and text intake in four languages, AI clustering of related complaints, a district map, and citizen-confirmed resolution.'],['What this is not','A working integration. It uses simulated AI and illustrative data, and makes no claim of access to CM Helpline 1905 or any government API.']].map(([t,s])=><div key={t} className="glass rounded-3xl p-6"><h3 className="font-display font-bold text-lg text-bhagwa">{t}</h3><p className="text-sm mt-2 text-char/75">{s}</p></div>)}</div></div></section>)}

function Footer(){return(<footer className="bg-gradient-to-br from-bhagwa to-saffron text-white"><div className="max-w-6xl mx-auto px-4 py-10"><p className="font-display font-extrabold text-2xl">PAHAD PULSE 1905</p><p className="mt-1">Technology for the people of Devbhoomi Uttarakhand.</p><p className="mt-1 italic">“From Individual Complaints to Collective Solutions.”</p>
<p className="mt-6 text-xs text-white/90 max-w-3xl border-t border-white/30 pt-4">An independent student prototype developed for PRAYAS 2026. Not an official Government of Uttarakhand application. All displayed complaint records and analytics are illustrative.</p></div></footer>)}

function App(){const [extra,setExtra]=useState({});const [newN,setNewN]=useState({});const [flags,setFlags]=useState(0);
const sub=r=>{const m={Water:'Water Supply',Roads:'Road Damage',Power:'Electricity',Health:'Healthcare Access'}[r.d];setNewN(o=>({...o,[r.d]:(o[r.d]||0)+1}));if(m)setExtra(o=>({...o,[m]:(o[m]||0)+1}))};
return(<><Nav/><Hero/><Assistant onSubmit={sub}/><Intel extra={extra}/><MapSec/><Dash newN={newN}/><Verify flags={flags} onFlag={()=>setFlags(f=>f+1)}/><About/><Footer/></>)}
export default App;
