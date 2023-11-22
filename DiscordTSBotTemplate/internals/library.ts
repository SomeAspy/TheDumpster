export function randomFrom(array: string | any[]): any {
    return array[Math.floor(Math.random() * array.length)];
}
