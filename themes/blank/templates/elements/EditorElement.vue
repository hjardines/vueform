<template>
  <component :is="elementLayout">
    <template #element>
      <EditorWrapper
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="editorEndpoint"
        :method="editorMethod"
        :disabled="isDisabled"
        :hide-tools="hideTools"
        :class="classes.input"
        @input="handleInput"
        @alert="handleAlert"
        @error="handleError"
        @blur="handleBlur"
        ref="input"
     />
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'EditorElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  }
</script>


<style lang="scss">
</style>