import {sum} from './01';

test('sum should be correct', () => {
	// * подготовительные данные
	const a = 1
	const b = 2
	const c = 3

	// * действие
	const result1 = sum(a, b)
	const result2 = sum(b, c)

	// 	* ожидаем результат
	expect(result1).toBe(3)
	expect(result2).toBe(5)
})