import ServiceDetailPage from './ServiceDetailPage'
import { serviceMap } from '../../data/services'

export default function TenantPlacement() {
  return <ServiceDetailPage service={serviceMap['tenant-placement']} />
}
