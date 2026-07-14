import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'Gas Optimizer',
    year: '2026',
    category: 'DEFI / INFRA',
    accent: 'pink',
    context: 'Kriti 2026, IIT Guwahati',
    description:
      'Gasless transaction platform on Ethereum — users execute batched smart contract calls without holding ETH, via EIP-712 typed signatures and EIP-2771 trusted forwarding through a Fastify relayer. Real-time relayer health monitoring, wallet auth, and a gas analytics dashboard. Up to 45% gas saved on multi-call batches, validated with Foundry unit, fuzz, and invariant tests across 7 contracts on Sepolia.',
    technologies: ['Solidity', 'Foundry', 'EIP-712', 'EIP-2771', 'React', 'Fastify'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/plug-in',
  },
  {
    title: 'PixelVault — INITIA Gaming Infra',
    year: '2026',
    category: 'WEB3 / GAMING',
    accent: 'amber',
    context: 'INITIATE Hackathon',
    description:
      'Permissionless gaming protocol on Initia MiniEVM — one registerGame() call auto-deploys ERC-20 tokens, ERC-1155 item collections, and AMM pools. ERC-6551 Token Bound Accounts give players one identity across 20 deployed contracts, and a GasPaymaster (ERC-2771) lets them pay gas in any token via on-chain DEX swaps with IBC L1 bridging. 1,500+ lines of Hardhat tests.',
    technologies: ['Solidity', 'Hardhat', 'ERC-6551', 'ERC-2771', 'React', 'Vite'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/INITIA_Hack',
  },
  {
    title: 'SignalMarket',
    year: '2025',
    category: 'DEFI / PREDICTION',
    accent: 'sky',
    context: 'INITIA Hackathon',
    description:
      'Full-stack decentralized prediction market on Initia MiniEVM — 8 Solidity contracts including a parimutuel AMM with on-chain Gaussian CDF/PDF pricing, a ForecasterReputation engine that scores per-user accuracy, calibration, and recency to lower fees, and a PositionVault lending pool with utilization-based interest, ERC-1155 collateral, and 85% auto-liquidation.',
    technologies: ['Solidity', 'MiniEVM', 'AMM', 'ERC-1155', 'React'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/INITIA_submission',
  },
  {
    title: 'Netflix-Yield Strategy',
    year: '2025',
    category: 'DEFI / PAYMENTS',
    accent: 'lime',
    context: 'Octant v2 DeFi Hackathon',
    award: 'Most Liked Project @ Octant v2',
    description:
      'DeFi-powered subscription engine — deposit USDC into an ERC-4626 vault and let the yield autonomously pay your subscriptions while the principal stays protected. End-to-end Solidity contracts with time-locks and graceful revert logic, plus a React frontend polling live chain data for a fully automated payment pipeline.',
    technologies: ['Solidity', 'ERC-4626', 'Foundry', 'React', 'Wagmi'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Octant-V2-Hackathon',
  },
  {
    title: 'EnergyChain',
    year: '2025',
    category: 'WEB3 / ZK',
    accent: 'violet',
    context: 'Kriti, IIT Guwahati',
    description:
      'Decentralized carbon credit and P2P energy trading. An IoT pipeline formats meter readings to JSON, pins them to IPFS, and anchors CIDs on-chain via EmissionsTracker on Sepolia. zk-SNARK proofs (Circom → WASM + .zkey) verify energy token ownership with zero knowledge. React + TypeScript frontend with MetaMask and a prosumer dashboard.',
    technologies: ['Solidity', 'zk-SNARKs', 'Circom', 'IPFS', 'TypeScript'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Carbon_Trading',
  },
  {
    title: 'BDH Interpretability Explorer',
    year: '2026',
    category: 'AI / INTERPRETABILITY',
    accent: 'lemon',
    context: 'Kriti 2026, IIT Guwahati',
    description:
      'A 9-page interactive platform for dissecting a biologically-inspired post-transformer language model. Monosemanticity probing, Hebbian synapse tracking, 3D graph topology in Three.js, and sparsity analysis — fed by a 6-phase extraction pipeline deployed on Hugging Face Spaces.',
    technologies: ['PyTorch', 'React', 'TypeScript', 'Three.js', 'FastAPI'],
    githubUrl: 'https://github.com/Kumarutkarsh9470/Hostel2688',
  },
];
