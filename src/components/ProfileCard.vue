<template>
    <article class="max-w-xl p-4 bg-white border shadow-sm rounded-2xl ">
        <!-- Header -->
        <header class="flex items-center justify-between mb-3">
            <h2>User Information</h2>

            <div class="flex gap-2">
                <button class="cursor-pointer rounded-lg border px-3 py-1.5 hover:bg-gray-50" @click="toggleEdit">{{ isEditing ? 'Cancel' : 'Edit' }}</button>
                <button class="cursor-pointer rounded-lg border px-3 py-1.5 hover:bg-gray-50" @click="saveChanges">Save</button>
            </div>
        </header>
    </article>
</template>

<script setup>
import { ref, watch } from 'vue';

const isEditing = ref(false);
function toggleEdit() {
  isEditing.value = !isEditing.value;
}
watch(isEditing, (val) => {
  console.log('isEditing changed:', val);
});
</script>
