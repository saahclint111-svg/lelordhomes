import ServiceDetailPage from './ServiceDetailPage'
import { serviceMap } from '../../data/services'

export default function HMOManagement() {
  return <ServiceDetailPage service={serviceMap['hmo-management']} />
}
