import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryOverview } from "@/components/inventory-overview"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <InventoryOverview />
    </DashboardShell>
  )
}

