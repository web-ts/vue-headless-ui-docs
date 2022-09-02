# Intallation

Install vue-headless-ui with your favorite package manager:

```sh
npm install vue-headless-ui
# or
yarn add vue-headless-ui
```

## Using the components

Headless components always come in co-dependent pairs. For example, `HInput` is the parent component of `HInputField` and `HInputLabel`.

The idea behind it is that inside your own project you will create a separate component that couples the above mentioned with your own styling.

This type of structure allows the user to have complete control over the look and feel of a component without worrying about accessibility or complex logic.

Example of a select component:

```vue
<script setup lang="ts">
import { ref } from "vue";
import {
  HInput,
  HSelectField,
  HInputLabel,
  HInputError,
} from "vue-headless-ui";

const props = defineProps<{
  modelValue: null | string;
  label: null | string;
  ...
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: null | string): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const options = [
  {
    name: "Example Option",
    value: "Value 1"
  },
  {
    name: "Example Option 2",
    value: "Value 2"
  },
  {
    name: "Example Option 3",
    value: "Value 3"
  },
]
</script>

<template>
  <h-input class="my_input_class" v-model="model" :options="options">
    <h-input-label class="my_label_class"> {{ label }} </h-input-label>
    <h-select-field class="my_select_class" />
    <h-input-error class="my_error_class" />
  </h-input>
</template>
```
