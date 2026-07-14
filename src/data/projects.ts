import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'Gas Optimizer',
    period: 'Feb 2026 — Mar 2026',
    context: 'Kriti 2026, IIT Guwahati',
    description:
      'Built a gasless transaction platform on Ethereum enabling users to execute batched smart contract calls without holding ETH, using EIP-712 typed signatures and EIP-2771 trusted forwarding. Developed a React + Vite frontend with real-time relayer health monitoring, wallet-based auth, and gas analytics dashboard. Achieved ~45% gas savings on multi-call batches.',
    technologies: ['React', 'Vite', 'Wagmi', 'Solidity', 'Foundry', 'Fastify'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/plug-in',
  },
  {
    title: 'BDH Interpretability Explorer',
    period: 'Jan 2026 — Feb 2026',
    context: 'Kriti 2026, IIT Guwahati',
    description:
      'Built a 9-page interactive visualization platform using React, TypeScript, Three.js, and FastAPI for exploring a biologically-inspired post-transformer language model. Implemented monosemanticity probing, Hebbian synapse tracking, 3D graph topology, and sparsity analysis with a 6-phase extraction pipeline deployed on Hugging Face Spaces.',
    technologies: ['React', 'TypeScript', 'Three.js', 'FastAPI', 'PyTorch'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Hostel2688',
  },
  {
    title: 'SignalMarket',
    period: 'Apr 2025',
    context: 'INITIA Hackathon',
    description:
      'Full-stack decentralized prediction market on Initia MiniEVM with 8 Solidity contracts, including a parimutuel AMM with on-chain Gaussian CDF/PDF pricing, a ForecasterReputation engine computing per-user accuracy, calibration, and recency decay to lower fees, and a PositionVault lending pool with utilization-based interest, ERC-1155 collateral, and 85% auto-liquidation.',
    technologies: ['Solidity', 'MiniEVM', 'AMM', 'ERC-1155', 'React'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/INITIA_submission',
  },
  {
    title: 'EnergyChain',
    period: 'Jan 2025 — Feb 2025',
    context: 'Kriti, IITG Tech Competition',
    description:
      'Decentralized carbon credit and P2P energy trading platform. Solidity smart contracts with an IoT pipeline that formats meter readings to JSON, pins to IPFS, and anchors CIDs on-chain via EmissionsTracker on Sepolia. Integrated zk-SNARK proofs (Circom) for zero-knowledge verification of energy token ownership, with a React + TypeScript + Tailwind frontend featuring MetaMask connection and a prosumer dashboard.',
    technologies: ['Solidity', 'IPFS', 'zk-SNARKs', 'Circom', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Carbon_Trading',
  },
  {
    title: 'Virtual Lab',
    context: 'Academic Project',
    description:
      'An interactive virtual laboratory platform designed to simulate real-world experiments in a browser-based environment. Features include dynamic experiment configurations, real-time data visualization, and an intuitive UI for students to learn through hands-on experimentation.',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Virtual-lab',
  },
  {
    title: 'INITIA Gaming Infrastructure',
    period: 'Apr 2026',
    context: 'INITIATE Hackathon',
    description:
      'Built a permissionless gaming infrastructure protocol where a single function call auto-deploys token contracts, item collections, and a DEX pool. Integrated Token Bound Accounts for unified cross-game player identity across 20 deployed contracts. Shipped a React + Vite frontend with session keys and 1,545 lines of comprehensive tests.',
    technologies: ['Solidity', 'Hardhat', 'React', 'Vite', 'ERC-6551'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/INITIA_Hack',
  },
  {
    title: 'Netflix-Yield Strategy',
    period: 'Oct 2025 — Nov 2025',
    context: 'Octant v2 DeFi Hackathon',
    description:
      'DeFi-powered solution depositing USDC into an ERC-4626 vault, channeling yield to autonomously pay subscriptions while keeping principal protected. End-to-end Solidity smart contracts with time-lock and graceful revert logic. React frontend with live blockchain data polling for a fully automated payment pipeline.',
    technologies: ['Solidity', 'React', 'Wagmi', 'RainbowKit', 'Foundry'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Octant-V2-Hackathon',
  },
];
