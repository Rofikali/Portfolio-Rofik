// Node 22, no dependencies. Status comes from reviewed milestone records, not LLM guesses.
import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const statePath = resolve(root, 'docs/engineering-state.json')
const files = ['next.md','AGENTS.md','skills.md','README.md','portfolio/README.md','portfolio/docs/status-and-evidence.md']
const mode = process.argv[2] || '--check'
if (!['--check','--write','--reconcile'].includes(mode)) throw Error('Usage: node scripts/docs-sync.mjs --check|--write|--reconcile')
function validateState(s){
 if(s.version!==1||s.repository!=="Rofikali/Portfolio-Rofik"||!Array.isArray(s.milestones)||!Array.isArray(s.risks))throw Error("Invalid repository/status schema");
 const seen=new Set(),prs=new Set(),validStates=new Set(["MERGED","IN_PROGRESS","PR_OPEN","READY","PLANNED","BLOCKED","DEFERRED"]),validLanes=new Set(["DONE","NOW","NEXT","LATER","BLOCKED"]);
 for(const m of s.milestones){
  if(!/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)*-[0-9]+$/.test(m.id)||seen.has(m.id))throw Error("Invalid or duplicate milestone: "+m.id);
  seen.add(m.id);
  if(!validStates.has(m.state)||!validLanes.has(m.lane))throw Error("Invalid status: "+m.id);
  if(![m.title,m.summary].every(x=>typeof x==="string"&&x.length<360&&!/[|\r\n]/.test(x)))throw Error("Unsafe milestone text "+m.id);
  if(m.pr!=null){if(!Number.isInteger(m.pr)||m.pr<1||prs.has(m.pr))throw Error("Duplicate/invalid PR "+m.id);prs.add(m.pr);}
  if(m.state==="MERGED"&&(!m.pr||!/^[0-9a-f]{40}$/.test(m.merge_sha||"")||m.lane!=="DONE"))throw Error("MERGED needs proven PR SHA/DONE: "+m.id);
  if(m.state!=="MERGED"&&m.merge_sha)throw Error("Unmerged record carries merge SHA: "+m.id);
 }
 if(!/^[a-f0-9]{40}$/.test(s.verified_main?.sha||""))throw Error("No verified-main evidence snapshot");
}
function sectionFor(path,s){
 const done=s.milestones.filter(m=>m.state==="MERGED"),open=s.milestones.filter(m=>m.state!=="MERGED");
 const current=open.filter(m=>m.lane==="NOW"),next=open.filter(m=>m.lane==="NEXT"),blocked=open.filter(m=>m.lane==="BLOCKED");
 const pr=m=>m.pr?"[PR #"+m.pr+"](https://github.com/"+s.repository+"/pull/"+m.pr+")":"—";
 const snapshot="**Verified workflow snapshot ("+s.recorded_on+"):** main `"+s.verified_main.sha.slice(0,12)+"` · [CI]("+s.verified_main.ci+") · [Pages]("+s.verified_main.pages+"). "+s.verified_main.note;
 const tableRow=m=>"| "+m.id+" | "+m.title+" | **"+m.state+"** | "+m.summary+" | "+pr(m)+" |";
 const risk=s.risks.map(r=>"- **"+r.severity+" "+r.id+":** "+r.statement);
 const groups=Object.fromEntries(["NOW","NEXT","BLOCKED","LATER"].map(l=>[l,open.filter(m=>m.lane===l)]));
 if(path==="next.md")return [
  snapshot,"","Generated status from [docs/engineering-state.json](docs/engineering-state.json). **Not a live API or scheduled agent.** Always check actual PR/CI/main before proceeding.","",
  "## NOW / NEXT / BLOCKED / LATER",
  "| Milestone | Work | State | Next action / limitation | PR |","| --- | --- | --- | --- | --- |",
  ...groups.NOW.map(tableRow),...groups.NEXT.map(tableRow),...groups.BLOCKED.map(tableRow),...groups.LATER.map(tableRow),
  "","## GitHub-verified merges (MERGED does not equal RELEASED)",
  "| Milestone | Work | State | Verified scope | PR |","| --- | --- | --- | --- | --- |",...done.map(tableRow),
  "","## Open risks — no automatic waiver",...risk,
  "","## Go-ahead contract","Reconcile PRs, checks and main. Register/update one milestone in the manifest and run `node scripts/docs-sync.mjs --write`; CI checks the generated sections. A trusted post-merge workflow may propose a **draft docs PR**, never merge or deploy. [AGENTS](AGENTS.md) · [Skills](skills.md) · [Runbook](docs/docs-sync-contract.md)."
 ].join("\n");
 if(path==="AGENTS.md")return [
  "**NOW:** "+current.map(m=>m.id+" ("+m.state+")").join(", ")+". **NEXT:** "+next.map(m=>m.id).join(", ")+".",
  "",
  "Every substantive app/test/dependency/workflow milestone MUST update `docs/engineering-state.json`, then run `node scripts/docs-sync.mjs --write` and `--check`. CI rejects stale generated blocks or a relevant code PR that omits the manifest. Generated sections of `next.md`, `AGENTS.md`, `skills.md`, both READMEs and the evidence register are **not hand-edited**. Source-specific HLD/LLD/ADR/security/test docs still require human engineering judgment.",
  "",
  "After a main merge the trusted reconciliation workflow verifies registered PR merge SHAs and can open a **draft docs PR only**; it cannot merge, deploy, accept risk, spend, publish personal data, create fictitious proof or choose licenses. [Full runbook](docs/docs-sync-contract.md).",
  "",
  "**Blocked:** "+blocked.map(m=>m.id).join(", ")+". Passing CI is not proof of clean audit or production readiness."
 ].join("\n");
 if(path==="skills.md")return [
  "**Skill 13 — Deterministic milestone documentation synchronization**",
  "",
  "1. Fetch actual main/PRs/checks; record milestone ID, scope, state, PR and *GitHub-verified* merge SHA in `docs/engineering-state.json`.",
  "2. Run `node scripts/docs-sync.mjs --write` and `node scripts/docs-sync.mjs --check`; inspect diffs to `next.md`, `AGENTS.md`, `skills.md`, both READMEs and the evidence register.",
  "3. PR CI requires manifest updates for substantive source, tests, workflows and dependency changes. No generated section editing by hand.",
  "4. After merge, a main-only bot **proposes** a draft status PR when registered PR merge facts changed; human must review, verify checks and approve merge/deploy.",
  "5. HLD/LLD/ADRs, a11y, security remediation and CA/MBA/management claims still require independent evidence and relevant tests.",
  "",
  "**NOW:** "+current.map(m=>m.id+" — "+m.title).join("; ")+". **NEXT:** "+next.map(m=>m.id).join(", ")+". [Runbook](docs/docs-sync-contract.md)."
 ].join("\n");
 if(path==="README.md")return [
   snapshot,"",
   "**Active:** "+current.map(m=>m.id+" — "+m.title+" ("+m.state+")").join("; ")+".",
   "",
   "**Last merged:** "+done.slice(-3).map(m=>m.id+" "+pr(m)+" `"+m.merge_sha.slice(0,12)+"`").join("; ")+".",
   "",
   "**Unresolved:** "+blocked.map(m=>m.id+" — "+m.summary).join("; ")+".",
   "",
   "This status is generated from a reviewed manifest, not inferred from running code or live visitors. [Full board](next.md) · [Sync runbook](docs/docs-sync-contract.md)."
 ].join("\n");
 if(path==="portfolio/README.md")return [
  snapshot,"",
  "**NOW:** "+current.map(m=>m.id+" — "+m.title).join("; ")+". **NEXT:** "+next.map(m=>m.id).join(", ")+".",
  "",
  "**Last merged:** "+done.slice(-3).map(m=>m.id+" "+pr(m)).join("; ")+". **Blocked:** "+blocked.map(m=>m.id).join(", ")+".",
  "",
  "Edit `../docs/engineering-state.json` and run `node ../scripts/docs-sync.mjs --write` from this directory. This is milestone bookkeeping, not evidence of code tests, production accessibility or a clean audit. [Runbook](../docs/docs-sync-contract.md)."
 ].join("\n");
 if(path==="portfolio/docs/status-and-evidence.md")return [
  snapshot,"",
  "**Current registered work:** "+current.map(m=>m.id+" "+m.state).join(", ")+".",
  "",
  "| Verified merge | Pull request | Merge SHA |","| --- | --- | --- |",...done.map(m=>"| "+m.id+" | "+pr(m)+" | `"+m.merge_sha.slice(0,12)+"` |"),
  "","**Open risks (not automatically resolved):**",...risk,
  "","This generated section supersedes dated historical tables below. A PR merge SHA does not certify production release, browser behavior, security, conversions or financial results. [Runbook](../../docs/docs-sync-contract.md)."
 ].join("\n");
 throw Error("Unknown managed file "+path);
}
function patchManaged(path,text,s){
 const start="<!-- docs-sync:begin -->",end="<!-- docs-sync:end -->",content=start+"\n"+sectionFor(path,s)+"\n"+end;
 const a=text.indexOf(start),b=text.indexOf(end);
 if((a<0)!==(b<0)||a>=0&&(b<a||text.indexOf(start,a+start.length)>=0))throw Error("Invalid managed markers "+path);
 if(a>=0)return text.slice(0,a)+content+text.slice(b+end.length);
 if(path==="next.md")return "# Portfolio-Rofik — Live NOW / NEXT / LATER\n\n**Managed status:** edit `docs/engineering-state.json`, then run `node scripts/docs-sync.mjs --write`. No automatic merge or deployment authority.\n\n"+content+"\n";
 return text.trimEnd()+"\n\n## Generated milestone state\n\n"+content+"\n";
}
const s = JSON.parse(await readFile(statePath, 'utf8'))
validateState(s)
if (mode === '--reconcile') {
 const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN
 if (!token) throw Error('Missing GitHub token for verified merge reconciliation')
 let updated = false
 for (const m of s.milestones) {
  if (!m.pr || m.state === 'MERGED') continue
  const res = await fetch('https://api.github.com/repos/'+s.repository+'/pulls/'+m.pr,{headers:{Authorization:'Bearer '+token,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}})
  if (!res.ok) throw Error('Cannot verify PR '+m.pr+': HTTP '+res.status)
  const p = await res.json()
  if (p.merged_at && /^[a-f0-9]{40}$/.test(p.merge_commit_sha || '')) {
   m.state='MERGED';m.lane='DONE';m.merge_sha=p.merge_commit_sha;updated=true
   console.log('GitHub verified merge: '+m.id+' at '+m.merge_sha.slice(0,12))
  }
 }
 if (updated) {
  const ready=s.milestones.find(m=>m.state==='READY'&&m.lane==='NEXT')
  if (ready&&!s.milestones.some(m=>m.lane==='NOW'&&m.state!=='MERGED')) ready.lane='NOW'
  s.recorded_on=new Date().toISOString().slice(0,10)
  validateState(s)
  await writeFile(statePath, JSON.stringify(s,null,2)+'\n')
 }
}
let stale=0
for (const path of files) {
 const filename=resolve(root,path),old=await readFile(filename,'utf8'),expected=patchManaged(path,old,s)
 if (expected===old) continue
 stale++
 if (mode==='--check') console.error('STALE DOC '+path+' — run node scripts/docs-sync.mjs --write')
 else {await writeFile(filename,expected);console.log('SYNCED '+path)}
}
if (mode==='--check'&&stale) process.exitCode=1
else console.log('docs-sync '+mode+': '+stale+' changed, '+s.milestones.length+' registered milestones')
