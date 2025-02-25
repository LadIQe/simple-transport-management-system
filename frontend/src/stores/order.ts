import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { createOrder, getOrder, getOrders } from '@/api/order-api.ts'
import type { Filters, FormOrderItem, OrderItem } from '@/types.ts'

type OrderStatus = {
  isLoading: boolean,
  isSuccess: boolean,
}

export const useOrderStore = defineStore('order', () => {
  const loadingList = reactive(createStatus())
  const loadingDetail = reactive(createStatus())
  const postingOrder = reactive(createStatus())

  const orderDetail = ref<OrderItem | null>(null)
  const orderList = ref<OrderItem[]>([])

  async function getDetail(id: number) {
    setLoading(loadingDetail)

    try {
      orderDetail.value = await getOrder(id)

      setSuccess(loadingDetail)
    } catch (error) {
      console.log(error)

      orderDetail.value = null

      setError(loadingDetail)
    }
  }

  async function getList(filters: Filters) {
    setLoading(loadingList)

    try {
      orderList.value = await getOrders(filters)

      setSuccess(loadingList)
    } catch (error) {
      console.log(error)

      orderList.value = []

      setError(loadingList)
    }
  }

  async function postOrder(order: FormOrderItem) {
    setLoading(postingOrder)

    try {
      const newOrder = await createOrder(order)
      orderList.value.push(newOrder)

      setSuccess(postingOrder)
    } catch (error) {
      console.log(error)

      setError(postingOrder)
    }
  }

  return {
    loadingList,
    loadingDetail,
    postingOrder,
    orderDetail,
    orderList,
    getDetail,
    getList,
    postOrder
  }
})

function createStatus(): OrderStatus {
  return {
    isLoading: false,
    isSuccess: false,
  }
}

function setLoading(status: OrderStatus) {
  status.isLoading = true
  status.isSuccess = false
}

function setSuccess(status: OrderStatus) {
  status.isLoading = false
  status.isSuccess = true
}

function setError(status: OrderStatus) {
  status.isLoading = false
  status.isSuccess = false
}
