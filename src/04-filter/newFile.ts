import { getBuildingsWithStaffCountGreaterThen } from './04_2'
import { city } from './04_2.test'

// 03. Массив строений, где работают больше 500 людей
test.skip('buildings with correct staff count', () => {
	let buildings = getBuildingsWithStaffCountGreaterThen(
		city.governmentBuildings,
		500
	)

	expect(buildings.length).toBe(1)
	expect(buildings[0].type).toBe('FIRE-STATION')
})
