<template>
    <article class="max-w-xl p-4 bg-white border shadow-sm rounded-2xl ">
        <!-- Header -->
        <header class="mb-3">
            <h2 class="text-lg font-semibold">User Information</h2>
        </header>
        <form class="relative pb-12 space-y-4">
            <!-- Avatar -->
            <div class="flex flex-col items-center">
                <img :src="avatarUrl" alt="Avatar"
                    class="object-cover w-24 h-24 mb-2 transition-transform duration-200 border-4 border-blue-300 rounded-full shadow cursor-pointer hover:scale-110"
                    @click="selectAvatar" />
                <input type="file" accept="image/*" @change="onAvatarChange" :disabled="!isEditing"
                    class="absolute w-0 h-0 p-0 m-0 overflow-hidden border-0" ref="avatarInput" />

            </div>
            <!-- Name -->
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="first_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">First
                        name</label>
                    <input type="text" id="first_name"
                        class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5"
                        placeholder="Thang" required :disabled="!isEditing" />
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Last
                        name</label>
                    <input type="text" id="last_name"
                        class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                        placeholder="Le" required  :disabled="!isEditing"/>
                </div>
            </div>
            <!-- Age -->
            <div>
                <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Age</label>
                <input type="number" id="age" v-model="age" :disabled="!isEditing" min="0"
                    class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5"
                    placeholder="18" required />
            </div>
            <!-- Gender -->
            <div>
                <label for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Gender</label>
                <select id="gender" v-model="gender" :disabled="!isEditing"
                    class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <!-- Date of Birth -->
            <div>
                <label for="dob" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Date of
                    Birth</label>
                <input type="date" id="dob" v-model="dob" :disabled="!isEditing"
                    class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5"
                    required />
            </div>
            <!-- Bio -->
            <div>
                <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Bio</label>
                <textarea id="bio" v-model="bio" :disabled="!isEditing"
                    class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5"
                    rows="3" placeholder="Giới thiệu bản thân..."></textarea>
            </div>
            <!-- CV -->
            <div>
                <label for="cv" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">CV</label>
                <input id="cv" type="file" accept="application/pdf" @change="onCvChange" :disabled="!isEditing"
                    class="w-full text-sm text-gray-900 bg-gray-100 border border-gray-300 block rounded-lg p-2.5" />
                <div v-if="cvName" class="mt-1 text-xs text-gray-500">Current CV: {{ cvName }}</div>
            </div>
            <!-- Edit & Save buttons bottom right -->
            <div class="absolute bottom-0 right-0 flex gap-2">
                <button
                    class="px-5 py-2 font-semibold text-blue-500 transition duration-200 bg-white border border-blue-500 rounded-lg shadow cursor-pointer w-28 hover:bg-blue-50 hover:scale-105"
                    @click.prevent="toggleEdit">{{ isEditing ? 'Cancel' : 'Edit' }}</button>

                <button
                    class="px-5 py-2 font-semibold text-white transition duration-200 bg-blue-500 border rounded-lg shadow cursor-pointer w-28 hover:bg-blue-600 hover:scale-110"
                    @click.prevent="saveChanges">Save</button>
            </div>
        </form>
    </article>
</template>

<script setup>
import { ref, watch } from 'vue';

const isEditing = ref(false);
const avatarUrl = ref('https://ui-avatars.com/api/?name=User');
const name = ref('');
const age = ref('');
const gender = ref('');
const dob = ref('');
const bio = ref('');
const cvFile = ref(null);
const cvName = ref('');
const avatarInput = ref(null);
function toggleEdit() {
    isEditing.value = !isEditing.value;
}
watch(isEditing, (val) => {
    console.log('isEditing changed:', val);
});
function selectAvatar() {
    if (isEditing.value && avatarInput.value) {
        avatarInput.value.click();
    }
}
function onAvatarChange(event) {
    const file = event.target.files[0];
    if (file) {
        avatarUrl.value = URL.createObjectURL(file);
    }
}
function onCvChange(event) {
    const file = event.target.files[0];
    if (file) {
        cvFile.value = file;
        cvName.value = file.name;
    }
}

</script>
