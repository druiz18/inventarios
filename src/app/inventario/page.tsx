import { DashboardShell } from "@/components/dashboard-shell"
import { InventoryTable } from "@/components/inventory-table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventarioPage() {
  return (
    <DashboardShell>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Inventario</CardTitle>
            <CardDescription>Administra todos los productos de tu inventario desde un solo lugar.</CardDescription>
          </CardHeader>
          <CardContent>
            <InventoryTable />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

