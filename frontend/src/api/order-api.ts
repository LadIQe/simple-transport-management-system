import type { Filters, FormOrderItem, OrderItem } from '@/types.ts'
import api from '@/api/index.ts'

export async function getOrders(filters: Filters) {
  const { data } = await api.get<OrderItem[]>('/orders', { params: filters })

  return data
}

export async function getOrder(id: number) {
  const { data } = await api.get<OrderItem>(`/orders/${id}`)

  return {
    ...data,
    date: new Date(data.date)
  }
}

export async function createOrder(order: FormOrderItem) {
  const { data } = await api.post<OrderItem>('/orders/create', order)

  return data
}
