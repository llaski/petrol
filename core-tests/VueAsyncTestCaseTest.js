import TestCase from '../core/TestCase';
import VueTestCase from '../core/VueTestCase';
import ExampleComponent from './fakes/ExampleComponent.vue';

export default class VueAsyncTestCaseTest extends TestCase {

    beforeEach() {
        this.vueTestCase = new VueTestCase
        this.vueTestCase.mount(ExampleComponent)
    }

    /** @test */
    async it_fills_field_one_with_a_value() {
        this.vueTestCase.fillField('input', 'test value 1')

        await this.vueTestCase.nextTick()

        this.vueTestCase.assertElementContains('.success', 'test value 1')
    }

    /** @test */
    async it_fills_field_one_with_a_second_value() {
        this.vueTestCase.fillField('input', 'test value 2')

        await this.vueTestCase.nextTick()

        this.vueTestCase.assertElementContains('.success', 'test value 2')
    }
}