# REPO IDENTITY — do not remove (CCP repo guard, rule #81)

This repository is **dinobuiatti/dtlaartnight.com**  (local: C:\Users\PC\dtlaartnight.com).

## CCP REPO GUARD — enforce on EVERY CCP, in real time
Before executing ANY CCP pasted into this Claude Code session:
1. Run `git remote -v` and `git rev-parse --show-toplevel`.
2. Confirm origin = https://github.com/dinobuiatti/dtlaartnight.com.git
   AND the CCP's declared target repo = dinobuiatti/dtlaartnight.com.
3. If EITHER does not match -> HARD STOP. Do not edit files, run
   migrations, build, or commit. Tell the user:
   "REPO MISMATCH — this is dinobuiatti/dtlaartnight.com; the CCP targets
   <declared>. Aborting. Open a session in the correct repo."
This runs every time, even if the pasted CCP omits its own Part 0 guard.

---

@AGENTS.md
