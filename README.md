# 🚀 CeloStarter – Mobile Crowdfunding Launchpad on Celo

CeloStarter is a **mobile-first decentralized launchpad** that connects early-stage Web3 builders with micro-investors around the world.  
Built on the **Celo blockchain**, it empowers users to support projects with as little as **1 cUSD**, fostering global accessibility and financial inclusion.

---

## 🌍 Vision

To make decentralized project funding accessible to everyone — especially for developers and entrepreneurs in emerging markets — through **mobile-friendly**, **low-cost**, and **transparent crowdfunding** powered by Celo.

---

## ✨ Key Features

### 🔹 Mobile-First Design
- Seamless integration with **Valora** and **MetaMask Mobile** wallets.  
- Optimized for low-bandwidth regions and mobile users.

### 🔹 Micro-Investment Access
- Join project launches starting from **1 cUSD**.  
- Democratize early-stage investments for all.

### 🔹 SocialFi Incentives
- Every supporter receives a **Supporter Badge NFT**.  
- NFTs grant access to future airdrops, staking tiers, and exclusive IDO allocations.

### 🔹 Multi-Stage Funding
- Projects unlock funds in stages as milestones are achieved.  
- Protects investors and ensures project accountability.

---

## 💰 Tokenomics

| Token | Symbol | Utility |
|--------|---------|----------|
| CeloStarter Token | `$START` | Access, voting, rewards |

**$START** serves as:
- Governance token (vote on listed projects)
- Staking asset for early access to IDOs
- Reward mechanism for active investors

### 🔸 Staking Tiers
| Tier | Requirement | Benefits |
|------|--------------|-----------|
| Bronze | 100 START | Standard access |
| Silver | 500 START | Early IDO whitelist |
| Gold | 1000 START | Priority access + bonus NFT |

---

## 🧠 Smart Contract Modules

| Module | Description |
|--------|--------------|
| `LaunchFactory.sol` | Handles project registration and fundraising logic |
| `FundingPool.sol` | Manages micro-investments in cUSD |
| `MilestoneManager.sol` | Releases funds per milestone approval |
| `BadgeNFT.sol` | Mints supporter NFTs based on participation |
| `Token.sol` | Defines $START ERC20 token |

All contracts are deployed and verified on **Celo Alfajores Testnet**.

---

## 💻 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | Next.js + Wagmi + RainbowKit + Viem |
| Smart Contracts | Solidity + Hardhat + Celo SDK |
| Backend | Node.js + NestJS + Prisma + PostgreSQL |
| Wallets | Valora, MetaMask Mobile |
| Deployment | Celo Alfajores → Celo Mainnet |

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/celostarter.git
cd celostarter
