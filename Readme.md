# Linux Short Notes — Complete DevOps Reference

An interactive, responsive, and beautifully styled single-page web reference & progressive web application (PWA) for Linux and DevOps engineers. Designed as a comprehensive master cheat-sheet containing in-depth explanations, production architectures, interactive widgets, and terminal simulations.

## 🚀 Features

1. **Floating Glassmorphic Navbar & Hero TOC**: Quick-jump links to all 22 Linux & DevOps sections with blurred backdrop, responsive horizontal scrolling, and keyboard-friendly search shortcut.
2. **Interactive Linux Permission Calculator**:
   - Checkbox-driven builder for Owner, Group, and Others.
   - Real-time conversion into Octal (`755`), Symbolic (`rwxr-xr-x`), and `ls -l` representation (`-rwxr-xr-x`).
   - Auto-generated `chmod` command with 1-click copy button and quick-select presets (`755`, `644`, `700`, `600`, `777`, `444`).
3. **Interactive Cron Expression Builder**:
   - Live cron input fields (`Minute`, `Hour`, `Day of Month`, `Month`, `Day of Week`).
   - Translates expressions (e.g. `*/15 * * * *`) into human-readable English in real-time.
   - Click-to-focus synchronization and click-to-copy built-in.
4. **Dynamic Global Command Search (`Ctrl + K`)**: 
   - Toggle search using `Ctrl + K` or the search button.
   - Dynamically indexes all commands, code blocks, cards, and topics across all 22 sections.
   - Keyboard navigation (`↑`/`↓` and `Enter`), 1-click command copying, smooth scroll, and flash-highlight animation.
5. **Interactive Filesystem Tree (FSH)**:
   - Interactive, hover-highlighted directory items (e.g. `/etc`, `/var`, `/proc`, `/sys`).
   - Clicking opens a detail pane featuring typical scripts and mock terminal output simulations.
6. **Command Hover Cards & Execution Modals**:
   - Hovering over any command block reveals a glassmorphic preview of its usage and purpose.
   - Clicking opens a detailed modal demonstrating a mock console execution.
7. **PWA & Offline Ready**:
   - Registered service worker with stale-while-revalidate caching.
   - Full offline functionality and mobile responsive layouts.

---

## 📚 Complete Sections (22 Modules)

| # | Section | Key Topics Covered |
|---|---|---|
| **01** | **History of Linux** | Origins, Linus Torvalds, Unix family, timeline from 1991 to supercomputers |
| **02** | **Filesystem Hierarchy (FSH)** | Root structure (`/bin`, `/etc`, `/var`, `/proc`, `/sys`, etc.) with interactive deep dive |
| **03** | **Basic Commands** | Navigation, system info (`uname`, `uptime`, `whoami`, `date`, `history`) |
| **04** | **File & Directory Operations** | `ls`, `mkdir -p`, `cp -r`, `mv`, `rm -rf`, file viewing (`cat`, `less`, `more`, `nl`) |
| **05** | **User Management** | `useradd`, `passwd`, `usermod`, `userdel`, `/etc/passwd`, `/etc/shadow` |
| **06** | **Group Management** | `groupadd`, `groupdel`, `gpasswd`, `/etc/group`, multi-group assignments |
| **07** | **File Permissions & Calculator** | Permissions diagram, octal & symbolic modes, **Interactive Permission Calculator** |
| **08** | **Access Control List (ACL)** | Fine-grained per-user permissions with `getfacl` and `setfacl` |
| **09** | **GREP & Regular Expressions** | Pattern matching, case-insensitivity, inverse match, recursive grep |
| **10** | **Find Command** | File search by name, size, mtime, permissions, and `-exec` automation |
| **11** | **Text Processing Tools** | Stream manipulation with `awk`, `sed`, `cut`, `sort`, `uniq`, `tr`, `wc` |
| **12** | **Archiving with tar** | `.tar`, `.tar.gz`, `.tar.bz2`, compression options and extraction flags |
| **13** | **Job Automation (Cron & at)** | **Interactive Cron Editor**, crontab syntax, one-off jobs with `at` |
| **14** | **Sudo Command** | Privileged execution, `/etc/sudoers` safety with `visudo`, `sudo -l` |
| **15** | **Networking (RHEL/CentOS)** | `ip`, `ss`, `ping`, `traceroute`, `dig`, `nmcli`, `nmtui`, `firewall-cmd` |
| **16** | **Systemd & Service Management** | `systemctl`, `journalctl`, custom Node.js/Go `.service` templates, timers |
| **17** | **Process, Memory & CPU Monitoring** | `ps aux`, `top`, `htop`, kill signals, `free -h`, `vmstat`, `uptime`, OOM events |
| **18** | **Disk, Storage & LVM Management** | `lsblk`, `fdisk`, `blkid`, `df -h`, `du`, `/etc/fstab`, PV/VG/LV operations |
| **19** | **SSH, Remote Access & Port Forwarding** | Ed25519 keys, permissions, `~/.ssh/config`, jump hosts, `-L`/`-R` tunnels |
| **20** | **Package Management (Multi-Distro)** | Cross-distro guide: Ubuntu (`apt`), RHEL/Rocky (`dnf`), Alpine (`apk`) |
| **21** | **Production Bash Scripting** | `set -euo pipefail`, error trapping (`trap`), robust backup script template |
| **22** | **DevOps Daily Troubleshooting** | Morning health-check checklist, port inspection, disk hog hunt, API health |

