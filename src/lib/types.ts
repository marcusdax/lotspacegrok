export type Role =
  | "farmer"
  | "agent"
  | "coop"
  | "exporter"
  | "roaster"
  | "consumer";

export type TrustTier = "self" | "agent" | "audit";

export type LotState =
  | "draft"
  | "captured"
  | "pending"
  | "verified"
  | "available"
  | "sample_requested"
  | "sample_sent"
  | "offer"
  | "negotiation"
  | "price_locked"
  | "contracted"
  | "fulfillment"
  | "delivered"
  | "archived";

export type Sensory = {
  fragrance: number;
  flavor: number;
  aftertaste: number;
  acidity: number;
  body: number;
  balance: number;
  overall: number;
  notes: string[];
};

export type WaterfallStep = {
  label: string;
  amount: number;
  party: string;
  note?: string;
};

export type Space = {
  id: string;
  slug: string;
  name: string;
  role: Role;
  district: string;
  origin: string;
  country: string;
  bio: string;
  cover: string;
  verification: TrustTier;
  followers: number;
  agentName?: string;
  farmgateAvg?: number;
  hectares?: number;
  members?: number;
  taste?: string[];
  badges: string[];
  handle: string;
};

export type Lot = {
  id: string;
  code: string;
  spaceId: string;
  title: string;
  origin: string;
  district: string;
  harvest: string;
  varietal: string;
  process: string;
  altitude: string;
  bags: number;
  kgAvailable: number;
  farmgate: number;
  fob: number;
  score: number;
  sensory: Sensory;
  state: LotState;
  image: string;
  autopsySlug: string;
  waterfall: WaterfallStep[];
  eudr: boolean;
  geo: { lat: number; lng: number };
  braveFew: boolean;
  story: string;
  processNotes: string;
  qGrader?: string;
};

export type Story = {
  id: string;
  spaceId: string;
  lotId?: string;
  title: string;
  body: string;
  image: string;
  publishedAt: string;
  kind: "harvest" | "process" | "field" | "cupping" | "trade";
};

export type Message = {
  id: string;
  fromId: string;
  body: string;
  at: string;
  kind: "chat" | "sample" | "offer" | "lock" | "receipt" | "tip";
};

export type Thread = {
  id: string;
  title: string;
  participantIds: string[];
  lotId?: string;
  messages: Message[];
};

export type LedgerEvent = {
  id: string;
  at: string;
  actor: string;
  type: string;
  object: string;
  hash: string;
  prev: string;
};

export type AgentTask = {
  id: string;
  kind: "verify" | "followup" | "sync" | "audit";
  title: string;
  spaceId?: string;
  due: string;
  status: "open" | "done";
};

export type CompetitionEntry = {
  id: string;
  lotId: string;
  anonymousCode: string;
  revealed: boolean;
};

export type Persona = {
  id: string;
  spaceId: string;
  role: Role;
  name: string;
  blurb: string;
};

export type TipRecord = {
  id: string;
  spaceId: string;
  lotId?: string;
  amount: number;
  fee: number;
  at: string;
  key: string;
};

export type SampleRequest = {
  id: string;
  lotId: string;
  at: string;
  status: "requested" | "sent" | "delivered";
};

export type OfferRecord = {
  id: string;
  lotId: string;
  price: number;
  bags: number;
  at: string;
  status: "open" | "locked" | "declined";
};

export type OfflineOp = {
  id: string;
  kind: "farmer" | "lot" | "note";
  label: string;
  at: string;
  synced: boolean;
};
