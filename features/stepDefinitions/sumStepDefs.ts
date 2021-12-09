
import { binding, given, then, when} from 'cucumber-tsflow';
import { assert } from 'chai';
import { Adder } from '../../src/adder';

@binding()
export class SumSteps {

    first?: number
    second?: number
    result?: number

    @given('my first number is {string} and my second number is {string}')
    public setNumbers(first: string, second: string) {
        this.first = parseInt(first)
        this.second = parseInt(second)
    }
    
    @when('I add them together')
    public async addThem() {
        this.result = Adder.add(this.first, this.second)
    }
    @then('the sum should be {string}')
    public resultShouldBe(result: string) {
        assert.strictEqual(this.result,parseInt(result))
    }
}