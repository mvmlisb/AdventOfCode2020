const sum = 2020;
export function executeFirstTask(numbers: number[]) {
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            const rest = numbers[j];

            if (current + rest === sum)
                return current * rest;
        }
    }
    return -1;
}

export function executeSecondTask(numbers: number[]) {
    for (let i = 0; i < numbers.length; i++) {
        const first = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            const second = numbers[j];

            for (let j = i + 1; j < numbers.length; j++) {
                const third = numbers[j];

                if (first + second + third === sum)
                    return first * second * third;
            }
        }
    }
    return -1;
}