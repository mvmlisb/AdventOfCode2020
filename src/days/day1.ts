const sum = 2020;

export function executeFirstTask(numbers: number[]) {
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            const next = numbers[j];

            if (current + next === sum)
                return current * next;
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