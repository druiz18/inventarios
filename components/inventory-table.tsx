"use client"

import * as React from "react"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Datos de ejemplo para el inventario
const inventoryData = [
  {
    id: "INV001",
    name: "Laptop HP Pavilion",
    category: "Electrónicos",
    stock: 24,
    price: 899.99,
    location: "Almacén A",
    status: "En stock",
  },
  {
    id: "INV002",
    name: 'Monitor Dell 27"',
    category: "Electrónicos",
    stock: 15,
    price: 349.99,
    location: "Almacén B",
    status: "En stock",
  },
  {
    id: "INV003",
    name: "Teclado Mecánico Logitech",
    category: "Accesorios",
    stock: 8,
    price: 129.99,
    location: "Almacén A",
    status: "Bajo stock",
  },
  {
    id: "INV004",
    name: "Mouse Inalámbrico",
    category: "Accesorios",
    stock: 32,
    price: 49.99,
    location: "Almacén C",
    status: "En stock",
  },
  {
    id: "INV005",
    name: "Impresora Multifuncional",
    category: "Electrónicos",
    stock: 3,
    price: 299.99,
    location: "Almacén B",
    status: "Bajo stock",
  },
  {
    id: "INV006",
    name: "Disco Duro Externo 2TB",
    category: "Almacenamiento",
    stock: 0,
    price: 89.99,
    location: "Almacén A",
    status: "Sin stock",
  },
  {
    id: "INV007",
    name: "Memoria USB 64GB",
    category: "Almacenamiento",
    stock: 45,
    price: 19.99,
    location: "Almacén C",
    status: "En stock",
  },
]

export function InventoryTable() {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredData = inventoryData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Buscar productos..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Añadir Producto
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead>Ubicación</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-center">{item.stock}</TableCell>
                <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.status === "En stock" ? "default" : item.status === "Bajo stock" ? "secondary" : "destructive"
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Abrir menú</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                      <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                      <DropdownMenuItem>Editar producto</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Ajustar stock</DropdownMenuItem>
                      <DropdownMenuItem>Mover ubicación</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Eliminar producto</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

