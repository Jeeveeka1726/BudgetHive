export const defaultCategories = [
  // Income Categories
  {
    id: "productsalesrevenue",
    name: "Product Sales Revenue",
    type: "INCOME",
    color: "#22c55e", // green-500
    icon: "Wallet",
  },
  {
    id: "servicerevenue",
    name: "Service Revenue",
    type: "INCOME",
    color: "#06b6d4", // cyan-500
    icon: "Laptop",
  },
  {
    id: "investmentandgrants",
    name: "Investment And Grants",
    type: "INCOME",
    color: "#6366f1", // indigo-500
    icon: "TrendingUp",
  },
  {
    id: "subscriptionandmembershiprevenue",
    name: "Subscription And Membership Revenue",
    type: "INCOME",
    color: "#ec4899", // pink-500
    icon: "Building",
  },
  {
    id: "rentalandasset",
    name: "Rental And Asset",
    type: "INCOME",
    color: "#f59e0b", // amber-500
    icon: "Home",
  },
  {
    id: "other-income",
    name: "Other Income",
    type: "INCOME",
    color: "#64748b", // slate-500
    icon: "Plus",
  },

  // Expense Categories
  {
    id: "payrollandsalaries",
    name: "Payroll And Salaries",
    type: "EXPENSE",
    color: "#ef4444", // red-500
    icon: "Home",
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "rentandutilities",
    name: "Rent And Utilities",
    type: "EXPENSE",
    color: "#f97316", // orange-500
    icon: "Car",
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  {
    id: "inventoryandsupplies",
    name: "Inventory And Supplies",
    type: "EXPENSE",
    color: "#84cc16", // lime-500
    icon: "Shopping",
  },
  {
    id: "marketingandadvertising",
    name: "Marketing And Advertising",
    type: "EXPENSE",
    color: "#06b6d4", // cyan-500
    icon: "Zap",
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "softwareandsubscriptions",
    name: "Software And Subscriptions",
    type: "EXPENSE",
    color: "#8b5cf6", // violet-500
    icon: "Film",
    subcategories: ["Movies", "Games", "Streaming Services"],
  },
  {
    id: "equipmentandmaintenance",
    name: "Equipment And Maintenance",
    type: "EXPENSE",
    color: "#f43f5e", // rose-500
    icon: "UtensilsCrossed",
  },
  {
    id: "shippingandlogistics",
    name: "Shipping and Logistics",
    type: "EXPENSE",
    color: "#ec4899", // pink-500
    icon: "ShoppingBag",
    subcategories: ["Clothing", "Electronics", "Home Goods"],
  },
  {
    id: "businesstravelandentertainment",
    name: "Business Travel and Entertainment",
    type: "EXPENSE",
    color: "#14b8a6", // teal-500
    icon: "HeartPulse",
    subcategories: ["Medical", "Dental", "Pharmacy", "Insurance"],
  },
  {
    id: "legalaccountingandcompliance",
    name: "Legal Accounting and Compliance",
    type: "EXPENSE",
    color: "#6366f1", // indigo-500
    icon: "GraduationCap",
    subcategories: ["Tuition", "Books", "Courses"],
  },
  {
    id: "loanrepaymentsandinterest",
    name: "Loan Repayments and Interest",
    type: "EXPENSE",
    color: "#d946ef", // fuchsia-500
    icon: "Smile",
    subcategories: ["Haircut", "Gym", "Beauty"],
  },
  {
    id: "employeetraininganddevelopment",
    name: "Employee Training and Development",
    type: "EXPENSE",
    color: "#0ea5e9", // sky-500
    icon: "Plane",
  },
  {
    id: "insuranceandsecurity",
    name: "Insurance and Security",
    type: "EXPENSE",
    color: "#64748b", // slate-500
    icon: "Shield",
    subcategories: ["Life", "Home", "Vehicle"],
  },
  {
    id: "researchanddevelopment",
    name: "Research and Development",
    type: "EXPENSE",
    color: "#f472b6", // pink-400
    icon: "Gift",
  },
  {
    id: "taxpaymentsandgovernmentfees",
    name: "Tax Payments and Government Fees",
    type: "EXPENSE",
    color: "#fb7185", // rose-400
    icon: "Receipt",
    subcategories: ["Bank Fees", "Late Fees", "Service Charges"],
  },
  {
    id: "other-expense",
    name: "Other Expenses",
    type: "EXPENSE",
    color: "#94a3b8", // slate-400
    icon: "MoreHorizontal",
  },
];

export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});
