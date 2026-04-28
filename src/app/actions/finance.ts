'use server';

import { prisma } from '@/lib/prisma';

export async function getTotalBalance(): Promise<number> {
  const accounts = await prisma.account.findMany({
    select: { balance: true },
  });

  const investments = await prisma.investment.findMany({
    select: { shares: true, currentPrice: true },
  });

  const accountsTotal = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const investmentsTotal = investments.reduce(
    (sum, inv) => sum + inv.shares * inv.currentPrice,
    0
  );

  return accountsTotal + investmentsTotal;
}

export async function getAccounts() {
  return await prisma.account.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function getTransactions() {
  return await prisma.transaction.findMany({
    orderBy: { date: 'desc' },
    include: { account: true },
  });
}

export async function getInvestments() {
  return await prisma.investment.findMany({
    orderBy: { createdAt: 'desc' },
  });
}
