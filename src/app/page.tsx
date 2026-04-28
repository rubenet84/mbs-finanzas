import { getTotalBalance, getAccounts, getTransactions, getInvestments } from "./actions/finance";
import { formatCurrency } from "@/lib/utils";

export default async function Home() {
  const [totalBalance, accounts, transactions, investments] = await Promise.all([
    getTotalBalance(),
    getAccounts(),
    getTransactions(),
    getInvestments(),
  ]);

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-emerald-400">MBS Finanzas</h1>

        {/* Total Balance */}
        <section className="mb-8">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-400">Balance Total</p>
            <p className="mt-2 text-4xl font-bold text-emerald-400">
              {formatCurrency(totalBalance)}
            </p>
          </div>
        </section>

        {/* Accounts Grid */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Cuentas</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-sm"
              >
                <p className="text-sm font-medium text-slate-400">{account.name}</p>
                <p className="mt-2 text-2xl font-bold text-emerald-400">
                  {formatCurrency(account.balance)}
                </p>
                <p className="mt-1 text-xs text-slate-500">{account.type}</p>
              </div>
            ))}
            {accounts.length === 0 && (
              <p className="col-span-3 py-8 text-center text-slate-500">
                No hay cuentas registradas
              </p>
            )}
          </div>
        </section>

        {/* Investments */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">Inversiones</h2>
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
            {investments.length > 0 ? (
              investments.map((inv) => {
                const totalValue = inv.shares * inv.currentPrice;
                const purchaseValue = inv.shares * inv.purchasePrice;
                const gain = totalValue - purchaseValue;
                const gainPercent = purchaseValue > 0 ? (gain / purchaseValue) * 100 : 0;
                const isPositive = gain >= 0;

                return (
                  <div
                    key={inv.id}
                    className="flex items-center justify-between border-b border-slate-800 p-4 last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-white">{inv.name}</p>
                      {inv.ticker && (
                        <p className="text-sm text-slate-400">{inv.ticker}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">
                        {formatCurrency(totalValue)}
                      </p>
                      <p
                        className={`text-sm ${isPositive ? "text-emerald-400" : "text-rose-400"}`}
                      >
                        {isPositive ? "↑" : "↓"} {Math.abs(gainPercent).toFixed(2)}%
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="p-8 text-center text-slate-500">
                No hay inversiones registradas
              </p>
            )}
          </div>
        </section>

        {/* Transactions Table */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Historial de Transacciones
          </h2>
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
            {transactions.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-800 text-left text-sm text-slate-400">
                    <th className="p-4">Fecha</th>
                    <th className="p-4">Descripción</th>
                    <th className="p-4">Categoría</th>
                    <th className="p-4 text-right">Monto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {transactions.map((tx) => {
                    const isExpense = tx.type === "expense";
                    return (
                      <tr key={tx.id} className="hover:bg-slate-800/50">
                        <td className="p-4 text-sm text-slate-300">
                          {new Date(tx.date).toLocaleDateString("es-ES")}
                        </td>
                        <td className="p-4 text-sm text-white">{tx.description}</td>
                        <td className="p-4 text-sm text-slate-400">{tx.category}</td>
                        <td
                          className={`p-4 text-right font-semibold ${isExpense ? "text-rose-400" : "text-emerald-400"}`}
                        >
                          {isExpense ? "-" : "+"}
                          {formatCurrency(tx.amount)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="p-8 text-center text-slate-500">
                No hay transacciones registradas
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
