// PR guard; deterministic and read-only, no network/token needed.
import { execFileSync } from 'node:child_process'
const sha=process.env.DOCS_BASE_SHA
if(!sha){console.log('PR docs guard skipped outside pull request');process.exit(0)}
if(!/^[a-f0-9]{40}$/.test(sha))throw Error('Invalid DOCS_BASE_SHA')
const paths=execFileSync('git',['diff','--name-only',sha,'HEAD'],{encoding:'utf8'}).split('\n').filter(Boolean)
const relevant=paths.filter(p=>p.startsWith('portfolio/src/')||p.startsWith('portfolio/e2e/')||p.startsWith('portfolio/tests/')||p.startsWith('portfolio/scripts/')||p.startsWith('.github/workflows/')||['portfolio/package.json','portfolio/pnpm-lock.yaml','portfolio/nuxt.config.ts','portfolio/content.config.ts','portfolio/playwright.config.ts'].includes(p))
if(relevant.length&&!paths.includes('docs/engineering-state.json')){console.error('Changed production/test/workflow files require docs/engineering-state.json milestone record:',relevant);process.exitCode=1}
else console.log('Milestone PR guard PASS: '+relevant.length+' relevant files; '+(paths.includes('docs/engineering-state.json')?'manifest updated':'docs-only change'))
