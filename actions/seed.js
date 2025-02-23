"use server";

import { db } from "@/lib/prisma";
import { subDays } from "date-fns";

const ACCOUNT_ID = "9f3bc268-b111-4a35-8f85-7ced1ea2414c";
const USER_ID = "169e6672-a2fd-46cc-b83a-0ecae50e3a46";

// Categories with their typical amount ranges
const CATEGORIES = {
  INCOME: [
    { name: "Product Sales Revenue", range: [5000, 8000] },
    { name: "Investment & Grants", range: [1000, 3000] },
    { name: "Service Revenue", range: [500, 2000] },
    { name: "Other-income", range: [100, 1000] },
  ],
  EXPENSE: [
    { name: "Payroll & Salaries", range: [1000, 2000] },
    { name: "Rent & Utilities", range: [100, 500] },
    { name: "Inventory & Supplies", range: [200, 600] },
    { name: "Marketing & Advertising", range: [100, 300] },
    { name: "Software & Subscriptions", range: [50, 200] },
    { name: "Equipment & Maintenance", range: [50, 150] },
    { name: "Shipping & Logistics", range: [100, 500] },
    { name: "Business Travel & Entertainment", range: [100, 1000] },
    { name: "Legal, Accounting & Compliance", range: [200, 1000] },
    { name: "Loan Repayments & Interest", range: [500, 2000] },
  ],
};

// Helper to generate random amount within a range
function getRandomAmount(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

// Helper to get random category with amount
function getRandomCategory(type) {
  const categories = CATEGORIES[type];
  const category = categories[Math.floor(Math.random() * categories.length)];
  const amount = getRandomAmount(category.range[0], category.range[1]);
  return { category: category.name, amount };
}

export async function seedTransactions() {
  try {
    // Generate 90 days of transactions
    const transactions = [];
    let totalBalance = 0;

    for (let i = 90; i >= 0; i--) {
      const date = subDays(new Date(), i);

      // Generate 1-3 transactions per day
      const transactionsPerDay = Math.floor(Math.random() * 3) + 1;

      for (let j = 0; j < transactionsPerDay; j++) {
        // 40% chance of income, 60% chance of expense
        const type = Math.random() < 0.4 ? "INCOME" : "EXPENSE";
        const { category, amount } = getRandomCategory(type);

        const transaction = {
          id: crypto.randomUUID(),
          type,
          amount,
          description: `${
            type === "INCOME" ? "Received" : "Paid for"
          } ${category}`,
          date,
          category,
          status: "COMPLETED",
          userId: USER_ID,
          accountId: ACCOUNT_ID,
          createdAt: date,
          updatedAt: date,
        };

        totalBalance += type === "INCOME" ? amount : -amount;
        transactions.push(transaction);
      }
    }

    // Insert transactions in batches and update account balance
    await db.$transaction(async (tx) => {
      // Clear existing transactions
      await tx.transaction.deleteMany({
        where: { accountId: ACCOUNT_ID },
      });

      // Insert new transactions
      await tx.transaction.createMany({
        data: transactions,
      });

      // Update account balance
      await tx.account.update({
        where: { id: ACCOUNT_ID },
        data: { balance: totalBalance },
      });
    });

    return {
      success: true,
      message: `Created ${transactions.length} transactions`,
    };
  } catch (error) {
    console.error("Error seeding transactions:", error);
    return { success: false, error: error.message };
  }
}
