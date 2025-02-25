export enum WaypointType {
  PICKUP = 'PICKUP',
  DELIVERY = 'DELIVERY',
}

export type OrderItem = {
  id: number
  orderNumber: number
  customerName: string
  date: Date
  waypoints: OrderWaypointItem[]
}

export type FormOrderItem = Omit<OrderItem, 'id'>

export type OrderWaypointItem = {
  id: string
  streetName: string
  streetNumber: string
  zipCode: string
  city: string
  country: string
  type: WaypointType
}

export type FormOrderWaypointItem = Omit<OrderWaypointItem, 'id'>

export type Filters = {
  customerName?: string
  date?: Date
}
