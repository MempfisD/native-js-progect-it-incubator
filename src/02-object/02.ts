export type StudentType = {
	id: number
	name: string
	age: number
	isActive: boolean
	address: AddressType
	technologies: Array<TechnologiesType>
}

type AddressType = {
	streetTitle: string
	city: LocalCityType
}

type LocalCityType = {
	title: string
	countryTitle: string
}

type TechnologiesType = {
	id: number
	title: string
}

export const student: StudentType = {
	id: 1,
	name: 'Dima',
	age: 34,
	isActive: false,
	address: {
		streetTitle: 'Street',
		city: {
			title: 'Boston',
			countryTitle: 'USA'
		}
	},
	technologies: [
		{
			id: 1,
			title: 'HTML'
		},
		{
			id: 2,
			title: 'JS & TS'
		},
		{
			id: 3,
			title: 'React & Redux'
		}
	]
}

console.log(student.age)
console.log(student.address.city.title)
console.log(student.technologies[2].title)