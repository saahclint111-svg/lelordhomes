import ServiceDetailPage from './ServiceDetailPage'
import { serviceMap } from '../../data/services'

export default function Airbnb() {
  return <ServiceDetailPage service={serviceMap.airbnb} />
}
