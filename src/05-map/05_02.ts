import { GovernmentBuildingType, HousesType } from '../02-object/02_02'

export const getStreetsTitlesOfGovernmentBuildings = (
	buildings: Array<GovernmentBuildingType>
) => {
	return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (house: Array<HousesType>) => {
	return house.map(c => c.address.street.title)
}

export function createMessages(houses: Array<HousesType>) {
	return houses.map(h => `Hello guys from ${h.address.street.title}`)
}
