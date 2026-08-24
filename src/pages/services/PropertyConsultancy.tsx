import ServiceDetailPage from './ServiceDetailPage'
import { serviceMap } from '../../data/services'

export default function PropertyConsultancy() {
  return <ServiceDetailPage service={serviceMap['property-consultancy']} />
}
