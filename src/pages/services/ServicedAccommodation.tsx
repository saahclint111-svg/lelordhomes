import ServiceDetailPage from './ServiceDetailPage'
import { serviceMap } from '../../data/services'

export default function ServicedAccommodation() {
  return <ServiceDetailPage service={serviceMap['serviced-accommodation']} />
}
