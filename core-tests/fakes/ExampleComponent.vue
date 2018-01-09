<template>
    <div>
        Hello World
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <input type="text" v-model="inputValue">
        <p class="success">{{ inputValue }}</p>
    </div>
</template>

<script>
export default {
    props: ['message'],

    data() {
        return {
            inputValue: ''
        }
    }
}
</script>