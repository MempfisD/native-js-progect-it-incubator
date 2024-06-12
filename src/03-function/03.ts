import {StudentType} from '../02-object/02';
import {CityType, GovernmentBuildingType, HousesType} from '../02-object/02_02';

export const addSkill = (student: StudentType, skill: string) => {
	student.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive(s: StudentType) {
	s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
	return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
	building.budget += budget
}

export const repairHouse = (housesType: HousesType) => {
	return housesType.repaired = true
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
	building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
	building.staffCount += staffCountToHire
}

export const createMessage = (city: CityType) => {
	return 'Hello New York citizens. I want you be happy! All 1000000 men'
}