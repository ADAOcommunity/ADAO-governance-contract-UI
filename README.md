# ADAO Governance contract UI

The goal of this solution is enabling interaction with ADAOs governance and treasury scripts via an easy to use GUI. Users that hold the ADAO Governance Token inside their wallet should be able to create, vote and view proposals presented via the front-end.

## Requirements/ Building blocks:
* Build website in a way that we can easily edit it to implement our partners design. Should be managable by non developers
* Checking wallet for ADAO GovToken/Tokengating: Vote only with ADAO GovToken in Wallet
* If connected wallet doesn't contain GovTokens proposals should be greyed out on main screen and not display vote button
* Creating Proposals: Governance Token holders can propose how parts of the treasury can be spent
* Proposal: Asking for a certain amount of treasury. Need to be defined
* Voting on proposals:Governance token holders have to be able to vote on the existing proposals.
* Treasury visualization: Contents of treasury should be displayed

Designed screens are in ```/design``` folder

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
