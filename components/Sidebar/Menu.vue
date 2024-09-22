<template>
    <div class="flex flex-col h-screen">
        <header class="flex items-center gap-2 p-4 hover:scale-[101%] transition cursor-pointer">
            <Icon name="arcticons:home-workouts" size="30px"/>
            <p class="font-bold">Workout Tracker</p>
        </header>
        <UiSeparator></UiSeparator>
        <div class="px-4 grow">
            <div class="grid gap-2">
                <div v-for='(item, index) in items' :key='index' class="flex item-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100 hover:scale-[101%]">
                    <Icon size="20" :name="item.icon" color="black"/>
                    <span>
                        {{ item.title }}
                    </span>
                </div>
            </div>
        </div>
        <div class="px-4">
            <div class="flex item-center gap-2 px-2 py-3 transition rounded cursor-pointer hover:bg-neutral-100 hover:scale-[101%]">
                <Icon size="20" name="ri:settings-5-line" color="black"/>
                <span>Paramètres</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const items = ref([
    {
        title: "Tableau de bord",
        path: "/overview",
        icon: "ri:dashboard-line"
    },
    {
        title: "Compte",
        path: "/account",
        icon: "ri:account-box-line"
    }
])
</script>

<style>

</style>
