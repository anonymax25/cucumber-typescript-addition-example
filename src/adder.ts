export class Adder {
    public static add = (first?: number, second?: number): number => {
        if(first == null || second == null) {
            throw new Error("Illegal arguments, 2 numbers must be provided")
        }
        return first + second
    }
}