---

## 📦 How to Run

Simply open `index.html` in any modern web browser or start a local dev server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js
npx serve .

# Or open directly in browser
Start-Process "index.html"   # On Windows PowerShell
open index.html              # On macOS
xdg-open index.html          # On Linux
```


## 🎯 DevOps Interview Question & Answer Master Page (`interview.html`)

A comprehensive, industry-grade interview preparation platform featuring:
- **1,080+ Curated DevOps & Linux Questions** across 11 specialized engineering domains:
  1. 🐧 **Linux Administration & Core Commands** (100 Questions)
  2. 🧠 **Linux Kernel & OS Internals** (100 Questions)
  3. 🌐 **Networking, TCP/IP, DNS & Firewalls** (100 Questions)
  4. 🐳 **Docker & Container Internals** (100 Questions)
  5. ☸️ **Kubernetes & Cloud Native** (150 Questions)
  6. ☁️ **AWS & Cloud Architecture** (120 Questions)
  7. 🚀 **CI/CD Pipelines & GitOps** (90 Questions)
  8. 🏗️ **Terraform & Infrastructure as Code** (80 Questions)
  9. 📊 **Observability, Prometheus & SRE** (90 Questions)
  10. 🛡️ **DevSecOps & Security Hardening** (80 Questions)
  11. ⚙️ **Bash Scripting & Automation** (70 Questions)
- **510 FAANG & Big Tech Production Case Studies**: Real-world outages and architecture breakdowns across top tech giants:
  1. 🏢 **Google / Alphabet** (65 Case Studies) — Borg OOM cascades, Spanner TrueTime Paxos leader lease expirations, Maglev load balancing, Cloud DNS outages
  2. ☁️ **AWS / Amazon** (75 Case Studies) — us-east-1 Kinesis dependency cascades, S3 subsystem cold boot, DynamoDB partition splits, Route53 health check flaps
  3. 🌐 **Meta / Facebook** (60 Case Studies) — Global BGP route withdrawal, Memcached thundering herd (Leases/XFetch), Tupperware container OOMs, RocksDB write stalls
  4. 🎬 **Netflix** (55 Case Studies) — Zuul 1 thread exhaustion vs Zuul 2 Netty, Cassandra tombstones & Stop-the-World GC, Eureka self-preservation, Chaos Monkey blast radius
  5. 🚗 **Uber** (50 Case Studies) — Ringpop consistent hash ring splits, Schemaless sharded MySQL buffer pool contention, Kafka rebalance storms, H3 spatial indexing
  6. 🛡️ **Cloudflare** (45 Case Studies) — Verizon AS701 BGP route leak (RPKI), WAF catastrophic regex backtracking (re2), 1.1.1.1 Serve-Stale DNS, Zero Trust SAML revocation
  7. 💳 **Stripe** (45 Case Studies) — Black Friday PostgreSQL row lock contention (Append-only ledgers), Idempotency Key Redis evictions, Webhook retry storms with jitter
  8. 🐙 **GitHub / GitLab** (40 Case Studies) — GitLab database deletion & verified restore drills, GitHub 24h MySQL master failover split-brain (STONITH), Actions runner abuse
  9. 🪟 **Microsoft / Apple / OpenAI** (40 Case Studies) — Azure AD authentication cert expiration, OpenAI ChatGPT API Redis rate limit token saturation, iCloud sync deadlocks
  10. 📊 **Datadog / Snowflake / Spotify** (35 Case Studies) — DogStatsD UDP socket buffer drops (UDS migration), Snowflake virtual warehouse remote spilling, Spotify Cassandra tombstone GC
- **Interactive Features**:
  - **🧠 Quiz / Flashcard Mode**: Hide answers to test yourself before revealing them.
  - **⭐ Starred / Bookmarks**: Save tricky questions locally using `localStorage`.
  - **⚡ Instant Real-Time Search**: Debounced search across titles, answers, and tags.
  - **📥 Dynamic Virtual Pagination**: Silky-smooth 60fps rendering with "Load More (+25)".
  - **📶 100% Offline PWA**: Cached with Service Worker v6.
- **🏗️ 10 DevOps System Design Blueprints**: Production architectures with ASCII topology diagrams, traffic capacity estimations, deep dives, and failure modes:
  1. Global Multi-Tenant Log Ingestion Pipeline (1M Logs/Sec — Kafka/OpenSearch/S3)
  2. Global Multi-Region Artifact Registry & P2P Container Engine (50k Nodes — Kraken/Dragonfly)
  3. Distributed Secret Management Service (HashiCorp Vault HA + Raft + Cloud KMS)
  4. Real-Time Distributed Metrics & Alerting Engine (Prometheus HA + Thanos + Alertmanager)
  5. Zero-Downtime Blue/Green Database Migration (Multi-Terabyte PostgreSQL CDC + Reverse Sync)
  6. Global Anycast Edge DDoS Mitigation & WAF Network (XDP/eBPF + re2 DFA + BGP FlowSpec)
  7. Enterprise GitOps Continuous Delivery Platform (ArgoCD + ApplicationSets + 500 Clusters)
  8. Scalable Distributed Workflow & Cron Engine (Temporal / Airflow Event Sourcing)
  9. Multi-Cloud Active-Active Disaster Recovery (AWS & GCP + CockroachDB Raft Quorum)
  10. Zero-Trust Service Mesh & Identity Platform (Istio + Envoy + SPIFFE/SPIRE mTLS)

- **🎭 25 Behavioral & Leadership Principles Scenarios**: STAR framework breakdowns for Amazon Leadership Principles (Customer Obsession, Ownership, Disagree & Commit, Dive Deep, Bias for Action), Googleyness, and Meta Culture fit.
- **⏱️ Interactive Real-Time Mock Interview Simulator**:
  - Timed practice (120s / 180s per question) with pulsing countdown timer.
  - Randomized draws from the 1,590+ question & scenario pool.
  - Reveal model answers with self-scoring (1, 3, or 5 points).
  - Final performance scorecard with hire-readiness ratings!
- **⚡ 30-Minute Last-Minute Cram Sheet**: 50 golden quick-fire reflex facts across Linux Kernel, Networking, Kubernetes, Emergency Triage Commands, and Cloud Rules.

