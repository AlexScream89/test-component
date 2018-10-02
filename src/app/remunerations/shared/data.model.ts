export enum ContractType {
  'CDD', 'CDI', 'Stage', 'Apprentissage', 'Freelance'
}

export class Amount {
  min: number;
}

export class Remuneration {
  contractType: ContractType;
  amount: Amount;
}

export class RemunerationSelectionStatus {
  remuneration: Remuneration;
  selected: boolean;
}
