# What is headless?

Headless is a term used to describe a web application that is not visible to the user. In our case Headless UI means a library that provides the functionality and leaves the user to style it.

This library is heavily inspired by [Headless UI](https://headlessui.dev/) created by the team
at [Tailwind](https://tailwindcss.com/).

::: warning
Vue Headless UI is currently in `alpha` status. API changes may occur at any time.
:::

## Motivation

While the [Headless UI](https://headlessui.dev/) is a great library, and falls short when it comes to form inputs and other elements. This library aims to cover a greather scope with more components and a heavy focus on form inputs.

## Basic example

This is what using headless looks like in terms of API. This is an example for creating a headless input:

```vue
<script setup lang="ts">
import { ref } from "vue";
import { HInput, HInputField, HInputLabel, HInputError } from "vue-headless-ui";

const model = ref<null | string>(null);
</script>

<template>
  <h-input v-model="model">
    <h-input-label text="Example Label" />
    <h-input-field />
    <h-input-error />
  </h-input>
</template>
```

The `HInputLabel`, `HInputField` and `HInputError` can be rearranged in any order.