const POLAR_ENVIRONMENT = process.env.POLAR_ENVIRONMENT;

export const PLANS = {
  production: {
    starter: {
      id: "ac17601d-29a9-4530-ab9d-9f6ea39f7e32",
      name: "Starter",
      key: "starter",
    },
    pro: {
      id: "0a0a36b1-38d3-4082-85ca-f46cec9d8b1a",
      name: "Pro",
      key: "pro",
    },
  },
  sandbox: {
    starter: {
      id: "cba5785b-fa0a-4356-9f04-dfebd6a181cf",
      name: "Starter",
      key: "starter",
    },
    pro: {
      id: "35f36794-9695-40eb-a66f-f70330643d76",
      name: "Pro",
      key: "pro",
    },
  },
};

export const DISCOUNTS = {
  production: {
    early_access: {
      id: "cdcfb924-1f42-40ba-af5e-c8fb1fe7981b",
      name: "Early Access",
    },
    public_beta: {
      id: "ced3af53-fb27-41f5-abdd-070f382995b8",
      name: "Public Beta",
    },
  },
  sandbox: {
    early_access: {
      id: "c7e849b0-0a3e-4749-af73-bd42b30a1832",
      name: "Early Access",
    },
    public_beta: {
      id: "08cbfe93-121c-42be-8016-bf771cfbdcfe",
      name: "Public Beta",
    },
  },
};

export const getDiscount = (createdAt: string, planType?: string | null) => {
  // Starter plan doesn't have a discount
  if (!planType || planType === "starter") {
    return null;
  }

  const discounts = DISCOUNTS[POLAR_ENVIRONMENT as keyof typeof DISCOUNTS];

  const createdAtDate = new Date(createdAt);

  const earlyAccessCutoff = new Date("2024-07-01");
  const publicBetaCutoff = new Date("2025-03-01");

  if (createdAtDate < earlyAccessCutoff) {
    return discounts.early_access;
  }

  if (createdAtDate >= earlyAccessCutoff && createdAtDate < publicBetaCutoff) {
    return discounts.public_beta;
  }

  // Change this to null after the public beta
  return discounts.public_beta;
};

export const getPlans = () => {
  return PLANS[POLAR_ENVIRONMENT as keyof typeof PLANS];
};

export function getPlanByProductId(productId: string) {
  const plan = Object.values(getPlans()).find((plan) => plan.id === productId);

  if (!plan) {
    throw new Error("Plan not found");
  }

  return plan.key;
}

export function getPlanLimits(plan: string) {
  switch (plan) {
    case "starter":
      return {
        users: 1,
        bankConnections: 1,
        storage: 10 * 1024 * 1024 * 1024, // 10GB in bytes
        inbox: 50,
        invoices: 10,
      };
    case "trial":
    case "pro":
      return {
        users: 10,
        bankConnections: 10,
        storage: 100, // 100GB in bytes
        inbox: 500,
        invoices: 30,
      };
    default:
      return {
        users: 1,
        bankConnections: 1,
        storage: 10 * 1024 * 1024 * 1024, // 10GB in bytes
        inbox: 50,
        invoices: 10,
      };
  }
}
