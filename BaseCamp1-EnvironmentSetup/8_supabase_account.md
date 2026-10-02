<div align="center">

<img src="assets/genai-coaching-logo.svg" width="360" alt="GenAI Coaching — AI Accelerator Hub" />

# Creating Your Supabase Account

> **GenAI Coaching × AI Accelerator Hub** — *White / Black / Gold Veranda* ` #0A0A0A ` ` #C9A86A ` ` #FFFFFF `  
> *Enterprise Corporate Training — Production-Grade • Weekend Quality 10-13 / 15-18 • Weekday 08:00-10:00*

</div>

---

> **GenAI Journey** · [← Prev](7_claude_code_opencode_new.md) · [Next →](9_llm_settings.md)
>

## 📑 Contents
- [An online database, free to start](#an-online-database-free-to-start)
- [Sign Up](#sign-up)
  - [Option A — Email and password](#option-a-email-and-password)
  - [Option B — Continue with GitHub](#option-b-continue-with-github)
- [Create an Organization](#create-an-organization)
- [Create Your First Project](#create-your-first-project)
- [Look Around & Prove It Works](#look-around-prove-it-works)
- [Find Your Project URL & API Keys](#find-your-project-url-api-keys)
- [Free Plan Housekeeping](#free-plan-housekeeping)
- [Keeping Your Keys Safe](#keeping-your-keys-safe)
- [If Something Goes Wrong](#if-something-goes-wrong)
- [Supabase Setup — Final Check](#supabase-setup-final-check)
  - [Build & Verify — Supabase — Project URL](#build-verify-supabase-project-url)

---


> Supabase gives you a free, hosted PostgreSQL database that lives online — plus ready-made login, file storage, and an automatic data API on top of it. It's the natural next step after a database that lives only on your laptop: an online database keeps working when your app goes live. The account takes about fifteen minutes to set up, so do it now rather than during a live session.

---


> [!TIP]
> **Corporate Tip — Deploy Ready**  
> Use this module as a standalone micro-module in your team stand-up. Have each learner demo the step live — corporate cohorts retain **3× more** when they teach back immediately. Pair with *ThinkPad TrackPoint* (hands on home row) + *Arc Weekend Space* (isolate work tabs).


Base Camp 1 · Week 1 · Database Account

# Creating Your Supabase Account

Supabase gives you a free, hosted PostgreSQL database that lives online — plus ready-made login, file storage, and an automatic data API on top of it. It's the natural next step after a database that lives only on your laptop: an online database keeps working when your app goes live. The account takes about fifteen minutes to set up, so do it now rather than during a live session.

🗄️ Hosted PostgreSQL ⏱ ~15 minutes Free plan is all you need

Why this matters

## An online database, free to start

By the end of this page you'll have a Supabase account, an **organization** (the container that holds your projects), and one **project** — your own PostgreSQL database with its own web address and API keys. Here's what the **Free plan** includes:

What you get| Free plan limit  
---|---  
**Free projects**|  2 active projects (paused projects don't count toward the limit)  
**Database size**|  500 MB per project  
**File storage**|  1 GB  
**Monthly active users**|  50,000  
**Inactivity**|  A project with no activity for 1 week is paused (you can restore it — see below)  
  
Have these ready before you start:

  * ✓ **A personal email address** you check regularly — or the GitHub account from the previous guide, if you'd rather sign in with it.
  * ✓ **A password manager** (or a safe place). You'll create a database password and collect API keys that must not be lost or shared.

Stay on the Free plan The Free plan is plenty for learning and class projects. If any screen asks you to upgrade or enter payment details, stop and check that the **Free** plan is selected. 


> [!NOTE]
> **Quick Check — An online database, free to start · +25 XP** 🎯
>
> **Q1: Supabase Free plan includes:**
>
> - [ ] 2 active projects, 500 MB DB, 1 GB storage, 50k MAU
> - [ ] Unlimited everything
> - [ ] No free plan
> - [ ] Only 1 project, 10 MB
>
> **Q2: Which detail is also in the "An online database, free to start" section?**
>
> - [ ] Overview table: 2 active projects, 500 MB, 1 GB, 50k MAU.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — An online database, free to start</summary>
>
> - **Q1: Supabase Free plan includes:** → *2 active projects, 500 MB DB, 1 GB storage, 50k MAU* — Overview table: 2 active projects, 500 MB, 1 GB, 50k MAU.
> - **Q2: Which detail is also in the "An online database, free to start" section?** → *Overview table: 2 active projects, 500 MB, 1 GB, 50k MAU.* — Overview table: 2 active projects, 500 MB, 1 GB, 50k MAU.
>
> </details>


## Sign Up

sign-up pageCopy
[code] 
    https://supabase.com/dashboard/sign-up
[/code]

The sign-up page offers a few options. Pick **one** :

### Option A — Email and password

  1. **Enter your email address and a strong password** Let your password manager generate the password. Make it unique — don't reuse one from another site.
  2. **Click "Sign up"** By continuing you agree to Supabase's Terms of Service and Privacy Policy.
  3. **Confirm your email if asked** Supabase may email you a confirmation link. Open it to activate the account — check spam or promotions if it doesn't arrive within a couple of minutes.
  4. **Sign in** Return to `supabase.com/dashboard` and sign in with the same email and password.

### Option B — Continue with GitHub

  1. **Click "Continue with GitHub"** Sign in to GitHub if you're asked to — use the account from the previous guide.
  2. **Authorize Supabase** GitHub shows what Supabase can access. Review it, then approve.
  3. **You land in the Supabase dashboard** No separate password to create or remember.

Which option should I pick? **GitHub** is the quickest, and you'll use GitHub in the course anyway. The trade-off: your Supabase access then depends on your GitHub account, so keep your GitHub two-factor recovery codes safe. **Email and password** keeps the two accounts independent. Either works for everything that follows. 

Ignore the other buttons You may also see **Continue with SSO** (for companies with their own single sign-on) and **Continue with ChatGPT**. You don't need either for the fellowship. 


> [!NOTE]
> **Quick Check — Sign Up · +25 XP** 🎯
>
> **Q1: Sign up via:**
>
> - [ ] GitHub OAuth or email at supabase.com
> - [ ] Only AWS console
> - [ ] Only VS Code
> - [ ] Only phone call
>
> **Q2: Which detail is also in the "Sign Up" section?**
>
> - [ ] Signup section offers GitHub/email.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Sign Up</summary>
>
> - **Q1: Sign up via:** → *GitHub OAuth or email at supabase.com* — Signup section offers GitHub/email.
> - **Q2: Which detail is also in the "Sign Up" section?** → *Signup section offers GitHub/email.* — Signup section offers GitHub/email.
>
> </details>


## Create an Organization

Supabase groups projects inside an **organization**. On your first visit it asks you to create one.

  1. **Enter an organization name** Your name works well, e.g. `Asha Rao`, or `AI Accelerator Hub-fellowship`.
  2. **Choose the type that fits you****Personal** (or the closest option offered) is right for coursework.
  3. **Choose the Free plan** Leave it on Free unless you have a specific reason to change it.
  4. **Click "Create organization"**

If Supabase already created an organization for you when you signed in, you can use that one — skip ahead to Step 3. 


> [!NOTE]
> **Quick Check — Create an Organization · +25 XP** 🎯
>
> **Q1: Organization is:**
>
> - [ ] Container that holds your projects
> - [ ] A Python package
> - [ ] A VS Code theme
> - [ ] A billing card
>
> **Q2: Which detail is also in the "Create an Organization" section?**
>
> - [ ] Org section says organization holds projects.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Create an Organization</summary>
>
> - **Q1: Organization is:** → *Container that holds your projects* — Org section says organization holds projects.
> - **Q2: Which detail is also in the "Create an Organization" section?** → *Org section says organization holds projects.* — Org section says organization holds projects.
>
> </details>


## Create Your First Project

A **project** is one PostgreSQL database plus its API, login system and file storage. Use _New project_ in the dashboard, and select your organization if asked.

  1. **Project name** Something you'll recognize, e.g. `AI Accelerator Hub-fellowship`. You can rename it later.
  2. **Database password** Click **Generate a password** and let Supabase create a strong one. **Copy it into your password manager right now** — you'll need it to connect to the database directly from code. You can reset it later if you lose it, but it's much easier to save it now.
  3. **Region** Pick the region closest to you, or the one your instructor names. It's where your database physically lives, and it can't easily be changed later.
  4. **Click "Create new project"** Supabase takes a couple of minutes to set everything up. Wait for the dashboard to finish loading — don't close the tab.

Save the database password first It's shown while you fill in the form. Store it before you click Create — it's not something Supabase will show you again on a normal screen. 


> [!NOTE]
> **Quick Check — Create Your First Project · +25 XP** 🎯
>
> **Q1: Creating a project requires:**
>
> - [ ] Name, database password, region
> - [ ] Only email
> - [ ] Only API key
> - [ ] Only GitHub username
>
> **Q2: Which detail is also in the "Create Your First Project" section?**
>
> - [ ] Project section needs name, password, region.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Create Your First Project</summary>
>
> - **Q1: Creating a project requires:** → *Name, database password, region* — Project section needs name, password, region.
> - **Q2: Which detail is also in the "Create Your First Project" section?** → *Project section needs name, password, region.* — Project section needs name, password, region.
>
> </details>


## Look Around & Prove It Works

When the project is ready, the left-hand menu shows the parts you'll use most:

  * **Table Editor** — your tables as a spreadsheet you can click through. It's empty for now.
  * **SQL Editor** — a place to run SQL commands against your database.
  * **Authentication** — ready-made user sign-up and login.
  * **Storage** — places to keep files and photos.
  * **Project Settings** — keys, database settings and billing for this project.

Prove the database is alive with one command:

  1. **Open the SQL Editor** From the left-hand menu.
  2. **Paste this into a new query and run it** Use the Run button.

SQL EditorCopy
[code] 
    select version();
[/code]

The result panel shows a line beginning `PostgreSQL` followed by a version number. That means you have a working, online database.


> [!NOTE]
> **Quick Check — Look Around & Prove It Works · +25 XP** 🎯
>
> **Q1: Explore proves:**
>
> - [ ] Table Editor, SQL Editor, API docs work
> - [ ] Only theme change
> - [ ] Only Python version
> - [ ] Only GitHub push
>
> **Q2: Which detail is also in the "Look Around & Prove It Works" section?**
>
> - [ ] Explore section shows Table/SQL editors.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Look Around & Prove It Works</summary>
>
> - **Q1: Explore proves:** → *Table Editor, SQL Editor, API docs work* — Explore section shows Table/SQL editors.
> - **Q2: Which detail is also in the "Look Around & Prove It Works" section?** → *Explore section shows Table/SQL editors.* — Explore section shows Table/SQL editors.
>
> </details>


## Find Your Project URL & API Keys

Apps talk to your project using its web address and an API key. You'll collect them now so they're ready when the time comes.

  1. **Click "Connect" at the top of the dashboard** The Connect panel shows your **Project URL** — it looks like `https://abcdefghijkl.supabase.co` — and the key to use.
  2. **Or open Project Settings → API Keys** Every key lives on this page. There's no separate "API" settings page.
  3. **Copy your Project URL and both keys into your password manager** Label each one clearly so you never mix them up.

Key| Looks like| Where it may be used  
---|---|---  
**Publishable key**| `sb_publishable_…`| Safe in a browser or front-end app. It only works within the access rules you set on your tables (Row Level Security).  
**Secret key**| `sb_secret_…`| **Servers only.** It bypasses all access rules. Never put it in front-end code, a browser, or GitHub.  
  
Old key names You may also see keys called `anon` and `service_role`. These are the older versions of the publishable and secret keys, and Supabase is retiring them by the end of 2026. Prefer the `sb_publishable_…` and `sb_secret_…` keys wherever you have the choice. 

When you're ready to use them in a project, keep them in the same `.env` file as your other keys. Add these lines (these names are a common convention, so they'll be easy to recognize later):

.envCopy
[code] 
    SUPABASE_URL=https://your-project-ref.supabase.co
    SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key_here
    SUPABASE_SECRET_KEY=sb_secret_your_key_here
    SUPABASE_DB_PASSWORD=your_database_password_here
[/code]


> [!NOTE]
> **Quick Check — Find Your Project URL & API Keys · +25 XP** 🎯
>
> **Q1: Keys are at:**
>
> - [ ] Project Settings → API → URL & anon/service_role keys
> - [ ] GitHub settings
> - [ ] AWS console
> - [ ] VS Code settings
>
> **Q2: Which detail is also in the "Find Your Project URL & API Keys" section?**
>
> - [ ] Keys section points to Project Settings → API.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Find Your Project URL & API Keys</summary>
>
> - **Q1: Keys are at:** → *Project Settings → API → URL & anon/service_role keys* — Keys section points to Project Settings → API.
> - **Q2: Which detail is also in the "Find Your Project URL & API Keys" section?** → *Keys section points to Project Settings → API.* — Keys section points to Project Settings → API.
>
> </details>


## Free Plan Housekeeping

  * **Inactive projects pause after 1 week.** If nobody uses your project for a week, Supabase pauses it to save resources. Open it and use it (or just visit its dashboard) at least once a week while you're in the fellowship.
  * **Paused doesn't mean deleted.** A paused Free project can be restored with a single click from its dashboard page for 90 days after it was paused. After that window you can still download a backup of your data, but you can no longer restore it in place.
  * **Two free projects at a time.** Paused projects don't count toward the limit. If you hit it, pause or delete one you no longer need.


> [!NOTE]
> **Quick Check — Free Plan Housekeeping · +25 XP** 🎯
>
> **Q1: Free plan housekeeping warns:**
>
> - [ ] Projects pause after inactivity — resume needed
> - [ ] No limits
> - [ ] Auto-deletes forever
> - [ ] No warning
>
> **Q2: Which detail is also in the "Free Plan Housekeeping" section?**
>
> - [ ] Freeplan warns about auto-pause.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Free Plan Housekeeping</summary>
>
> - **Q1: Free plan housekeeping warns:** → *Projects pause after inactivity — resume needed* — Freeplan warns about auto-pause.
> - **Q2: Which detail is also in the "Free Plan Housekeeping" section?** → *Freeplan warns about auto-pause.* — Freeplan warns about auto-pause.
>
> </details>


## Keeping Your Keys Safe

A Supabase project has three secrets. Treat the last two like passwords:

  * **Publishable key:** designed to be visible in a web page. Even so, it only protects you if you set up Row Level Security on your tables — you'll cover that when you start building.
  * **Secret key:** full access to your data. Use it only in back-end code that runs on your server, loaded from `.env`. Supabase's own docs note it won't even work from a browser — a request from one is rejected. Anything in a front-end file such as `app.js` is public, so it must never go there.
  * **Database password:** lets anyone who has it connect straight to your database. Keep it in your password manager and `.env` only.

  * Never paste any of these into Slack, email, chat messages, or a GitHub repository. Keep `.env` out of version control.
  * If a secret key leaks, create a new one on the _Project Settings → API Keys_ page and delete the old one straight away. If the database password leaks, reset it in the project's database settings.


> [!NOTE]
> **Quick Check — Keeping Your Keys Safe · +25 XP** 🎯
>
> **Q1: Service_role key is:**
>
> - [ ] Secret — never expose in frontend; anon is public but RLS-protected
> - [ ] Same as anon, safe anywhere
> - [ ] Not needed
> - [ ] Only for VS Code
>
> **Q2: Which detail is also in the "Keeping Your Keys Safe" section?**
>
> - [ ] Safety distinguishes anon vs service_role.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Keeping Your Keys Safe</summary>
>
> - **Q1: Service_role key is:** → *Secret — never expose in frontend; anon is public but RLS-protected* — Safety distinguishes anon vs service_role.
> - **Q2: Which detail is also in the "Keeping Your Keys Safe" section?** → *Safety distinguishes anon vs service_role.* — Safety distinguishes anon vs service_role.
>
> </details>


## If Something Goes Wrong

  * **No confirmation email:** check spam and promotions, wait a couple of minutes, and confirm you typed the address correctly. If it still doesn't arrive, tell your instructor, or use the GitHub option instead.
  * **Project stuck on "setting up":** project creation takes a couple of minutes. Keep the tab open and wait. If it hasn't finished after ten minutes, refresh the page.
  * **Can't create a new project:** you've probably reached the limit of two free projects. Pause or delete one you don't need.
  * **Project shows as paused:** open its dashboard page and use the restore option. You have 90 days from when it was paused.
  * **Lost the database password:** reset it from the project's database settings, then update your password manager and `.env`.
  * **Can't find the keys:** use the **Connect** button at the top of the dashboard, or _Project Settings → API Keys_.
  * **Signed in with GitHub and can't get back in:** the problem is with GitHub sign-in, not Supabase. Check your GitHub account and 2FA first.

Still stuck? Tell your instructor before Base Camp 2. Describe the message you see — and never share your database password or secret key when asking for help. 


> [!NOTE]
> **Quick Check — If Something Goes Wrong · +25 XP** 🎯
>
> **Q1: Troubleshooting covers:**
>
> - [ ] Project creation fails, password, region, email
> - [ ] Only Python PATH
> - [ ] Only theme
> - [ ] Only AWS budget
>
> **Q2: Which detail is also in the "If Something Goes Wrong" section?**
>
> - [ ] Troubleshooting lists Supabase issues.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — If Something Goes Wrong</summary>
>
> - **Q1: Troubleshooting covers:** → *Project creation fails, password, region, email* — Troubleshooting lists Supabase issues.
> - **Q2: Which detail is also in the "If Something Goes Wrong" section?** → *Troubleshooting lists Supabase issues.* — Troubleshooting lists Supabase issues.
>
> </details>


## Supabase Setup — Final Check

  * ✓ You have a Supabase account and can sign in to the dashboard
  * ✓ You have an organization on the Free plan
  * ✓ You created a project and it finished setting up
  * ✓ `select version();` in the SQL Editor returned a PostgreSQL version
  * ✓ Your database password is saved in a password manager
  * ✓ You've saved your Project URL, publishable key and secret key — labelled, and not shared
  * ✓ You know the project pauses after a week of inactivity, and how to restore it


> [!NOTE]
> **Quick Check — Supabase Setup — Final Check · +25 XP** 🎯
>
> **Q1: Final check confirms:**
>
> - [ ] Account, org, project, URL+keys saved
> - [ ] Only Python install
> - [ ] Only GitHub 2FA
> - [ ] Only AWS MFA
>
> **Q2: Which detail is also in the "Supabase Setup — Final Check" section?**
>
> - [ ] Checklist confirms Supabase ready.
> - [ ] Unrelated distractor A
> - [ ] Unrelated distractor B
> - [ ] Unrelated distractor C
>
> <details><summary>✅ Reveal Answers — Supabase Setup — Final Check</summary>
>
> - **Q1: Final check confirms:** → *Account, org, project, URL+keys saved* — Checklist confirms Supabase ready.
> - **Q2: Which detail is also in the "Supabase Setup — Final Check" section?** → *Checklist confirms Supabase ready.* — Checklist confirms Supabase ready.
>
> </details>

Check Hint

Hint: https://YOUR-PROJECT.supabase.co

✓ Verified — Elite Completed

Confetti! You nailed the hands-on check for this page.

Elite Completed — GenAI Coaching

All Quick Checks + Lab verified. Your certificate is ready — XP saved on this device.

---

<div align="center">

<img src="assets/ai-accelerator-hub-logo.svg" width="180" alt="AI Accelerator Hub" />

*GenAI Learning · Powered by AI Accelerator Hub* — *Corporate Training • Production-Grade*

> *Source:* `BaseCamp1-EnvironmentSetup/8_supabase_account.html` → `BaseCamp1-EnvironmentSetup/8_supabase_account.md` | *Original HTML preserved* | *Gold `#C9A86A` Black `#0A0A0A` White `#FFFFFF`*


> **Continue your elite future** — Next up: *9 Llm Settings*  
> [← Previous](7_claude_code_opencode_new.md) · [Continue →](9_llm_settings.md)

</div>
