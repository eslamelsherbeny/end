'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Package, 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  Calendar, 
  CreditCard,
  ArrowUpRight,
  Loader2,
  Clock,
  CheckCircle2,
  Truck,
  XCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { formatPrice } from '@/lib/utils'
import { ordersAPI } from '@/lib/api'
import { useTranslation } from '@/hooks/use-translation'

// ✅ تم إصلاح نوع t ليكون any لتجاوز خطأ الـ Build
const getStatusBadge = (status: string, t: any) => {
  const statusConfig: Record<string, { label: string; className: string; icon: any }> = {
    pending: {
      label: t('pending'),
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      icon: Clock,
    },
    processing: {
      label: t('processing'),
      className: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Package,
    },
    shipped: {
      label: t('shipped'),
      className: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: Truck,
    },
    delivered: {
      label: t('delivered'),
      className: 'bg-green-100 text-green-800 border-green-200',
      icon: CheckCircle2,
    },
    cancelled: {
      label: t('cancelled'),
      className: 'bg-red-100 text-red-800 border-red-200',
      icon: XCircle,
    },
  }

  const config = statusConfig[status] || statusConfig.pending
  const Icon = config.icon

  return (
    <Badge className={`${config.className} flex items-center gap-1`} variant='outline'>
      <Icon className='h-3 w-3' />
      {config.label}
    </Badge>
  )
}

export default function OrdersPage() {
  const { t, isRTL } = useTranslation()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const response = await ordersAPI.getMyOrders()
      setOrders(response.data || [])
    } catch (error) {
      console.error('Failed to fetch orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredOrders = orders.filter(order => 
    order._id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('myOrders')}</h1>
          <p className="text-muted-foreground text-sm">{t('orderConfirmation')}</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground`} />
          <Input
            placeholder={t('search')}
            className={`${isRTL ? 'pr-9' : 'pl-9'}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <Card className="border-dashed py-12">
          <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{t('noOrders')}</h3>
              <p className="text-muted-foreground">{t('cartEmpty')}</p>
            </div>
            <Link href="/shop">
              <Button>{t('startShopping')}</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredOrders.map((order) => (
            <Card key={order._id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Order Main Info */}
                  <div className="flex-1 p-4 sm:p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-bold flex items-center gap-2">
                          {t('orderNumber')} #{order._id.slice(-8).toUpperCase()}
                        </h3>
                        {getStatusBadge(order.status || 'pending', t)}
                      </div>
                      <Link href={`/profile/orders/${order._id}`}>
                        <Button variant="ghost" size="sm" className="text-primary gap-1">
                          {t('viewDetails')}
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(order.createdAt).toLocaleDateString('ar-EG')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CreditCard className="h-4 w-4" />
                        <span>{order.paymentMethodType === 'cash' ? t('cash') : t('card')}</span>
                      </div>
                      <div className="font-bold text-primary sm:text-left">
                        {formatPrice(order.totalOrderPrice)}
                      </div>
                    </div>

                    {/* Products Preview */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {order.cartItems?.slice(0, 4).map((item: any, idx: number) => (
                        <div key={idx} className="relative w-12 h-12 rounded-md border bg-muted flex-shrink-0">
                          {item.product?.imageCover && (
                             <img 
                              src={item.product.imageCover} 
                              alt="" 
                              className="w-full h-full object-cover rounded-md"
                            />
                          )}
                        </div>
                      ))}
                      {(order.cartItems?.length || 0) > 4 && (
                        <div className="w-12 h-12 rounded-md border bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                          +{(order.cartItems?.length || 0) - 4}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
